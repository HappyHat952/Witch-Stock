import {useState, useEffect} from 'react';
import { getCashValue,getPortfolio } from '../utils/localStorage';

function TokenView () {

    const [tokens, setTokens] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        setTokens(()=> getPortfolio()); 
        console.log("printing tokens", getPortfolio());
    
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchData();
  }, []); 


    return (
    <>
    <p>numTokens: {tokens.length}</p>
    <div className = "shelf">
        {
            tokens.map((token) => {
                <p>{token.id}</p>
            })
        }
    </div>
    
    </>
    );
}

export default TokenView;