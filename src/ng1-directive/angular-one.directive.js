myApp.directive("angularOne", function () {
    return {
        scope: {},
        template: '<h2>{{someText}}</h2>',
        controller: function ($scope) {
            $scope.someText = "This is an Angular 1 directive.";
        }
    };
});