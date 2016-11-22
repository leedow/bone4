(function(){

  $('#btn').click(function(){

    if(!/^\d{11}$/.test($('input[name="phone"]').val())){
      alert('请输入正确手机号')
      return
    }
    showLayout();

    setTimeout(function(){
      showBag()
    }, 400)

    setTimeout(function(){
      openBag()
    }, 600)

    setTimeout(function(){
      jump();
    }, 600)
  })

  function showLayout(){
    $('#layout-bag').css('display', 'flex').removeClass('layout-bag-init')
  }

  function showBag(){
    $('#bag').removeClass('bag-init')
  }

  function openBag(){
    $('#cover').removeClass('cover-init')
  }

  function jump(){
    $('#bag').addClass('jump')
  }
})()
