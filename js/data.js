var conversions = [
	// Length
	{unit: "m", conversions: [
		{unit: 	"km", calc: "x / 1000"},
		{unit: 	"dm", calc: "x * 10"},
		{unit: 	"cm", calc: "x * 100"},
		{unit: 	"mm", calc: "x * 1000"},
		{unit: 	"in", calc: "x / 0.0254"},
		{unit: 	"ft", calc: "x / 0.3048"},
		{unit: 	"mi", calc: "x / 1.609344"},
		{unit: 	"sm", calc: "x / 0.71"}
	]},
	{unit: "km", conversions: [
		{unit: 	"m", calc: "x * 1000"}
	]},
	{unit: "dm", conversions: [
		{unit: 	"m", calc: "x / 10"}
	]},
	{unit: "cm", conversions: [
		{unit: 	"m", calc: "x / 100"}
	]},
	{unit: "mm", conversions: [
		{unit: 	"m", calc: "x / 1000"}
	]},
	{unit: "in", conversions: [
		{unit: 	"m", calc: "x * 0.0254"}
	]},
	{unit: "ft", conversions: [
		{unit: 	"m", calc: "x * 0.3048"}
	]},
	{unit: "mi", conversions: [
		{unit: 	"m", calc: "x * 1.609344"}
	]},
	{unit: "sm", conversions: [
		{unit: 	"m", calc: "x * 0.71"},
		{unit: 	"dsm", calc: "x * 10"},
		{unit: 	"csm", calc: "x * 100"},
		{unit: 	"msm", calc: "x * 1000"}
	]},
	{unit: "dsm", conversions: [
		{unit: 	"sm", calc: "x / 10"}
	]},
	{unit: "csm", conversions: [
		{unit: 	"sm", calc: "x / 100"}
	]},
	{unit: "msm", conversions: [
		{unit: 	"sm", calc: "x / 1000"}
	]},

	// Area
	{unit: "m2", conversions: [
		{unit: 	"km2", calc: "x / 1000 / 1000"},
		{unit: 	"dm2", calc: "x * 10 * 10"},
		{unit: 	"cm2", calc: "x * 100 * 100"},
		{unit: 	"mm2", calc: "x * 1000 * 1000"},
		{unit: 	"sm2", calc: "x / 0.71 / 0.71"}
	]},
	{unit: "km2", conversions: [
		{unit: 	"m2", calc: "x * 1000 * 1000"}
	]},
	{unit: "dm2", conversions: [
		{unit: 	"m2", calc: "x / 10 / 10"}
	]},
	{unit: "cm2", conversions: [
		{unit: 	"m2", calc: "x / 100 / 100"}
	]},
	{unit: "mm2", conversions: [
		{unit: 	"m2", calc: "x / 1000 / 1000"}
	]},
	{unit: "sm2", conversions: [
		{unit: 	"m2", calc: "x * 0.71 * 0.71"}
	]},

	// Volume
	{unit: "m3", conversions: [
		{unit: 	"km3", calc: "x / 1000 / 1000 / 1000"},
		{unit: 	"dm3", calc: "x * 10 * 10 * 10"},
		{unit: 	"cm3", calc: "x * 100 * 100 * 100"},
		{unit: 	"mm3", calc: "x * 1000 * 1000 * 1000"},
		{unit: 	"l", calc: "x * 1000"},
		{unit: 	"sm3", calc: "x / 0.71 / 0.71 / 0.71"}
	]},
	{unit: "km3", conversions: [
		{unit: 	"m3", calc: "x * 1000 * 1000 * 1000"}
	]},
	{unit: "dm3", conversions: [
		{unit: 	"m3", calc: "x / 10 / 10 / 10"}
	]},
	{unit: "cm3", conversions: [
		{unit: 	"m3", calc: "x / 100 / 100 / 100"}
	]},
	{unit: "mm3", conversions: [
		{unit: 	"m3", calc: "x / 1000 / 1000 / 1000"}
	]},
	{unit: "l", conversions: [
		{unit: 	"m3", calc: "x / 1000"}
	]},
	{unit: "sm3", conversions: [
		{unit: 	"m3", calc: "x * 0.71 * 0.71 * 0.71"}
	]},

	//Temperature
	{unit: "c", conversions: [
		{unit: 	"k", calc: "x + 273.15"},
		{unit: 	"f", calc: "x * 1.8 + 32"},
		{unit: 	"st", calc: "x / 12"}
	]},
	{unit: "k", conversions: [
		{unit: 	"c", calc: "x - 273.15"}
	]},
	{unit: "f", conversions: [
		{unit: 	"c", calc: "(x - 32) / 1.8"}
	]},
	{unit: "st", conversions: [
		{unit: 	"c", calc: "x * 12"}
	]},
	
	//Time
	{unit: "h", conversions: [
		{unit: 	"min", calc: "x * 60"},
		{unit: 	"s", calc: "x * 60 * 60"},
		{unit: 	"d", calc: "x / 24"},
		{unit: 	"sh", calc: "x / 10.338"},
	]},
	{unit: "min", conversions: [
		{unit: 	"h", calc: "x / 60"},
	]},
	{unit: "s", conversions: [
		{unit: 	"h", calc: "x / 60 / 60"},
	]},
	
	{unit: "sh", conversions: [
		{unit: 	"smin", calc: "x * 60"},
		{unit: 	"ss", calc: "x * 60 * 60"},
		{unit: 	"sd", calc: "x / 24"},
		{unit: 	"h", calc: "x * 10.338"},
	]},
	{unit: "smin", conversions: [
		{unit: 	"sh", calc: "x / 60"},
	]},
	{unit: "ss", conversions: [
		{unit: 	"sh", calc: "x / 60 / 60"},
	]},
	
	{unit: "d", conversions: [
		{unit: 	"h", calc: "x * 24"},
		{unit: 	"w", calc: "x / 7"},
		{unit: 	"mo", calc: "x / 30"},
		{unit: 	"y", calc: "x / 365"},
	]},
	{unit: "w", conversions: [
		{unit: 	"d", calc: "x * 7"},
	]},
	{unit: "mo", conversions: [
		{unit: 	"d", calc: "x * 30"},
	]},
	{unit: "y", conversions: [
		{unit: 	"d", calc: "x * 365"},
	]},
	
	{unit: "sd", conversions: [
		{unit: 	"sh", calc: "x * 24"},
		{unit: 	"sw", calc: "x / 7"},
		{unit: 	"smo", calc: "x / 30"},
		{unit: 	"sy", calc: "x / 365"},
	]},
	{unit: "sw", conversions: [
		{unit: 	"sd", calc: "x * 7"},
	]},
	{unit: "smo", conversions: [
		{unit: 	"sd", calc: "x * 30"},
	]},
	{unit: "sy", conversions: [
		{unit: 	"sd", calc: "x * 365"},
	]},
];

var acronyms = {
//	""				: "",
	"millimeter" 	: "mm",
	"millimeters" 	: "mm",
	"centimeter" 	: "cm",
	"centimeters" 	: "cm",
	"meter" 		: "m",
	"meters" 		: "m",
	"kilometer" 	: "km",
	"kilometers" 	: "km",
	"liter"			: "l",
	"liters"		: "l",
	"inch"			: "in",
	"inches"		: "in",
	"foot"			: "ft",
	"feet"			: "ft",
	"mile"			: "mi",
	"miles"			: "mi",
	"salmon meter" 	: "sm",
	"salmonmeter" 	: "sm",
	"salmon meters" : "sm",
	"salmonmeters" 	: "sm",
	"celcius"		: "c",
	"kelvin"		: "k",
	"fahrenheit"	: "f",
	"second"		: "s",
	"seconds"		: "s",
	"minute"		: "min",
	"minutes"		: "min",
	"hour"			: "h",
	"hours"			: "h",
	"day"			: "d",
	"days"			: "d",
	"week"			: "w",
	"weeks"			: "w",
	"month"			: "mo",
	"months"		: "mo",
	"year"			: "y",
	"years"			: "y",
	"salmonsecond"	: "ss",
	"salmonseconds"	: "ss",
	"salmon second"	: "ss",
	"salmon seconds": "ss",
	"salmonminute"	: "smin",
	"salmonminutes"	: "smin",
	"salmon minute"	: "smin",
	"salmon minutes": "smin",
	"salmonhour"	: "sh",
	"salmonhours"	: "sh",
	"salmon hour"	: "sh",
	"salmon hours"	: "sh",
	"salmonday"		: "sd",
	"salmondays"	: "sd",
	"salmon day"	: "sd",
	"salmon days"	: "sd",
	"salmonweek"	: "sw",
	"salmonweeks"	: "sw",
	"salmon week"	: "sw",
	"salmon weeks"	: "sw",
	"salmonmonth"	: "smo",
	"salmonmonths"	: "smo",
	"salmon month"	: "smo",
	"salmon months"	: "smo",
	"salmonyear"	: "sy",
	"salmonyears"	: "sy",
	"salmon year"	: "sy",
	"salmon years"	: "sy",
}