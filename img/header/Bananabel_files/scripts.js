
     $('#searchBox').click(function() {
        $(".searchGlass").find('i').toggleClass('fa fa-search fa fa-remove')
      });

     $('#eventsBox').click(function() {
        $(".eventCake").find('i').toggleClass('fa fa-birthday-cake fa fa-remove')
      });

     $('#favoritesBox').click(function() {
        $('.favoritesHeart').find('i').toggleClass('fa fa-heart fa fa-remove')
      });

     $('#searchBox').click(function() {
          $('#searchExpand').slideToggle(500);
        });

     $('#eventsBox').click(function() {
          $('#eventsExpand').slideToggle(500);
        });

      $('#favoritesBox').click(function() {
          $('#favoritesExpand').slideToggle(500);
        });
    /* Mobile Nav Button Icon Toggle */
      $('#mobileNavBox').click(function() {
        $(this).find('i').toggleClass('userAvatar fa fa-remove')
      });

       function resizeViewport() {
          var viewportHeight = parseInt($('#siteViewport').height() - $('#footer').height());
          $('#siteViewport').height(viewportHeight);
          
            $( window ).resize(function() {
           $('#siteViewport').height(viewportHeight); 
          });
                }

      resizeViewport();

        function adjustModalMaxHeightAndPosition(){
    $('.modal').each(function(){
        if($(this).hasClass('in') == false){
            $(this).show(); /* Need this to get modal dimensions */
        };
        var contentHeight = $(window).height() - 60;
        var headerHeight = $(this).find('.modal-header').outerHeight() || 2;
        var footerHeight = $(this).find('.modal-footer').outerHeight() || 2;

        $(this).find('.modal-content').css({
            'max-height': function () {
                return contentHeight;
            }
        });

        $(this).find('.modal-body').css({
            'max-height': function () {
                return (contentHeight - (headerHeight + footerHeight));
            }
        });

        $(this).find('.modal-dialog').addClass('modal-dialog-center').css({
            'margin-top': function () {
                return -($(this).outerHeight() / 2);
            },
            'margin-left': function () {
                return -($(this).outerWidth() / 2);
            }
        });
        if($(this).hasClass('in') == false){
            $(this).hide(); /* Hide modal */
        };
    });
};
if ($(window).height() >= 180){
    $(window).resize(adjustModalMaxHeightAndPosition).trigger("resize");
}  