var character = document.getElementById("character");
var Block = document.getElementById("Block");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
character.classList.remove("animate");
    },500);
}
var checkDead = setInterval(function(){
    var characterTop =
parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var Blockleft =
parseInt(window.getComputedStyle(Block).getPropertyValue("left"));
if(Blockleft<20 && Blockleft>0 &&
    characterTop>=400){
    Block.style.animation = "none";
    Block.style.display = "none";
    alert("You Died.");
    }
},10);