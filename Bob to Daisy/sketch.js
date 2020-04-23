/*

Officer: 3294347
CaseNum: 202-0-58719793-3294347

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Chartreuse text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(594,638);
	textFont(letterFont);
	textSize(28);
}

function draw()
{
	background(255);

	fill(218,112,214);
//	text("hear", 405,117);
	fill(147,112,219);
//	text("voice", 9,147);
	fill(34,139,34);
//	text("and", 85,460);
	fill(0,0,128);
//	text("Bob", 9,516);
	fill(0,191,255);
//	text("the", 186,117);
	fill(255,0,255);
//	text("your", 478,117);
	fill(255,255,0);
//	text("I", 388,117);
	fill(255,140,0);
//	text("that", 322,117);
	fill(139,0,0);
//	text("were", 264,277);
	fill(165,42,42);
//	text("that", 492,370);
	fill(238,232,170);
//	text("I", 402,213);
	fill(176,224,230);
//	text("ive", 441,370);
	fill(106,90,205);
//	text("think", 82,342);
	fill(0,0,255);
//	text("music", 321,147);
//	text("my", 341,277);
	fill(153,50,204);
//	text("person", 310,370);
	fill(0,128,128);
//	text("few", 441,248);
	fill(244,164,96);
//	text("since", 162,311);
	fill(154,205,50);
//	text("harp.", 13,182);
	fill(144,238,144);
//	text("I", 563,342);
//	text("kisses,", 147,460);
	fill(75,0,130);
//	text("a", 169,84);
	fill(250,128,114);
//	text("that", 137,277);
	fill(173,255,47);
//	text("love.", 12,311);
	fill(0,255,255);
//	text("bl", 204,147);
	fill(152,251,152);
//	text("date,", 360,311);
	fill(0,128,128);
//	text("Love", 9,460);
	fill(144,238,144);
//	text("Ever", 89,311);
	fill(0,128,0);
//	text("?", 354,84);
	fill(173,216,230);
//	text("from", 280,248);
	fill(106,90,205);
//	text("I", 76,84);
	fill(147,112,219);
//	text("From", 12,213);
	fill(186,85,211);
//	text("confession", 195,84);
	fill(255,105,180);
//	text("darling,", 271,342);
	fill(220,20,60);
//	text("saw", 419,213);
	fill(127,255,0);
	text("It", 378,84);
	text("April", 451,182);
	fill(0,255,255);
//	text("the", 138,370);
	fill(205,133,63);
//	text("day", 355,182);
	fill(0,128,0);
//	text("only", 13,342);
	fill(173,255,47);
//	text("can", 458,311);
	fill(240,128,128);
//	text("that", 336,213);
	fill(123,104,238);
//	text("y,", 219,28);
//	text("in", 151,117);
//	text("lovely", 10,248);
	fill(160,82,45);
//	text("last", 300,311);
	fill(0,250,154);
//	text("are", 153,182);
//	text("al", 416,370);
	fill(139,69,19);
//	text("Dais", 157,28);
	fill(218,165,32);
//	text("eyes.", 479,342);
	fill(0,206,209);
//	text("the", 449,147);
	fill(124,252,0);
//	text("luckiest", 193,370);
//	text("ch", 138,404);
	fill(184,134,11);
//	text("May", 9,84);
//	text("the", 90,213);
	fill(165,42,42);
//	text("Oh", 15,28);
	fill(0,139,139);
//	text("s", 113,277);
	fill(138,43,226);
//	text("quiet", 241,117);
//	text("the", 149,147);
	fill(0,0,139);
//	text("of", 162,342);
	fill(135,206,250);
//	text("gr", 388,342);
//	text("one", 394,277);
	fill(65,105,225);
//	text("am", 12,117);
//	text("in", 416,182);
	fill(127,255,0);
	text("second", 13,277);
	fill(0,100,0);
//	text("x", 72,516);
	fill(218,165,32);
//	text("knew", 197,248);
	fill(0,139,139);
//	text("like", 92,147);
	fill(255,255,0);
//	text("sunny", 260,182);
//	text("is", 406,84);
//	text("of", 413,147);
	fill(240,128,128);
//	text("alone", 65,117);
	fill(152,251,152);
//	text("our", 244,311);
	fill(173,255,47);
//	text("nt", 298,213);
//	text("face,", 103,248);
	fill(65,105,225);
//	text("I", 441,311);
	fill(127,255,0);
	text("make", 93,84);
	fill(255,99,71);
//	text("true", 455,277);
	fill(0,250,154);
//	text("must", 14,370);
	fill(32,178,170);
//	text("you", 203,277);
	fill(138,43,226);
//	text("I", 523,84);
	fill(0,255,255);
//	text("mome", 210,213);
	fill(0,128,0);
//	text("your", 483,213);
	fill(219,112,147);
//	text("You", 96,182);
	fill(135,206,250);
//	text("lovely", 64,28);
	fill(233,150,122);
//	text("my", 207,182);
	fill(123,104,238);
//	text("am", 12,404);
//	text("osen.", 171,404);
	fill(72,209,204);
//	text("first", 145,213);
//	text("I", 180,248);
	fill(0,100,0);
//	text("your", 198,342);
//	text("essed", 230,147);
	fill(178,34,34);
//	text("be", 94,370);
	fill(255,165,0);
//	text("een", 418,342);
	fill(64,224,208);
//	text("those", 354,248);
	fill(219,112,147);
//	text("your", 65,404);
	fill(255,215,0);
//	text("when", 438,84);
//	text("I", 558,370);



}
