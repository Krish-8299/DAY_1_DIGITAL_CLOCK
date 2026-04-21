function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById("ampm").textContent = ampm;

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById("date").textContent = now.toLocaleDateString(undefined, options);

    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = now.getDay();

    days.forEach(day => document.getElementById(day).classList.remove("active"));
    document.getElementById(days[today]).classList.add("active");
}

setInterval(updateClock, 1000);
updateClock();