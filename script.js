var module = angular.module('App', []);

module.controller('firstController', function($scope, $http) {
	$http.get('json.json').success(function(data) {
		$scope.mydata = data;
	});
	$scope.displayname = false;
	$scope.displayjob = false;
	$scope.displayinformation = false;
	$scope.displaycontact =false;
	$scope.displaysummary =false;
	$scope.editname = function (){
		$scope.edit_name = $scope.mydata.name;
		$scope.displayname = true;
	}
	$scope.savename = function(){
		$scope.mydata.name = $scope.edit_name;
		$scope.displayname = false;
	}
	$scope.editjob = function (){
		$scope.edit_job = $scope.mydata.Job;
		$scope.displayjob = true;
	}
	$scope.savejob = function(){
		$scope.mydata.Job = $scope.edit_job;
		$scope.displayjob = false;
	}
	$scope.editinformation = function (){
		$scope.edit_birthdate = $scope.mydata.birthdate;
		$scope.edit_address = $scope.mydata.address;
		$scope.displayinformation = true;
	}
	$scope.saveinformation = function(){
		$scope.mydata.birthdate = $scope.edit_birthdate;
		$scope.mydata.address = $scope.edit_address;
		$scope.displayinformation = false;
	}
	$scope.editcontact = function (){
		$scope.edit_email = $scope.mydata.contact.email;
		$scope.edit_website = $scope.mydata.contact.website;
		$scope.edit_phone = $scope.mydata.contact.phone;
		$scope.displaycontact = true;
	}
	$scope.savecontact = function(){
		$scope.mydata.contact.email = $scope.edit_email;
		$scope.mydata.contact.website = $scope.edit_website;
		$scope.mydata.contact.phone = $scope.edit_phone;
		$scope.displaycontact = false;
	}
	$scope.editsummary = function (){
		$scope.edit_summary = $scope.mydata.summary;

		$scope.displaysummary = true;
	}
	$scope.savesummary = function(){
		$scope.mydata.summary = $scope.edit_summary;
		$scope.displaysummary = false;
	}

});
