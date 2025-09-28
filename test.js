/ ================= Level 1: if / else =================


// 1. შექმენი age ცვლადი. თუ >= 18, დაბეჭდე "სრულწლოვანი", თუ არა – "არასრულწლოვანი".

let age = 18;

if (age >= 18){
    console.log("სრულწლოვანი");
}

else {
    console.log("არასრულწლოვანი");

}
// 2. შექმენი რიცხვი. შეამოწმე ლუწია თუ კენტი.

let number = 10;

if (number % 2 === 0){
    console.log("ლუწი");
}
else {
    console.log("კენტი");
}

// 3. შექმენი ცვლადი grade. თუ >= 90 → "A", >= 80 → "B", >= 70 → "C", სხვა შემთხვევაში "F".

let grade = 90;

if (grade >= 90){
    console.log("A");
}
else if (grade >= 80){
    console.log("B");
}

else if (grade >= 70){
    console.log("C");
}

else {console.log("F");

}

// 4. შექმენი ცვლადი password. თუ password == "1234" დაბეჭდე "Welcome", თუ არა → "Wrong password".

let password = 1234;

if(password === 1234){
    console.log("Welcome")
}

else {
    console.log("Wrong password");
}

// 5. შეამოწმე რიცხვი დადებითია, უარყოფითი თუ ნულოვანი.

let num = 10;

if(num > 0){
    console.log("დადებითი");
}

else if (num < 0) {
    console.log("უარყოფითი");
}

else {
    console.log("ნულოვანი");
}

// 6. შექმენი ორი რიცხვი და შეადარე. console.log()-ში დაბეჭდე რომელი უფრო დიდია, ან ტოლია.

let numberOne = 10;
let numberTwo = 20;

if(numberOne > numberTwo){
    console.log("პირველი რიცხვი დიდია");
}

else if(numberOne < numberTwo){
    console.log("მეორე რიცხვი ნაკლება");
}

else{
    console.log("ტოლია");
}


// 7. შექმენი ცვლადი temperature. თუ < 0 → "ყინვაა", თუ < 20 → "გრილია", სხვა შემთხვევაში → "თბილია".

let temperature = 20;

if(temperature < 0 ){
    console.log("ყინვაა");

}

else if(temperature < 20){
    console.log("გრილია");
}

else{
    console.log("თბილია");
}


// ================= Level 2: switch =================

// 8. შექმენი ცვლადი day = "monday". გამოიყენე switch-case და დაბეჭდე რომელი დღეა.

let day = "Monday";

switch (day){
    case "Monday":
        console.log("Day off");
        break;
        case "Sunday":
            console.log("Day off");
            break;
            case "Week-End":
            console.log ("Sleep");
            break;

}
// 9. იგივე გააკეთე რიცხვებით: 1 → "ორშაბათი", 2 → "სამშაბათი"... 7 → "კვირა".


let nummb = 4;

switch (nummb) {
    case 1:
        console.log ("ორშაბათი");
        break;
    case 2:
            console.log ("სამშაბათი");
        break;
    case 3:
            console.log ("ოთხშაბათი");
        break
    case 4:
            console.log("ხუთშაბათი");
            break;
             case 5:
        console.log("პარასკევი");
        break;
    case 6:
        console.log("შაბათი");
        break;
    case 7:
        console.log("კვირა");
        break;
        
        default: console.log ("კვირაში მეტი დღე აღარ არის");

}

// 10. შექმენი ცვლადი color. switch-case-ით დაბეჭდე: "red" → "Stop", "yellow" → "Wait", "green" → "Go".

let color = "red";

switch (color){
    case "red":
        console.log ("Stop")
        break;
    case "yellow":
        console.log("Wait");
        break;
     case "green":
        console.log("Go");
        break;   
}

// 11. შექმენი ცვლადი fruit. თუ "apple" → "ვაშლი", "banana" → "ბანანი", "kiwi" → "კივი". default → "უცნობია".

let fruit = "apple";

switch (fruit){
    case "apple":
        console.log ("ვაშლი")
        break;
     case "banana":
        console.log ("ბანანი");
        break;
        case "kiwi":
            console.log("კივი");
            break;

            default: console.log('უცნობია');
}

// 12. შექმენი ცვლადი score (0–5). switch-case-ით დაბეჭდე შეფასება (მაგ. 5 → "ძალიან კარგი").

let score = 5;

switch (score){
    case 5:
        console.log("ძალიან კარგი");
        break;

           case 4:
        console.log("კარგი");
        break;

           case 3:
        console.log("არაუშავს");
        break;

           case 2:
        console.log("ცუდი");
        break;
           case 1:
        console.log("ძალიან ცუდი");
        break;

           case 0:
        console.log("კატასტროფა");
        break;
}

/ ================= Level 3: for loop =================

// 13. for loop-ით დაბეჭდე რიცხვები 1-დან 10-მდე.

for (let i = 1; i <= 10; i++) {

    console.log(i);
}


// 14. დაბეჭდე მხოლოდ ლუწი რიცხვები 1-დან 20-მდე.

for (let i = 2; i <= 20; i+=2){
    console.log(i);

}

// 15. დაბეჭდე 10-ის ჯერადი რიცხვები 1-დან 100-მდე.

for (let i = 10; i <= 100; i+=10){
    console.log(i);

}

// 16. გამოთვალე 1–10 რიცხვების ჯამი for loop-ით.

let sum = 0;

for (let i = 1; i <= 10; i++ ){

    sum += i;
}
 console.log(sum);

// 17. გამოთვალე 1–5 რიცხვების ნამრავლი for loop-ით.


let result = 1;

for (let i = 1; i <= 5; i++){

    result *= i;
}

console.log(result);

// 18. შექმენი მასივი fruits = ["apple","banana","kiwi"]. for loop-ით დაბეჭდე ყველა.

let fruits = ["apple", "banana", "kiwi"];

for (let i = 0; i < fruits.length; i++ ){

    console.log(fruits[i]);
}


// 19. შექმენი მასივი numbers = [1,2,3,4,5]. for loop-ით გამოთვალე ელემენტების ჯამი.

let numbers = [1,2,3,4,5];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {

    sum += numbers [i];
}

console.log (sum);


// 20. შექმენი მასივი names. for loop-ით დაბეჭდე "Hello, name" თითოეულისთვის.

let names = ["Sako", "Ako", "Marko"];

for (let i = 0; i < names.length; i++) {

    console.log ("Hello", "" + names [i]);
}

// 21. 5-დან 1-მდე რიცხვების დაბეჭდვა for loop-ით.

for (let i = 5; i >= 1; i--){

    console.log(i);
}

// 22. შექმენი მასივი prices და თითოეულს დაამატე 10%. დაბეჭდე ახალი ფასები.

for (let i = 0; i < prices.length; i++) {

    let newPrice = prices[i] * 1.1;
    
    console.log(newPrice);
}

// ================= Level 4: while loop =================

// 23. while loop-ით დაბეჭდე რიცხვები 1-დან 5-მდე.

let i = 1;

while ( i <= 5){
    console.log(i);
    i++;

}


// 24. while loop-ით დაბეჭდე 10-დან 1-მდე.

let i = 10;

while (i >= 1 ){
    console.log(i);
    i--;
}

// 25. while loop-ით დაითვალე ჯამი 1–5.

let i = 1;

let sum = 0;

while (i<=5) {
    sum = sum + i;
    i++
    
}
console.log(sum);


// 26. while loop-ით დაბეჭდე მხოლოდ ლუწი რიცხვები 1–10.

let i = 2;

while (i <= 10) {
console.log(i);

    i+=2;
}



// 27. შექმენი ცვლადი secret = 7. while loop-ით „იმუშავე“ სანამ guess != 7.

let secret = 7;

guess = 10;

while() 
//  27-ეეეე ვერ მიხვდი)))))))))))))))))))))))))))))))))))))))))))))))))))


// 28. while loop-ით გამოთვალე ნამრავლი 1–5.

let i = 1;

let result = 1;

while (i<=5) {
    result = result * i;
    i++;
    
}
console.log(result);



// 29. შექმენი counter = 0. while loop-ით გაზარდე 10-მდე და console.log() ყოველი ნაბიჯი.

let counter = 0;

while (counter <= 10){
    console.log(counter);
    counter++;
}

// ================= Level 5: for...of =================

// 30. შექმენი fruits მასივი და for...of-ით დაბეჭდე თითოეული.

let fruits = ["banana", "kiwi", "apple"];

for (let fruit of fruits){

    console.log(fruits);
}


// 31. შექმენი numbers მასივი და for...of-ით დაბეჭდე მათი კვადრატები.

let numbers = [2, 3, 4];

for (let number of numbers ){

    console.log(number * number);

}


// 32. შექმენი names მასივი და for...of-ით დაბეჭდე "Hello, name" თითოეულისთვის.

let names = ["Sali", "Salo", "Salome"];

for (let name of names){

    console.log ("Hello", name);
}


// 33. შექმენი colors მასივი და for...of-ით console.log() თითოეული ფერი დიდი ასოებით.

let colors = ["Pink", "Blue", "Brown"];

for (let color of colors){

    console.log(color.toUpperCase());
}


// 34. შექმენი რიცხვების მასივი და for...of-ით იპოვე ჯამი.

let numeros = [1, 2, 3, 4, 5];

let sum = 0;

for ( let numero of numeros){
    sum += numero;

    console.log(sum);
}

// ================= Level 6: for...in =================

// 35. შექმენი person ობიექტი (name, age, city). for...in-ით დაბეჭდე ყველა key.

let person = {
    name: "Ako",
    age: 31,
    city: "Tbilisi",
}

for (let key in person){
    console.log(key);
    console.log(person[key]);
}




// 36. იგივე ობიექტში დაბეჭდე key და value ერთად (მაგ: name: "aniko").

let person = {
    name: "Ako",
    age: 31,
    city: "Tbilisi",
}

for (let key in person){
    console.log(key + ":" + person[key]);

}



// 37. შექმენი car ობიექტი და for...in-ით გამოიტანე ყველა მნიშვნელობა.

let car = {

    model: "Fiat",
    year: 2017,
    color: "white",
}

for (let key in car){

    console.log (car[key]);
}

// 38. შექმენი scores ობიექტი (student → ქულა). for...in-ით დაბეჭდე სტუდენტი და ქულა.

let score = {

    Alex: 90,
    Ani: 99,
    Nini: 100,
}

for (let key in score) {

console.log(key)
  console.log(score[key]);

    console.log(key + ":" + score[key]);
  
}


// 39. შექმენი settings ობიექტი (volume, theme, language). for...in-ით დაბეჭდე ყველა პარამეტრი.

settings = {

    volume: "high",
    theme: "dark",
    language: "French"
}


for ( let key in settings ){

    console.log (settings[key]);
}

