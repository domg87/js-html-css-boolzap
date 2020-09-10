// $(document).ready(function() {

//     $(".send-message").click(
//         function() {
//             sendMessage();
//         }
//     );

//     $("#input-message").keyup(
//         function(event) {
//             if(event.which == 13){
//                 sendMessage();
//             }
//         }
//     );
    


//     // search contatti all-interno del box contact
//     $("#search").keyup(function() {
//         var input = $("#search").val().toLowerCase();

//         $(".contact-text .name-text").each(function(){
//             var nome = $(this).text().toLowerCase();
            
//             if(nome.includes(input) != -1) {
//                 $(this).parents(".contact").show();
//                 console.log(input);
//             } else {
//                 $(this).parents(".contact").hide();
//             }
//         });
//     });

   
        


//     // Active chat selezionata
//     $(".contact").click(
//         function(){
//         $(".contact").removeClass("active");
//         $(this).addClass("active");
//         }
//     );
  

// // search contatti all-interno del box contact
//     $("#search").keyup(
//         function(){
//             var searchInput = $(this).val().toLowerCase();

//            var contactsName = $(".contact .name-text");
//            contactsName.each(
//                function() {
//                 var name = $(this).text().toLowerCase();
//                 if(name.includes(searchInput) == true) {
//                     $(this).parents(".contact").show();
//                 } else {
//                     $(this).parents(".contact").hide();
//                 }
//                });

//         }
//     );


// // --- collegare contatto alla chat ---
//     $(".convers").removeClass("active");
//     $(".templates").removeClass("active");

//     $(".contact").click(
//         function() {
//             var dataChat = $(this).attr("data-conversazione");
//             if ($('.contact').hasClass("active") == true) {
//                 $('.convers').removeClass('active');
//                 $('.templates').removeClass('active');
//                 $('.convers').removeClass('active');
//               }
//               $(this).addClass("active");
//               $('.templates[dataChat="' + dataChat +'"]').addClass('active');
              
//         });


// });


// // FUNZIONI

//  function sendMessage() {
//      var inputText = $("#input-message").val();
    
//      if(inputText != "") {
//          var templateMessage = $(".templates .message-row").clone();

//          var time = getTime();
        
//          templateMessage.find(".message-text").text(inputText);
//          templateMessage.find(".message-time").text(time);
//          templateMessage.addClass("sent");

//          $(".main-chat").append(templateMessage);
//          setTimeout(cpuMessage, 1000);
//          $("#input-message").val("");

//      }
//  }

// // -- creo funzione per generare risposta automatica dopo 1 secondo---
//  function cpuMessage() {
//      var cpuMessage = $(".template .message-row").clone();
//      var time = getTime();

//      cpuMessage.find(".message-text").text("ok");

//      cpuMessage.find(".message-time").text(time);

//      $(".main-chat").append(cpuMessage);

//  }

//  function getTime(){
//      var date = new Date();
//      var hours = date.getHours();
//      var minutes = date.getMinutes();

//      if(minute < 10) {
//          minute = "0" + minutes;
//      }
//      return hours + ":" + minutes;
//  }






//  function reply() {
//      var replyMessage = $(".template .message").clone();
//      replyMessage.find(".message-text").text("ok");

//      $(".main-chat").append(replyMessage);
//      console.log(replyMessage);
//  }

//  setTimeout(function(reply) {

//      var replyText = "Ok";
//      var templateMessage = $(".template .message").clone();
//      var date = new Date();
//      var hours = date.getHours();
//      var minute = date.getMinutes();
//      var time = hours + ":" + minute;

//      templateMessage.find(".message-text").text(replyText);
//      templateMessage.find(".message-time").text(time);        
    

//      $(".main-chat").append(templateMessage);
//      $("#input-message").val("");

//      console.log(templateMessage);
//  }, 1000);




//  // search contatti all-interno del box contact
//  $("#search").keyup(function(event) {
//      var input = $(this).val();
//      $(".user-contact").each(function(){
//          var nome = $("this").find(".name-text").text().toLowerCase();
        
//          if(nome.includes(input)) {
//              $(this).show();
//          } else {
//              $(this).hide();
//          }
//      });
//  });