// jQuery Document Ready
$(function() {
   // var apiRoot = 'https://api.doughnuts.ga/doughnuts';

    var appendDoughnut = function(doughnut) {

        $('#doughnuts').prepend('<a href="#"> ' + '<li class="doughnut" data-doughnut-flavor="' + doughnut.flavor +
            '" data-doughnut-style="' + doughnut.style +
            '" data-doughnut-id="' + doughnut.id + '">' +
            '<span class="italic">' + doughnut.flavor +'</span>' +
            '<span class="glyphicon glyphicon-heart-empty" id="heart"></span>' + doughnut.style +
            '</li></a>');
    }

   var displayDoughnuts = function(doughnuts) {
       if (!doughnuts) {
           return;
       }
       for (var i = 0; i < doughnuts.length; i++) {
           var doughnut = doughnuts[i];
           appendDoughnut(doughnut);
       }
   };

   $.ajax({
           url: 'https://api.doughnuts.ga/doughnuts',
           method: "GET",
           data: {}
       })
       .done(function(data) {
           var doughnuts = data;
           displayDoughnuts(doughnuts);

           $('.doughnut').on('click', function() {
                var flavor = $(this).data('doughnut-flavor');
                var style = $(this).data('doughnut-style');
                // var doughnutId = $(this).data('doughnut-id');

                $('#modal .header').text(flavor + ' - ' + style);
                $('#modal').modal('show');
            });
               $('#delete').click(function() {
                var doughnutId = $(this).data('doughnut-id');
            // console.log('Doughnut Id to delete: ', doughnutId);
            deleteDoughnut(doughnutId);
            // console.log('hello');

            });



       })
       .fail(function(err) {
           if (err) throw err;
       })


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
           url: 'https://api.doughnuts.ga/doughnuts/' + doughnutId,
           method: "DELETE",
           data: {},
           dataType: "json"
       })
       .done(function(data) {
            // console.log('deleted!');
            $('.doughnut').remove('data-doughnut-style');
            console.log('wtf')
            $('#modal').modal('hide');

       })
       .fail(function(err) {
           if (err) throw err;
       })
       .always(function() {
           // console.log('Request completed');
        });
       // console.log(flavor, style);

    };

});
