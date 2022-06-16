
function loadDoc(docId) {
    // map the .html page to the hosted .pdf url
    // NOTE: dropdown-item id must match the switch case
    let prefix = "csce312-";
    let pageName = docId.split(prefix)[1];

    let url = "";
    switch(pageName) {
        case "memory":
            url = "https://drive.google.com/file/d/1pTkie4msc3ogIWr80g8qluv2wsYMRo7F/preview";
            break;
        case "logic":
            url = "https://drive.google.com/file/d/1dTWjsn_B2GbQxtIrebEA6EPXiB-WsPZq/preview";
            break;
        case "seq_logic":
            url = "https://drive.google.com/file/d/1sN_Fq6XxYdmTyfNqLRsPrYybi47k-Ofa/preview";
            break;
        case "data":
            url = "https://drive.google.com/file/d/1rDJ0l99GHUZI-iVjoCLLidQo9sbOLW3G/preview";
            break;
        case "machine_language":
            url = "https://drive.google.com/file/d/1U5kDr0RwPiEsGUPIYDKItq7VexpN2D_z/preview";
            break;
        case "architecture":
            url = "https://drive.google.com/file/d/101CU2RQD-fI6pcvhehcWgesMuuDMbfpR/preview";
            break;
        case "memory_heirarchy":
            url = "https://drive.google.com/file/d/1Wgaic1PpPZ829PwUJZvsFMZuxyQxixx9/preview";
            break;
        case "exam":
            url = "https://drive.google.com/file/d/1qjfA3XuCAuZvxNp-BvMzK2HTut1uQXiJ/preview";
            break;
        default:
            url = "https://drive.google.com/file/d/1qjfA3XuCAuZvxNp-BvMzK2HTut1uQXiJ/preview";
            break;
    }

    let iframe = document.getElementById("csce312");
    iframe.src = url;
}
