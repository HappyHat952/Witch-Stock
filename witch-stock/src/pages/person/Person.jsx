import { useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Menubar from '../../component/menubar/menubar';
// import reactImage from '../../assets/images/react.svg';
import rapunzelCD from '../../assets/images/characters/CDRapunzel.PNG';
import jackStock from '../../assets/images/characters/JackandthebeanStock.PNG';
import jamesbond from '../../assets/images/characters/JamesBond.PNG';
import commoFiona from '../../assets/images/characters/CommodityFarmerFiona.PNG';
import redEFPMerchant from '../../assets/images/characters/RedMerchant.PNG';
import {BOND_ID, CD_ID, STOCK_ID, ETF_ID, COMMO_ID, addToken, clearStorage, getCashValue, getAssetInfoID} from '../../utils/localStorage';
import "./Person.css"


function Person () {

  const navigate = useNavigate();

    const characters = [
    {
        "id" : BOND_ID,
        "name" : "James Bond",
        "desc":"You can always trust Mr. Bond to keep his word and return your gold. James Bond has a top secret mission that’ll take 6 days but he needs to borrow some gold to complete it. Since Mr. Bond is such a gentleman, he’ll pay you back a small amount of interest every day until the mission is complete. Then at the end of the 6 days you’ll get your initial amount of gold back!",
    }, 
    {
        "id" : STOCK_ID,
        "name" : "Jack and the Bean Stock",
        "desc":"Deals with Jack and the BeanStock can win you a fortune or lose your fortune entirely! Take caution… Jack has a business of selling magical items he finds after climbing the BeanStock. You can buy shares of Jack’s BeanStock company so that when Jack has good business, your share of the BeanStock rises in value. However, every business has bad days, so you never know when your share of the BeanStock could come crashing down.",
    },
    {
      "id": ETF_ID,
      "name": "Little Red Merchant (ETF)",
      "desc" :"Little Red Riding Hood is a clever little trader who journeys across many lands to gather tiny pieces of all sorts of companies into her enchanted merchant basket. When you buy a share of her goodie basket, you get a small bit of every business she’s collected, which helps your investment grow steadily over time. Since the basket holds such small portions of so many companies, one company jumping or stumbling will not affect you much, and your fortune mostly follows how the entire market moves.",
    },
    {
      "id": COMMO_ID,
      "name": "Farmer Fiona (Commodities)",
      "desc" : "Shady days lead to shady trades with this farmer! You can buy shares of Farmer Fiona’s crops here. However, this is a risky investment since any unpredictable weather like droughts or flooding can destroy Fiona’s harvest. Not to mention, natural resources don’t have monetary growth the way other companies do, so there’s rarely much to gain in this market.",
    },
    {
      "id": CD_ID,
      "name": "commodities",
      "desc": "Looking for a safe and gentle way to grow a bit of extra gold? Visit Rapunzel’s tower! For a short and sparkling stretch of days, she will tuck your coins high above the kingdom where they rest safely in her golden keep. When the agreed time has passed, Rapunzel will let down her shimmering hair and return your gold, now carrying a little gleam of earned interest as thanks for your patience.",
    }
    ]

    const {id} = useParams();
    const [data, setData] = useState({id: "id", name: "name default", imgSrc: "img" });
    const [img, setImg] = useState(rapunzelCD);
    const [cash, setCash] = useState(getCashValue());
    const [reference, setReference ]= useState(getAssetInfoID(id));

    useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(id);
        const jsonData = characters.filter(item => item["id"] === id)[0];
        setData(()=> jsonData); 
        setReference(()=> getAssetInfoID(id))
        if (jsonData.id == STOCK_ID) {
            setImg(()=>jackStock);
        }
        else if (jsonData.id == BOND_ID) {
            setImg(()=>jamesbond);
        }
        else if(jsonData.id == CD_ID) {
          setImg (()=>rapunzelCD);
        }
        else if (jsonData.id == ETF_ID) {
          setImg(()=>redEFPMerchant);
        }
        else if (jsonData.id == COMMO_ID) {
          setImg(()=>commoFiona);
        }
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchData();
  }, []); 

  const handleBuy = () => {
    console.log("buy "+data.name);
    addToken(data.id);
    setCash(getCashValue());
  }

  function handleNoBuy() {
    navigate('/');
  };
    return (
    <>
    <Menubar cash = {cash} ></Menubar>
    <img src = {img}/> 
    <div className = "right-side">
      <h1>{data.name}</h1>
      <p className="desc">{data.desc} </p>
      <div className = "overview">
            <h3>Stats for {data.name}'s tokens: </h3>
            <p>{reference.gainPercent}% chance of +{reference.gainValue}</p>
            <p>{reference.losePercent}% chance of -{reference.loseValue}</p>
      </div>
      <div className="buttonHolder">
        <button onClick = {handleBuy}>buy</button>
        <button onClick = {handleNoBuy}>Street</button>
      </div>
      
    </div>
    </>
    );
}

export default Person;