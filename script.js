document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("status").innerText = "Message sent! (Form handling not connected yet)";
    } else {
        document.getElementById("status").innerText = "Please fill in all fields.";
    }
});
