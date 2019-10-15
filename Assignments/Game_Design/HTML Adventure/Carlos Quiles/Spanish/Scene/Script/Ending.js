var audio = document.getElementById("ending_audio");

if(localStorage.getItem("backpack") == "False")
{
    document.getElementById("ending_title").innerHTML = "Mundo Maldito";
    document.getElementById("ending").innerHTML = "Has llegado a la clase sin la mochila. Para tu mala suerte la profesora paso la mayoría del verano jugando Baldi's Basic Education and Learning. Ella se da cuenta que no traes tu mochila, te pregunta sobre la asignatura pero no la tienes contigo. Desafortunadamente te encuentras atrapado en la clase; la profesora Hoffman tenia una regla. No pudiste llegar muy lejos; Tal parece que no estarás bien por un tiempo, estas en coma.";
    
    document.getElementById("ending_type").innerHTML = "Mal Final";
    
    document.getElementById("picture").src = "Photo/I_1_BadEnding.jpg";
} else 
{
    
    document.getElementById("ending_title").innerHTML = "Nada Como el Hogar";
    document.getElementById("ending").innerHTML = "Has llegado a tu clase con tu mochila; eras el único estudiante en la clase. La profesora Hoffman te pregunto sobre la tarea; por suerte encontraste tu mochila en la oficina de IT. Le entregaste tu asignatura. las horas pasan rápidamente; ya era hora de irse, durante la clase la maestra hablaba con ella misma todo el tiempo. No dijiste nada para evitar cualquier conflicto. Has llegado a tu casa salvo; Ahora tienes fin de semana para disfrutar.";
    
    document.getElementById("ending_type").innerHTML = "Buen Final";
    
    document.getElementById("picture").src = "Photo/I_1_GoodEnding.jpg";

    audio.pause();
}