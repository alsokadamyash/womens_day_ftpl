const date = 8;
function getParams() {
    const queryParams = new URLSearchParams(window.location.search);
    return(queryParams.get("name"))
}

const le_name = getParams();

le_name?document.getElementById("greeting").innerHTML = "Happy Women's Day "+ le_name:null;