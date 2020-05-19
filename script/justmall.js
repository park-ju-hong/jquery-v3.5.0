$(function(){        
    tabs();  // tabs 기능 호출(=실행)
    popup(); // popup 기능 호출
    gnb();
});
function gnb(){
    //메인메뉴 마우스 오버하면, 서브메뉴 모두 부드럽게 펼쳐줘
    //그리고 마우스 오버한 메인메뉴는 하이라이트를 적용해줘
    // $("#gnb > li").mouseover(function(){
        // $(this).addClass("on"); //.on 을 적용해
        // $(".lnb").show();
    // });
    // $("#gnb > li").mouseout(function(){
        // $(this).removeClass("on"); 
        // $(".lnb").hide();
    // })
// }
    $("#gnb > li").on({
        mouseover:function(){
            $(this).addClass("on");
            $(".lnb").show(1000);
    },
        mouseout:function(){
            $(this).removeClass("on");
            $(".lnb").hide();
    }
    });
}
function tabs(){ // tabs 기능 정의
    $(".board_title li").click(function(){
        //console.log("클릭한 LI : "+$(this).index());
        if(!$(this).hasClass("on")) {
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
            $("#gallery").toggleClass("hide");
        }
    });   
}
function popup(){ // popup 기능 정의   
    popup_open();
    popup_close();
}
function popup_open(){
    $("#notice li:eq(0)").click(function(){ // 팝업창 열기 기능
        $("#popup").css("display","block");
    });
}
function popup_close(){
    $("#popup input[type=button]").click(function(){
        $(this).parent().css("display","none");
        // 부모를 감추면 - 자식인 나도? 없어지겠죠~
    })
}
