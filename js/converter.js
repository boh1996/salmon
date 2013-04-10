window.converter = {

	/**
	 * Converts one unit to another,
	 * if no direct conversion exists,
	 * then it converts it to a base unit,
	 * and then from the base unit to the output unit
	 * 
	 * @param  {integer} amount  The amount of inUnit to convert
	 * @param  {string} inUnit  The name or abbrevation of the unit that amount is
	 * @param  {string} outUnit The name or abbrevation of the unit to convert amount to
	 * @return {integer|boolean|object}         An object containing, inUnit, outUnit, converted and amount
	 */
	convert : function ( amount, inUnit, outUnit ) {
		var convertedInUnit = false;

		// Translates the output unit into the correct abbrevation, makes it possible to use centimeters as output unit
		if	( typeof conversions[inUnit]  == "undefined" ) {
			if ( typeof acronyms[inUnit] != "undefined" ) {
				inUnit = acronyms[inUnit];
			} else {
				return 404;
			}
		}

		// Translates the input unit into the correct abbrevation, makes it possible to use meters/kilometers as input unit
		if ( typeof conversions[outUnit] == "undefined" ) {
			if ( typeof acronyms[outUnit] != "undefined" ) {
				outUnit = acronyms[outUnit];
			} else {
				// Error : "Sorry unit not found!";
				return 404;
			}
		}

		// If a direct route exists, find it
		directConvertion = this.findObject(conversions[inUnit], function ( obj, container ) {
			return container[obj].toUnit == outUnit; 
		});

		// If no direct convertion exists, find a route
		if ( directConvertion === false ) {

			// Searches through the available units that "inUnit" can convert to, for the object that can convert "inUnit" to a base unit,
			baseObject = this.findObject(conversions[inUnit], function ( obj, container ) {
				return container[obj].base === true;
			});

			if ( baseObject === false ) return 400;

			// If the input and output units is the same
			if ( baseObject.toUnit == inUnit ) {
				convertedInUnit = amount;
			} else {
				var x = amount;
				convertedInUnit = eval(baseObject.difference);

				if ( baseObject.toUnit != outUnit ) {
					var object = this.findObject(conversions[baseObject.toUnit], function ( obj, container ) {
						return container[obj].toUnit == outUnit;
					});

					if ( object == false ) return 400;

					var x = convertedInUnit;
					convertedInUnit = eval(object.difference);
				}
			}
		} else {
			var x = amount;
			convertedInUnit = eval(directConvertion.difference);
		}

		return {
			"inUnit" : inUnit,
			"amount" : amount,
			"converted" : convertedInUnit,
			"outUnit" : outUnit
		};
	},

	/**
	 * Searches a container, 
	 * and matches each element with the callback function
	 * 
	 * @param  {object|Array}   findIn   The container to find something in
	 * @param  {Function} callback The callback function to use
	 * @return {boolean|object}
	 */
	findObject : function ( findIn, callback ) {
		if ( typeof callback !== "function" ) return false;

		for ( var obj in findIn ) {
			if ( callback(obj, findIn) === true ) {
				return findIn[obj];
			}
		};

		return false;
	},

	countProperties :function ( obj ) {
		var prop;
		var propCount = 0;

		for (prop in obj) {
			propCount++;
		}

		return propCount;
	}
}