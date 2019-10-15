if(localStorage.getItem("backpack") == "False")
{
    document.getElementById("objective_1").innerHTML = "Objective: Find your backpack";
    document.getElementById("objective_1").style.color = "#0033cc";
    
    document.getElementById("objective_2").innerHTML = "Optional: Go to class without the backpack";
    document.getElementById("objective_2").style.color = "#808000";
} else if(localStorage.getItem("backpack") == "True")
    {
        document.getElementById("objective_1").innerHTML = "Completed: Find your backpack";
        document.getElementById("objective_1").style.color = "#248f24";
        document.getElementById("objective_1").style.textDecoration = "line-through"

        document.getElementById("objective_2").innerHTML = "Objective: Go to class";
        document.getElementById("objective_2").style.color = "#0033cc";
    }