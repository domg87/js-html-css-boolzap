$(document).ready(function() {

    $(".sendMessage").click(
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
            
            var searchInput = $(this).val(); 
            searchInput = searchInput.toLowerCase();

            var contactName = $(".contact .contact-name");

            contactName.each(function() {
                var name = $(this).text();
                name = name.toLowerCase();

                if(name.includes(searchInput) == true) {
                    $(this).parents("contact").show();
                } else {
                    $(this).parents(".contact").hide();
                }
                
            });
        }
    );

    $(document).on("click", ".message-actions", 
        function() {
            $(this).parents(".message-row").remove();
        }
    );

    $(".contact").click(
        function() {
            $(".contact").removeClass("active");
            $(this).addClass("active");

            var datoContatto = $(this).attr("data-contatto");

            $(".chat").removeClass("active");
            $(".chat[data-conversazione="+datoContatto+"]").addClass("active");

            var img = $(this).find("img").attr("src");
            var name = $(this).find(".contact-name").text();
            var time = $(this).find(".contact-time").text();

            $(".col-right .avatar-img img").attr("src", img);
            $(".col-right .avatar-last-access time").text(time);
        }
    );

});



/// FUNZIONI SCRIPT

function sendMessage() {
    var inputText = $("#input-message").val();

    if(inputText != "") {
        var templateMessage = $(".templates .message-row").clone();

        var time = getTime();

        templateMessage.find(".message-text").text(inputText);
        templateMessage.find(".message-time").text(time);
        templateMessage.addClass("sent");

        $(".chat.active").append(templateMessage);
        setTimeout(cpuMessage, 1000);
        $("#input-message").val("");
        var heightChatActive = $(".chat.active").prop("scrollHeight");
        $(".chats-wrapper").scrollTop(heightChatActive);
    }
}

function cpuMessage() {
    var cpuMessage = $(".templates .message-row").clone();

    cpuMessage.find(".message-text").text("ok");
    var time = getTime();
    cpuMessage.find(".message-time").text(time);

    $(".chat.active").append(cpuMessage);
    var heightChatActive = $(".chat.active").prop("scrollHeight");
    $(".chats-wrapper").scrollTop(heightChatActive);
}

function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    return hours + ":" + minutes;
}