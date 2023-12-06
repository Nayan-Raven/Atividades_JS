function exibirNotas(){
let saque=document.getElementById("saque").value;
console.log(saque);

    let qnt100=saque/100;
    qnt100=Math.trunc(qnt100);
    console.log(qnt100);
    let rest = saque%100;
    console.log(rest);

    let qnt50=saque/50;
    qnt50=Math.trunc(qnt50);
    console.log(qnt50);
    let rest1 = saque%50;
    console.log(rest1);

    let qnt10=saque/10;
    qnt10=Math.trunc(qnt10);
    console.log(qnt10);
    let rest2 = saque%10;
    console.log(rest2);

    if(qnt100 >= 0){
        document.write(rest+" notas de R$ 100 --")
    } if(qnt50 >= 0){
        document.write(rest1+" notas de R$ 50 -- ")
    } if(qnt50 >= 0){
        document.write(rest2+" notas de R$ 10")
    }

}


