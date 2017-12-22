loginApp.controller('loginCtrl', [
	'$scope',
	'$http',
	($scope, $http) => {
		$scope.login = () => {
			if ($scope.email && $scope.password) {
				$http
					.post('/api/login', {
						email: $scope.email,
						password: $scope.password
					})
					.then(
						r => {
							$scope.user = r.data;
						},
						e => {
							$scope.errorMessage = e.data.message;
						}
					);
			}
		};
		// auth to make sure correct old password and not same new password
		$scope.auth = () => {
			if ($scope.oldPassword && $scope.newPassword) {
				$http
					.post('/api/auth', {
						oldPassword: $scope.oldPassword,
						newPassword: $scope.newPassword
					})
					.then(a => {
						$scope.errorMessagePassword = a.data.messagePassword;
					});
			} else {
			}
		};
	}
]);
