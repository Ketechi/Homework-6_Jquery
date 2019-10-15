var today = new Date();
var time = today.getHours();

//Function call
WelcomeTime(time);

// Time alert functions
function WelcomeTime(hour) {
    if (hour < 12)
        alert("Good morning")
    else if (hour >= 12 && hour < 16)
        alert("Good Afternoon")
    else if (hour >= 16 && hour < 19)
        alert("Good evening")
    else
        alert("Good night")
}