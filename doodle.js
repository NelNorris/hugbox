$(document).ready(function(){
	$("h3").click(function(){
		$(".calendar-display").toggleClass("tall");
		$(".footer").toggleClass("long");
	});
})
function doDoodle(doodleNumber) {
	$("#picture").attr("src", "img/doodle" + doodleNumber + ".jpg");
}
function doNext() {
	var str = document.getElementById("picture").getAttribute("src");
	var n = str.match(/\d+/g);
	n = parseInt(n);
	n++;
	if (n == 366) {
		n = 1;
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"0px"});
		$("#calendar-jan").addClass("active");
	}
	if (n == 32) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-600px"});
		$("#calendar-feb").addClass("active");
	}
	if (n == 60) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1200px"});
		$("#calendar-mar").addClass("active");
	}
	if (n == 91) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1800px"});
		$("#calendar-apr").addClass("active");
	}
	if (n == 121) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-2400px"});
		$("#calendar-may").addClass("active");
	}
	if (n == 152) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3000px"});
		$("#calendar-jun").addClass("active");
	}
	if (n == 182) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3600px"});
		$("#calendar-jul").addClass("active");
	}
	if (n == 213) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4200px"});
		$("#calendar-aug").addClass("active");
	}
	if (n == 244) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4800px"});
		$("#calendar-sep").addClass("active");
	}
	if (n == 274) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-5400px"});
		$("#calendar-oct").addClass("active");
	}
	if (n == 305) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6000px"});
		$("#calendar-nov").addClass("active");
	}
	if (n == 335) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6600px"});
		$("#calendar-dec").addClass("active");
	}
	$("#picture").attr("src","img/doodle" + n + ".jpg");
}
function doPrev() {
	var str = document.getElementById("picture").getAttribute("src");
	var n = str.match(/\d+/g);
	n = parseInt(n);
	n--;
	if (n == 0) {
		n = 365;
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6600px"});
		$("#calendar-dec").addClass("active");
	}
	if (n == 31) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"0px"});
		$("#calendar-jan").addClass("active");
	}
	if (n == 59) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-600px"});
		$("#calendar-feb").addClass("active");
	}
	if (n == 90) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1200px"});
		$("#calendar-mar").addClass("active");
	}
	if (n == 120) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1800px"});
		$("#calendar-apr").addClass("active");
	}
	if (n == 151) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-2400px"});
		$("#calendar-may").addClass("active");
	}
	if (n == 181) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3000px"});
		$("#calendar-jun").addClass("active");
	}
	if (n == 212) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3600px"});
		$("#calendar-jul").addClass("active");
	}
	if (n == 243) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4200px"});
		$("#calendar-aug").addClass("active");
	}
	if (n == 273) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4800px"});
		$("#calendar-sep").addClass("active");
	}
	if (n == 304) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-5400px"});
		$("#calendar-oct").addClass("active");
	}
	if (n == 334) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6000px"});
		$("#calendar-nov").addClass("active");
	}
	$("#picture").attr("src","img/doodle" + n + ".jpg");
}
var c = 1;
function calendar() {
	if (c==0) {
		c=1;
	}
	if (c==1) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"0px"});
		$("#calendar-jan").addClass("active");
	}
	if (c==2) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-600px"});
		$("#calendar-feb").addClass("active");
	}
	if (c==3) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1200px"});
		$("#calendar-mar").addClass("active");
	}
	if (c==4) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1800px"});
		$("#calendar-apr").addClass("active");
	}
	if (c==5) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-2400px"});
		$("#calendar-may").addClass("active");
	}
	if (c==6) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3000px"});
		$("#calendar-jun").addClass("active");
	}
	if (c==7) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3600px"});
		$("#calendar-jul").addClass("active");
	}
	if (c==8) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4200px"});
		$("#calendar-aug").addClass("active");
	}
	if (c==9) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4800px"});
		$("#calendar-sep").addClass("active");
	}
	if (c==10) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-5400px"});
		$("#calendar-oct").addClass("active");
	}
	if (c==11) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6000px"});
		$("#calendar-nov").addClass("active");
	}
	if (c==12) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6600px"});
		$("#calendar-dec").addClass("active");
	}
}
function calendarNav(monthId) {
	c = monthId;
	calendar();
}
function calendarPrev() {
	c--;
	if (c==0) {
		c = 12;
	}
	calendar();
}
function calendarNext() {
	c++;
	if (c==13) {
		c = 1;
	}
	calendar();
}