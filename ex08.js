function afficherProprietes(obj) {
	let e = "";
	for (const [key, value] of Object.entries(obj)) {
		e += `${key}: ${value}` + ", ";
	}
	let delet = e.split("");
	delet.pop();
	delet.pop();
	return delet.join("");
}

console.log(afficherProprietes({ nom: "Alice", age: 30, ville: "Paris" })); // 'nom: Alice, age: 30, ville: Paris'
