
document.addEventListener("DOMContentLoaded", showEvents);

function getEvents() {
    let events = localStorage.getItem("events");
    return events ? JSON.parse(events) : [];
}

function saveEvents(events) {
    localStorage.setItem("events", JSON.stringify(events));
}

function addEvent() {
    let title = document.getElementById("title").value.trim();
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value.trim();

    if (title === "" || date === "" || description === "") {
        alert("Please fill all details first!");
        return;
    }

    let events = getEvents();

    let newEvent = {
        id: Date.now(),
        title,
        date,
        category,
        description
    };

    events.push(newEvent);
    saveEvents(events);

    clearInputs();
    showEvents();
}

function showEvents() {
    let eventList = document.getElementById("eventList");
    let events = getEvents();

    eventList.innerHTML = "";

    if (events.length === 0) {
        eventList.classList.add("empty");
        eventList.innerHTML = "No events yet. Add your first event!";
        return;
    }

    eventList.classList.remove("empty");

    events.forEach(event => {
        let div = document.createElement("div");
        div.className = "event-item";

        div.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Category:</strong> ${event.category}</p>
            <p>${event.description}</p>
            <button onclick="deleteEvent(${event.id})">Delete</button>
        `;

        eventList.appendChild(div);
    });
}

function deleteEvent(id) {
    let events = getEvents();
    events = events.filter(event => event.id !== id);
    saveEvents(events);
    showEvents();
}

function clearEvents() {
    localStorage.removeItem("events");
    showEvents();
}

function clearInputs() {
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}
