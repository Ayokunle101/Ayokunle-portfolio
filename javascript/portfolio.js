var mobile_menu = document.getElementById("mobile_menu");
var menu_list = document.getElementById("menu_list");
mobile_menu.addEventListener("click", function(){
mobile_menu.classList.toggle("is-active");
menu_list.classList.toggle("active");
});