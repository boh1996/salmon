
test( "Non Salmon Length", function() {
	ok( convert( 5000, "m", "km" ).converted == 5, "m->km" );
	ok( convert( 5, "m", "dm" ).converted == 50, "m->dm" );
	ok( convert( 5,	"m", "cm" ).converted == 500, "m->cm" );
	ok( convert( 5,	"m", "mm" ).converted == 5000, "m->mm" );
	ok( convert( 5,	"km", "m" ).converted == 5000, "km->m" );
	ok( convert( 5,	"dm", "m" ).converted == 0.5, "dm->m" );
	ok( convert( 5,	"cm", "m" ).converted == 0.05, "cm->m" );
	ok( convert( 5,	"mm", "m" ).converted == 0.005, "mm->m" );
});


/*
var obj;
obj = convert(5, "km", "m");
console.log("5 km to m: " + obj.converted + " " + obj.outUnit);

obj = convert(500, "cm", "m");
console.log("500 cm to m : " + obj.converted + " " + obj.outUnit);

obj = convert(500, "millimeters", "m");
console.log("500 millimeters to m : " + obj.converted + " " + obj.outUnit);

obj = convert(500, "millimeters", "meters");
console.log("500 millimeters to meters: " + obj.converted + " " + obj.outUnit);

obj = convert(500, "millimeters", "centimeters");
console.log("500 millimeters to centimeters: " + obj.converted + " " + obj.outUnit);

obj = convert(1, "m", "sm");
console.log("1 meter to salmon meter: " + obj.converted + " " + obj.outUnit);
*/