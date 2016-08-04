'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.forecast
 * @description
 * # forecast
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=a98c8f2b7da4cc3d49b84c67bb21a040', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
