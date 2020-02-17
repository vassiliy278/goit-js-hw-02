

const calculateEngravingPrice = function(message, pricePerWord) {

	let totalPrice = message.split(' ').length * pricePerWord;

	return totalPrice;
}

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 0.2))