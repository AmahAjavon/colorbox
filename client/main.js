'use strict';

$(document).ready(init);

var colors = [];

function init() {

   $("#addBox").click(function() {
     var color = $('#colors').val();
     var sp = color.split(',');
    sp.forEach(function(color) {
      var $boxColor= $('<div>');
      $boxColor.css({'background-color': color,'margin': '5px','float':'left', 'height':'80px','width': '80px', 'font-size': '15px'});
       $('#boxes').append($boxColor);

    });

});
}
