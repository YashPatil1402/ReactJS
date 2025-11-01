import { useEffect, useState } from "react";

function useInfo(currency) {
const [data, setData] = useState({});

useEffect(() => {
if (!currency) return;


fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
  .then((res) => res.json()) // ✅ Added missing parentheses
  .then((res) => {
    if (res && res[currency]) {
      setData(res[currency]);
    } else {
      console.error("Unexpected API response:", res);
    }
  })
  .catch((err) => console.error("Error fetching data:", err));


}, [currency]);

return data;
}

export default useInfo;
