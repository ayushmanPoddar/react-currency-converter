import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {

const [data, setData] = useState({});
useEffect(()=> {
    async function fetchCurrency() {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`);

        const result= await response.json();

        setData(result[currency.toLowerCase()]) // result["usd"] only usd object will be given 
    }
    fetchCurrency();
} , [currency]);

return data ;
}

export default useCurrencyInfo;