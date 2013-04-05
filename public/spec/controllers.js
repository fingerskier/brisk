describe("App Controllers", function() {
	describe("Main Controller", function() {
		var scope, ctrl;

		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
		
			ctrl = $controller('MainCtrl', {
				$scope: scope
			});
		}));

		it("should be defined", function() {
			expect(ctrl).toBeDefined();
		});

		it("should have an init method", function() {
			expect(scope.init).toBeDefined();
		});
	});
});
