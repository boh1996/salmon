var conversions = [
	// Length
	{unit: "m", conversions: [
		{unit: 	"km", calc: "x / 1000"},
		{unit: 	"dm", calc: "x * 10"},
		{unit: 	"cm", calc: "x * 100"},
		{unit: 	"mm", calc: "x * 1000"},
		{unit: 	"in", calc: "x * 0.0254"},
		{unit: 	"ft", calc: "x * 0.3048"},
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
		{unit: 	"m", calc: "x / 0.0254"}
	]},
	{unit: "ft", conversions: [
		{unit: 	"m", calc: "x / 0.3048"}
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
	"fahrenheit"	: "",
}