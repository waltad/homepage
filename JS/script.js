{
    const welcome = () => {
        console.log("Hello! How are you?");
    }

    const toggleTheme = () => {
        const body = document.querySelector(".body");
        const changeTheme = document.querySelector(".js-changeTheme");
        body.classList.toggle("body__dark");
        changeTheme.innerText = body.classList.contains("body__dark") ? "dzienny" : "nocny";
    }

    const removeHeader = () => {
        const header = document.querySelector(".js-header");
        header.remove()
    }

    const init = () => {
        const buttonHeader = document.querySelector(".js-buttonHeader");
        const buttonTheme = document.querySelector(".js-buttonTheme");

        buttonHeader.addEventListener("click", removeHeader);
        buttonTheme.addEventListener("click", toggleTheme);

        welcome();
    }

    init();

}
