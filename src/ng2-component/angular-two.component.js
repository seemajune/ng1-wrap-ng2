(function (app) {
    app.AngularTwoComponent = ng.core
        .Component({
            selector: 'angular-two',
            template: '<h2>{{assignment.title}}</h2>',
            inputs: ['assignment']
        })
        .Class({
            constructor: function () {
              
            }
        });
})(window.app || (window.app = {}));