function startRoll(){
    if(rolling || locked) return;
    rolling = true;

    tick.currentTime = 0;
    tick.play();
    numberEl.classList.add("shake");

    timer = setInterval(() => {
        // random CỰC NHANH – tạo hiệu ứng loạn
        const fake = Math.floor(Math.random() * 900) + 1;
        numberEl.innerText = String(fake).padStart(3,"0");
    }, 30); // 🔥 30ms = rất nhanh
}
