test( "Non Salmon Lengths", function() {
	// m->x
	ok( convert( 5000, "m", "km" ).converted == 5, "m->km" );
	ok( convert( 5, "m", "dm" ).converted == 50, "m->dm" );
	ok( convert( 5,	"m", "cm" ).converted == 500, "m->cm" );
	ok( convert( 5,	"m", "mm" ).converted == 5000, "m->mm" );

	// x->m
	ok( convert( 5,	"km", "m" ).converted == 5000, "km->m" );
	ok( convert( 5,	"dm", "m" ).converted == 0.5, "dm->m" );
	ok( convert( 5,	"cm", "m" ).converted == 0.05, "cm->m" );
	ok( convert( 5,	"mm", "m" ).converted == 0.005, "mm->m" );

	// x->x
	ok( convert( 5,	"km", "mm" ).converted == 5000000, "km->mm" );
	ok( convert( 50000 , "mm", "km" ).converted == 0.05, "mm->km" );
	ok( convert( 5,	"cm", "dm" ).converted == 0.5, "cm->dm" );
	ok( convert( 5,	"dm", "cm" ).converted == 50, "dm->cm" );

	// TODO: Imperial
});

test( "Non Salmon Area", function() {
	// m2->x
	ok( convert( 5000, "m2", "km2" ).converted == 0.005, "m2->km2" );
	ok( convert( 5, "m2", "dm2" ).converted == 500, "m2->dm2" );
	ok( convert( 5,	"m2", "cm2" ).converted == 50000, "m2->cm2" );
	ok( convert( 5,	"m2", "mm2" ).converted == 5000000, "m2->mm2" );

	// x->m2
	ok( convert( 5, "km2", "m2" ).converted == 5000000, "km2->m2" );
	ok( convert( 5000, "dm2", "m2" ).converted == 50, "dm2->m2" );
	ok( convert( 5000,	"cm2", "m2" ).converted == 0.5, "cm2->m2" );
	ok( convert( 5000,	"mm2", "m2" ).converted == 0.005, "mm2->m2" );

	// x->x
	ok( convert( 5,	"km2", "mm2" ).converted == 5000000000000, "km2->mm2" );
	ok( convert( 5000000000000 , "mm2", "km2" ).converted == 5, "mm2->km2" );
	ok( convert( 5000,	"cm2", "dm2" ).converted == 50, "cm2->dm2" );
	ok( convert( 5,	"dm2", "cm2" ).converted == 500, "dm2->cm2" );
});

test( "Non Salmon Volume", function() {
	// m3->x
	ok( convert( 5000, "m3", "km3" ).converted == 0.000005, "m3->km3" );
	ok( convert( 5, "m3", "dm3" ).converted == 5000, "m3->dm3" );
	ok( convert( 5,	"m3", "cm3" ).converted == 5000000, "m3->cm3" );
	ok( convert( 5,	"m3", "mm3" ).converted == 5000000000, "m3->mm3" );

	// x->m3
	ok( convert( 5, "km3", "m3" ).converted == 5000000000, "km3->m3" );
	ok( convert( 5000, "dm3", "m3" ).converted == 5, "dm3->m3" );
	ok( convert( 5000,	"cm3", "m3" ).converted == 0.005, "cm3->m3" );
	ok( convert( 5000,	"mm3", "m3" ).converted == 0.000005, "mm3->m3" );

	// x->x
	ok( convert( 5,	"km3", "mm3" ).converted == 5000000000000000000, "km3->mm3" );
	ok( convert( 5000000000000000000 , "mm3", "km3" ).converted == 5, "mm3->km3" );
	ok( convert( 5000,	"cm3", "dm3" ).converted == 5, "cm3->dm3" );
	ok( convert( 5,	"dm3", "cm3" ).converted == 5000, "dm3->cm3" );

	// TODO: Liters
});

test( "Non Salmon Temperature", function() {
	ok( convert( 20, "c", "k" ).converted == 293.15, "c->k" );
	ok( convert( 0, "k", "c" ).converted == -273.15, "k->c" );
	ok( convert( 32, "f", "c" ).converted == 0, "f->c" );
});

test( "Salmon Temperature", function() {
	ok( convert( 12, "c", "st" ).converted == 1, "c->st" );
});