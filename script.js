function sendMessage(event) {
  event.preventDefault();
  document.getElementById("successMsg").innerText =
    "Booking request sent! We'll contact you soon.";
}