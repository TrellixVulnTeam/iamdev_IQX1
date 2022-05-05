(function($){
    $(document).ready(function(){

        // Checkbox engine
        $('input[type="checkbox"]').on('click', function(){
            if($(this).is(':checked')){
                $(this).parent().addClass('checked');
            }
            else if($(this).is(':not(:checked)')){
                $(this).parent().removeClass('checked');
            }
        });
    });

    /**
     * Realization page category selector
     */
    $(document).ready(function(){
        let btn = $('.realizationsHeader__categories').find('.cat');

        $(btn).on('click', function(){
            let data = $(this).data('name');

            $(btn).each(function(){
                $(this).removeClass('cat--active');
            });

            $(this).addClass('cat--active');

            $.ajax({
                url: iam.ajaxurl,
                type: 'post',
                data: {
                    action: 'getRealizations',
                    data: data,
                },

                beforeSend: function(){
                    $('.realizationsList').fadeTo(200, 0);

                },
                success: function(response) {
                    if(response !== 'empty'){
                        $('.realizationsList__wrap').html(response);
                    }else{
                        $('.realizationsList__wrap').html('<h3 class="empty">Nie znaleziono realizacji w tej kategorii</h3>')
                    }
                    setTimeout(function(){
                        $('.realizationsList').fadeTo(200, 1);
                    }, 150);
                }
            });
        });
    });

    /**
     * Menu mobile
     */
    $(document).ready(function(){
        let menuMobile = $('.menuMobile'),
            mobilemenuitem = $('.menuMobile__wrap').find('.menu-item a');

        $('.toggleMenu').on('click', function(){
            menuMobile.addClass('menuMobile--active');
        });
        $('.menuMobile__close').on('click', function(){
            menuMobile.removeClass('menuMobile--active');
        });
        $(mobilemenuitem).on('click', function(){
            menuMobile.removeClass('menuMobile--active');
        });
    });
    
}(jQuery));