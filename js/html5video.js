function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}
$(document).ready(function(e) {

	$("#theme li a").click(function() { 
		$("link").attr("href",$(this).attr('rel'));
		return false;
	});

	
	videoplayer = document.getElementById('vidPlayer');	
	videoplayer.addEventListener("play", function(){
		$( ".play" ).button( "option", "icons", {primary:'ui-icon-pause'} );
	},false);

videoplayer.addEventListener("pause", function(){
		$( ".play" ).button( "option", "icons", {primary:'ui-icon-play'} );
	} , false);
	
	videoplayer.addEventListener("timeupdate", function(){
		$( "#slider" ).slider( "option", "value", videoplayer.currentTime );
	secVar0 = roundNumber(videoplayer.currentTime, 0);                            // The initial data, in seconds
minVar = Math.floor(secVar0/60);  // The minutes
if(minVar > 9){
	minVar = Math.floor(secVar0/60);
	
}
else{
minVar = "0"+ Math.floor(secVar0/60);	
}
secVar = secVar0 % 60;              // The balance of seconds
if(secVar > 9){
	secVar = secVar0 % 60; 
	
}
else{
secVar = "0"+ secVar0 % 60; 
}
		$('#time').html(minVar+":"+secVar);
	}, false);
	
    $( ".play" ).button({
            icons: {
                primary: "ui-icon-play"
            },
            text: false
        })

		videoplayer.addEventListener("canplay" ,function(){
			$( "#slider" ).slider({
			max:videoplayer.duration,
		slide: function(event, ui) {videoplayer.currentTime = $( "#slider" ).slider( "option", "value" ); }
		}, false);
			
		},false)
		

		
});

function playPause(){
videoplayer = document.getElementById('vidPlayer');	
if(videoplayer.paused || videoplayer.ended){
	videoplayer.play();
}
else{
	videoplayer.pause();
}
}
