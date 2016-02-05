// jQuery Document Ready
$(function() {
   // var apiRoot = 'https://api.doughnuts.ga/doughnuts';
    var loadDoughnuts = function() {

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
    }

    var appendDoughnut = function(doughnut) {

        $('#doughnuts').prepend('<a href=""> ' + '<li class="doughnut">' +
            '<span class="italic">' + doughnut.flavor +'</span>' +
            '<span class="glyphicon glyphicon-heart-empty" id="heart"></span>' + doughnut.style + 
            '</li>' + '</a>');
    };

   var displayDoughnuts = function(doughnuts) {
       if (!doughnuts) {
           return;
       }

       for (var i = 0; i < doughnuts.length; i++) {
           var doughnut = doughnuts[i];
           appendDoughnut(doughnut);
       }
        
        $('.doughnut').click(function() {
        var doughnutId = $(this).data('doughnut-id');
        console.log('Doughnut Id to delete: ', doughnutId);

        deleteDoughnut(doughnutId);
    });

   };

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

    var deleteDoughnut = function(doughnutId){
  
       $.ajax({
           url: 'https://api.doughnuts.ga/doughnuts' + '',
           method: "DELETE",
           data: {},
           dataType: "json"
       })
       .done(function(data) {
        console.log('deleted!');

        loadDoughnuts();
       })
       .fail(function(err) {
           if (err) throw err;
       })
       .always(function() {
           console.log('Request completed');
        });
       console.log(flavor, style);
    
    };
    
    loadDoughnuts();
});