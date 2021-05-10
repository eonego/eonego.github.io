var a = 0;
var b = 0;
numString = "";
function myRes(num) {
if ( num > 0 || numString != "") {
	numString = numString + num;
	document.getElementById("result").innerHTML = numString;
	}
}
function myCalc(sign) {
	a = numString;
	document.getElementById("preresult").innerHTML = numString+sign;
	document.getElementById("result").innerHTML = "";
	numString = "";
}