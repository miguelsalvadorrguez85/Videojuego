

var sentence = document.getElementById("commands").value;
function splitString(sentence){
    var words = sentence.split(" ");
    console.log(words[0]);
    console.log(words[1]);
}

const button = document.getElementById("do");
button.onclick = function (){
    splitString(sentence);
} 
