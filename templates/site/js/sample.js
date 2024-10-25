document.addEventListener("DOMContentLoaded", function (){

    //setDropdownItemRemoveChevron();

    var searchInputElement = document.getElementById("searchInput");
    setPlaceholderText(searchInputElement);

    searchInputElement.addEventListener("click", function(){
        updatePlaceholderText(searchInputElement);
    });

    searchInputElement.addEventListener("focus", function(){
        updatePlaceholderText(searchInputElement);
    });

    searchInputElement.addEventListener("blur", function(){
        setPlaceholderText(searchInputElement);
    });

    searchInputElement.addEventListener("keydown", function(){
        getWord("searchInput");
    })


})