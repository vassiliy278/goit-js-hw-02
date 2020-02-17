

const formatString = function (string) {

	let outputString;

	for (i = 0; i < string.length; i += 1) {
		
		if (string.length > 40) {

			outputString = string.slice(0,41) + ' ...'
			
		} else if (string.length < 40) {

			outputString = string;
		}
	} 

	return outputString

}	

console.log(formatString('This is a big string and it will stops somewhere after 40'))