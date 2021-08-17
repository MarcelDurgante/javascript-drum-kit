/* STORE ARRAY OF TARGETED KEYS IN A VARIABLE */
let keys = document.querySelectorAll(".key");


/* CHANGE STYLE OF THE KEY WHEN CLICKED */
keys.forEach((key) =>
    key.addEventListener("click", () => {
        key.classList.add("key-active");
        setTimeout(() => {
            key.classList.remove("key-active");
        }, 50);
    })
);

/* PLAY AUDIO */
keys.forEach(key => key.addEventListener("click", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
    if (!audio) return; // stop the function form running if e.target is does not have/find an audio
    audio.currentTime = 0; // rewind audio to zero when finished or pressed again
    audio.play();


}));