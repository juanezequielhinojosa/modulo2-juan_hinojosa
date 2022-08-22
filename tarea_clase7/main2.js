/* Async - Await */
async function getIp() {
    try {
      let response = await fetch("https://api.ipify.org/?format=json");
      let ipResponse = await response.json();
      console.log(ipResponse);
  
      let responseLocation = await fetch("http://ip-api.com/json/" + ipResponse.ip);
      let locationResponse = await responseLocation.json();
      console.log(locationResponse);
    } catch {
      console.log("Algo paso, no se pudo resolver...");
    }
  }
  getIp();
  