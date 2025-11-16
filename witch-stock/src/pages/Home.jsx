import {useState, useEffect} from 'react';
import { getCashValue, getPortfolio, initialCash, nextDay} from '../utils/localStorage';
import {useNavigate} from 'react-router-dom';

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
    <p>numTokens: {tokens.length} cash: {cashValue}</p>
    <div className = "shelf">
        {
            tokens.map((token) => {
                <p>{token.id}</p>
            })
        }
        
    </div>
    <button onClick = {()=>{
        setNewDay(()=>!newDay);
        nextDay();
    }}> Next Day </button>
    <button onClick = {()=>navigate("/")}>street</button>
    
    </>
    );
}

export default Home;