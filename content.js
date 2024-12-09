function convertTime(element) {
    const timeStr = element.textContent.trim();
    if (!timeStr.includes(':')) return;

    const [hours, minutes] = timeStr.split(":").map(Number);
    const newHours = hours % 12 || 12;
    var amPM = "";
    if (hours < 12) {
        amPM = "AM"
    } else {
        amPM = "PM"
    }

    const newTimeStr = `${newHours}:${minutes.toString().padStart(2, '0')} ${amPM}`
    if (element.textContent.trim() != newTimeStr) {
        element.textContent = newTimeStr;
    }
}

function updateAllTimes() {
    elementMatches = ['.matchTime', 'span[data-time-format]', '.time[data-time-format]', 'span.bold.time-time',
                        ".middleExtra[data-time-format]"]

    elementMatches.forEach((match) => {
        elements = document.querySelectorAll(match);
        elements.forEach((e) => {
            convertTime(e);
        });
    })
}

updateAllTimes();
