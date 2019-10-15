if(localStorage.getItem("backpack") == "False")
{
    document.getElementById("objective_1").innerHTML = "Objetivo: Encuentra tu mochila";
    document.getElementById("objective_1").style.color = "#0033cc";
    
    document.getElementById("objective_2").innerHTML = "Opcional: Ve a clases sin la mochila";
    document.getElementById("objective_2").style.color = "#808000";
} else if(localStorage.getItem("backpack") == "True")
    {
        document.getElementById("objective_1").innerHTML = "Completado: Encuentra tu mochila";
        document.getElementById("objective_1").style.color = "#248f24";
        document.getElementById("objective_1").style.textDecoration = "line-through"

        document.getElementById("objective_2").innerHTML = "Objetivo: Ir a la clase";
        document.getElementById("objective_2").style.color = "#0033cc";
    }