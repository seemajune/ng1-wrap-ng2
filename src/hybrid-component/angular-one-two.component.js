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
		                    "id": "watch-orientation-video",
		                    "title": "Watch Orientation Video"
		                },
		                {
		                    "id": "mcat-diagnostic-exam",
		                    "title": "MCAT Diagnostic Exam"
		                },
		                {
		                    "id": "science-assessments",
		                    "title": "Science Assessments"
		                },
		                {
		                    "id": "important-welcome-message",
		                    "title": "Important Welcome Message"
		                },
		                {
		                    "id": "how-to-access-your-mcat-flashcard-app",
		                    "title": "How to Access your  MCAT Flashcard App"
		                },
		                {
		                    "id": "how-to-access-a-digital-version-of-your-mcat-review-books",
		                    "title": "How to Access a Digital Version of your MCAT Review Books"
		                },
		                {
		                    "id": "information-about-your-higher-score-guarantee",
		                    "title": "Information About your Higher Score Guarantee"
		                }
		            ]
        		}
        	];
        }
    };
});
 