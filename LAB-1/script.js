// When page loads, show saved events
window.onload = loadEvents;
// ===== Function to get events from localStorage =====
function getEventsFromStorage() {
    var data = localStorage.getItem("events");
    if (data == null) {
        return [];   // if nothing saved, return empty array
    }
    return JSON.parse(data); // convert string to array
}
// ===== Function to save events to localStorage =====
function saveEventsToStorage(events) {
    var data = JSON.stringify(events); // convert array to string
    localStorage.setItem("events", data);
}
// ===== Function to add new event =====
function addEvent() {
    // Get values from input fields
    var title = document.getElementById("title").value;
    var date = document.getElementById("date").value;
    var category = document.getElementById("category").value;
    var description = document.getElementById("description").value;
    // Check if any field is empty
    if (title == "" || date == "" || description == "") {
        alert("Please fill all fields");
        return;
    }
    // Get old events
    var events = getEventsFromStorage();
    // Create event object
    var newEvent = {
        id: new Date().getTime(),
        title: title,
        date: date,
        category: category,
        description: description
    };
    // Add event to array
    events.push(newEvent);
    // Save updated array
    saveEventsToStorage(events);
    // Clear input fields
    clearInputs();
    // Show updated list
    loadEvents();
}
// ===== Function to display events on page =====
function loadEvents() {
    var eventList = document.getElementById("eventList");
    var events = getEventsFromStorage();
    eventList.innerHTML = "";
    if (events.length == 0) {
        eventList.innerHTML = "No events yet, Add your first event!";
        return;
    }
    // Loop through events and display
    for (var i = 0; i < events.length; i++) {
        var e = events[i];
        var box = "<div class='event-item'>";
        box += "<h3>" + e.title + "</h3>";
        box += "<p><b>Date:</b> " + e.date + "</p>";
        box += "<p><b>Category:</b> " + e.category + "</p>";
        box += "<p>" + e.description + "</p>";
        box += "<button onclick='deleteEvent(" + e.id + ")'>Delete</button>";
        box += "</div>";
        eventList.innerHTML += box;
    }
}
// ===== Function to delete one event =====
function deleteEvent(id) {
    var events = getEventsFromStorage();
    for (var i = 0; i < events.length; i++) {
        if (events[i].id == id) {
            events.splice(i, 1);
            break;
        }
    }
    saveEventsToStorage(events);
    loadEvents();
}
// ===== Function to clear all events =====
function clearEvents() {
    localStorage.removeItem("events");
    loadEvents();
}
// ===== Function to clear input fields =====
function clearInputs() {
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}
