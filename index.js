// Other game dropdown Button
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown_content")
const toggleArrow = document.getElementById("arrow_id")

function toggleDropdown(e) {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow_spinner")
};

dropdownBtn.addEventListener("click", toggleDropdown);


// Customer support button
const dropdownBtn2 = document.getElementById("btn2");
const dropdownMenu2 = document.getElementById("dropdown_content2");

function toggleDropdown2(t) {
    dropdownMenu2.classList.toggle("show");
};

dropdownBtn2.addEventListener("click", toggleDropdown2);


// change theme color
const themeBtn = document.getElementById("btn3");

function toggleTheme() {    
    var element = document.body;
    element.classList.toggle("dark-mode");
    console.log("clicked")
}

themeBtn.addEventListener("click", toggleTheme);


//change language button


