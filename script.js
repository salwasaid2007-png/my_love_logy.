const startDate = new Date("2025-12-08T00:00:00");

function updateCounter() {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    let diff = now - startDate;
    let seconds = Math.floor(diff / 1000) % 60;
    let minutes = Math.floor(diff / 60000) % 60;
    let hours = Math.floor(diff / 3600000) % 24;

    document.getElementById("counter").innerHTML =
        `بقالنا مع بعض ❤️<br>
        ${years} سنة
        ${months} شهر
        ${days} يوم
        ${hours} ساعة
        ${minutes} دقيقة
        ${seconds} ثانية`;
}

setInterval(updateCounter, 1000);
updateCounter();
