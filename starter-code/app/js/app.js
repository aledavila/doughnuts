// jQuery Document Ready
$(function() {
   // var apiRoot = 'https://api.doughnuts.ga/doughnuts';

   $.ajax({
           url: 'https://api.doughnuts.ga/doughnuts',
           method: "GET",
           data: {}
       })
       .done(function(data) {
           var doughnuts = data;
           displayDoughnuts(doughnuts);
       })
       .fail(function(err) {
           if (err) throw err;
       })

    var appendDoughnut = function(doughnut) {
        $('#doughnuts').append('<a href=""> ' + '<li class="doughnut">' +
            doughnut.style + ' - ' +
            doughnut.flavor + '</li>' + '</a>');
    }

   var displayDoughnuts = function(doughnuts) {
       if (!doughnuts) {
           return;
       }

       for (var i = 0; i < doughnuts.length; i++) {
           var doughnut = doughnuts[i];
           appendDoughnut(doughnut);
       }
   }

   $('#new-doughnut').submit(function(event){
       event.preventDefault();

       var flavor = $('#doughnut-flavor').val();
       var style = $('#doughnut-style option:selected').val();

       $.ajax({
           url: 'https://api.doughnuts.ga/doughnuts',
           method: "POST",
           data: {
               flavor: flavor,
               style: style
           },
           dataType: "json"
       })
       .done(function(data) {
           appendDoughnut(data);
       })
       .fail(function(err) {
           if (err) throw err;
       })
       .always(function() {
           console.log('Request completed');
         });
       console.log(flavor, style);

   });



});