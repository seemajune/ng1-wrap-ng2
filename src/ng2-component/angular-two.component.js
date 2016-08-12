(function (app) {
    app.AngularTwoComponent = ng.core
        .Component({
            selector: 'angular-two',
            template: '<h2>{{someText}}</h2>'
        })
        .Class({
            constructor: function () {
                this.someText = "This is an Angular 2 component."
            }
        });
})(window.app || (window.app = {}));