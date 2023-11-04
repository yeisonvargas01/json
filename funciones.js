$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });
});


$(document).ready(function() {
    setTimeout(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    }, 5000);
});

