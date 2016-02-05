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
        $('#doughnuts').append('<li class="doughnut">' +
            doughnut.style + ' - ' +
            doughnut.flavor + '</li>');
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



});
