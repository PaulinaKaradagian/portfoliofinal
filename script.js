
var main = function() {
  $("#inputBox").keyup(function() {
    var inputString = document.getElementById("inputBox").value;
    var words = inputString.split(" ");
    var palabras = [];
    var chinipal = "";
    for (i=0; i<words.length; i++){
      if (words[i].charAt(0).toLowerCase() == "a" || words[i].charAt(0).toLowerCase() == "e" || words[i].charAt(0).toLowerCase() == "i" || words[i].charAt(0).toLowerCase() == "o" || words[i].charAt(0).toLowerCase() == "u"){
        palabras[i] = words[i].replace(/[aeiou]/ig,'i');
      }else if (words[i] != ""){
        var cons = words[i].charAt(0);
        palabras[i] = words.[i].replace(/[aeiou]/ig,'i');
      }
    }
    for (i=0; i<words.length; i++){
      if (typeof palabras[i] != "undefined"){
     chinipal += palabras[i] + " ";
      }
    }
    if (chinipal == "") {
      chinipal = "Dijimi in piz.";
    }
    document.getElementById("chinipal").innerHTML = chinipal;
  });
}

$(document).ready(main);