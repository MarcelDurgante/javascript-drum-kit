let keys = document.querySelectorAll(".key");

keys.forEach((el) => {
    el.addEventListener("click", () => {
        el.classList.add("key-active")
        setTimeout(() => {
            el.classList.remove("key-active")
        }, 300);
    })
});