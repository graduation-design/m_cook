/**
 * Created by Administrator on 2015/4/24.
 */

$(function(){
  var num = 1;
    $(".step-pic").on("click",".selected", function(){
      if(num < 3){
        $(".selected+li").addClass("selected");
        $(this).removeClass("selected");

        num = num+1;
        $(".header").text(num+'/3')
      }
    })

});
