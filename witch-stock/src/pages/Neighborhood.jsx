import { Link } from 'react-router-dom';
import './Neighborhood.css';

function Neighborhood () {
    return (
    <>
    <body className="neighborhood">
        <p>neighborhood</p>
        <Link to="/Person/jamesbond"><img className="BondHouse" src="../src/assets/House.PNG"></img></Link>
        <Link to="/Person/jackstock"><img className="StockHouse" src="../src/assets/House.PNG"></img></Link>
        <Link to="/Person/ETF"><img className="ETFHouse" src="../src/assets/House.PNG"></img></Link>
        <Link to="/Person/home"><img className="MyHouse" src="../src/assets/House.PNG"></img></Link>
        <Link to="/Person/commodity"><img className="CommodityHouse" src="../src/assets/House.PNG"></img></Link>
        <Link to="/Person/cd"><img className="CdHouse" src="../src/assets/House.PNG"></img></Link>
    </body>
    </>
    );
}

export default Neighborhood;