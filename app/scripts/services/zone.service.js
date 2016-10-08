angular.module('petrusProjectApp').service('ZoneService', ['$http', '$location', 'DataService', function($http, $location, DataService) {

    // this.httpGetFunction = function(url) {
    //   $http.defaults.headers.common[$http.defaults.xsrfHeaderName]=$cookies[$http.defaults.xsrfCookieName];
    //   return $http.get(API_URL+url);
    // };
    // this.httpPostFunction = function(url, item) {
    //   $http.defaults.headers.common[$http.defaults.xsrfHeaderName]=$cookies[$http.defaults.xsrfCookieName];
    //   return $http.post(API_URL+url, item);
    // };
    // this.httpPutFunction = function(url, item) {
    //   $http.defaults.headers.common[$http.defaults.xsrfHeaderName]=$cookies[$http.defaults.xsrfCookieName];
    //   return $http.put(API_URL+url, item);
    // };
    // this.httpDeleteFunction = function(url) {
    //   $http.defaults.headers.common[$http.defaults.xsrfHeaderName]=$cookies[$http.defaults.xsrfCookieName];
    //   return $http.delete(API_URL+url);
    // };

    this.getZone = function(zone) {
        return $http.get('http://localhost:8000/data/zone' + zone + '.json');
    };
}]);