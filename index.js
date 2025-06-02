const fetch = require("node-fetch");

async function convertCurrency(amount, fromCurrency, toCurrency) {
  const apiKey = "5f0149b8a03b40a7ad9dfd70";
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("API response:", data);

    if (data.result === "error") {
      throw new Error(data["error-type"]);
    }

    return data.conversion_result;
  } catch (error) {
    throw new Error("Currency conversion failed: " + error.message);
  }
}

module.exports = { convertCurrency };
