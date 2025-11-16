import { sellAssetIndexId } from "../utils/localStorage";

const Token = (props) => {
    const {currVal, countdown, idx, onSell} = props;

    function handleClick() {
        onSell();
        sellAssetIndexId(idx);
        console.log("sold!");
    };

    return (
        <>
        <div className = "token">
            <p>${currVal}</p>
            {countdown > 0 ? <p>{countdown} days left to sell</p> : <button onClick={handleClick}>Sell</button>}
        </div>
            
        </>
    );
}
export default Token;