import {useState, useEffect} from 'react';
import { getCashValue, getPortfolio, initialCash, nextDay, tokenRef, getTokensOfAssetType, clearStorage} from '../utils/localStorage';
import {useNavigate} from 'react-router-dom';
import Shelf from '../component/shelf';
import Menubar from '../component/menubar/menubar';
import './Home.css'

function Home () {

    const [tokens, setTokens] = useState([]);
    const [cashValue, setCashValue] = useState(initialCash);
    const [newDay, setNewDay] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
    const fetchData = async () => {
      try {
        setTokens(()=> getPortfolio()); 
        setCashValue(()=> getCashValue());
    
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchData();
  }, [newDay]); 


    return (
    <>
    <button onClick = {()=>{clearStorage();setNewDay(prev => !prev);}}>clear</button>
      <button onClick={() => {
        setNewDay(prev => !prev);
        nextDay();
      }}> Next Day </button>
      <button onClick={() => navigate("/")}>street</button>
      <Menubar cash = {cashValue} tokens = {tokens} className = "menubar"></Menubar>
      <div className="shelves">
          {tokenRef.map((token) => (
            <Shelf
              key={`${token.id}-${newDay}`}
              newDay={newDay}
              tokens={getTokensOfAssetType(token.id)}
              onSell = {()=>{setNewDay(prev => !prev)}}
              id={token.id}
            />
          ))}
      </div>
      
    </>
    );
}

export default Home;