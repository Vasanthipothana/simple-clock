function showTime() {
    let indianTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    let t = new Date(indianTime);

    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();

    // adding zero before single digits
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    document.getElementById("hour").innerText = h;
    document.getElementById("min").innerText = m;
    document.getElementById("sec").innerText = s;
}

setInterval(showTime, 1000);
showTime();
