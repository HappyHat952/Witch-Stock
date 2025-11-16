export const BOND_ID = "jamesbond";
export const CD_ID = "cd";
export const STOCK_ID = "stock";
export const ETF_ID = "etf";
export const COMMO_ID = "commodities";

export const initialCash = 1000;

export const tokenRef = [
  {
    id: BOND_ID,
    losePercent: 0,
    loseValue:0,
    gainPercent: 100,
    gainValue: 6,
    immediatePay: true,
    buyPrice: 500,
    countDown: 3,
  },
  { 
    id: CD_ID,
    losePercent: 0,
    loseValue: 0,
    gainPercent: 100,
    gainValue: 5,
    immediatePay: false,
    buyPrice: 500,
    countDown: 10,
  },
  {
    id: STOCK_ID,
    losePercent: 50,
    loseValue: 100,
    gainPercent: 50,
    gainValue: 100,
    immediatePay: false,
    buyPrice: 500,
    countDown: 0,
  },
  {
    id: ETF_ID,
    losePercent: 10,
    loseValue: 10,
    gainPercent: 85,
    gainValue: 2,
    immediatePay: false,
    buyPrice: 500,
    countDown: 0,
  },
  {
    id: COMMO_ID,
    losePercent: 8,
    loseValue: 10,
    gainPercent: 90,
    gainValue: 2,
    immediatePay: false,
    buyPrice: 500,
    countDown: 0,
  }
]

export const initialize = () => {
    try {
        localStorage.setItem("funds", 100);
        localStorage.setItem("tokens", []);
    }catch (error) {
    console.error("Error setting item in local storage:", error);
  }
}

export const addToken = (tokenId) => {
    try{
        const tokenStr = localStorage.getItem("tokens")
        const tokenList =  tokenStr ? JSON.parse(tokenStr) : [];
        const cashValueStr = localStorage.getItem("cash");
        let cashValue = cashValueStr ?  JSON.parse(cashValueStr) : initialCash;

        if (tokenId==BOND_ID || tokenId==CD_ID|| tokenId==STOCK_ID|| tokenId==ETF_ID|| tokenId==COMMO_ID){
          const ref = tokenRef.filter(item => item["id"] === tokenId)[0];

          if (cashValue>=ref.buyPrice)
          {
            cashValue -= ref.buyPrice;
          console.log("reference: "+JSON.stringify(ref));
          const tokenItem = {
            id: tokenId,
            currValue: ref.buyPrice,
            countDown: ref.countDown,
          }
          tokenList.push(tokenItem);
          console.log("added new", tokenId, "now list is", JSON.stringify(tokenList));
          localStorage.setItem("tokens", JSON.stringify(tokenList));
          localStorage.setItem("cash", cashValue);
        }
       
      }
    }catch (error) {
        console.error("Error setting item in local storage:", error);
    }
}

export const getTokensOfAssetType = (tokenId) => {
  try{
    const tokenStr = localStorage.getItem("tokens");
    const tokenList =  tokenStr ? JSON.parse(tokenStr) : [];
    // const specificList = tokenList.filter((item) => item.id === tokenId);

    const specificList = [];

    tokenList.map((token,index)=>{
      if(token.id == tokenId){
        const newToken = {...token, idx: index}
        specificList.push(newToken);
      }
    })

    return specificList;

  }catch (error ){
    console.error("Error setting item in local storage:", error);
  }
}

export const sellAssetIndexId = (indexId) => {
    try {
      const idx = Number(indexId);
      if (Number.isNaN(idx)) return;

      const tokenStr = localStorage.getItem("tokens");
      const tokenList = tokenStr ? JSON.parse(tokenStr) : [];

      if (idx < 0 || idx >= tokenList.length) return;

      const [removed] = tokenList.splice(idx, 1);
      const removedValue = removed && removed.currValue ? Number(removed.currValue) : 0;

      const cashStr = localStorage.getItem("cash");
      let cash = cashStr ? JSON.parse(cashStr) : initialCash;
      cash = (typeof cash === "number" ? cash : Number(cash || 0)) + (isNaN(removedValue) ? 0 : removedValue);

      localStorage.setItem("tokens", JSON.stringify(tokenList));
      localStorage.setItem("cash", cash);
    } catch (error) {
      console.error("Error selling asset by index:", error);
    }
}

export const nextDay = () => {
  try{
    const tokenStr = localStorage.getItem("tokens");
    const tokenList =  tokenStr ? JSON.parse(tokenStr) : [];
    const cashValueStr = localStorage.getItem("cash");
    let cashValue = cashValueStr ?  JSON.parse(cashValueStr) : initialCash;

    let newCashValue = cashValue;
    let newTokenList = [];

    for(const token of tokenList){
      const ref = tokenRef.filter(item => item["id"] === token.id)[0];
      const newToken = {id: token.id, currValue: token.currValue, countDown: token.countDown};

      //changes the value of cash or portfolio based on some random variable.
      const random = Math.random();
      if(random < ref.gainPercent/100){
        if(!ref.immediatePay){
        newToken.currValue = newToken.currValue + ref.gainValue;
        } else {
          newCashValue = newCashValue + ref.gainValue;
        }
      }
      else if (random< (ref.gainPercent + ref.losePercent)/100){
        newToken.currValue = newToken.currValue - ref.loseValue;
      }

      //increments the freeze period on asset
      if(newToken.countDown > 0){
        newToken.countDown --;
      }
      newTokenList.push(newToken);
    };

    localStorage.setItem("tokens", JSON.stringify(newTokenList));
    localStorage.setItem("cash", newCashValue);
    console.log(newTokenList);

  }catch (error) {
    console.error("Error setting item in local storage:", error)
  }
}

export const getAssetInfoID = (tokenId) => {
  return  tokenRef.filter(item => item["id"] === tokenId)[0];
}

export const getCashValue = () => {
  const cashValueStr = localStorage.getItem("cash");
  let cashValue = cashValueStr ?  JSON.parse(cashValueStr) : initialCash;
  if(!cashValueStr){
    setItem("cash", initialCash);
  }

  return cashValue;
}

export const getPortfolio = () => {
  const tokenStr = localStorage.getItem("tokens");
  const tokenList =  tokenStr ? JSON.parse(tokenStr) : [];

  return tokenList;
}

export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting item in local storage:", error);
  }
};

export const getItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Error getting item from local storage:", error);
    return null;
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing item from local storage:", error);
  }
};

export const clearStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing local storage:", error);
  }
};