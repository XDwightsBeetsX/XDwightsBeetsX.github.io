
function loadDoc(docId) {
    // map the .html page to the hosted .pdf url
    // NOTE: dropdown-item id must match the switch case
    let prefix = "engr482-";
    let pageName = docId.split(prefix)[1];

    let url = "";
    switch(pageName) {
        case "intro":
            url = "https://drive.google.com/file/d/1rmZmerfscKBB64uYRlvPzrgy9G8Ph7p8/preview";
            break;
        case "utilitarianism":
            url = "https://drive.google.com/file/d/1AqDe8mDDH3KNzm_rlJ87O_6NxF16Tcmo/preview";
            break;
        case "kantianism":
            url = "https://drive.google.com/file/d/1XkJhyWtrecDP1z_H_XYDPq-_tGtH61ka/preview";
            break;
        case "aspirational":
            url = "https://drive.google.com/file/d/1lROfhbtuU6exhOyOOKoH-bpjE_iATT-w/preview";
            break;
        case "virtue":
            url = "https://drive.google.com/file/d/1hs-Lj_Ft2avrxQwGxtmcj-7k9sLvvqzc/preview";
            break;
        case "risk":
            url = "https://drive.google.com/file/d/1fFExyN2WTUAeYFhHt3g32SLeYzSR1zlD/preview";
            break;
        case "company_culture":
            url = "https://drive.google.com/file/d/1TRDvPQJQ5alLBPRPtzJ1pNSwODTTdFH-/preview";
            break;
        case "impediments":
            url = "https://drive.google.com/file/d/1IdpzMXQL19qrW4IODD_vmuMYT5P_QOF4/preview";
            break;
        case "professionalism":
            url = "https://drive.google.com/file/d/1oIx6LWi6pj9Y5zg3RoOadklgWOMaz7w0/preview";
            break;
        case "artifacts":
            url = "https://drive.google.com/file/d/1V8Y1-a1fjOBYbTvelhzUMEcnOp6cnQiz/preview";
            break;
        case "ellul":
            url = "https://drive.google.com/file/d/1jHS2C1L1hRjAbjvyFEybt4qp-AKoaYFT/preview";
            break;
        case "environment":
            url = "https://drive.google.com/file/d/18CE37YI7qrhs23ynwXrxRe2ZzEdeUhIm/preview";
            break;
        case "international":
            url = "https://drive.google.com/file/d/1EhujsmRtPAJNWDSKViOs4toRXkY70NwW/preview";
            break;
        case "privacy":
            url="https://drive.google.com/file/d/14q8p7aiE01KDPv9rd9kpFls_eBeapNAv/preview";
            break;
        default:
            url = "https://drive.google.com/file/d/1j6D5leBob4RYfDST90ivdDmOQRPXcgxK/preview";
            break;
    }

    let iframe = document.getElementById("engr482");
    iframe.src = url;
}
