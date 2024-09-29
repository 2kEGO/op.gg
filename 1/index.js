const dropdownbtn = document.getElementById("btn");
const dropdownmenu = document.getElementById("dropdown")

const toggledropdown = function() {
    dropdownmenu.classList.toggle("show");
};

dropdownbtn.addEventListener("click", function(e){
    e.stopPropagation();
    toggledropdown();
});

document.documentElement.addEventListener('click', function(){
    if (dropdownmenu.classList.contains('show')){
        toggledropdown();
    }
});
