// Exercice 1
type NumberList = number[];
function average(inputArray: NumberList): number
{
  return inputArray.reduce((acc, curr) => acc + curr, 0) / inputArray.length;
}

// Exemple Exercice 1
console.log(
	'Exercice 1',
	average([1,2,3,4,5])
);



// Exercice 2npm init @eslint/config
type WordList = string[];
function stringToWords(inputString: string): WordList
{
	return inputString.split(/[\s,.]+/);
}

// Exemple Exercice 2
console.log(
	'Exercice 2',
  stringToWords('Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor.')
);



// Exercice 3
type MyTuple = [number , number, number,number, number]
function sumTuple(inputTuple: MyTuple): number
{
	return inputTuple.reduce((acc, curr) => acc + curr, 0);
}

// Exemple Exercice 3
console.log(
	'Exercice 3',
  sumTuple([1,2,3,4,5])
);



// Exercice 4
function mergeArrays(firstInputArray: NumberList, secondInputArray:  NumberList): NumberList|void
{
	
  
	let resultArray : NumberList = [];
  while (firstInputArray.length > 0) {
  	resultArray.push(firstInputArray.shift(), secondInputArray.shift())
  }
  
  return resultArray
}

// Exemple Exercice 4
console.log(
	'Exercice 4',
  mergeArrays([1,1,1,1], [2,2,2,2])
);