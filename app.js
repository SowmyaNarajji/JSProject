console.log("JS file loaded");


$(document).ready(function() {
	// button click function
	$('#get-pokemon').on('click', function() {

		console.log("button clicked 1");

		// AJAX call to get list of pokemon
		$.get("https://pokeapi.co/api/v2/pokemon/", function(data, status) {

			// clearing list value
			$("#poke-list").html("");

			console.log("2", status);
			console.log("3", data.results);

			// creating new array to add data result
			let resultList = data.results;
			resultList.forEach(function(element) {
				console.log("3", element.name);

				$("#poke-list").append(`<li>
						<a target="_blank" href="${element.url}" >
							${element.name}
						</a>
					</li>`);
			});

		});



		// $("#poke-list").text("<li>hi</li>");

		// let sampleArray = ["second item", "third item", "fourth item"];

		// for(let i=0; i<sampleArray.length; i++){
		// 	console.log("list value", sampleArray[i]);
		// 	$("#poke-list").append(`<li>${sampleArray[i]}</li>`);
		// }

		// sampleArray.forEach((element) => {
		// 	$("#poke-list").append(`<li>${element}</li>`);
		// });

		// sampleArray.forEach(function(element) {
		// 	$("#poke-list").append(`<li>${element}</li>`);
		// });

		// let testString = "second list item";

		//$("#poke-list").append('<li>abc</li>');
		// $("#poke-list").append(`<li>${testString}</li>`);

		// if (1) {
		// 	var hi = "hi";
		// 	let daad = "dasd";
		// 	var booleanExample = true;
		// 	var numberExample = 1;
		// 	var stringExample = "hello";
		// 	var objectExample = {
		// 		name: "Praveen"
		// 	}
		// 	var arrayExample = ["name1", "name2", "name3"];
		// 	var notDefined;
		// }
		// console.log("value of hi is ", hi);

		// console.log("value of daad is ", daad);

		// console.log("value of booleanExample is ", typeof(booleanExample));
		// console.log("value of numberExample is ", typeof(numberExample));
		// console.log("value of stringExample is ", typeof(stringExample));
		// console.log("value of objectExample is ", typeof(objectExample));
		// console.log("value of arrayExample is ", typeof(arrayExample));
		// console.log("value of notDefined is ", typeof(notDefined));

		// $.get('https://pokeapi.co/api/v2/pokemon/', function(data, status) {
		// 	console.log(status);
		// 	console.log(data);

		// // });

	});

});