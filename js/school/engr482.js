
let engr482pages = ["1-intro",  "2-utilitarianism"]

function loadPage(pageName) {
    let iframe = document.getElementsByClassName("pdf");
    let url = "https://github.com/XDwightsBeetsX/XDwightsBeetsX.github.io/tree/master/assets/school/engr482/"
    
    if (engr482pages.includes(pageName)) {
        iframe.style.src = url + pageName;
    }
}
