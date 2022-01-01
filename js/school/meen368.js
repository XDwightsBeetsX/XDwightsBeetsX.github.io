
function loadDoc(docId) {
    // map the .html page to the hosted .pdf url
    // NOTE: dropdown-item id must match the switch case
    let prefix = "meen368-";
    let pageName = docId.split(prefix)[1];

    let url = "";
    switch(pageName) {
        case "project":
            url = "https://drive.google.com/file/d/1lV9dNSIFbOQ26SdgRteK3vzbBdydIG0-/preview";
            break;
        case "book":
            url = "https://drive.google.com/file/d/1wynxfk8zOIKHtJQbzf_DCPgjmEE51OSe/preview";
            break;
        default:
            url = "https://drive.google.com/file/d/1lV9dNSIFbOQ26SdgRteK3vzbBdydIG0-/preview";
            break;
    }

    let iframe = document.getElementById("meen368");
    iframe.src = url;
}
