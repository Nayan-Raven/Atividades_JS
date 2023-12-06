document.getElementById("btMostrar").addEventListener("click",function(){
    let inMedicamento = document.getElementById("inMedicamento").value;
    let inPreco = document.getElementById("inPreco").value;
    if(isNaN(inPreco)) {
        alert("Apenas numeros pfv");
        return;
    }
    let promocao = (inPreco*2) - (inPreco*2*0.10);
    document.getElementById("outMedicamento").textContent="promoção do "+ inMedicamento;
    document.getElementById("outPromocao").textContent="Pegue 2 por apenas" + promocao.toFixed(2)
})






















/*modo diferente
let nome = document.getElementById("pro");
let preco =document.getElementById("pro2");

preco = math.trunc(preco.value);

let para = document.createElement(b);
let node = document.createTextNode("O medicamento "+nome.value+"leve 2 e sai por "+ preco);
para.appenChild(para);
let element = getElementById("pre")
element.appenChild(para);*/
