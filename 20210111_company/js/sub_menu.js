
  function nowMenu(menu){
    console.log(menu)
    $("ul.menu>li").eq(menu).addClass("active");
    //$(".bar").animate({left:menu*200}); //menu 0 1 2 3 4
    $(".bar").css({left:menu*90}); //끊겨나옴

    //$("ul.menu>li").hover(function(){},function(){});
                           //mouse enter  mouse Leave
    // $("ul.menu>li").hover(function(){
    //   var menuLi = $(this).index();
    //   $(".bar").stop().animate({left:menuLi*90},50);
    // },function(){
    //   $(".bar").stop().animate({left:menu*90},50);
    // });
  }
