import { Link } from 'react-router-dom';
import './Neighborhood.css';

function Neighborhood () {
    return (
    <>
    <body className="neighborhood">
        <p>neighborhood</p>
        <Link to="/Person/dkjs"><img className="BondHouse" src="../src/assets/House.PNG"></img></Link>
    </body>
    </>
    );
}

export default Neighborhood;