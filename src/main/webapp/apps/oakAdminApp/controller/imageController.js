oakAdminApp.controller('imageCtrl',['$scope','$http','$stateParams','$log','imageFactory', function($scope,$http,$stateParams,$log,imageFactory) {

	$scope.currentPage = 1;
	$scope.appUrl = AppConfig.appUrl;
	$scope.pageSize = 10;
	$scope.images  = [];
	$scope.prefixes  = [];
	$scope.imageId = $stateParams.imageID;
	
	 if($scope.imageId !="" && $scope.imageId !=undefined && $scope.imageId !='undefined'){
		 //getArticleByID($scope.articleId); 
	  }else{
			//getPrefixes();
			getRecentImages();
	  }
	

  

	$scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
    
 $scope.uploadImage = function(){
	 //$( "#uploadImageForm" ).submit();
	 //action="http://localhost:6767/images/test" method="post"
	 //enctype="multipart/form-data" accept="image/gif,image/jpeg"
	 var prefix = $('#prefix').val();
	 if(!prefix || 0 === prefix.length){
		 prefix = 'default';
	 }
	 var oMyForm = new FormData();
	 oMyForm.append("file", file.files[0]);
	 $.ajax({
	        url:AppConfig.appUrl+'images/'+prefix,
	        type:'post',
	        contentType: false,
	        processData: false,
	        data:oMyForm,
	        xhrFields: {
	            withCredentials: true
	         },
	        success:function(){
	            //whatever you wanna do after the form is successfully submitted
	        	getRecentImages();
	        }
	    });
 };
  
 function getPrefixes(){
		
		imageFactory.getPrefixes().then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.prefixes = response;				
		});
		}, 0);
		
}, function error(response) {
		$log.debug('There is some issue while getting recent images from rest service');
});
}
  
  function getRecentImages(){
				
		imageFactory.getRecentImages().then(function success(response) {
		setTimeout(function () {
				$scope.$apply(function () {
				$scope.images = response;				
		});
		}, 0);
		
  }, function error(response) {
		$log.debug('There is some issue while getting recent images from rest service');
  });
}
	
	
		
	/*function getAllArticleCategories(){
		
		imageFactory.getArticleCategories().then(function success(response) {
			setTimeout(function () {
					$scope.$apply(function () {						
					$scope.articleCategories = response;
					  
			});
			}, 0);
			
	  }, function error(response) {
			$log.debug('There is some issue while getting articleCategories from rest service');
	  });
	}*/

	
}]);
