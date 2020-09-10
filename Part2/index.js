const grabId = document.getElementById(forId);
const style = document.getElementById(forStyle);

function setCard (){
   const card = document.getElementById(forId.value);
   card.style.color = forStyle.value;
}

function resetButton(forId, forStyle){
    forId.preventDefault();
    document.getElementById(forId.value).reset();
    forStyle.preventDefault();
    document.getElementById(forStyle.value).reset();
}