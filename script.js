console.log("perro");
const game = actions();
const mapa = createMap();
let player ={position: [0,0]} 

const button = document.getElementById("do");
button.onclick = executeCommands(); 
   

function splitString(orders){
    let words = orders.split(" ");
    return words;
}

function actions(){

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
    let checked = verbs.has (order[0]);
    if ((!checked)){
        description.innerHTML = ("Solo puedes utilizar los verbos coger, usar, ir, mirar, hablar");
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
    Map[1][0]= {description:"Percher", exits:["N", "E", "S"]};
    Map[1][1]= {description:"", exits:["W", "E"]};
    Map[1][2]= {description:"", exits:["W", "E"]};
    Map[1][3]= {description:"", exits:["S", "W"]};
    Map[2][0]= {description:"", exits:["N", "E", "S"]};
    Map[2][1]= {description:"", exits:["E", "S", "W"]};
    Map[2][2]= {description:"", exits:["S", "W"]};
    Map[2][3]= {description:"", exits:["N", "S"]};
    Map[3][0]= {description:"", exits:["N"]};
    Map[3][1]= {description:"", exits:["N"]};
    Map[3][2]= {description:"", exits:["N"]};
    Map[3][3]= {description:"", exits:["N"]};

}






