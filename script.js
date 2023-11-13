function submitName() {
    var name = document.getElementById("name").value;
    if (name.trim() !== "") {
        // Save the name to localStorage for the next page
        localStorage.setItem("userName", name);

        // Redirect to the Diwali wishes page
        window.location.href = "two.html";
    } else {
        alert("Please enter your name.");
    }
}