// 1. Create a function 'delay(ms)' that returns a Promise
// that resolves after 'ms' milliseconds

// const delay = (ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     });
// };

// delay(1000).then(() => console.log("1 second passed!"));




// 2. Create 'fetchProduct(id)' that simulates fetching a product
// - If id starts with "PRD", resolve with product object after 500ms
// - If id doesn't start with "PRD", reject with "Invalid product ID"


const fetchProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (id.startsWith("PRD")) {
                resolve({ id: id, name: "Sample Product", price: 100});
            } else {
                reject("Invalid product ID");
            }
        }, 500);
    });
}


fetchProduct("PRD-001").then(p => console.log(p)).catch(e => console.log(e));
fetchProduct("PRD-002").then(p => console.log(p)).catch(e => console.log(e));
fetchProduct("INVALID").then(p => console.log(p)).catch(e => console.log(e));



// 3. Create a 'retryFetch(url, maxRetries)' function that:
// - Simulates a fetch that fails 70% of the time
// - Retries up to maxRetries times
// - Resolves with data if any attempt succeeds
// - Rejects if ALL attempts fail


// const retryFetch = (url, maxRetries = 3) => {
//     let attempt = 0;

//     const fetchData = () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 attempt++;

//                 if (Math.random() < 0.7) {
//                     console.log(`Attempt ${attempts} failed`);
//                     reject("Fetch failed");

//                 } else {
//                     resolve(`Success from ${url} on attempt ${attempt}`);
//                 }
//             }, 500);
//         });
//     };

//     const retry = () => {
//         return fetchData().catch((error) => {
//             if (attempt < maxRetries) {
//                 return retry();
//             } else {
//                 return Promise.reject("All attempts failed");
//             };
//         });
//     };
//     return retry();
// };

// retryFetch("https://api.example.com/data", 5)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

