(function(){
  var BASE_URL = "";

  $('body').on('click', '.code', function(){
    var aim = $(this).data('rel');
    $('.code').removeClass('code-current');
    $(this).addClass('code-current');
    $('.code-content').removeClass('code-content-current');
    $('#' + aim).addClass('code-content-current');
  })


  $('body').on('click', '.switch', function(){

    var type = $(this).data('type')||'normal';
    var rel = $(this).data('rel')||'';
    switcher(type, rel, '');
    $(this).addClass('menu-item-current');

  })

  $('body').on('click', '.child-switch', function(){

    var type = $(this).data('type')||'normal';
    var rel = $(this).data('rel')||'';
    switcher(type, rel, 'child-');
    $(this).addClass('menu-item-current');

  })

  function switcher(type, rel , mode){

    $('.' + mode + 'switch').removeClass('menu-item-current');
    var path = BASE_URL + 'demos/' + rel + '.html'
     $.ajax({
       url: path,
       data: {
         time: new Date().getTime()
       },
       success: function(data){
         $('#mid').html('');
         $('#content').html('');
         if(type == 'iframe'){
           $('#frame').css('display', 'block').html(data);
           $('.child-switch').eq(0).click();
         } else {
           if(mode == ''){
            $('#frame').css('display', 'none').html('');
           }

           $('#' + mode + 'mid').html(data);
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
           $('#' + mode + 'content').html(code);
         }

       }
     })

  }

  $('.switch').eq(4).click();
})()
