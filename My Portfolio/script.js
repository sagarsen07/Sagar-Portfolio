function showTab(tabId) {
    const content = document.querySelectorAll(".tab-content")
    content.forEach(element => {
        element.classList.remove('active-tab')
    });
    
    let tablinks = document.getElementsByClassName("tab-links")
    for (tablink of tablinks){
        tablink.classList.remove('active-link')
    }

    const selected = document.getElementById(tabId)
    selected.classList.add('active-tab')

    event.currentTarget.classList.add('active-link')
}


let sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-150px"
}