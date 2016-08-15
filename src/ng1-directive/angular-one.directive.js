myApp.directive("angularOne", function () {
    return {
        scope: "@",
        template: '<h2>{{lesson[0].title}}</h2>',
        controller: function ($scope) {
	        
        }
    };
});