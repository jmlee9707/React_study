// 7-2

// 코인 API에는 이미 key가 있으므로 안 가져와도 됨

// 이 경우 coin이라는 변수는 coins 배열 안에 있는 각각의 coin을 의미함
// 그래서 각각의 coin은 https://api.coinpaprika.com/v1/tickers 처럼 생겼음
// 그래서 coin.name도 coin.symbol도 가져올 수 있음

// 처음에는 기본값으로 비어있는 배열을 넘겨주기 때문에 coin이 처음엔 0개
// 기본값을 적어도 빈값으로 정해주지 않으면 에러가 남
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? ( // 로딩 성공시 
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => ( // 로딩 실패시 
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
export default App;