const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

changeThemeBtn.addEventListener("change", (e)=>{

    toggleDarkMode();

    // salva ou remove dark mode
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
});