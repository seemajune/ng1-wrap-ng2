myApp.directive("angularOneTwo", function () {
    return {
        scope: {},
        template: '<angular-one></angular-one><div ng-repeat="assignment in lesson[0].assignments"><angular-two [assignment]="assignment"></angular-two></div>',
        controller: function ($scope) {
        	$scope.lesson = [
	        	{
		            "id": "gettingStarted",
		            "title": "Getting Started",
		            "assignments": [
		                {
		                    "title": "MCAT Assignment 1",
		                    "subtitle": "Watch Orientation Video"
		                },
		                {
		                    "title": "MCAT Assignment 2",
		                    "subtitle": "MCAT Diagnostic Exam"
		                },
		                {
		                    "title": "MCAT Assignment 3",
		                    "subtitle": "Science Assessments"
		                },
		                {
		                    "title": "MCAT Assignment 4",
		                    "subtitle": "Important Welcome Message"
		                },
		                {
		                    "title": "MCAT Assignment 5",
		                    "subtitle": "How to Access your  MCAT Flashcard App"
		                },
		                {
		                    "title": "MCAT Assignment 6",
		                    "subtitle": "How to Access a Digital Version of your MCAT Review Books"
		                },
		                {
		                    "title": "MCAT Assignment 7",
		                    "subtitle": "Information About your Higher Score Guarantee"
		                }
		            ]
        		}
        	];
        }
    };
});
 