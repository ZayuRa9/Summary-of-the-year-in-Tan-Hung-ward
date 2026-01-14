function stopRoll(){
    if(!rolling) return;

    clearInterval(timer);
    rolling = false;

    tick.pause();
    numberEl.classList.remove("shake");

    // RANDOM THẬT – KHÔNG TRÙNG
    const realNumber = pickUnique();
    const num = String(realNumber).padStart(3,"0");
    const prize = prizes[prizeIndex++];

    numberEl.innerText = num;

    history.push({ Số: num, Giải: prize });
    showResult(num, prize);

    stopSound.currentTime = 0;
    stopSound.play();
    fireworks();

    // GIẢI ĐẶC BIỆT
    if(prize === "Giải Đặc Biệt"){
        locked = true;
        drum.currentTime = 0;
        drum.play();
        setTimeout(()=>{
            fireworkSound.currentTime = 0;
            fireworkSound.play();
        },1200);

        exportExcel();
        showFinalTable();
    }
}
