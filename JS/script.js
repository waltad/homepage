console.log("Hello! How are you?");

let buttonHeader = document.querySelector(".js-buttonHeader");
let header1 = document.querySelector(".js-header1");
let buttonTheme = document.querySelector(".js-buttonTheme");
let body = document.querySelector(".body");
// let dark = document.querySelector(".body__dark");
let changeTheme = document.querySelector(".js-changeTheme");

buttonHeader.addEventListener("click", () => {
    header1.remove();
});

buttonTheme.addEventListener("click", () => {
    body.classList.toggle("body__dark");

    changeTheme.innerText = body.classList.contains("body__dark") ? "dzienny" : "nocny";
});
    // if (body.classList.contains("bodyDark")) {
    //     changeTheme.innerText = "dzienny";
    // } else {
    //     changeTheme.innerText = "nocny";
    // }
