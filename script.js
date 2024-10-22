window.onload = function() {
    function userStatus() {
        var visitorInput;
        var welcomeVisual = document.getElementById("welcome-pic-one");

        do {
            visitorInput = prompt("Please enter 'yes' or 'no' - Are you interested in celebrating and learning about Caroline Polachek?");
            console.log("User Input:", visitorInput); // Debugging line
        } while (visitorInput !== "yes" && visitorInput !== "no"); // Continue until valid input is given
            
        var textElements = document.querySelectorAll('p1, a, p2, p3, p');
        var head_one = document.getElementById("head");

        // Update the image based on the valid input
        if (visitorInput === "yes") {
            welcomeVisual.setAttribute("src", "images/welcome_to_art.png");
            console.log("Image set to welcome_to_art.png"); // Debugging line
        } else if (visitorInput === "no") {
            welcomeVisual.setAttribute("src", "images/Sad_Caroline.png");
            console.log("Image set to Sad_Caroline.png"); // Debugging line

            textElements.forEach(function(element) {
                element.style.display = 'none'; // Hide the text
            });
            head_one.textContent = "Sad. Hope we become acquainted soon love xx"; // Update the text
            head_one.style.display = '';

        }

    }

userStatus();
}