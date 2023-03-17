
/**
 * Execice 1
 * @param {*} nombre
 * @returns
 */
function convertNumberToString( nombre){
    return nombre.toString();
}

console.log("Conversion d'un nombre en string :",typeof convertNumberToString(84));

/**
 * Exercice 2 -> solution 1
 */
const value = [ 1, 3, 7 , 142];
function sum(arr){
    let total=0;
    for (let num of arr) {
        total += num;
    }

    return total;
}

console.log('total solution 1 :',sum(value));

/**
 * Exercice 2 - solution 2
 * @param {*} arr
 * @returns
 */
const sum2 = (arr)=>{
    return arr.reduce((total,num)=>total+num,0);
}

console.log('total solution 2 :',sum2(value));
/**
 * Exercice 3
 * @param {*} arr
 * @returns
 */
const findmax =(arr)=>{
    return Math.max(...arr);
}

console.log('nombre le plus grand', findmax(value));

/**
 * Exercice 4
 * @param {*} chaine
 * @returns
 */
function compteVoyelles(chaine){
    const voyelles = ['a','e','i','o','u'];
    let count = 0;
    for (let char of chaine.toLowerCase()){
        voyelles.includes(char) ? count++: null;
    }

    return count;
}

console.log('exercice 4 ', compteVoyelles('Bonjour le monde'));



/**
 * Exercice 5
 * @param {*} message
 * @returns
 */
const reverseString = (message) =>{
    return message.split('').reverse().join('');
}

console.log('reverse ex 5',reverseString('hello'));






