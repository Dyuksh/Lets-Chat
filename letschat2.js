var username = user_name;
username1 = user_name ;
function logout(){
    window.location = "index.html";
    localStorage.RemoveItem("user_name",user_name);
}
