if(localStorage.getItem("Hoffman") == "Neutral")
{
    document.getElementById("IT").innerHTML = "Has entrado las oficinas de IT help desk y para tu sorpresa as encontrado tu mochila exactamente donde la dejaste ayer. Ahora estas listo para la clase.";

    var backpack = "True";
    localStorage.setItem("backpack", backpack);

    document.getElementById("audio").play();
    
    document.getElementById("picture").src = "Photo/I_2.jpg";
} else
{

    document.getElementById("IT").innerHTML = "Ya as recogido tu mochila, extrañamente no hay nadie en el departamento de IT hoy, pero la puerta esta abierta. me pregunto ¿donde estará todo el mundo?";
    
    document.getElementById("picture").src = "Photo/I_2_Empty.jpg";
}