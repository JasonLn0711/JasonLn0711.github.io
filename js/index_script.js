const timezones = moment.tz.names();
const timezoneOptions = document.getElementById('timezone-options');
const notificationsList = document.getElementById('notifications');
const countdownDiv = document.getElementById('countdown');
const destinationTimeDisplay = document.getElementById('destination-time-display');

// Populate datalist for autocomplete
timezones.forEach(zone => {
    const option = document.createElement('option');
    option.value = zone;
    timezoneOptions.appendChild(option);
});

function switchTimeZonesAndUpdateTime() {
    const currentTzInput = document.getElementById('current-timezone');
    const destTzInput = document.getElementById('destination-timezone');
    const temp = currentTzInput.value;
    currentTzInput.value = destTzInput.value;
    destTzInput.value = temp;
    showDestinationTime();
}

function showDestinationTime() {
    const currentTz = document.getElementById('current-timezone').value;
    const destTz = document.getElementById('destination-timezone').value;
    const eventDate = document.getElementById('event-date').value;

    if (!moment.tz.zone(currentTz) || !moment.tz.zone(destTz) || !eventDate) {
        destinationTimeDisplay.textContent = "Please select a valid event date, current time zone, and destination time zone.";
        return;
    }

    const eventMoment = moment.tz(eventDate, currentTz);
    const destMoment = eventMoment.clone().tz(destTz);

    destinationTimeDisplay.textContent = `Time in ${destTz}: ${destMoment.format('YYYY/MM/DD HH:mm')}`;
}

function addNotification() {
    const notificationTime = document.getElementById('notification-time').value;
    const eventDate = document.getElementById('event-date').value;
    const currentTz = document.getElementById('current-timezone').value;

    if (!eventDate || !currentTz || !moment.tz.zone(currentTz)) {
        alert('Please select a valid event date and time, and enter a valid current time zone!');
        return;
    }

    const eventMoment = moment.tz(eventDate, currentTz);
    const notificationMoment = eventMoment.clone().add(Number(notificationTime), 'minutes');

    const listItem = document.createElement('li');
    listItem.className = 'notification-item';
    listItem.textContent = `Notification at: ${notificationMoment.format('YYYY-MM-DD HH:mm')} (${currentTz})`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => listItem.remove();
    listItem.appendChild(removeButton);

    notificationsList.appendChild(listItem);

    updateCountdown(notificationMoment);
}

function updateCountdown(notificationMoment) {
    const interval = setInterval(() => {
        const diff = notificationMoment.diff(moment());
        if (diff <= 0) {
            countdownDiv.textContent = 'Notification time reached!';
            clearInterval(interval);
        } else {
            countdownDiv.textContent = `Countdown: ${moment.duration(diff).humanize()} remaining`;
        }
    }, 1000);
}

function addToGoogleCalendar() {
    const eventName = document.getElementById('event-name').value || 'Unnamed Event';
    const eventDate = document.getElementById('event-date').value;
    const currentTz = document.getElementById('current-timezone').value;

    if (!eventDate || !moment.tz.zone(currentTz)) {
        alert('Please select a valid event date and time, and enter a valid current time zone!');
        return;
    }

    const eventMoment = moment.tz(eventDate, currentTz);
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventName)}&dates=${eventMoment.format('YYYYMMDDTHHmmss')}/${eventMoment.add(1, 'hour').format('YYYYMMDDTHHmmss')}&ctz=${currentTz}`;
    window.open(googleCalendarUrl, '_blank');
}
