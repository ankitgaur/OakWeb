   console.log("Test");
   google.load("visualization", "1", {packages:["corechart"]});
   google.setOnLoadCallback(drawChart);
   
   google.load('visualization', '1', {'packages': ['geomap']});
   google.setOnLoadCallback(drawMap);

   
   
   function doNothing(){
	console.log("Maps Loaded");
   }
   
   function drawChart(){
		//drawIncidentChart();
		drawCrimeChart();
		drawHospitalChart();
		drawFakeProductsChart();
		drawRoadChart();
		drawAccidentChart();
		drawSchoolChart();
		drawPowerChart();
		drawPotableWaterChart();
		drawPetrolPriceChart();
		drawTransportChart();
		drawAirportChart();
		//drawGovtChart();
		//drawStateChart();		
   };
    	
	function drawIncidentChart(){
	
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/mstats/types/",
			//data: data,
			success: function(result){
				var data = new google.visualization.DataTable(result);
				var options = {
				  title: 'Incident Types Report',
				  
				  width: $('#incident_canvas').parent().width(),
				  height: 500,
				  //options['is3D'] = true;
				  isStacked: true
				};

				var chart = new google.visualization.BarChart(document.getElementById('incident_canvas'));

				chart.draw(data, options);
			
			}
		});         
	};
	
	function drawGovtChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/govt",
			//data: data,
			success: function(result){
				var data = new google.visualization.DataTable(result);
				var options = {};
				options['title'] = 'Government Wise Report';
				options['width'] = $('#nigeria_govts_canvas').parent().width();
				options['height'] = 500;
				//options['is3D'] = true;
				options['isStacked'] = true;
				
				var chart = new google.visualization.ColumnChart(document.getElementById('nigeria_govts_canvas'));

				chart.draw(data, options);			
			}
		});		
	};
	
	
	
	function drawStateChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/states",
			//data: data,
			success: function(result){
				var data = new google.visualization.DataTable(result);
				var options = {};
				options['title'] = 'State Wise Report';
				options['width'] = $('#nigeria_states_canvas').parent().width();
				options['height'] = 500;
				//options['is3D'] = true;
				options['isStacked'] = true;
				
				var chart = new google.visualization.ColumnChart(document.getElementById('nigeria_states_canvas'));

				chart.draw(data, options);			
			}
		});		
	};
	
	function drawAccidentChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/type/ACCIDENTS",
			//data: data,
			success: function(result){
				var data = new google.visualization.DataTable(result);
				var options = {};
				options['title'] = 'Accident Report';
				options['is3D'] = true;
				

				var chart = new google.visualization.ColumnChart(document.getElementById('accident_canvas'));

				chart.draw(data, options);			
			}
		});		
	};
	
	function drawFakeProductsChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/type/FAKE_PRODUCTS",
			//data: data,
			success: function(result){
			    var data = new google.visualization.DataTable(result);
				var options = {};
				options['title'] = 'Fake Products Report';
				options['is3D'] = true;
				

				var chart = new google.visualization.ColumnChart(document.getElementById('fake_canvas'));

				chart.draw(data, options);			
			}
		});			
	};
	
	function drawHospitalChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/type/HOSPITALS",
			//data: data,
			success: function(result){
			    var data = new google.visualization.DataTable(result);					
		
				var options = {};
				options['title'] = 'Hospital Reports';
				options['is3D'] = true;
				

				var chart = new google.visualization.ColumnChart(document.getElementById('hospital_canvas'));

				chart.draw(data, options);												
			}
		});	

	};
	
	function drawRoadChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/type/HOSPITALS",
			//data: data,
			success: function(result){
			    var data = new google.visualization.DataTable(result);					
		
				var options = {};
				options['title'] = 'Road Report';
				options['is3D'] = true;
				

				var chart = new google.visualization.ColumnChart(document.getElementById('road_canvas'));

				chart.draw(data, options);												
			}
		});		
	};
	
	function drawCrimeChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/type/CRIME",
			//data: data,
			success: function(result){
			    var data = new google.visualization.DataTable(result);					
		
				var options = {};
				options['title'] = 'Crime Report';
				options['is3D'] = true;
				

				var chart = new google.visualization.ColumnChart(document.getElementById('crime_canvas'));

				chart.draw(data, options);												
			}
		});
	};
	
	
	function drawPowerChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/type/POWER",
			//data: data,
			success: function(result){
			    var data = new google.visualization.DataTable(result);					
		
				var options = {};
				options['title'] = 'Power Report';
				options['is3D'] = true;
				

				var chart = new google.visualization.ColumnChart(document.getElementById('power_canvas'));

				chart.draw(data, options);												
			}
		});
	};
	
	function drawPotableWaterChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/type/POTABLE_WATER",
			//data: data,
			success: function(result){
			    var data = new google.visualization.DataTable(result);					
		
				var options = {};
				options['title'] = 'Potable Water Report';
				options['is3D'] = true;
				

				var chart = new google.visualization.ColumnChart(document.getElementById('potable_canvas'));

				chart.draw(data, options);												
			}
		});
	};
	
	function drawSchoolChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/type/SCHOOL",
			//data: data,
			success: function(result){
			    var data = new google.visualization.DataTable(result);					
		
				var options = {};
				options['title'] = 'School Report';
				options['is3D'] = true;
				

				var chart = new google.visualization.ColumnChart(document.getElementById('school_canvas'));

				chart.draw(data, options);												
			}
		});
	};
	
	function drawPetrolPriceChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/type/PETROL_PRICE",
			//data: data,
			success: function(result){
			    var data = new google.visualization.DataTable(result);					
		
				var options = {};
				options['title'] = 'Petrol Price Report';
				options['is3D'] = true;
				

				var chart = new google.visualization.ColumnChart(document.getElementById('petrol_canvas'));

				chart.draw(data, options);												
			}
		});
	};
	
	function drawAirportChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/type/AIRPORTS",
			//data: data,
			success: function(result){
			    var data = new google.visualization.DataTable(result);					
		
				var options = {};
				options['title'] = 'Airport Report';
				options['is3D'] = true;
				

				var chart = new google.visualization.ColumnChart(document.getElementById('airport_canvas'));

				chart.draw(data, options);												
			}
		});
	};
	
	function drawTransportChart(){
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/type/TRANSPORT",
			//data: data,
			success: function(result){
			    var data = new google.visualization.DataTable(result);					
		
				var options = {};
				options['title'] = 'Transport Report';
				//options['is3D'] = true;
				

				var chart = new google.visualization.ColumnChart(document.getElementById('transport_canvas'));

				chart.draw(data, options);												
			}
		});
	};
	
	function drawMap() {
	
		$.ajax({
			dataType: "json",
			url: "http://www.ipledge2nigeria.com/service/stats/regions",
			//data: data,
			success: function(result){
			      //console.log(result);
				  var data = new google.visualization.DataTable(result);
				  var options = {};
				  options['region'] = 'NG';
				  options['colors'] = [0xADD8E6, 0x27408B]; //yellow-orange-red colors
				  options['dataMode'] = 'regions';
				  options['resolution'] = 'provinces';
				  options['width'] = $('#nigeria_canvas').parent().width();
				  options['height'] = '500em';
				  options['showLegend'] = true;

				  var container = document.getElementById('nigeria_canvas');
				  var geomap = new google.visualization.GeoMap(container);
				  
					google.visualization.events.addListener(geomap, 'select', function () {
					var selection = geomap.getSelection();
					if (selection.length) {
						//alert(data.getValue(selection[0].row, 0));
						//drawMap();
						window.location = 'http://www.ipledge2nigeria.com/state.html#' + data.getValue(selection[0].row, 0);
					}
					});
				  
				  geomap.draw(data, options);
			}
		});     
    };	
	
	function openIncident(opt){
		window.location = 'http://localhost/incident.html#' + opt;
	}