


const checkForSpam = function(message) {

	let lowerCaseMessage = message.toLowerCase();

	let words = lowerCaseMessage.split(' ');

	let danger;

	if (words.includes('spam') || words.includes('sale') || words.includes('[spam]') || words.includes('[sale]')) {

		danger = true;

	} else (danger = false)

	return danger

}	

console.log(checkForSpam('Some string will be right here but not a [SaLE] string with SPAM'))