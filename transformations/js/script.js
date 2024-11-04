$(document).ready(function() {
    $("#interactive-text").click(function() {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1"; 
    });

    $(window).scroll(function() {
        let scrollPosition = $(window).scrollTop();
        if (scrollPosition > 50) {
            $("body").css("background-color", "#e0f7fa");
        } else {
            $("body").css("background-color", "#f0f0f0");
        }
    });

    $(document).keypress(function(e) {
        if (e.key === "Enter") {
            $("#interactive-text").text("You pressed Enter!").css("color", "#28a745");
        }
    });

    $("#action-button").click(function() {
        $("#interactive-text").fadeOut(500, function() {
            $(this).text("You've been rickrolled!").css("color", "#6f42c1").fadeIn(500);
            setTimeout(function() {
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1"; 
            }, 1000); 
        });
    });
});
