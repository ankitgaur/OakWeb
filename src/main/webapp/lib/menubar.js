MenuBar = {
		
		isCollapsed : true,
		
		rfiCollapsed : true,
		
		jobsCollapsed : true,
		
		adminCollapsed : true,
		
		outageCollapsed : true,
		
		rfiToggle : function(){
			$('.rfi_child').slideToggle("slow");
			
			if(this.rfiCollapsed){
				$('#rfiDown').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
				this.rfiCollapsed = false;
			}
			else{				
				$('#rfiDown').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
				this.rfiCollapsed = true;
			}
		},
		
		jobsToggle : function(){
			$('.jobs_child').slideToggle("slow");
			
			if(this.jobsCollapsed){
				$('#jobsDown').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
				this.jobsCollapsed = false;
			}
			else{				
				$('#jobsDown').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
				this.jobsCollapsed = true;
			}
		},
		
		adminToggle : function(){
			$('.admin_child').slideToggle("slow");
			
			if(this.adminCollapsed){
				$('#adminDown').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
				this.adminCollapsed = false;
			}
			else{				
				$('#adminDown').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
				this.adminCollapsed = true;
			}
		},
		
		outageToggle : function(){
			$('.outage_child').slideToggle("slow");
			
			if(this.outageCollapsed){
				$('#outageDown').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
				this.outageCollapsed = false;
			}
			else{
				$('#outageDown').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
				this.outageCollapsed = true;
			}
		},
		
		barToggle : function(){
			
			if(this.isCollapsed)
			{
				
				$('.collapsable').animate({width: '14em'}, 'slow',function(){
					$('.downicons').show();
				});
				this.isCollapsed = false;
				$('#detail_tab').removeClass('glyphicon-circle-arrow-right').addClass('glyphicon-circle-arrow-left');
				
				//$('#detail_tab').attr('src', 'img/mv-left.jpg');
			}
			else{
				$('.downicons').hide();
				$('.collapsable').animate({width: '1em'}, 'slow');
				this.isCollapsed = true;
				//$('#detail_tab').attr('src', 'img/mv-right.jpg');
				$('#detail_tab').removeClass('glyphicon-circle-arrow-left').addClass('glyphicon-circle-arrow-right');
			}			
		},
		
		setBarWidth : function(){
			$('.collapsable').animate({width: '14em'}, 'fast');
			$('.downicons').show();
		},
		
		//shifted the html code to index.html
		//when application is loaded we remove those menu items 
		//for which the user does not have a role
		createMenu : function(roles){
			
			//Admin Section Starts
			
			if($.inArray('ADMIN', roles) > -1){
				
				$('#admin, #vmom_main, #sd_main, #rfi, #jobs, #outage').show();
				return;
			}	
			
			//Admin Section Ends
			
			//RFI Section starts
			var rfi = false;
			if($.inArray('RFI_TEST_ACCOUNTS_READ', roles) > -1){
				$('#rfi').show();
				rfi = true;
			}
			else{
				$('#rfi_test').remove();				
			}
						
			if($.inArray('RFI_FULFILLMENT_HOUSES_READ', roles) > -1){
				$('#rfi').show();
				rfi = true;				
			}
			else{
				$('#rfi_houses').remove();
			}
			
			if($.inArray('RFI_ITEM_TYPES_READ', roles) > -1){
				$('#rfi').show();
				rfi = true;				
			}
			else{
				$('#rfi_types').remove();
			}

			if($.inArray('RFI_ITEM_READ', roles) > -1){
				$('#rfi').show();
				rfi = true;				
			}
			else{
				$('#rfi_items').remove();
			}
			
			if(rfi == false){
				$('#rfi').remove();
			}

			//RFI Section ends
			
			//Jobs section starts
			var jobs = false;
			if($.inArray('FILEMOVER_READ', roles) > -1){
				$('#jobs').show();
				jobs = true;
			}
			else{
				$('jobs_filemover').remove();
			}
			
			if(jobs==false){
				$('#jobs').remove();
			}

			//Jobs section ends
			
			//Tracking section starts
			var outage = false;
			if($.inArray('NOTIFICATIONS_READ', roles) > -1){
				$('#outage').show();
				outage = true;
			}else{
				$('#components').remove();
			}

			if($.inArray('CHANGES_READ', roles) > -1){
				$('#outage').show();
				outage = true;
			}else{
				$('#subscribers').remove();
			}

			if($.inArray('SUBSCRIBERS_READ', roles) > -1){
				$('#outage').show();
				outage = true;
			}else{
				$('#changes').remove();
			}

			if($.inArray('COMPONENTS_READ', roles) > -1){
				$('#outage').show();
				outage = true;
			}else{
				$('#notifications').remove();
			}

			if(outage==false){
				$('#outage').remove();
			}
			
			//Tracking section starts starts
			
			// Support Data section starts
			if($.inArray('SUPPORT_DATA_READ', roles) > -1){
				$('#sd_main').show();
			}else{
				$('#sd_main').remove();
			}

			//Support Data section ends
			
			// VMOM section starts
			
			if($.inArray('VMOM_READ', roles) > -1){
				$('#vmom_main').show();
			}else{
				$('#vmom_main').remove();
			}
			//VMOM section ends
			
		}
		
};
