var isHue = false;

$(function(){
	generate();
	$('#hue-form').submit(function(e){
		e.preventDefault();
		isHue = true;
		$('#grid').empty();
		generate($('#hue').val());
	});
	$('#refresh').click(function(e){
		isHue = false;
		$('#grid').empty();
		generate();
	});
	$('#more').click(function(e){
		if(isHue)
			generate($('#hue').val());
		else
			generate();
	});
});

function generate(h) {
	for(var i=0; i<55; i++){
		var color = new flatColor(h);
		var hex = color.hex.toUpperCase();
		var textClass = 1 - ( 0.299 * color.r + 0.587 * color.g + 0.114 * color.b)/255 < 0.5 ? 'dark-text' : 'light-text';
		$('#grid').append('<div id="color-'+ i +'-'+hex+'" class="color colorBlock '+textClass+'" style="background-color:rgb(' + color.r + "," + color.g + "," + color.b + ');"><span>' + 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')<br>' + hex + '</span></div>');
	}
}


