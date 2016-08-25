'use strict';

var app = angular.module('app', []);

app.directive('navigationBar',  function(){
    
    return {
             template:[ '<nav class="navbar navbar-default navbar-custom navbar-fixed-top">',
            '<div class="container-fluid">',
            '<div class="navbar-header page-scroll">',
                '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">',
                    '<span class="sr-only">Toggle navigation</span>',
                    '<span class="icon-bar"></span>',
                    '<span class="icon-bar"></span>',
                    '<span class="icon-bar"></span>',
                '</button>',
                '<a class="navbar-brand" href="index.html">Start Bootstrap</a>',
            '</div>',
            '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">',
                '<ul class="nav navbar-nav navbar-right">',
                    '<li>',
                        '<a href="index.html">Home</a>',
                    '</li>',
                    '<li>',
                        '<a href="about.html">About</a>',
                    '</li>',
                    '<li>',
                        '<a href="post.html">Sample Post</a>',
                    '</li>',
                    '<li>',
                        '<a href="contact.html">Contact</a>',
                    '</li>',
                '</ul>',
            '</div>',
        '</div>',
    '</nav>'].join(''),
            replace: true
    };
});

app.directive('myFooter',  function(){
    return {
             template:[    '<footer>',
        '<div class="container">',
            '<div class="row">',
                '<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">',
                    '<ul class="list-inline text-center">',
                        '<li>',
                            '<a href="#">',
                                '<span class="fa-stack fa-lg">',
                                    '<i class="fa fa-circle fa-stack-2x"></i>',
                                    '<i class="fa fa-twitter fa-stack-1x fa-inverse"></i>',
                                '</span>',
                            '</a>',
                        '</li>',
                        '<li>',
                            '<a href="#">',
                                '<span class="fa-stack fa-lg">',
                                    '<i class="fa fa-circle fa-stack-2x"></i>',
                                   '<i class="fa fa-facebook fa-stack-1x fa-inverse"></i>',
                                '</span>',
                            '</a>',
                        '</li>',
                        '<li>',
                            '<a href="#">',
                                '<span class="fa-stack fa-lg">',
                                    '<i class="fa fa-circle fa-stack-2x"></i>',
                                    '<i class="fa fa-github fa-stack-1x fa-inverse"></i>',
                                '</span>',
                            '</a>',
                        '</li>',
                    '</ul>',
                    '<p class="copyright text-muted">Copyright &copy; Your Website 2014</p>',
                '</div>',
            '</div>',
        '</div>',
    '</footer>'].join(''),
            replace: true
    };
});

app.directive('blogHeader',  function(){
    return {
            scope:{
                heading:'@',
                subHeading:'@',
                postSubHeading:'@',
                author:'@',
                postDate:'@'
            },
            template:[ '<header class="intro-header" >',
        '<div class="container">',
            '<div class="row">',
                '<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">',
                    '<div class="site-heading">',
                        '<h1>{{heading}}</h1>',
                        '<hr ng-if="subHeading" class="small">',
                        '<span ng-if="subHeading" class="subheading">{{subHeading}}</span>',
                        '<h2 ng-if="postSubHeading" class="subheading">{{postSubHeading}}</h2>',
                        '<span ng-if="author" class="meta">Posted by <a href="#">{{author}}</a> on {{postDate}}</span>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>',
    '</header>'].join(''),
            replace: true
    };
});

app.filter('startFrom', function() {
    return function(input, start) {
        if(input){
        start = +start; //parse to int
        return input.slice(start);
    }else{
        return null;
    }
    }
});

app.controller('ContentCtrl', ['$scope','$http','$window', function($scope,$http,$window){
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.data=null;
    $http.get('content/index.json').success(function(data) {
    $scope.data = data.contentItem;

    $scope.nxtPage = function(){
        $scope.currentPage=$scope.currentPage+1;
        $window.scrollTo(0, 0);
    };
    $scope.previousPage = function(){
        $scope.currentPage=$scope.currentPage-1;
        $window.scrollTo(0, 0);
    };

});
}])