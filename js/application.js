/**
 * Takes the input string from and parses it,
 * and identifies the starting amonnt and unit and the ending unit
 *
 * @todo Add a system that automaticly identifies the endUnit from the starting unit if none is deffined
 * @todo Add options to act as a normal calculator
 * @param  {string} string The user input string
 * @return {boolean|object}        False is returned if the input isn't valid, if success an object containing a fromUnit, a toUnit and the amount is returned
 */
function identifyComponents ( string ) {

	// Identify the different components, and the number of them
	var components = string.split(" ");
	var length = components.length;

	var shortComponents = shortMatch(components[0]);

	if ( shortComponents != components[0] ) {

		var concatComponents = Array();
		concatComponents.push(shortComponents[0]);
		concatComponents.push(shortComponents[1]);

		components.splice(0, 1);
		components = concatComponents.concat(components);

		var returnValue = identifyComponents(components.join(" "));

		if ( typeof shortComponents[2] !== "undefined" && returnValue !== false ) {
			returnValue.after = shortComponents[2];
		}

		return returnValue;
	}

	// The minimum number of components is 2, a amount and a starting unt
	if ( length < 2 ) return false;

	// The amount is alwayst the first component, use eval on it to alow calculations
	try {
		var amount = eval(components[0]);
	} catch ( e ) {

		return false;
	}

	// The second component is required to be a string, the starting unit
	if ( typeof components[1] !== "string" ) return false;

	// The starting unit will always be the second component
	var fromUnit = components[1];
	var toUnit;

	switch ( length ) {
		case 1:
			return false;
			break;

		case 2:
			toUnit = null;
			break;

		case 3:
			toUnit = components[2];
			break;

		case 4:
			toUnit = components[3];
			break;

		default:
			return false;
			break;
	}

	return {
		"fromUnit" 	: fromUnit,
		"toUnit" 	: toUnit,
		"amount"	: amount,
	};
}
	
/**
 * This function splits the amount(with calculations) from the unit, it alows "(2+5)m to cm" or "2.5m to cm" or "2m to cm"
 * 
 * @param  {string} string The input string to test
 * @return {string|array}        The input string or an array of components
 */
function shortMatch ( string ) {
	var matches = string.match(/([0-9+\-()^*\/.]+)([a-zA-Z]+)([0-9+\-()^*\/.]+)?/);
	
	if ( matches == null || typeof matches === "undefined" ) {
		return string;
	}

	matches.splice(0, 1);

	var returnArray = Array();

 	for ( var comp in matches ) {
 		if ( comp == "index" ) {
 			break;
 		}

 		if ( comp !== undefined && matches[comp] !== undefined ) {
 			returnArray.push(matches[comp].trim());
 		}
 	}

 	return returnArray;
}

/**
 * Processes the user input
 * 
 * @param  {string} input The users input
 */
function processInput ( input ) {
	if ( input.length == 0 ) return false; // Show Error

	var components = identifyComponents(input);

	if ( components === false ) return; // Show Error 

	var result = convert(components.fromUnit, components.toUnit, components.amount);
	console.log(result);
	if ( result === false ) return; // Show Error

	if ( typeof components.after !== "undefined" ) {
		var evalString = result.converted + components.after;
		result.converted = eval(evalString);
	}

	$(".giant-input").val(result.converted + result.outUnit);
}

$(document).ready( function () {
	$(".giant-button").click(function () {
		return processInput($(".giant-input").val());
	});

	$(".giant-input").keypress( function ( e ) {
		if ( e.which == 13 ) {
			processInput($(".giant-input").val());
		}
	});
});