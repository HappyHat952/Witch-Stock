import { useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import reactImage from '../../assets/images/react.svg';
import jamesbond from '../../assets/images/characters/JamesBond.PNG';
import {BOND_ID, CD_ID, STOCK_ID, ETF_ID, COMMO_ID, addToken, clearStorage, nextDay} from '../../utils/localStorage';

function Person () {

  const navigate = useNavigate();

    const characters = [
    {
        "id" : BOND_ID,
        "name" : "James Bond",
        "desc":"this is a description of James Bond",
    }, 
    {
        "id" : STOCK_ID,
        "name" : "Jack in the Beanstock",
        "desc":"this is a description of Jack in the Beanstock",
    },
    {
      "id": CD_ID,
      "name": "CD",
      "desc" :"desc of CD",
    },
    {
      "id": ETF_ID,
      "name": "etf",
      "desc" : "desc of ETF",
    },
    {
      "id": COMMO_ID,
      "name": "commodities",
      "desc": "desc of ETF",
    }
    ]

    const {id} = useParams();
    const [data, setData] = useState({id: "id", name: "name default", imgSrc: "img" });
    const [img, setImg] = useState(reactImage);

    useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(id);
        const jsonData = characters.filter(item => item["id"] === id)[0];
        setData(()=> jsonData); 
        if (jsonData.id == BOND_ID) {
            setImg(()=>jamesbond);
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
  }

  function handleNoBuy() {
    navigate('/home');
  };
    return (
    <>
    <img src = {img}/> 
    <div className = "right-side">
      <h1>{data.name}</h1>
      <p>desc: {data.desc} </p>
      <button onClick = {handleBuy}>buy</button>
      <button onClick = {handleNoBuy}>No thanks, I will go back</button>
      <button onClick = {()=>(clearStorage())}>clear</button>
    </div>
    </>
    );
}

export default Person;