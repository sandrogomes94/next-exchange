import Top from "./components/top";
import Header from "./components/header";
import Coins from "./components/coins";
import Footer from "./components/footer";

import axios from 'axios';
import { useEffect, useState } from "react";

export default function App({ props }) {

  const [coins] = useState(props["prices"]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    setInterval(() => {
      // console.log(0);
    }, 5000);
    setInterval(() => {
      // console.log(1);
    }, 5000);
  },[]);

  return (
    <div className="app">
      <Top />
      <Header />
      <Coins coins={coins} symbols={props["symbols"]}/>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const symbols = {
    "ethereum": "ETH",
    "bitcoin": "BTC",
    "xrp": "XRP",
    "cardano": "ADA",
    "dogecoin": "DOGE",
    "solana": "SOL",
    "polygon": "MATIC",
    "polkadot": "DOT",
    "shiba-inu": "SHIB",
    "litecoin": "LTC",
    "avalanche": "AVAX",
    "uniswap": "UNI",
    "cosmos-hub": "ATOM",
    "chainlink": "LINK",
    "monero": "XMR",
    "stellar": "XLM",
    "apeccoin": "APE",
    "near": "NEAR",
    "aptos": "APTOS",
    "filecoin": "FIL",
    "algorand": "ALGO",
    "hedera": "HBAR",
    "vechain": "VET",
    "axie-infinity": "AXS",
    "decentraland": "MANA",
    "flow": "FLOW",
    "aave": "AAVE",
    "eos": "EOS",
    "multiversx": "EGLD",
    "terra-luna-classic": "LUNA",
    "theta-network": "THETA",
    "tezos": "XTZ",
    "fantom": "FTM",
    "chiliz": "CHZ",
    "curve-dao-token": "CRV",
    "rocket-pool": "RPL",
    "frax-share": "FXS",
    "bitdao": "BIT",
    "pancakeswap": "CAKE",
    "klaytn": "KLAY",
    "ecash": "XEC",
    "iota": "MIOTA",
    "maker": "MKR",
    "zcash": "ZEC",
    "synthetix-network-token": "SNX",
    "neo": "NEO",
    "dash": "DASH",
    "thorchain": "RUNE",
    "immutablex": "IMX",
    "arweave": "AR",
    "osmosis": "OSMO",
    "mina-protocol": "MINA",
    "zilliqa": "ZIL",
    "optimism": "OP",
    "gmx": "GMX",
    "kava": "KAVA",
    "1inch": "1INCH",
  };
  const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${Object.keys(symbols).toString() }&vs_currencies=usd&include_market_cap=false&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=8`);
  const prices = response.data;
  return {
    props: { props: { prices, symbols} }
  }
}
