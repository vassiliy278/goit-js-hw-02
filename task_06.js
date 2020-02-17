
let input;

const numbers = [];

let total = 0;

do {

	input = prompt('Enter numbers');

	numbers.push(Number(input));

} while (input !== null);

for (i = 0; i < numbers.length-1; i += 1) {
	
	total += numbers[i];
}

alert(`Sum of your numbers is: ${total}`)