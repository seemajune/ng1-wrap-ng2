(function (app) {
    app.AngularTwoComponent = ng.core
        .Component({
            selector: 'angular-two',
            template: '<div class="card card__details"><h2>{{assignment.title}}</h2><div class="card__summary"><p>{{assignment.subtitle}}</p></div><button class="btn btn__watch">watch</button></div>',
            inputs: ['assignment']
        })
        .Class({
            constructor: function () {
              
            }
        });
})(window.app || (window.app = {}));