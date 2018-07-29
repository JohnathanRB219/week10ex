 // Create three objects with four properties (one must be an image file path) using object literal notation.
var person1 = {
firstName:"first", 
lastName: "last", 
image:"img/bwn.png", 
eyeColor: "brown",
random: function() {
	return this.first * this.last
	}
}





var person2 = {
firstName:"boom", 
lastName: "lalala", 
image:"img/hzl.png", 
eyeColor: "hazel",
random: function() {
	return this.first * this.last
	}
}




var person3 = {
firstName:"L", 
lastName: "seven",
image:"img/grn.png", 
eyeColor: "green",
random: function() {
	return this.first * this.last
	}
}


// logging all person display in console 
console.log(person1,person2,person3);
console.log(person1.random(),person2.random(),person3.random())


// Create the same three objects, with the same four properties, using constructor notation.

function person(first,last,image,eye) {
	

	this.firstName = first;
	this.lastName = last;
	this.image = image;
	this.eyeColor = eye;
	this.random = function() {
		// add to constructor notation, create a method that multiples two numbers and returns the product
		return this.first * this.last;
	}
}
var conperson1 = new person("first","last","img/bwn.png","brown");
var conperson2 = new person("boom","lalala","img/hzl.png","hazel");
var conperson3 = new person("L","seven","img/grn.png","green");

console.log(conperson1,conperson2,conperson3);

var personArray = [conperson1,conperson2,conperson3];


console.log(personArray);

// Loop through the array of objects. Create an element for each property so you have a place to display each piece of information.


for (var i = 0; i < personArray.length; i++) {
	var NewDiv = document.createElement("div");
	var NewH1 = document.createElement("h1");
	var NewH2 = document.createElement("h2");
	var NewImg = document.createElement("img");
	var NewP = document.createElement("p");


	console.log(NewDiv,NewH1,NewH2,NewImg,NewP);

// Still in the loop, create text nodes for each piece of content
	var NewH1Text = document.createTextNode(personArray[i].firstName);
	var NewH2Text = document.createTextNode(personArray[i].lastName);
	var NewPText = document.createTextNode(personArray[i].eyeColor);


	console.log(NewH1Text,NewH2Text,NewPText);


	// adding them to the elments i created
	NewH1.appendChild(NewH1Text);
	NewH2.appendChild(NewH2Text);
	NewP.appendChild(NewPText);



	// Still in the loop, update the source and alt attributes of the image.

	NewImg.src = personArray[i].image;
	NewImg.alt = personArray[i].firstName + " " + personArray[i].lastName;



// appending all the created elements to the div i created
	NewDiv.appendChild(NewH1);
	NewDiv.appendChild(NewH2);
	NewDiv.appendChild(NewP);
	NewDiv.appendChild(NewImg);



	// appending all info in NewDIv to display in the container and display on the DOM

	document.getElementsByClassName("container")[0].appendChild(NewDiv);
}