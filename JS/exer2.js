function myFunction(){
    prompt('Adicione o contato')
 }  
 function adicionarItem(){
    let item = prompt("Adicionar novo contato");
    if (item == null || item == "") {
        alert("O uso do prompt foi cancelado!");
    } else {
        var itens = document.getElementById("itens");
        var option = document.createElement("option");
        option.text = item;
        itens.add(option, itens[0]);
    }

    //outro metodo

    function adicionar(){
        var nome=prompt('Nome:');
        var nome=prompt('Email:');
        var novali = document.createElement("p");
        novali.innerHTML = "Nome: "+ nome + " Email: "+ email;
        var element = document.getElementById("listctt");
        element.appendChild(novali);
    }
}
    