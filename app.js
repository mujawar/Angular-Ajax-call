/**
 * Created by arif on 10/4/16.
 */
var mainApp = angular.module("mainApp", []);

mainApp.controller('studentController', function($scope,$http) {
 var url="text.json";
    $http.get(url).success(function(res){
        console.log('res' +JSON.stringify(res));
        $scope.students = res;
    })

});



/*

var app = angular.module("MyApp", []);

app.controller("PostsCtrl", function($scope, $http) {
    $http.get('text.json').success(function(data) {
        $scope.posts = data;
    });
});*/

/*
[
    {
        "id": 1,
        "title": "Lorem ipsum 1"
    },
    {
        "id": 2,
        "title": "Lorem ipsum 2"
    }
]*/

/*

<html lang="en">
    <head>
    <script src = "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
    <title>My AngularJS App</title>

</head>
<body ng-app="MyApp">
    <div ng-controller="PostsCtrl">
    <ul ng-repeat="post in posts">
    <li>{{post.title}}</li>
<li>{{post.id}}</li>
</ul>
</div>

<script src="app.js"></script>
    </body>
    </html>*/
