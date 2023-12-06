let nome = document.getElementById("nome").value
let idade = document.getElementById("idade").value
let categoria
function retornarTracos(){
 nome +"\n categoria: " + categoria
}
function categorizarAluno(){
    if (idade <= 12){
categoria =  infantil;
}if (idade > 12 &&  idade < 18){
categoria = Juvenil;    
}if (idade >= 18 ){
categoria = Adulto;   
}

}