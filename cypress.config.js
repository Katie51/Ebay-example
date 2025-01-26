const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.ebay.com", 
    viewportWidth: 1900,
    viewportHeight: 1080,
  },
});