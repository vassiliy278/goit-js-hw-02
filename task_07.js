
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123', 56];


const isLoginValid = function(login) {

	let checking;

  	if (login.length >= 4 && login.length <= 16) {

  	checking = true

  } else(checking = false);

  return checking
};

const isLoginUnique = function(allLogins, login) {

  let checking;
  for (i = 0; i < allLogins.length; i += 1) {

  	console.log(allLogins[i]) }

  	if (login !== allLogins[i]) {

  		checking = true;

  	} else (checking = false)

  
return checking;

};

// const addLogin = function(allLogins, login) {
//   // твой код
// };

// console.log(isLoginValid('vass'));

console.log(isLoginUnique(logins, 'Poly'))













