import { Link } from 'react-router-dom';

import Menubar from '../../component/menubar/menubar';

import {BOND_ID, STOCK_ID, ETF_ID, COMMO_ID, CD_ID} from '../../utils/localStorage';
import './Neighborhood.css';

function Neighborhood () {
    return (    
        <>
    <div className="neighborhood">
        <div className ="home">
            <Link to="/home"><img src="../src/assets/House.PNG"></img></Link>
        <img src = "../src/assets/images/characters/PlayerFront.PNG"></img>
        </div>
        
        <div className = "houses">
            <Link className="BondHouse" to={`/Person/${BOND_ID}`}>
            <img className = "person" src = "../src/assets/images/characters/JamesBond.PNG"/></Link>
        <Link className="StockHouse" to={`/Person/${STOCK_ID}`}>
        <img className = "person" src = "../src/assets/images/characters/jackandthebeanStock.PNG"/></Link>
        <Link className="ETFHouse"to={`/Person/${ETF_ID}`}>
        <img className = "person" src = "../src/assets/images/characters/RedMerchant.PNG"/></Link>
        
        <Link className="CommodityHouse" to={`/Person/${COMMO_ID}`}>
        <img className = "person" src = "../src/assets/images/characters/CommodityFarmerFiona.PNG"/>
        </Link>
        <Link className="CdHouse" to={`/Person/${CD_ID}`}>
        <img className = "person" src = "../src/assets/images/characters/CDRapunzel.PNG"/></Link>
        </div>
        
    </div>
    </>
    );
}

export default Neighborhood;