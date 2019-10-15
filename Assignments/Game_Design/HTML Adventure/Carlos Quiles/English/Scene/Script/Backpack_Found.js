if(localStorage.getItem("Hoffman") == "Neutral")
{
    document.getElementById("IT").innerHTML = "You entered the IT help desk office, and to your surprise, you found your backpack exactly where you left it yesterday. Now you're ready for class.";

    var backpack = "True";
    localStorage.setItem("backpack", backpack);

    document.getElementById("audio").play();
    
    document.getElementById("picture").src = "Photo/I_2.jpg";
} else
{

    document.getElementById("IT").innerHTML = "You already pick your backpack, strange enough there is no one on the department today, but the door is open. I wonder, where is everyone today?";
    
    document.getElementById("picture").src = "Photo/I_2_Empty.jpg";
}