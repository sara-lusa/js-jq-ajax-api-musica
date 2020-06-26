// Attraverso una chiamata ajax all’Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.

// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.

// https://flynn.boolean.careers/exercises/api/array/music


$(document).ready(function() {

  // Faccio la chiamata di AJAX per avere una lista di brani
  $.ajax(
    {
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(data) {
        // Metto l'array contenente i 10 oggetti dei brani
        // in una variabile cds
        var cds = data.response;

        // Avvio un ciclo for per copiare i 10 oggetti nell'html
        for (var i = 0; i < cds.length; i++) {
          // Con l'utilizzo di Handlebars copio il template
          var source = $('#cd-template').html();
          var template = Handlebars.compile(source);
          // E completo il context con i singoli oggetti
          var context = cds[i];
          var html = template(context);

          // Appendo al container i div creati
          $('.cds-container').append(html);
        }
      },
      error: function(richiesta, stato, errori) {
        alert('ERRORE: ' + errori);
      }
    }
  );

});
