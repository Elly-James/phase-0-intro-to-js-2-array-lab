// Write your solution here!
let cats = ["Milo","Otis","Garfield"];

console.log(cats);

function destructivelyAppendCat(name1){
   cats.push(name1);
   console.log(cats);
   
}
   destructivelyAppendCat("Ralph");

   function destructivelyPrependCat(name2){
      cats.unshift(name2);
      console.log(cats);

   }
destructivelyPrependCat("Bob");

function  destructivelyRemoveLastCat(){
   cats.pop()
   console.log(cats)

}
destructivelyRemoveLastCat();

function  destructivelyRemoveFirstCat(){
   cats.shift()
   console.log(cats)
}
destructivelyRemoveFirstCat();


function  appendCat(){
   let newArray = [...cats, "Broom"];
   console.log(cats)
   return newArray

}
console.log(appendCat());

function prependCat(){

   let newArray2 = ["Arnold", ...cats];
   console.log(cats)
   return newArray2

}
console.log(prependCat());

function removeLastCat(){
   let newArray3= cats.slice(0, cats.length-1);
   console.log(cats);
   return newArray3;

}
console.log(removeLastCat());

function removeFirstCat(){
   let newArray4= cats.slice(1,3)
   console.log(cats);
   return newArray4;
}
console.log(removeFirstCat());