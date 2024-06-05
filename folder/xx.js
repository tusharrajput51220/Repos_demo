// Example function that simulates a delay and then calls a callback
function fetchData(callback) {
    // Simulate an asynchronous operation (e.g., fetching data from a database or API)
    setTimeout(() => {
        const data = 'Some data fetched from the server';
        callback(data); // Invoke the callback with the fetched data
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
}

// Callback function to handle the fetched data
function handleData(data) {
    console.log('Data received:', data);
}

// Calling fetchData with handleData as the callback
fetchData(handleData);

// Output after 2 seconds:
// Data received: Some data fetched from the server
