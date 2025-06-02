const { convertCurrency } = require("./index"); 

convertCurrency(100, "USD", "INR")
  .then(result => console.log("Converted:", result))
  .catch(err => console.error("Error:", err));
