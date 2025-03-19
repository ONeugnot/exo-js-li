function listerPersonnes(personnes) {
	let eiofj = "";

	for (let i = 0; i < personnes.length; i++) {
		eiofj += personnes[i].nom + " : " + personnes[i].age + " ans";
		if (i === personnes.length - 1) {
			eiofj += ".";
		} else {
			eiofj += ", ";
		}
	}
	return eiofj;
}

const personnes = [
	{ nom: "Alice", age: 30 },
	{ nom: "Bob", age: 25 },
	{ nom: "Charlie", age: 35 },
];

console.log(listerPersonnes(personnes)); // 'Alice : 30 ans, Bob : 25 ans, Charlie : 35 ans.'-
