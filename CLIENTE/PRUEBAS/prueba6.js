let funcionLambda = (arg1, arg2) => {return arg1 + arg2}

console.log(funcionLambda(3,2));

let funcionProcesadoraPar = function (arg1, arg2,funcionProcesadora){
    return funcionProcesadora(arg1,arg2);
}

console.log("Esta vez procesamos una funcion (de 3 y 2):"+funcionProcesadoraPar(3,2,(n1,n2)=>{return n1+n2}));

let procesaTres = function (arg1,arg2,arg3, funcionProcesadora){
    return funcionProcesadora(arg1,arg2,arg3);
}

console.log(procesaTres(5,2,1,(n1,n2,n3)=>{return n1+n2+n3}));

console.log()