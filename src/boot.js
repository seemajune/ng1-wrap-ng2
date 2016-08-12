myApp.directive('angularTwo', adapter.downgradeNg2Component(app.AngularTwoComponent));
 
document.addEventListener('DOMContentLoaded', function () {
    adapter.bootstrap(document.body, ['integrationApp']);
});