
# Currency Converter

A lightweight and easy-to-use Node.js package for converting currency amounts using the [ExchangeRate-API](https://www.exchangerate-api.com/). This package provides a simple asynchronous interface to fetch real-time exchange rates and convert values between different currencies with minimal setup.

---

## Features

- **Real-time Currency Conversion** — Fetches current exchange rates for accurate conversion.
- **Simple API** — Easy-to-use asynchronous function returning promises.
- **Robust Error Handling** — Gracefully handles API errors and invalid inputs.
- **Lightweight** — Minimal dependencies, optimized for fast performance.
- **Extensible** — Easily integrate into existing Node.js applications or CLI tools.

---

## Table of Contents

- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Error Handling](#error-handling)
- [Development & Configuration](#development--configuration)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)
- [References](#references)

---

## Installation

You can install the package via npm:

```bash
npm i nand_currency_converter
````

> **Note:** Replace `currency-converter-your-package-name` with the actual package name once published.

---

## Prerequisites

* Node.js v12 or higher.
* An API key from [ExchangeRate-API](https://www.exchangerate-api.com/). Sign up for a free or paid plan depending on your requirements.

---

## Usage

Import the package and call the `convertCurrency` function with the desired amount, source currency code, and target currency code.

```js
const { convertCurrency } = require('currency-converter-your-package-name');

async function runConversion() {
  try {
    const convertedAmount = await convertCurrency(100, 'USD', 'INR');
    console.log(`Converted amount: ${convertedAmount}`);
  } catch (error) {
    console.error('Conversion error:', error.message);
  }
}

runConversion();
```

### Sample Output

```json
API response: {
  "result": "success",
  "documentation": "https://www.exchangerate-api.com/docs",
  "terms_of_use": "https://www.exchangerate-api.com/terms",
  "time_last_update_unix": 1748822401,
  "time_last_update_utc": "Mon, 02 Jun 2025 00:00:01 +0000",
  "time_next_update_unix": 1748908801,
  "time_next_update_utc": "Tue, 03 Jun 2025 00:00:01 +0000",
  "base_code": "USD",
  "target_code": "INR",
  "conversion_rate": 85.6031,
  "conversion_result": 8560.31
}
Converted amount: 8560.31
```

---

## API Reference

### `convertCurrency(amount, fromCurrency, toCurrency)`

| Parameter      | Type   | Description                                             |
| -------------- | ------ | ------------------------------------------------------- |
| `amount`       | number | The numeric value to convert (e.g., `100`).             |
| `fromCurrency` | string | ISO 4217 currency code to convert from (e.g., `"USD"`). |
| `toCurrency`   | string | ISO 4217 currency code to convert to (e.g., `"INR"`).   |

Returns a `Promise<number>` that resolves with the converted currency amount.

Throws an error if:

* The API returns an error (e.g., invalid currency code).
* The network request fails.
* Input parameters are invalid.

---

## Error Handling

The function throws descriptive errors which can be caught and handled in your application:

* `Currency conversion failed: <error message>` for network or API errors.
* Specific error types from the API, such as `"unsupported-code"` if an unsupported currency code is provided.

Example:

```js
convertCurrency(100, 'XYZ', 'INR')
  .catch(err => {
    console.error(err.message); // "Currency conversion failed: unsupported-code"
  });
```

---

## Development & Configuration

### API Key Setup

Replace the placeholder API key in `index.js` with your own key from [ExchangeRate-API](https://www.exchangerate-api.com/):

```js
const apiKey = "YOUR_API_KEY_HERE";
```

### Environment Variables (Recommended)

For better security, you can use environment variables instead of hardcoding your API key:

```js
const apiKey = process.env.EXCHANGE_RATE_API_KEY;
```

And run your application with:

```bash
EXCHANGE_RATE_API_KEY=your_api_key node test.js
```

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-repo/issues).

Please follow these guidelines:

* Fork the repository and create your branch from `main`.
* Write clear commit messages.
* Include tests for new features or bug fixes.
* Run linting and tests before submitting a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Support

If you encounter any issues or have questions, please open an issue on the repository or contact the maintainer.

---

## References

* [ExchangeRate-API Documentation](https://www.exchangerate-api.com/docs)
* [ISO 4217 Currency Codes](https://www.iso.org/iso-4217-currency-codes.html)



*Created and maintained by \[Nand Kumar Sahu].*






