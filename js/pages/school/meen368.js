
function loadDoc(docId) {
    // map the .html page to the hosted .pdf url
    // NOTE: dropdown-item id must match the switch case
    let prefix = "meen368-";
    let pageName = docId.split(prefix)[1];

    // water wheel project by default
    let url = "https://drive.google.com/file/d/1lV9dNSIFbOQ26SdgRteK3vzbBdydIG0-/preview";
    
    // sub-dropdown options
    switch(pageName) {
        case "project":
            // water wheel
            break;
        case "book":
            url = "https://drive.google.com/file/d/1wynxfk8zOIKHtJQbzf_DCPgjmEE51OSe/preview";
            break;
        default:
            // water wheel
            break;
    }

    let iframe = document.getElementById("meen368");
    iframe.src = url;
}
