$(document).ready(function(){
	$("h3").click(function(){
		$(".calendar-display").toggleClass("tall");
		$(".footer").toggleClass("long");
	});
})
function doDoodle(doodleNumber) {
	$(".doodleThumbnail").removeClass("selected");
	$("#picture").attr("src", "img/doodle" + doodleNumber + ".jpg");
	$("#doodle" + doodleNumber).addClass("selected");
}
var c = 1;
function doNext() {
	var str = document.getElementById("picture").getAttribute("src");
	var n = str.match(/\d+/g);
	n = parseInt(n);
	n++;
	if (n == 366) {
		n = 1;
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"0px"});
		c = 1;
		calendar();
	}
	if (n == 32) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-600px"});
		c = 2;
		calendar();
	}
	if (n == 60) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1200px"});
		c = 3;
		calendar();
	}
	if (n == 91) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1800px"});
		c = 4;
		calendar();
	}
	if (n == 121) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-2400px"});
		c = 5;
		calendar();
	}
	if (n == 152) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3000px"});
		c = 6;
		calendar();
	}
	if (n == 182) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3600px"});
		c = 7;
		calendar();
	}
	if (n == 213) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4200px"});
		c = 8;
		calendar();
	}
	if (n == 244) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4800px"});
		c = 9;
		calendar();
	}
	if (n == 274) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-5400px"});
		c = 10;
		calendar();
	}
	if (n == 305) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6000px"});
		c = 11;
		calendar();
	}
	if (n == 335) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6600px"});
		c = 12;
		calendar();
	}
	$(".doodleThumbnail").removeClass("selected");
	$("#picture").attr("src","img/doodle" + n + ".jpg");
	$("#doodle" + n).addClass("selected");
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
	$(".doodleThumbnail").removeClass("selected");
	$("#picture").attr("src","img/doodle" + n + ".jpg");
	$("#doodle" + n).addClass("selected");
}
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