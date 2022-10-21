function greetName(name = "anonymous") {
	if (name) {
		console.log(name);
	}
	console.log("HI, " + name.toUpperCase() + "!");
}

greetName(Math.random() > 0.5 ? "Josh" : "anonymous");

export const hello = "world yay";
