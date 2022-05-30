

function splitString(orders){
    let words = orders.split(" ");
    return words;
}



const button = document.getElementById("do");
button.onclick = function (){
    let sentence = document.getElementById("commands").value;
    let order = splitString(sentence);
    let checked = verbs.has (order[0]);
    if ((!checked)){
        console.log("Solo puedes utilizar los verbos coger, usar, ir, mirar, hablar")
    }
    
}



const verbs = new Map();
verbs.set("coger");
verbs.set("usar");
verbs.set("ir");
verbs.set("mirar");
verbs.set("hablar");



