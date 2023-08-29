let settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers":{}
};
const bitcoin = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const dogecoin = document.getElementById("dogecoin");

$.ajax(settings).done(function(response){
    bitcoin.innerHTML = `$${response.bitcoin.usd}`;
    ethereum.innerHTML = `$${response.ethereum.usd}`;
    dogecoin.innerHTML = `$${response.dogecoin.usd}`;
});