let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("sometext").value;
    console.log(username);
    document.getElementById("welcome").textContent = (`${username}`)
}