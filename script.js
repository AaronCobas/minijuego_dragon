alert("Te acabás de encontrar con un dragón hecho de hielo. Para derrotarlo tenés que usar una de las siguientes opciones: Ataque con espada, hechizo de fuego o hechizo de hielo")
let solucion
do{
    solucion = prompt("¿Que utilizarás para derrotarlo?").toLowerCase()
    if(!(isNaN(solucion))){
        alert("Por favor, no utilizes números")
    }
}while(!(isNaN(solucion)))
switch(solucion){
    case"ataque con espada":
    alert("Tu espada se rompió al intentar golpear al dragón. ¡Perdiste!")
    break
    case"espada":
    alert("Tu espada se rompió al intentar golpear al dragón. ¡Perdiste!")
    break
    case"hechizo de fuego":
    alert("Tu hechizo derritió completamente al dragón. ¡Ganaste!")
    break
    case"hechizo de hielo":
    alert("Tu hechizo solamente hizo más fuerte al dragón. ¡Perdiste!")
    break
    default:
        alert("Ataque no válido")
}