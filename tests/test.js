var obj = window.converter.convert(5, "km", "m");
console.log("5 km to m: " + obj.converted + " " + obj.outUnit);

var obj = window.converter.convert(500, "cm", "m");
console.log("500 cm to m : " + obj.converted + " " + obj.outUnit);

var obj = window.converter.convert(500, "milimeters", "m")
console.log("500 milimeters to m : " + obj.converted + " " + obj.outUnit);

var obj = window.converter.convert(500, "milimeters", "meters");
console.log("500 milimeters to meters: " + obj.converted + " " + obj.outUnit);

var obj = window.converter.convert(500, "milimeters", "centimeters");
console.log("500 milimeters to centimeters: " + obj.converted + " " + obj.outUnit);

var obj = window.converter.convert(1, "m", "sm");
console.log("1 meter to salmon meter: " + obj.converted + " " + obj.outUnit);