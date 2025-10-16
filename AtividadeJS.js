// .01
const nom = ["JP", "Eglan", "Gabriel", "Adryhan", "Caiqui"];
console.log("<- Lista de nomes ->");
nom.forEach(nom => console.log(nom));

// .02
const nums = [5, 4, 3, 2, 1];
const dobrados =  nums.map(num => num * 2);
console.log("\n<- Numeros Dobrados ->")
dobrados.forEach(num => console.log(num))

// .03
const numsImp = nums.filter(num => num % 2 !== 0);
console.log("\n<- Numeros Impares ->")
numsImp.forEach(num => console.log(num))