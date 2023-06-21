$(document).ready(function() {
            /*====================================================================================
            ****************     Scrolling progressif lorsqu’on appuie sur les boutons   *********
            ************     Batman (boutons latéraux) pour aller en haut et en bas  **************
            ======================================================================================*/
    $('.logo_scroll_up').click(function() {
      $('html, body').animate({
        scrollTop: $('#Header').offset().top
      }, 9000);
    });
  
    $('.logo_scroll_down').click(function() {
      $('html, body').animate({
        scrollTop: $('#Footer').offset().top
      }, 9000);
    });

            /* ==============================================================================
            *****************   Apparition progressive des éléments au fur    ***************
            ******************  et à mesure du scrolling, avec un effet fade  ***************
            ***************     in + slide de gauche à droite   *****************************
            ================================================================================*/

            const elements = document.querySelectorAll('.fade_in, .slide_in');
            window.addEventListener('scroll', () => {
              elements.forEach(element => {
                if (isElementInViewport(element)) {
                  element.classList.add('fade_in');
                  element.classList.add('slide_in');
                }
              });
            });
            
            function isElementInViewport(element) {
              const rect = element.getBoundingClientRect();
              return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
              );
            }
            

  });


// // Lorsque vous cliquez sur le bouton Batman pour aller vers le haut
// $("#logo_scroll_down").click(function() {
//     $("#Footer").animate({ scrollTop: 0 }, "slow");
//   });
  
//   // Lorsque vous cliquez sur le bouton Batman pour aller vers le bas
//   $("#logo_scroll_up").click(function() {
//     var sectionSuivante = $("#sectionSuivante").offset().top;
//     $("#Header").animate({ scrollTop: sectionSuivante }, "slow");
//   });
  

/*
je veut que tu corise sur le scrolling progressif avec les boutons Batman 'il y deux bouton et je vien de les nomer logo_scroll_up et logo_scroll_down quand on appuis sur le bouton logo_scroll_down cella maine vers le footer avec transition vers le #footer progressives pour apporter de la
fluidité dans la navigation sur le site et pour le buton logo_scroll_upcella maine vers le #header avec transition vers le footer progressives pour apporter de la
fluidité dans la navigation sur le site
*/