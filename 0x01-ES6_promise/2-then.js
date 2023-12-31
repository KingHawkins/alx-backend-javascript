export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else reject(new Error());
  }).then(() => console.log('Got aresponse from the API'));
}
