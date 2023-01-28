import { GrFavorite, GrCurrency, GrSearch } from "react-icons/gr";

export default function Coins({ coins, symbols }) {

  return (
    <div className="coins">
      <div className="coins-header">
        <div className="coins-options">
        <a href="#"><GrCurrency />{" "}Market</a>
        <a href="#"><GrFavorite />{" "}Favoritos</a>
        </div>
        <div className="coins-search">
          <input type='search'></input>
          <GrSearch />{" "}
        </div>
      </div>
      <table className="coins-content">
        <tbody>
          <tr>
            <th>Pair</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>24h Volume</th>
          </tr>
            {Object.keys(coins).map((data, index) => {
              return (
                <tr key={index}>
                  <td><GrFavorite />{" "}{symbols[data]}/USDT</td>
                  <td>{data.toUpperCase().split('-')[0]}</td>
                  <td>{coins[data].usd}</td>
                  <td>{coins[data].usd_24h_change.toFixed(2)} %</td>
                  <td>{coins[data].usd_24h_vol.toLocaleString({ style: "decimal" })}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}