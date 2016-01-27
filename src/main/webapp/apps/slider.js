var Slider = {
	pos : 1,
	toggle : function(){
		
		slide_old = "#slide_"+Slider.pos;
		if(Slider.pos==5){
			Slider.pos=1;
		}
		else{
			Slider.pos=Slider.pos+1;
		}
		
		
		slide_new = "#slide_"+Slider.pos;
		
		$(slide_old).hide( "slide", { direction: "left"  }, 2000 );
		$(slide_new).show( "slide", {direction: "right" }, 2000 );
		
         
        
         
	},
	start : function(){
		setTimeout(function(){
		    Slider.start();
		}, 5000);
		
		Slider.toggle();
	}
};