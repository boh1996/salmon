window.converter = {
	convert : function ( amount, inUnit, outUnit ) {
		var convertedInUnit = 0;

		// Translates the output unit into the correct abbrevation, makes it possible to use centimeters as output unit
		if	( typeof conversions[inUnit]  == "undefined" ) {
			if ( typeof acronyms[inUnit] != "undefined" ) {
				inUnit = acronyms[inUnit];
			} else {
				return;
			}
		}

		// Translates the input unit into the correct abbrevation, makes it possible to use meters/kilometers as input unit
		if ( typeof conversions[outUnit] == "undefined" ) {
			if ( typeof acronyms[outUnit] != "undefined" ) {
				outUnit = acronyms[outUnit];
			} else {
				console.log("No input unit found!");
				// Error : "Sorry unit not found!";
				return;
			}
		}

		// Checks if the input and output units are the same, else convert them
		if ( conversions[inUnit].toUnit == inUnit ) {
			convertedInUnit = amount;
		} else {
			var x = amount;
			convertedInUnit = eval(conversions[inUnit].difference);
		}

		return {
			"inUnit" : inUnit,
			"amount" : amount,
			"converted" : convertedInUnit,
			"outUnit" : outUnit
		};
	}
}