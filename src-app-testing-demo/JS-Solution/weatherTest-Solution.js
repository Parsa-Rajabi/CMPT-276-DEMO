// Sample Unit Test
/**
 * Tests the formatWeatherData function by comparing the expected output
 * with the actual result from a sample data input.
 * 
 * The sample data contains temperature and weather description, which are
 * formatted into a new object. The test passes if the formatted result matches
 * the expected output.
 * 
 * Logs the result of the test to the console.
 */
function testFormatWeatherData() {
    console.log("Running: testFormatWeatherData");

    // Sample data to be formatted
    const sampleData = {
        main: { temp: 25 }, // Temperature data
        weather: [{ description: "clear sky" }] // Weather description
    };

    // Expected formatted result
    const expected = { temperature: 25, description: "clear sky" };

    // Actual formatted result
    const result = {
        temperature: sampleData.main.temp, // Extract temperature from sample data
        description: sampleData.weather[0].description // Extract description from sample data
    };

    // Assert that the actual result matches the expected result
    console.assert(
        JSON.stringify(result) === JSON.stringify(expected),
        "❌ testFormatWeatherData failed"
    );

    console.log("✅ testFormatWeatherData passed");
}

// Sample Integration Test
/**
 * Tests the fetchWeather function by fetching weather data for a valid city
 * and checking if the result contains temperature and description.
 * 
 * Logs the result of the test to the console.
 */
async function testFetchWeather() {
    console.log("Running: testFetchWeather");

    try {
        // Fetch weather data for London
        const result = await fetchWeather("London");

        // Assert that the result contains temperature and description
        console.assert(
            result.temperature !== undefined && result.description !== undefined,
            "❌ testFetchWeather failed: Missing temperature or description"
        );

        console.log("✅ testFetchWeather passed");
    } catch (error) {
        console.error("❌ testFetchWeather failed", error);
    }
}

// Sample Unit Test for convertCelsiusToFahrenheit
/**
 * Tests the convertCelsiusToFahrenheit function by comparing the expected output
 * with the actual result from a sample data input.
 * 
 * The sample data contains temperature in Celsius, which is converted to Fahrenheit.
 * The test passes if the converted result matches the expected output.
 * 
 * Logs the result of the test to the console.
 */
function testConvertTemperature() {
    console.log("Running: testConvertTemperature");

    // Sample data to be converted
    const celsius = 25;

    // Expected converted result
    const expected = 77;

    // Actual converted result
    const result = convertCelsiusToFahrenheit(celsius); // Updated function name

    // Assert that the actual result matches the expected result
    console.assert(
        result === expected,
        "❌ convertCelsiusToFahrenheit failed"
    );

    console.log("✅ testconvertCelsiusToFahrenheit passed");
}

// Instructions for In-Class Activity
/**
 * 
 * Task 1: Write a unit test for the formatWeatherData function with different sample data.
 * 
 * Expected:
 * Sample data: { main: { temp: 30 }, weather: [{ description: "partly cloudy" }] }
 * Expected formatted result: { temperature: 30, description: "partly cloudy" }
 * 
 * Task 2: Write a unit test for the convertCelsiusToFahrenheit function with different sample data.
 * 
 * Expected:
 * Sample data: 15 C
 * Expected: 59 F
 * 
 * Task 3: Write an integration test for the fetchWeather function with a different valid city.
 * 
 * Expected:
 * City: "New York"
 * The result should contain temperature and description properties.
 * 
 * Task 4: Write an integration test for the fetchWeather function with an invalid city.
 * 
 * Expected:
 * City: "InvalidCity"
 * The test should handle the error gracefully and assert that an error is thrown.
 * 
 */

// Task 1: Write your unit test here
function testFormatWeatherDataTask() {
    console.log("Running: testFormatWeatherDataTask1");

    // Sample data to be formatted
    const sampleData = {
        main: { temp: 30 }, // Temperature data
        weather: [{ description: "partly cloudy" }] // Weather description
    };

    // Expected formatted result
    const expected = { temperature: 30, description: "partly cloudy" };

    // Actual formatted result
    const result = {
        temperature: sampleData.main.temp, // Extract temperature from sample data
        description: sampleData.weather[0].description // Extract description from sample data
    };

    // Assert that the actual result matches the expected result
    console.assert(
        JSON.stringify(result) === JSON.stringify(expected),
        "❌ testFormatWeatherDataTask1 failed"
    );

    console.log("✅ testFormatWeatherDataTask1 passed");
}

// Task 2: Write your unit test here
function testConvertTemperatureTask() {
    console.log("Running: testConvertTemperature");

    // Sample data to be converted
    const celsius = 15;

    // Expected converted result
    const expected = 59;

    // Actual converted result
    const result = convertCelsiusToFahrenheit(celsius); // Updated function name

    // Assert that the actual result matches the expected result
    console.assert(
        result === expected,
        "❌ convertCelsiusToFahrenheit failed"
    );

    console.log("✅ testconvertCelsiusToFahrenheit passed");
}

// Task 3: Write your integration test here
async function testFetchWeatherTask1() {
    console.log("Running: testFetchWeatherTask1");

    try {
        // Fetch weather data for New York
        const result = await fetchWeather("New York");

        // Assert that the result contains temperature and description
        console.assert(
            result.temperature !== undefined && result.description !== undefined,
            "❌ testFetchWeatherTask1 failed: Missing temperature or description"
        );

        console.log("✅ testFetchWeatherTask1 passed");
    } catch (error) {
        console.error("❌ testFetchWeatherTask1 failed", error);
    }
}

// Task 4: Write your integration test here
async function testFetchWeatherTask2() {
    console.log("Running: testFetchWeatherTask2");

    try {
        // Fetch weather data for an invalid city
        await fetchWeather("InvalidCity");
        console.log("✅ testFetchWeatherTask2 passed: Error was thrown as expected");
    } catch (error) {
        console.error("❌ testFetchWeatherTask2 failed: Expected an error to be thrown");
    }
}


// Run all tests
testFormatWeatherData();
testFetchWeather();
testConvertTemperature();
testFormatWeatherDataTask();
testConvertTemperatureTask();
testFetchWeatherTask1();
testFetchWeatherTask2();
