$(document).ready(function(){
    // show the resume -DOM

    var resume = document.getElementById("resume");
    var r_logo = document.getElementById("r_logo");
    var resume_img = document.getElementById("f_resume");

    r_logo.onclick = function() {
        resume.style.display = "block";
        resume_img.src = resume_img.src;
        resume_img.alt = resume_img.alt;

    }

    // get the object HTMLSpanElement of close buttom 
    var span = document.getElementsByClassName("close_but")[0];

    span.onclick = function() {
        resume.style.display = "none";

    }
    
    
    // scroll to element -jQuery
    $("a").on('click', function(event){
        if (this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
        
            $('html, body').animate({
                scrollTop: $(hash).offset().top},
                                  800,
                                 function(){
                window.location.hash=hash;
            });
        }
    });
    
});


// scroll smoothly

