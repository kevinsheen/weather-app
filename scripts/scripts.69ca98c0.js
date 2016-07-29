"use strict";angular.module("workspaceApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("workspaceApp").controller("MainCtrl",["$scope","current",function(a,b){a.current=b.query(),a.refreshCurrent=function(){a.current=b.query({location:a.location})}}]),angular.module("workspaceApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("workspaceApp").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=a98c8f2b7da4cc3d49b84c67bb21a040",{},{query:{method:"GET",params:{location:"Seattle,us"},isArray:!1}})}]),angular.module("workspaceApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <h1>Weather for {{current.name}}</h1> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Location: <input type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="refreshCurrent()">Get Current Weather</button> </p> <dl> <dt>Currently</dt> <dd>{{current.weather[0].main}}</dd> <dd>{{current.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{current.main.temp}}</dd> <dt>Wind</dt> <dd>{{current.wind.speed}} mph at {{current.wind.deg}} degrees</dd> <dt>Clouds</dt> <dd>{{current.clouds.all}}%</dd> </dl> </div> </p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);