const lanches = document.getElementsByName('lanche')
const button = document.querySelector(`#button`)

var valorLanche = 0;
var valorFinal = 0;
 
function calcular(){
    
    lanches.forEach((lanche)=>{
    
        if(lanche.checked){    
            valorLanche = Number.parseFloat(lanche.value);
            valorFinal = valorFinal + valorLanche;
        }

    }) 
    
    alert(`O total do seu lanche deu: R$ ${valorFinal}`)
    valorFinal = 0;
}   