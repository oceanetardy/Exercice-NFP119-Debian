/* Exercice 1: Calculer la moyenne d'un tableau de nombres */
type ListNumber = number[]
const average = (numbers: ListNumber): number => numbers.reduce((a, b) => a + b / numbers.length)

console.log(average([1, 2, 3, 4, 5]))


/* Exercice 2:  Transformer une chaîne de caractères en un tableau de mots */
const stringToWords = (str: string): string[] => str.split(' ')

console.log(stringToWords('Digital Nomad in Asia'))



/* Exercice 4: Fusionner deux tableaux de même taille */
const mergeArray = <T extends number | string>(arr1: T[], arr2: T[]): any => arr1.map((a, i) => [a, arr2[i]])

console.log(mergeArray([1, 2, 3, 4], [5, 6, 7, 8]))


const mergeArray2 = <T extends number | string>(arr1: T[], arr2: T[]): T[] => {
    return arr1.reduce((acc: T[], current, index) => [...acc, current, arr2[index]], [])
}

console.log(mergeArray2([1, 2, 3, 4], [5, 6, 7, 8]))

console.log(mergeArray2(['a', 'b', 'c', 'd'], ['z', 'y', 'x', 'w']))