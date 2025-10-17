const szam = 12; // globális
valami1(); // hoisting
valami2();
valami3();
const a = valami4(6);
console.log(a);
 
/**
 * Ez a függvény nem jó semmire.
 * @return {void}
*/
function valami1() {
    console.log("Lorem ipsum dolor sit amet")
};
 
/**
 * Ez a függvény jó valamire (amúgy nem).
 * @return {void}
*/
function valami2() {
    console.log(szam); // kiírja a globális változót
};
 
/**
 * Ez a függvény kiír egy számot.
 * @returns {void}
*/
function valami3() {
    const megegyszam = 67;
    console.log(megegyszam);
};
 
/**
 * Hozzáad a számhoz 45-öt.
 * @param {number} param
 * @returns {number}
*/
function valami4(param) {
    const szamocska = 45;
    const osszeg = param + szamocska;
    return osszeg;
};