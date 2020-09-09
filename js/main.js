$(document).ready(function() {

    $(".send-message").click(
        function() {
            sendMessage();
            setTimeout(reply, 1000);
        }
    );

    $("#input-message").keyup(
        function(event) {
            if(event.which == 13){
                sendMessage();
            }
        }
    );
    


    // search contatti all-interno del box contact
    $("#search").keyup(function() {
        var input = $("#search").val().toLowerCase();

        $(".contact-text .name-text").each(function(){
            var nome = $(this).text().toLowerCase();
            
            if(nome.includes(input) != -1) {
                $(this).parents(".contact").show();
                console.log(input);
            } else {
                $(this).parents(".contact").hide();
            }
        });
    });

   
        


    // Active chat selezionata
    $(".contact").click(
        function(){
        $(".contact").removeClass("active");
        $(this).addClass("active");
        }
    );
  

});


// FUNZIONI

function sendMessage() {
    var inputText = $("#input-message").val();
    
    if(inputText != "") {
        var templateMessage = $(".templates .message-row").clone();
        var date = new Date();
        var hours = date.getHours();
        var minute = date.getMinutes();
        var time = hours + ":" + minute;

        
        templateMessage.find(".message-text").text(inputText);
        templateMessage.find(".message-time").text(time);
        templateMessage.addClass("sent");

        $(".main-chat").append(templateMessage);
        $("#input-message").val("");
    }
}

// -- creo funzione per generare risposta automatica ---

function reply() {
    var replyMessage = $(".template .message").clone();
    replyMessage.find(".message-text").text("ok");

    $(".main-chat").append(replyMessage);
    console.log(replyMessage);
}

// setTimeout(function(reply) {

//     var replyText = "Ok";
//     var templateMessage = $(".template .message").clone();
//     var date = new Date();
//     var hours = date.getHours();
//     var minute = date.getMinutes();
//     var time = hours + ":" + minute;

//     templateMessage.find(".message-text").text(replyText);
//     templateMessage.find(".message-time").text(time);        
    

//     $(".main-chat").append(templateMessage);
//     $("#input-message").val("");

//     console.log(templateMessage);
// }, 1000);




// search contatti all-interno del box contact
$("#search").keyup(function(event) {
    var input = $(this).val();
    $(".user-contact").each(function(){
        var nome = $("this").find(".name-text").text().toLowerCase();
        
        if(nome.includes(input)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});