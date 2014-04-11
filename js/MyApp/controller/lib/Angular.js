/**
 * @namespace {EOMS} namespace
 * @description {Logic for branch, role, ui-interface}
 * @memberOf {Ext.app.Controller}
 * @extends  {EOMS.core.Controller}
 *
 * @return {AppMain}
 * @author {Andrii Trybynenko}
 */
Ext.define('EOMS.controller.Angular',{
    extend:'EOMS.core.Controller',
    angular : null,
	
    init: function() {'use strict'
		console.log('angular');
		
		this.angular = angular;		  
		var phonecatControllers = this.angular.module('phonecatControllers', []);
			phonecatControllers.controller('MsCtrl', ['$scope', 
			  function($scope) {
				$scope.selected = null;
				$scope.list = window.json1;
				$scope.list2 = window.json2;
				
				$scope.setSelected = function(item){
					$scope.selected = item;
				}
			}]);	 					
		this.angular.module('connectionFilters', [])
			.filter('active', function() {
				return function(conn) {
				   var connStyle = '';					  
					   connStyle += (conn.from)? ' btop-green '   : ' btop-red '   ;
					   connStyle += (conn.to)?  ' bbottom-green ' : ' bbottom-red ';
					
				   return connStyle;
				};
			})			
		this.angular.module('shemaApp', ['phonecatControllers','connectionFilters']);
		this.angular.bootstrap(document, ['shemaApp']);		
    }
});



//////////////////////////////////////////////
	// .filter('status', function() {
		// return function(conn) {
			// return conn? 'red' : 'green';
		// };
	// });	

   // $scope.baseWidth  = 100
   // $scope.baseHeight  = 50
   // $scope.baseX = 50
   // $scope.baseY = 50 