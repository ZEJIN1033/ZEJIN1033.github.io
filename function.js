/*Create event listener which responds to a click event*/
document.querySelector("#button1").addEventListener("click", function () {
    document.getElementById("chart1").style.visibility = "visible";
    document.getElementById("button1").innerHTML = "Hide chart"
});
