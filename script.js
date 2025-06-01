function getWeather() {
    document.getElementById("weatherDisplay").innerText = "Fetching weather... (API can be added here)";
  }
  
  function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let reason = document.getElementById("reason").value;
  
    if (!name || !email || !message || !reason) {
      alert("Please fill in all fields.");
      return false;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Enter a valid email.");
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }
  
  function toggleFAQ(element) {
    const content = element.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  }
  