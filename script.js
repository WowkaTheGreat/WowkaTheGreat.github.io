let pageIndex = 0;
function loadPage(plusIndex = 0) 
{
    pageIndex += plusIndex;
    let pages = document.getElementsByClassName("page");
    if(pages.length > pageIndex && pageIndex >= 0){
        for(let i = 0; i < pages.length; i++){
            pages[i].style.display = "none";
        }
        pages[pageIndex].style.display = "block";
        console.log("Loading page: " + pageIndex);
    }else{
        pageIndex--;
        if(pageIndex < 0){
            pageIndex = 0;
        }
        console.log("Page not found: " + pageIndex);
    }
}

document.addEventListener("keyup", (e) => {
    if(e.key === "ArrowRight" || e.key.toLowerCase() === "d"){
        loadPage(1);
    }else if(e.key === "ArrowLeft" || e.key.toLowerCase() === "a"){
        loadPage(-1);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    loadPage(0);
});