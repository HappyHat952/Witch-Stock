import {useEffect, useState} from 'react'; 
import { getAssetInfoID } from '../utils/localStorage';
import Token from './token';
import './shelf.css' ;

const Shelf =(props) =>{

    const [sumValue, setSumValue] = useState(0);
    const [reference, setReference] = useState({id: null,
    losePercent: null,
    loseValue: null,
    gainPercent: null,
    gainValue: null,
    immediatePay: null,
    buyPrice: null,
    countDown: null,});


    const {tokens, id, onSell} = props;

    useEffect(()=>{

        let sumValue = 0;
        
        tokens.forEach(token => {
            sumValue = sumValue + token.currValue;
        },);

        const id = props.id;
        const ref = getAssetInfoID(id);
        setVals();

        function setVals(){
        setSumValue(sumValue);
        setReference(ref);
        }
        

    }, [])
    
    return (
        <>
        <div className = "shelf">
            <div className = "overview">
            <h3>Tokens from {reference.id}</h3>
            {tokens.length>0 ? <><p>Amount Paid: {reference.buyPrice * tokens.length}</p>
            <p>Current Value: {sumValue}</p></>: <><p></p><p></p></> }
            <p>{reference.gainPercent}% chance of +{reference.gainValue}</p>
            <p>{reference.losePercent}% chance of -{reference.loseValue}</p>
        </div>
        
        <div className= "tokens">
            {
               
            tokens && tokens.map((token, index) => (
                 <Token class = {token.id} key={index} currVal = {token.currValue} countdown = {token.countDown} idx = {token.idx} onSell = {onSell}></Token>
                // <li key={index}>{token.currValue} and {token.countDown} days left</li>
            ))
            }

        </div>

        </div>
       
        </>
        
    );
}


export default Shelf;