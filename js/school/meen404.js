
function loadDoc(docId) {
    // map the .html page to the hosted .pdf url
    // NOTE: dropdown-item id must match the switch case
    let prefix = "meen404-";
    let pageName = docId.split(prefix)[1];

    let url = "";
    switch(pageName) {
        case "exp1":
            url = "https://drive.google.com/file/d/11WYGZeUxzuOumWDA0PH0R5L71eDTgSu6/preview";
            break;
        case "exp2":
            url = "https://drive.google.com/file/d/10UQ8iOuk7Ooc-tm2rR7EK14-hPsZE_fr/preview";
            break;
        case "exp3":
            url = "https://drive.google.com/file/d/1Q8_sZucRSNKEU7kJz1m_hNwFFmFUeIYs/preview";
            break;
        default:
            url = "https://drive.google.com/file/d/11WYGZeUxzuOumWDA0PH0R5L71eDTgSu6/preview";
            break;
    }

    let iframe = document.getElementById("meen404");
    iframe.src = url;
}
