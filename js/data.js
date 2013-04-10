var conversions = [
	{unit: "m", conversions: [
		{unit: 	"km", calc: "x / 1000"},
		{unit: 	"dm", calc: "x * 10"},
		{unit: 	"cm", calc: "x * 100"},
		{unit: 	"mm", calc: "x * 1000"},
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
	]}
];

var acronyms = {
	"millimeter" 	: "mm",
	"millimeters" 	: "mm",
	"centimeter" 	: "cm",
	"centimeters" 	: "cm",
	"meter" 		: "m",
	"meters" 		: "m",
	"kilometer" 	: "km",
	"kilometers" 	: "km",
	"salmon meter" 	: "sm",
	"salmonmeter" 	: "sm",
	"salmon meters" : "sm",
	"salmonmeters" 	: "sm"
}