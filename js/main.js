// Animate smooth scrool
$('#view-work').on('click',function(){
	const images = $('#images').postiton().top;
$('html,body').animate(

{
	scrollTop: images
},
900
);

});
