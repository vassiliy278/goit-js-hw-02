

const findLongestWord = function (string) {

	const words = string.split(' ');

	let longestWord = words[0];

	for (i = 1; i < words.length; i += 1) {

		if (words[i].length > longestWord.length) {

			longestWord = words[i];
		}
	}
	return longestWord;

}

console.log(findLongestWord('string is one or two wordess'))