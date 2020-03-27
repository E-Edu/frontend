import Config from "./Config.json";

async function Endpoint_Connection(Url = "", Data = {}, method = "") {
    //URL = Z.B user/login/
    let Final_Url;
    switch (Url.split("/")[0]) {
        case "user":
            Final_Url = Config.URL_User + Url.split("/").slice(1,6);
            console.log(Final_Url);
            break;
        case "report":
            Final_Url = Config.URL_User + Url.split("/").slice(1,6);
            console.log(Final_Url);
            break;
        case "task":
            Final_Url = Config.URL_User + Url.split("/").slice(1,6);
            console.log(Final_Url);
            break;
    }
    // Default options are marked with *
    const response = await fetch(Final_Url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(Data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}
export default Endpoint_Connection
