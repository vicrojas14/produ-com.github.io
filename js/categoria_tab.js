            
    /* Logo Header Web */

    jQuery(function(){
        jQuery(window).scroll(function(){
            if(jQuery(this).scrollTop() > 200) {
                 jQuery('#logo-summit img')
                    .css({
                        'width':'92px',
                        'height':'54px',
                        'margin-top':'0px'})
                    .attr('src','images/logo.png');
                    }
            if(jQuery(this).scrollTop() < 200) {
                jQuery('#logo-summit img')
                    .css({
                        'width':'184px',
                        'height':'108px',
                        'margin-top':'0px',
                        '-webkit-transition':'all 0.5s ease',
                        '-moz-transition':'all 0.5s ease',
                        '-ms-transition':'all 0.5s ease',
                        '-o-transition':'all 0.5s ease',
                        'transition':'all 0.5s ease'
                    })    
                .attr('src','images/logo.png');
                }
            });
        });


    /* Header Web */

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>300){
                $('.categoria-tabs').css({
                    'padding-top':'10px',
                    'padding-bottom':'0px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }else{
                $('.categoria-tabs').css({
                    'padding-top':'25px',
                    'padding-bottom':'15px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease'
                });
            }
        });
    });

    /*  Header Menu Web */

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>200){
                $('#header-menu').css({
                    'background': 'transparent',
                    'padding':'12px 0px 0px 0px'
                });
            }else{
                $('#header-menu').css({
                    'background' : 'transparent',
                    'padding':'40px 0px 0px 0px'
                });
            }
        });
    });

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>200){
                $('#header-menu2').css({
                    'background': 'transparent',
                    'padding':'12px 0px 0px 0px'
                });
            }else{
                $('#header-menu2').css({
                    'background' : 'transparent',
                    'padding':'40px 0px 0px 0px'
                });
            }z
        });
    });

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>200){
                $('.categoria-tabs .section-title h1').css({
                    'font-size': '20px'
                });
            }else{
                $('.categoria-tabs .section-title h1').css({
                    'font-size' : '10px'
                });
            }z
        });
    });

    /* Logo Header Movil */

    