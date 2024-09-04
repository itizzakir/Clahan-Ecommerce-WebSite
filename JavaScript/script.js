document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    if (validateEmail(email)) {
        alert("Thank you for subscribing!");
        // Perform the subscription logic here
    } else {
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
