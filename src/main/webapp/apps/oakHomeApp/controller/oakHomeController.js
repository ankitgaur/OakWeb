oakHomeApp
 .controller(
  'oakHomeCtrl', [
   '$scope',
   '$rootScope',
   '$http',
   '$stateParams',
   '$log',
   'oakHomeFactory',
   function($scope, $rootScope, $http, $stateParams, $log,
    oakHomeFactory) {
		
    var id = "topmain_1";
    getPlacementByID(id); //home
    getTopStories(); //home
    getTopMid(); //home
    getTopLeft(); //home
    getHomeAds(); //home
    getHomeSlider(); //home
    getVideoList(); //home
       

    function getPlacementByID(id) {
     var placementID = id;

     oakHomeFactory
      .getPlacementImgByID(placementID)
      .then(function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.placement = response;

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting states from rest service');
       });
    }

    function getTopStories() {

     oakHomeFactory
      .getTopStories()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.topstories = response;
           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting topstories from rest service');
       });
    }

    
    function getTopMid() {

     oakHomeFactory
      .getTopMid()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.topmid = response;
           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting topmid from rest service');
       });
    }

    function getVideoList() {

     oakHomeFactory
      .getVideoList()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.videolist = response;
           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting topmid from rest service');
       });
    }

    function getTopLeft() {

     oakHomeFactory
      .getTopLeft()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {

            $scope.topleftup = response.slice(0,3);
            $scope.topleftdown = response.slice(3,6);
           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting topmid from rest service');
       });
    }

    function getHomeAds() {

     oakHomeFactory
      .getHomeAds()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.homeads = response;
           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting topmid from rest service');
       });
    }

    function getHomeSlider() {

     oakHomeFactory
      .getHomeSlider()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.homeslider = response;
           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting topmid from rest service');
       });
    }

    
    $scope.openModelPopup = function(link) {
     oakHomeFactory
      .getArticle(link).then( function success(response) {
        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $rootScope.articleData = response;

            $('#articlePopup').modal('show');

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting topmid from rest service');
       });

    }


   }
  ]);
  
  
  
  oakHomeApp
 .controller(
  'oakNewsCtrl', [
   '$scope',
   '$rootScope',
   '$http',
   '$stateParams',
   '$log',
   'oakHomeFactory',
   function($scope, $rootScope, $http, $stateParams, $log,
    oakHomeFactory) {
		
    getNewsFooter(); //news
    getNewsSlider(); //news
    getPopularNews(); //news
    getLatestNews(); //news
    getNewsSpotLight(); //news

    
    
    
    function getNewsFooter() {
     $scope.footerbox1_title = "Headlines";
     $scope.footerbox2_title = "Business";
     $scope.footerbox3_title = "Sports";
     $scope.footerbox4_title = "World";

     oakHomeFactory
      .getHeadlines()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.footerbox1_items = response;

            // $scope.testPlacement
            // ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting topmid from rest service');
       });

     oakHomeFactory
      .getBusiness()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.footerbox2_items = response;

            // $scope.testPlacement
            // ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting topmid from rest service');
       });

     oakHomeFactory
      .getSports()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.footerbox3_items = response;

            // $scope.testPlacement
            // ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting topmid from rest service');
       });

     oakHomeFactory
      .getWorld()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.footerbox4_items = response;

            // $scope.testPlacement
            // ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting topmid from rest service');
       });


    }

    function getNewsSlider() {

     oakHomeFactory
      .getNewsSlider()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.slides = response;

            // $scope.testPlacement
            // ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting news slider from rest service');
       });
    }

    function getPopularNews() {
     $scope.vlist_title = "Most Popular";
     oakHomeFactory
      .getPopularNews()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {

            //$scope.grid.items = response;
            //$scope.newsbox.topitems = [];
            //$scope.newsbox.bottomitems = [];


            $scope.vlist_topitem = response[0];
            $scope.vlist_items = response.slice(1, 5);

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting news slider from rest service');
       });
    }

    function getLatestNews() {
     $scope.newsbox_title = "Latest News";
     oakHomeFactory
      .getLatestNews()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {

            //$scope.grid.items = response;
            //$scope.newsbox.topitems = [];
            //$scope.newsbox.bottomitems = [];


            $scope.newsbox_topitems = response.slice(0, 4);
            $scope.newsbox_bottomitems = response.slice(4, 4);

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting news slider from rest service');
       });
    }

    function getNewsSpotLight() {
     $scope.grid_title = 'NEWS SPOTLIGHT';
     oakHomeFactory
      .getNewsSpotLight()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {

            $scope.grid_items = response;
            // $scope.testPlacement
            // ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting news slider from rest service');
       });
    }

     }
  ]);
  
  oakHomeApp
 .controller(
  'oakBlogCtrl', [
   '$scope',
   '$rootScope',
   '$http',
   '$stateParams',
   '$log',
   'oakHomeFactory',
   function($scope, $rootScope, $http, $stateParams, $log,
    oakHomeFactory) {
    
    
    getBlogs(); //blog
    getMostPopularBlogCount(); //blog
    getMostPopularBlogsPost(); //blog
    

    $scope.blogID = $stateParams.blogID;
    if ($scope.blogID != "" && $scope.blogID != undefined && $scope.blogID != 'undefined') {
     getTopBlogPostsByID($scope.blogID);
    } else {
     getTopBlogPosts();
    }

    function getTopBlogPostsByID(blogId) {

     oakHomeFactory.getTopBlogsByID(blogId).then(function success(response) {
      setTimeout(function() {
       $scope.$apply(function() {
        $scope.topblogs = [];
        $scope.topblogs.push(response);

       });
      }, 0);

     }, function error(response) {
      $log.debug('There is some issue while getting blogs from rest service');
     });

    }

    

    function getMostPopularBlogsPost() {
     oakHomeFactory
      .getMostPopularBlogsPost()
      .then(
       function success(response) {
        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.popularBlogsPosts = response;

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting states from rest service');
       });

    }

    function getMostPopularBlogCount() {

     oakHomeFactory
      .getMostPopularBlogsDetails()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.blogsCount = response;

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting states from rest service');
       });
    }

    
    function getBlogs() {
     oakHomeFactory
      .getBlogs()
      .then(
       function success(response) {
        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.blogs = response;

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting blogs from rest service');
       });
    }

    function getTopBlogPosts() {

     oakHomeFactory
      .getTopBlogs()
      .then(
       function success(response) {

        setTimeout(
         function() {
          $scope
           .$apply(function() {
            $scope.topblogs = response;

            // $scope.testPlacement
            // ={name:"sampmeObj",url:"images/sample/Dutse_airport.jpg",id:"2"};

           });
         }, 0);

       },
       function error(response) {
        $log
         .debug('There is some issue while getting topblogs from rest service');
       });
    }

    

   }
  ]);