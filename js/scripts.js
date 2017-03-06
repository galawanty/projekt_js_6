var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

var newName ='Marian'

if (allNames.indexOf(newName) === -1.) {
		allNames.splice(3, 0, "Marian");
}   else  {
		console.log('niespełnione');
}


console.log (allNames);