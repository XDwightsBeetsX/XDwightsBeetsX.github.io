var sections = ["main", "tws", "math", "engr", "cs"];

function show(idToShow) {
    // Goes through all the sections, which are class names in menu
    // and makes all but the requested ClassToShow visible.
    
    sections.forEach(section => 
        document.getElementById(section).style.display='none');
    document.getElementById(idToShow).style.display='block';
}
