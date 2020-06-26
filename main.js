// Attraverso una chiamata ajax all’Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.

// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.

// https://flynn.boolean.careers/exercises/api/array/music


$(document).ready(function() {

  $.ajax(
    {
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(data) {
        var cds = data.response;
        console.log(cds);

        for (var i = 0; i < cds.length; i++) {
          var source = $('#cd-template').html();
          var template = Handlebars.compile(source);
          var context = cds[i];
          var html = template(context);

          $('.cds-container').append(html);
          console.log(context);
        }
      },
      error: function(richiesta, stato, errori) {
        alert('ERRORE: ' + errori);
      }
    }
  );

});
