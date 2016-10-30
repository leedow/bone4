(function(){
  $('body').on('click', '.code', function(){
    var aim = $(this).data('rel');
    $('.code').removeClass('code-current');
    $(this).addClass('code-current');
    $('.code-content').removeClass('code-content-current');
    $('#' + aim).addClass('code-content-current');
  })

  $('.switch').click(function(){
    $('.switch').removeClass('menu-item-current');
    $(this).addClass('menu-item-current');
    var path = 'demos/' + $(this).data('rel') + '.html';
     $.ajax({
       url: path,
       data: {
         time: new Date().getTime()
       },
       success: function(data){
         $('#mid').html(data);
         var code = '';
         $('.code').each(function(index){
           var className = 'code-content';
           if(index == 0){
             className += ' code-content-current';
           }
           code += '<div id="' + $(this).data('rel') + '" class="' + className + '">'
            + $(this).html().replace(/</g, '&lt;').replace(/</g, '&gt;').replace(/\n/g, '<br>').replace(/\s/g, '&nbsp;&nbsp;')
            + '</div>';
         })
         $('#content').html(code);
       }
     })
  })

  $('.switch').eq(4).click();
})()
