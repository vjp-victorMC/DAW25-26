let primerA = document.querySelector("#div1 a");

console.log("1) " + primerA.getAttribute("title"));


console.log("2) " + document.querySelector("div > a "))

let enlace3 = document.querySelector("#div1 > p > a");

console.log("3) " + enlace3)


console.log("4) " + document.querySelector(".linkNormal:nth-child(2)").getAttribute("href"))

// 5
console.log("5) " + document.querySelector(".linkNormal[title^=Spider]").nodeType);
console.log("5) " + document.querySelector(".linkNormal[title^=Spider]").innerHTML);

// 6

console.log("6) " + document.querySelector(".linkNormal + a[title^=Spider]"));

// 7

let arrayLinkNormal = document.querySelectorAll(".linkNormal");

// for (let i = 0; i < arrayLinkNormal.length; i++) {
//     console.log(arrayLinkNormal[i].getAttribute("title"));
// }

arrayLinkNormal.forEach(element => console.log(element.getAttribute("title")));


// 8

let enlaceSpider = document.querySelector("a[title=Spiderman]");

console.log(enlaceSpider);

let enlacesHermanos = document.querySelectorAll("a[title=Spiderman] ~ a");

enlacesHermanos.forEach(e => console.log("8) " + e.outerHTML));






