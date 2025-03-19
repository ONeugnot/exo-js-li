function afficherProprietes(obj) {
	let e = "";
	e += obj.nom + " " + obj.age + " " + obj.ville;
	return e;
}

console.log(afficherProprietes({ nom: "Alice", age: 30, ville: "Paris" })); // 'nom: Alice, age: 30, ville: Paris'
