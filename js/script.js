$(window).load(generate);

function generate() {
	for (var i = 0; i < 12; i++) {
		var hsv = flatColor();
		var rgb = HSVtoRGB(hsv.h, hsv.s, hsv.v);
		var temp = RGBtoHEX(rgb.r, rgb.g, rgb.b);
		var hex = temp.toUpperCase();
		$('.all').append('<div id="colorBlock" class="color" style="background-color:rgb(' + rgb.r + "," + rgb.g + "," + rgb.b + ');"><span>' + 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')<br>' + hex + '</span></div>');
	}

}

removeAll = function() {
	$('.all').empty();
	generate();
};

document.getElementById("remove").addEventListener('click', removeAll);


document.getElementById("more").addEventListener('click', generate);
document.getElementById("hueChange").addEventListener('click', generateSpecific);

function generateSpecific() {
	var hue = parseInt($('#newHue').val(), 10);
	if (hue && hue > 0) {
		$('.all').empty();
		$('.more').empty();
		for (var i = 0; i < 12; i++) {
			var hsv = flatColorfromHue(hue);
			var rgb = HSVtoRGB(hsv.h, hsv.s, hsv.v);
			var temp = RGBtoHEX(rgb.r, rgb.g, rgb.b);
			var hex = temp.toUpperCase();
			$('.all').append('<div id="colorBlock" class="color" style="background-color:rgb(' + rgb.r + "," + rgb.g + "," + rgb.b + ');"><span>' + 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')<br>' + hex + '</span></div>');
		}
	}
	$('#newHue').val('');
}