'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.citysearch
 * @description
 * # citysearch
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=a98c8f2b7da4cc3d49b84c67bb21a040', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
