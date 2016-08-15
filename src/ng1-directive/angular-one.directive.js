myApp.directive("angularOne", function () {
    return {
        scope: "@",
        template: '<h1>{{lesson[0].title}}</h1>',
        controller: function ($scope) {
	        
        }
    };
});