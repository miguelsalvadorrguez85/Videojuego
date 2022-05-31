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

    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
    Map[0][0]=
}






