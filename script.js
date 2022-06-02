
const verbs= verbsList();
const mapa = createMap();
let player ={position: [0,0]} 
let initialDescription = mapa[player.position[0]][player.position[0]].description;
document.getElementById("description").innerHTML = initialDescription;

const button = document.getElementById("do");
button.onclick = executeCommands; 
   

function splitString(orders){
    let words = orders.split(" ");
    return words;
}

function verbsList(){

    const verbs = new Map();
    verbs.set("coger");
    verbs.set("usar");
    verbs.set("ir");
    verbs.set("mirar");
    verbs.set("hablar");
    return verbs;
}   


function executeCommands(){
    let sentence = document.getElementById("commands").value;
    let order = splitString(sentence);
    let checked = verbs.has(order[0]);
    if ((!checked)){
        description.innerHTML = ("Solo puedes utilizar los verbos coger, usar, ir, mirar, hablar");
        console.log("hola");
    }
    
}

function createMap(){
    let Map = new Array(4);
    for (let i = 0; i < 10; i++){
        Map[i]= new Array(4)
    }

    Map[0][0]= {description:"Entrada de la cueva", exits:["S"]};
    Map[0][1]= {description:"Habitación de los niños. Duermen 30 niños en camas de paja. Solo uno está despierto", exits:["S"]};
    Map[0][2]= {description:"Habitación de los adultos. Duermen 10 adultos en camas de paja", exits:["S"]};
    Map[0][3]= {description:"Habitación del jefe de la tribu.", exits:[""]};
    Map[1][0]= {description:"Perchero", exits:["N", "E", "S"]};
    Map[1][1]= {description:"Pasillo 1", exits:["W", "E"]};
    Map[1][2]= {description:"Pasillo 2", exits:["W", "E"]};
    Map[1][3]= {description:"Pasillo 3", exits:["S", "W"]};
    Map[2][0]= {description:"Comedor", exits:["N", "E", "S"]};
    Map[2][1]= {description:"Sala curas", exits:["E", "S", "W"]};
    Map[2][2]= {description:"Despensa frutos", exits:["S", "W"]};
    Map[2][3]= {description:"Hoguera", exits:["N", "S"]};
    Map[3][0]= {description:"Almacén pieles", exits:["N"]};
    Map[3][1]= {description:"Sala de lanzas", exits:["N"]};
    Map[3][2]= {description:"Despensa", exits:["N"]};
    Map[3][3]= {description:"Osario", exits:["N"]};
    return Map;

}






