
function loadDoc(docId) {
    // map the .html page to the hosted .pdf url
    // NOTE: dropdown-item id must match the switch case
    let prefix = "pols207-";
    let pageName = docId.split(prefix)[1];

    let url = "";
    switch(pageName) {
        case "ex1":
            url = "https://drive.google.com/file/d/1CDXvAdVTWOHtNJpXBVrYY_G1am1NPu_9/preview";
            break;
        case "ex2":
            url = "https://drive.google.com/file/d/1HVOru2GBddv26z7LsdsTdegUbNBbgr4a/preview";
            break;
        case "ex3":
            url = "https://drive.google.com/file/d/1bkbmUzwA6KK2qSd_SxdjN-YPNup1mK5X/preview";
            break;
        case "ex4":
            url = "https://drive.google.com/file/d/1QuOIM3TRXrnDPMyBtXRfg9G7pibi4ZMO/preview";
            break;
        case "ex5":
            url = "https://drive.google.com/file/d/1kv-gREIwZcviJhcB2baHAiYOqqMk5o_C/preview";
            break;
        default:
            url = "https://drive.google.com/file/d/1CDXvAdVTWOHtNJpXBVrYY_G1am1NPu_9/preview";
            break;
    }

    let iframe = document.getElementById("pols207");
    iframe.src = url;
}
