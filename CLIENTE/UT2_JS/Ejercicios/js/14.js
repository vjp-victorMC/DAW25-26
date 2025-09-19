let str = "ab1c3de4fg";

for(let letra of str){
    if(letra >= '0' && letra <= '9'){
        console.log(letra + " es un número");
    }
    else if(/[aeiou]/i.test(letra)){
        console.log(letra + " es vocal.");
    }
    else{
        console.log(letra + " es consonante");
    }
}