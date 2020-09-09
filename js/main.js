$(document).ready(function() {
    $(".send-message").click(
        function() {
            sendMessage();
        }
    );

    $("#input-message").keyup(
        function(event) {
            if(event.which == 13){
                sendMessage();
            }
        }
    );

});

function sendMessage() {
    var inputText = $("#input-message").val();
    
    if(inputText != "") {
        var templateMessage = $(".templates .message-row").clone();
        var date = new Date();
        var hours = date.getHours();
        var minute = date.getMinutes();
        var time = hours + ":" + minute;

        
        templateMessage.find(".message-text").text("inputText");
        templateMessage.find(".message-time").text("time");
        templateMessage.addClass("sent");

        $(".chat").append(templateMessage);
        $("#input-message").val("");
    }
}

// search contatti all-interno del box contact

$("#search").on("input",function(){
    var input = $(this).val().toLowerCase();
    $(".contact").each(function(){
        var nome = $("this").find(".name-text").text().toLowerCase();
        if(nome.includes(input)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});