$(document).ready(function(){
    $(".item").on("click", function(e){
    e.preventDefault()
    $(".item").removeClass("active");
    $('input[name="currency"]').val(jQuery(this).data("value"));
    jQuery(this).addClass("active")

    });

    $(".apply").click(function(){
        let currencyCode =  $('input[name="currency"]').val();
        let search = new URLSearchParams(window.location.search)

        if(search.has('currency')){
            var text = window.location.href;   
            var url = new URL(text);
            url.searchParams.set("currency", currencyCode); // setting your param
            var newUrl = url.href; 
            window.location.href = newUrl;
            return false;
        }else{
            window.location.href = window.location.href+'&currency='+currencyCode;
        return false;
        }

    });

});
