import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((response) => setData(response[currency]))
            .catch(error => console.error("Error fetching currency data:", error));
    }, [currency])
    return data;
}

export default useCurrencyInfo;