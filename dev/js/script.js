$(document).ready(function () {
    if($('.dropdown-toggle').length){
         $('.dropdown-toggle').dropdown();
    }

    var windowWidth = $(window).width();
    if($('.dropdown').length){
        $('.dropdown').each(function(){
            if($(this).hasClass('to-select')){
                 var selectText = $(this).find('li:last-child').html(),
                selectDataOptions = $(this).find('li:last-child').html(),
                select = $(this).find('li:last-child');
                $(this).find('.select').html(selectText);
                $(this).find('.select').attr('data-options', selectText) ;
                select.addClass('hide')
            }else{
                 var selectText = $(this).find('li:first-child').html(),
                selectDataOptions = $(this).find('li:first-child').html(),
                select = $(this).find('li:first-child');
                $(this).find('.select').html(selectText);
                $(this).find('.select').attr('data-options', selectText) ;
                select.addClass('hide')
            }

            $('body').on('click','.dropdown li', function(){
                var selectOptions = $(this).html();
                $(this).parent().find('li').removeClass('hide');
                $(this).addClass('hide')
                $(this).parent().parent().find('.select').html(selectOptions);
                $(this).parent().parent().find('.select').attr('data-options', selectOptions);
                $(this).parent().parent().find('.select').addClass('selected');

            });
        });
    }



    $('.add-file-input').change(function(){
         var nameFile = this.files[0].name;
         if (nameFile.length > 26){
             console.log(nameFile, nameFile.length);
             nameFile = nameFile.substr(0, 26) + '...';

         }
         var nameEl = $('#message-block__file-name');

        $(nameEl).css('display', 'block');
        $(nameEl).text(nameFile);

        if (this.files && this.files[0]) {
                var reader = new FileReader();
                var input = this;
                reader.onload = function (e) {


                 var img = $('#preview-img');
                 var imgHolder = $(img).parent();
                    $(imgHolder).css('display', 'block');
                    $(img).attr('src', e.target.result);

                };

                reader.readAsDataURL(input.files[0]);
            }
    });


    var hideScrollStub = function(windowWidth){
        var historyList = $('.history-list');
        if(historyList.length){
        if(windowWidth > 480){



            var offsetTop = $(historyList).offset().top;
            var windowHeight = $(window).height();
            var newHeight = windowHeight - offsetTop - 20;
            $(historyList).css('height', newHeight );
            var outerContainerHeight = $(historyList).outerHeight();
            var historyItems = $('.history-item');
            var fullHeight = 0;
            historyItems.each(function(idx, item){
            fullHeight += $(item).outerHeight();
            });
            var scrollStub = $('.history-list-header-stub');



            if (fullHeight <= outerContainerHeight){
                $(scrollStub).hide();
                $('.history-list-header >div.history-text').css('width', 'calc(100% - 130px - 160px)');
                $('.time-sending').css( 'border-right', 'none');
            }else{
                $(scrollStub).show();
                $('.history-list-header >div.history-text').css('width', 'calc(100% - 130px - 160px - 30px)');
                $('.time-sending').css( 'border-right', '1px solid #969696');
            }
        }
        else{
            $('.history-list-header').hide();
        }
    }
    };
    var hideStatisticsScrollStub = function(){
        var statisticsList = $('.statistics-list');
        if (statisticsList.length){
            var offsetTop = $(statisticsList).offset().top;
            var windowHeight = $(window).height();
            var newHeight = windowHeight - offsetTop - 20;
            $(statisticsList).css('height', newHeight );
            var outerContainerHeight = $(statisticsList).outerHeight();
            var statisticsItems = $('.statistics-item');
            var fullHeight = 0;
            statisticsItems.each(function(idx, item){
            fullHeight += $(item).outerHeight();
            });


            var scrollStub = $('.history-list-header-stub');

             if (fullHeight <= outerContainerHeight){
                $(scrollStub).hide();
                 $('.statistics-list-header').css('padding-right', '0');
                 $('.statistics-messages').css('border-right','none');

            }else{
                $(scrollStub).show();
                $('.statistics-list-header').css('padding-right', '30px');
                $('.statistics-messages').css('border-right','1px solid #969696');
            }


        }

    }




    hideScrollStub(windowWidth);
    hideStatisticsScrollStub();

      window.addEventListener('resize', function(){
          hideScrollStub(windowWidth);
          hideStatisticsScrollStub();
      });


    $('.mobile-menu__icon').click(function(){
        $('.main-menu').slideToggle();
    })

    $('.news-page__tabs-link').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')){
            var target = $(this).attr('href');
            $('.news-page__tabs-link').removeClass('active');
            $(this).addClass('active');
            $('.news-tab').hide();
            $(target).show();
        }
    });

    $('.black-list__item').click(function(){
        $(this).toggleClass('active');
    })

    $('.date-select').click(function(){
        $(this).addClass('selected');
    })
    $('.message-start-btn').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.message-stop-btn').css('display', 'block');
    });
    $('.message-stop-btn').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.message-start-btn').css('display', 'block');
    });

    $('.black-list__item-delete').click(function(e){
        $(this).parent().remove();
    });
    $('.history__item-delete').click(function(e){
        $(this).parent().remove();
    })

});
