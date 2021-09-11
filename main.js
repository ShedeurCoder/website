var day = new Date();
var hr = day.getHours();
var greetJs = "Hello";
if (hr < 12) {
    greetJs = "Good Morning";
    document.getElementById("greet").innerHTML = greetJs;
}
else if (hr == 12) {
    greetJs = "Good Noon";
    document.getElementById("greet").innerHTML = greetJs;
}
else if (hr > 12 && hr < 18) {
    greetJs = "Good Afternoon";
    document.getElementById("greet").innerHTML = greetJs;
}
else if (hr > 18) {
    greetJs = "Good Evening";
    document.getElementById("greet").innerHTML = greetJs;
}
else {
    document.getElementById("greet").innerHTML = greetJs;
}
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var button = document.getElementById("darkModeToggle");
    button.classList.toggle("currentlyDark");
}