var audio = document.getElementById("ending_audio");

if(localStorage.getItem("backpack") == "False")
{
    document.getElementById("ending_title").innerHTML = "Mad World";
    document.getElementById("ending").innerHTML = "You arrived at the class without your backpack. For your bad luck, the professor spent most of the summer playing Baldi's Basic Education and Learning. She notices you didn't bring your backpack, she asked for your homework, and you didn't have it with you. Unfortunately, you found yourself trapped in the class; Professor Hoffman had a ruler. You couldn't make it far; It appears you will not be fine for a while, you are in a coma.";
    document.getElementById("ending_type").innerHTML = "Bad Ending";
    
    document.getElementById("picture").src = "Photo/I_1_BadEnding.jpg";
} else 
{
    
    document.getElementById("ending_title").innerHTML = "Nothing Like Home";
    document.getElementById("ending").innerHTML = "You arrived at the class with your backpack; you were the only student in the class. Professor Hoffman asked you for the homework; luckily you found your backpack in the It office. You handed your homework successfully. Time passed by fast; it was already time to leave, however during the class the teacher was talking to herself the whole time. You didn't say anything to avoid any conflict. You arrived home safe; now you got a weekend to enjoy.";
    document.getElementById("ending_type").innerHTML = "Good Ending";
    
    document.getElementById("picture").src = "Photo/I_1_GoodEnding.jpg";

    audio.pause();
}