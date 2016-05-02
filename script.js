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
	$scope.displayexperene = false;
	$scope.displayproject = false;
	$scope.displayeducation = false;
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
	$scope.editexperence = function (index){
		$scope.index = index;
		if(index != -1)
		{
			$scope.edit_company = $scope.mydata.experiences[index].company;
			$scope.edit_location = $scope.mydata.experiences[index].position;
			$scope.edit_logo = $scope.mydata.experiences[index].Logo;
			$scope.edit_time = $scope.mydata.experiences[index].time;
			$scope.edit_describe = $scope.mydata.experiences[index].Describe;
		}
		$scope.displayexperene = true;
	}
	$scope.saveexperene = function(index){
		if(index == -1)
		{
			$scope.mydata.experiences.push({position:$scope.edit_location,company:$scope.edit_company,Logo:$scope.edit_logo,time:$scope.edit_time,Describe:$scope.edit_describe});
			$scope.edit_company = "";
			$scope.edit_location = "";
			$scope.edit_time = "";
			$scope.edit_describe = "";
		}
		else{
			$scope.mydata.experiences[index].company = $scope.edit_company;
			$scope.mydata.experiences[index].position = $scope.edit_location;
			$scope.mydata.experiences[index].Logo = $scope.edit_logo;
			$scope.mydata.experiences[index].time = $scope.edit_time;
			$scope.mydata.experiences[index].Describe = $scope.edit_describe;
		}
		$scope.displayexperene = false;
	}
	$scope.editproject = function (index){
		$scope.indexproject = index;
		if(index != -1)
		{
			$scope.edit_project = $scope.mydata.projects[index].name;

			$scope.edit_logoproject = $scope.mydata.projects[index].Logo;
			$scope.edit_timeproject = $scope.mydata.projects[index].time;
			$scope.edit_describeproject = $scope.mydata.projects[index].Describe;
		}
		$scope.displayproject = true;
	}
	$scope.saveproject = function(index){
		if(index == -1)
		{
			$scope.mydata.projects.push({name:$scope.edit_project,Logo:$scope.edit_logoproject,time:$scope.edit_timeproject,Describe:$scope.edit_describeproject});
			$scope.edit_project = "";
			$scope.edit_logoproject = "";
			$scope.edit_time = "";
			$scope.edit_describe = "";
		}
		else{
			$scope.mydata.projects[index].name = $scope.edit_project;
			$scope.mydata.projects[index].Logo = $scope.edit_logoproject;
			$scope.mydata.projects[index].time = $scope.edit_timeproject;
			$scope.mydata.projects[index].Describe = $scope.edit_describeproject;
		}
		$scope.displayproject = false;
	}
	$scope.editeducation = function (index){
		$scope.indexeducation = index;
		if(index != -1)
		{
			$scope.edit_education = $scope.mydata.educations[index].name;
			$scope.edit_major = $scope.mydata.educations[index].major;
			$scope.edit_logoeducation = $scope.mydata.educations[index].logo;
			$scope.edit_timeeducation = $scope.mydata.educations[index].graduate;
			$scope.edit_describeeducation = $scope.mydata.educations[index].Describe;
		}
		$scope.displayeducation = true;
	}
	$scope.saveeducation = function(index){
		if(index == -1)
		{
			$scope.mydata.educations.push({name:$scope.edit_education,major:$scope.edit_major,graduate:$scope.edit_timeeducation,logo:$scope.edit_logoeducation,Describe:$scope.edit_describeeducation});
			$scope.edit_project = "";
			$scope.edit_logoproject = "";
			$scope.edit_time = "";
			$scope.edit_describe = "";
		}
		else{
			$scope.mydata.educations[index].name = $scope.edit_education;
			$scope.mydata.educations[index].major = $scope.edit_major;
			$scope.mydata.educations[index].logo = $scope.edit_logoeducation;
			$scope.mydata.educations[index].graduate = $scope.edit_timeeducation;
			$scope.mydata.educations[index].Describe = $scope.edit_describeeducation;
		}
		$scope.displayeducation = false;
	}
});
