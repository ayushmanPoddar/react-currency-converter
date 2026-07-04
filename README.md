# 💱 Real-Time Currency Converter

A responsive, dynamic Single-Page Application (SPA) built with **React.js** and **Vite** that calculates real-time foreign exchange rates. This project demonstrates core frontend architecture principles, custom React Hooks, asynchronous API integration, and efficient state management.

---

## 🚀 Tech Stack & Tools

* **Frontend Framework:** React.js (Functional Components)
* **Build Tool:** Vite (for optimized bundling and lightning-fast Hot Module Replacement)
* **Language:** JavaScript (ES6+)
* **Styling:** Modern CSS / Tailwind CSS
* **Data Source:** External REST API (Real-Time Currency Exchange Rates)

---

## ✨ Key Features

* **Real-Time Data Fetching:** Seamlessly integrates with an external REST API to fetch and parse live global exchange rates.
* **Custom Hook Architecture:** Utilizes a custom React hook (`useCurrencyInfo`) to decouple data-fetching logic and side effects from the presentation layer, adhering to DRY (Don't Repeat Yourself) principles.
* **Bidirectional Swapping:** Features an instant "Swap" functionality that reverses the "From" and "To" currencies while automatically recalculating the conversion amounts.
* **Optimized State Management:** Heavily leverages core React Hooks (`useState`, `useEffect`, `useCallback`) to manage dynamic UI inputs, handle dependency arrays efficiently, and prevent unnecessary component re-renders.
* **Responsive UI/UX:** Designed with a clean, intuitive interface that scales smoothly across desktop, tablet, and mobile devices.

---

## 🧠 Architectural Highlights

### Custom Hook: `useCurrencyInfo`
Instead of cluttering the main UI components with `fetch()` calls and API lifecycle management, the project abstracts API logic into a dedicated custom hook (`src/hooks/useCurrencyInfo.js`). 

```javascript
// Example conceptual workflow of the custom hook
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`[https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/$](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/$){currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}
