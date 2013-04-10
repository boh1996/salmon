function combine (v1, v2) {
	return v1 + "_" + v2;
}

function checkForRoute (startUnit, currentUnit, steps, calc) {
	var conversionsLength = conversions.length;
	for (var i = 0; i <= conversionsLength - 1; i++) {
		var conversion = conversions[i];
		var unit = conversion.unit;

		if (unit == currentUnit) {
			var conversionLength = conversion.conversions.length;
			for (var j = 0; j <= conversionLength - 1; j++) {
				var newSteps = steps.slice();
				var newCalc = calc.slice();
				var singleConversion = conversion.conversions[j];
				var singleConversionUnit = singleConversion.unit;
				if (startUnit !== singleConversionUnit && steps.indexOf(singleConversionUnit) == -1) {
					newSteps.push(singleConversionUnit);
					newCalc.push(singleConversion.calc);
					addToPath(combine(startUnit, singleConversionUnit), newSteps, newCalc);

					checkForRoute(startUnit, singleConversionUnit, newSteps, newCalc);
				}
			}

			break;
		}
	}
}

function addToPath (units, steps, calc) {
	if (typeof paths[units] == "undefined") {
		paths[units] = {steps: steps, calc: calc};
	} else {
		if (steps.length < paths[units].steps) {
			paths[units] = {steps: steps, calc: calc};
		}
	}
}