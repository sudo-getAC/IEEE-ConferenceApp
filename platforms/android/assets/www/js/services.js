angular.module('starter.services',[])

.factory('fireBaseData', function($firebase) {
    var ref = new Firebase("https://torrid-fire-3897.firebaseio.com/"),
        
        refRoomMates = new Firebase("https://torrid-fire-3897.firebaseio.com/Dates");
    return {
        ref: function() {
            return ref;
        },
        refRoomMates: function() {
            return refRoomMates;
        }
    }
});