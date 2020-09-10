$(document).ready(function() {

    $(".send-message").click(
        function() {
            sendMessage();
        }
    );

    $("#input-message").keyup(
        function(event) {
            if(event.which == 13) {
                sendMessage();
            }
        }
    );

    $("#search").keyup(
        function() {

            var searchInput = $(this).val().toLowerCase();
            

            var contactsName = $(".contact .name-text");
            contactsName.each(
                function() {
                    var name = $(this).text().toLowerCase();
                    if(name.includes(searchInput) == true) {
                        $(this).parents(".contact").show(); 
                    } else {
                        $(this).parents(".contact").hide();
                    }
                });
        }
    );


    $(".contacts").click(
        function() {
            selectChat();
        }
    )    

});


// ---funzioni---

function sendMessage() {
    var inputText = $("#input-message").val();
    
    if(inputText != "") {
        var templateMessage = $(".templates .message-row").clone();

        var time = getTime();
        
        templateMessage.find(".message-text").text(inputText);
        templateMessage.find(".message-time").text(time);
        templateMessage.addClass("sent");

        $(".main-chat").append(templateMessage);
        setTimeout(cpuMessage, 1000);
        $("#input-message").val("");

    }
}

// -- creo funzione per generare risposta automatica dopo 1 secondo---
function cpuMessage() {
    var cpuMessage = $(".templates .message-row").clone();
    
    cpuMessage.find(".message-text").text("ok");
    var time = getTime();
    cpuMessage.find(".message-time").text(time);

    $(".main-chat").append(cpuMessage);

}


// -- creo funzione per orario messaggio
function getTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    return hours + ":" + minutes;
}

// Active chat selezionata
$(".contact").click(
    function(){
    $(".contact").removeClass("active");
    $(this).addClass("active");
    }
);

// --- collegare contatto alla chat ---
// $(".convers").removeClass("active");
// $(".templates").removeClass("active");

// $(".contact").click(
//     function selectChat() {
//         var dataChat = $(this).attr("data-conversazione");
//         if ($('.contact').hasClass("active") == true) {
//             $('.convers').removeClass('active');
//             $('.templates').removeClass('active');
//         }
//         $(this).addClass("active");
//         $('.templates').addClass('active');
//         $('.convers + dataChat').addClass('active');
// });

$(".contact").click(
    function() {
        if($(this).hasClass("active") == false) {
            $(".contact.active").removeClass("active");
            $(this).addClass("active");
            console.log(active);

            var utente = $(this).attr("data-chat");
            $(".main-chat").each(function(index) {
                var chatSelect = $(this).attr("data-conversazione");
                if(chatSelect == utente) {
                    if($(".main-chat").hasClass("active") == false) {
                        $(".main-chat").addClass("active");
                    }
                    $(this).removeClass("active");
                }
            });
        }
    }
)
