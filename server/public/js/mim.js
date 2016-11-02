$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};

var i = 0;
$(document).on("ready", main);

function main(){
	var control = setInterval(cambiarSlider, 3000);
}

function cambiarSlider(){
	i++;
	if(i == $("#slider img").size()){
		i = 0;
	}
	$("#slider img").hide();
	$("#slider img").eq(i).fadeIn("medium");
}