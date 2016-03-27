MenuBar = {
		
		isCollapsed : true,
				
		
		barToggle : function(){
			
			if(this.isCollapsed)
			{
				$('#menubar').show('slow');
				$('#menubar td a').animate({width: '14em'}, 'slow',function(){
					
				
				});
				
				
				
				this.isCollapsed = false;
				$('#detail_tab').removeClass('glyphicon-circle-arrow-right').addClass('glyphicon-circle-arrow-left');
				
				
				/*$('#menubar').show();
				$('.collapsable').animate({width: '14em'}, 'slow',function(){
					$('.downicons').show();
				});
				this.isCollapsed = false;
				$('#detail_tab').removeClass('glyphicon-circle-arrow-right').addClass('glyphicon-circle-arrow-left');*/
				
				//$('#detail_tab').attr('src', 'img/mv-left.jpg');
			}
			else{
								
				$('#menubar td a').animate({width: '0em'}, 'slow',function(){
					$('#menubar').hide();
				});
				this.isCollapsed = true;
				$('#detail_tab').removeClass('glyphicon-circle-arrow-left').addClass('glyphicon-circle-arrow-right');
				/*$('.downicons').hide();
				$('.collapsable').animate({width: '1em'}, 'slow');
				this.isCollapsed = true;
				//$('#detail_tab').attr('src', 'img/mv-right.jpg');
				$('#detail_tab').removeClass('glyphicon-circle-arrow-left').addClass('glyphicon-circle-arrow-right');*/
			}			
		}
				
};
