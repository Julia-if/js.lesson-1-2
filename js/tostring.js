//=====STRING====//

//число до рядка
let value = 0;

//1-й спосіб
let toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип даних ${value}, через конструктор String():`, typeof toString);

//2-й спосіб
toString = value + "";
console.log(`${value}, через +"":`, toString);
console.log(`тип даних ${value}, через +"":`, typeof toString);

value = 1;

toString = String(value);
console.log(`${value}, String()`, toString);
console.log(`${value}, String()`, typeof toString);

toString = value + "";
console.log(`${value},+""`, toString);
console.log(`${value},+"`, typeof toString);

value = Infinity;

toString = String(value);
console.log(`${value}, String()`, toString);
console.log(`${value}, String()`, typeof toString);

toString = value + "";
console.log(`${value},+""`, toString);
console.log(`${value},+"`, typeof toString);

value = NaN;

toString = String(value);
console.log(`${value}, String()`, toString);
console.log(`${value}, String()`, typeof toString);

toString = value + "";
console.log(`${value},+""`, toString);
console.log(`${value},+"`, typeof toString);

value = true;

toString = String(value);
console.log(`${value}, String()`, toString);
console.log(`${value}, String()`, typeof toString);

toString = value + "";
console.log(`${value},+""`, toString);
console.log(`${value},+"`, typeof toString);

value = false;

toString = String(value);
console.log(`${value}, String()`, toString);
console.log(`${value}, String()`, typeof toString);

toString = value + "";
console.log(`${value},+""`, toString);
console.log(`${value},+"`, typeof toString);

value = undefined;

toString = String(value);
console.log(`${value}, String()`, toString);
console.log(`${value}, String()`, typeof toString);

toString = value + "";
console.log(`${value},+""`, toString);
console.log(`${value},+"`, typeof toString);

value = null;

toString = String(value);
console.log(`${value}, String()`, toString);
console.log(`${value}, String()`, typeof toString);

toString = value + "";
console.log(`${value},+""`, toString);
console.log(`${value},+"`, typeof toString);