$(document).ready(function(){
	generate();
});

function generate(h) {
	$('#errorMessage').empty();
	if(h===undefined){
		$('#newHue').val('');
	for (var i = 0; i < 12; i++) {
		var color = new flatColor();
		var hex = color.hex.toUpperCase();
		$('.all').append('<div id="colorBlock" class="color" style="background-color:rgb(' + color.r + "," + color.g + "," + color.b + ');"><span>' + 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')<br>' + hex + '</span></div>');
	}
}
	else{
		for (var i = 0; i < 12; i++) {
			var col = new flatColor(h);
			var hex = col.hex.toUpperCase();
			$('.all').append('<div id="colorBlock" class="color" style="background-color:rgb(' + col.r + "," + col.g + "," + col.b + ');"><span>' + 'rgb(' + col.r + ',' + col.g + ',' + col.b + ')<br>' + hex + '</span></div>');
		}
	}


}

removeAll = function() {
	$('.all').empty();
	generate();
};

document.getElementById("remove").addEventListener('click', removeAll);
document.getElementById("more").addEventListener('click', function(){
	if($('#newHue').val()==='')
		generate();
	else
		generate(parseInt($('#newHue').val(), 10));
});
document.getElementById("hueChange").addEventListener('click', function(){
	var hue = parseInt($('#newHue').val(), 10);
	if (hue && hue >= 0 && hue <= 360) {
		$('.all').empty();
		generate(hue);
	}
	else{
		$('#errorMessage').empty().append('Value must be between 0 & 360!');
		$('#newHue').val('');
	}

});

