var conversions = {
	"mm" : 	[
		{"toUnit" 	: "m","difference" 	: "x * 0.001", 		"base" 	: true	}
	],
	"cm" : 	[
		{"toUnit" 	: "m","difference" 	: "x * 0.01", 		"base" 	: true	}
	],
	"km" : 	[
		{"toUnit" 	: "m","difference" 	: "x * 1000", 		"base" 	: true	}
	],
	"sm" : 	[
		{"toUnit" 	: "m","difference" 	: "x * 0.71", 		"base" 	: true	}
	],
	"m" : 	[
		{"toUnit" 	: "m"	, "difference" 	: "x * 1", 		"base" 	: true	},
		{"toUnit" 	: "mm"	, "difference" 	: "x * 1000"					},
		{"toUnit" 	: "cm"	, "difference" 	: "x * 100"						},
		{"toUnit" 	: "km"	, "difference" 	: "x * 0.001"					},
		{"toUnit"	: "sm"	, "difference"	: "x / 0.71"					},
	]
};

var acronyms = {
	"milimeter" 	: "mm",
	"milimeters" 	: "mm",
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