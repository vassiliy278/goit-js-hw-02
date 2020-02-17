
const itemsNumbering = function(logItems) {

	for (i = 0; i < logItems.length; i += 1) {

	console.log(`${[i+1]} - ${logItems[i]}`);
}

}

itemsNumbering([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
