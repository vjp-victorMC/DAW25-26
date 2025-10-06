let primerLi = document.getElementById("primerElemento");

do{
    console.log(primerLi.nodeName+"\n");
    console.log(primerLi.textContent+"\n");
    
    primerLi=primerLi.nextElementSibling;
} while(primerLi!=null);

