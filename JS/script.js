console.log("Hello! How are you?");

let buttonHeader = document.querySelector(".js-buttonHeader");
let header = document.querySelector(".js-header");
let buttonTheme = document.querySelector(".js-buttonTheme");
let body = document.querySelector(".body");
let changeTheme = document.querySelector(".js-changeTheme");

buttonHeader.addEventListener("click", () => {
    header.remove();
});

buttonTheme.addEventListener("click", () => {
    body.classList.toggle("body__dark");

    changeTheme.innerText = body.classList.contains("body__dark") ? "dzienny" : "nocny";
});
