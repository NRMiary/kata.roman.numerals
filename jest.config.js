module.exports = {
    // Define the pattern for matching test files
    testMatch: ["<rootDir>/tests/**/*.test.js"],
    
    // Set the test environment to "jsdom" for running tests in a JavaScript environment
    testEnvironment: "jsdom",
    
    // Map module names that start with "js/" to the corresponding directory in the project
    "moduleNameMapper": {
        "^js/(.*)$": "<rootDir>/js/$1"
    }
};

  