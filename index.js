
const axios = require("axios")
const urls = ["link project"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Bos siap" + Date.now())).catch(() => {});
        })
    }, 100 * 1000);
