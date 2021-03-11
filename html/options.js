var submitEngine = document.querySelector("#submitEngine");

function changeDefaultEngine(){
    localStorage.setItem("defaultEngine", document.querySelector("#searchEngine").value);
    var value = document.querySelector("#searchEngine").value;
    alert("Your default search engine is now: " + value);
}

if(localStorage.getItem("defaultEngine") == "" || localStorage.getItem("defaultEngine") == null || localStorage.getItem("defaultEngine") == undefined || localStorage.getItem("defaultEngine") == 0){
    document.getElementById("message").innerHTML = "https://www.google.com/search?q=";
} else {
    document.getElementById("message").innerHTML = localStorage.getItem("defaultEngine");
}

submitEngine.addEventListener("click", changeDefaultEngine);