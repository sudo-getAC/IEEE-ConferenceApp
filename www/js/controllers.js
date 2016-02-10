angular.module('starter.controllers', [])


.controller('ImpDates',function($scope,fireBaseData,$firebase){
	$scope.dates=$firebase(fireBaseData.refRoomMates()).$asArray();
})

.controller('MainCtrl', function($scope, $ionicModal) {
  $scope.contact = {
    name: 'Indian',
    info: 'Tap and ywhere on the card to open the modal'
  }

  $ionicModal.fromTemplateUrl('contact-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
})


.controller('MainCtrl1', function($scope, $ionicModal) {
  $scope.contact = {
    name: 'Foreign',
    info: 'Tap and ywhere on the card to open the modal'
  }

  $ionicModal.fromTemplateUrl('contact-modal1.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal1 = function() {
    $scope.modal.show()
  }

  $scope.closeModal1 = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
})

.controller('CFPCtrl',function($scope){
	$scope.groups=[
	{
	name:"Track 1 : Distributed Computing",
	items:["Multi-core Architecture",
	"Parallel & Distributed Systems",
	"Agent-Based Systems",
	"Autonomic Computing",
	"Mobile & Ubiquitous Computing",
	"Service-Oriented Computing",
	"Scalable Servers and Systems",
	"GPU Programming",
	"Parallel & Distributed Algorithms",
	"Compiler technologies for HPC",
	"Peer to Peer Computing",
	"Cloud Computing",
	"Network Storage Systems",
	"High Performance Storage Systems"]
	},
	{
	name:"Track 2 : Communications",
	items:["Network Algorithms",
	"Network Control & Management",
	"Disaster Recovery of Networks",
	"Cognitive Communications",
	"Wireless Sensor Networks",
	"Software Defined Networks",
	"Future Internet Architecture",
	"Optical Networks",
	"Internet of Things",
	"Network Performance Analysis",
	"QoS for Emergency Apllications",
	"Wireless and Mobile Networks",
	"Ad hoc and Mesh Networks",
	"Named Data Networking",
	"LTE and 5G Networks",
	"Body Area Networks"]
	},
	{
		name:"Track 3: VLSI",
		items:[
			"VLSI Circuits and Systems",
			"RF Circuit design and Testing",
			"Emerging Trends in VLSI",
			"Reconfigurable Systems",
			"System on Chip",
			"Heat Dissipation Analysis",
			"Design of MEMS Devices",
			"Optical MEMS Devices",
			"Analog/Mixed Signals",
			"RF Circuit Analysis",
			"Field Programmable Systems",
			"System Level Design",
			"Physical Design and Testing",
			"Power Awareness Analysis",
			"Design of NEMS Devices",
			"Electrical Packaging/codesign"
		]
	},
	{
		name:"Track 4: Electrical and Electronic Circuits",
		items:[
			"Electrical AC/DC Circuits",
			"Analog and Digital Circuits",
			"High-speed/low-power Circuits",
			"Near and sub-threshold Circuits",
			"Nonlinear Circuits & Systems",
			"Neural/Fuzzy-logic Circuits",
			"Energy Efficient Circuits",
			"FGPA based Systems"
		]
	},
	{
		name:"Track 5: Robotics",
		items:[
			"Robotics technologies",
			"Robots for Industrial Applications",
			"Robots for Domestic Premises",
			"Robots for Education",
			"Robots for Health Care",
			"Robots for Transportation",
			"Robots for Commercial Usage",
			"Humanoids"
		]
	}

	];

	$scope.groups1=[{
		name:"Best Paper Awards",
		items:["Technical Programme Committee of DISCOVER will select One Best Paper in each of the tracks mentined above",
		"It is mandatory to present paper during the Conference so as to be considered for Best Paper Award",
		"Best Paper Awards will be announced and distributed during the Conference"]
	}];
  
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
});
