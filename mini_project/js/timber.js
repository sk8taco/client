$(function(){
    
    $(window).load(function(){ 
        //페이지가 로드되면 slide 컨테이너의 span 3개가 움직이도록 설정
        $('.line').stop().animate({'width':'80%'},300);            
        $('.tit1').fadeIn(550);
        $('.tit2').fadeIn(550);
        $('.tit1').animate({'top':'50%'},550);
        $('.tit2').animate({'top':'70%'},550);
        $('.slide_container > span').fadeOut(10000);
    });
        
    $('#main_menu > ul > li').mouseenter(function(){
        //마우스가 메뉴에 들어가면 sub메뉴와 메뉴백그라운드를 슬라이드다운 시킨다
        $(this).find('a').next('span').stop().animate({'width':'100%'},600);
        $('.sub').stop().slideDown(350);
        $('.menu_bg').stop().slideDown(350);
    });
    $('#main_menu > ul > li').mouseleave(function(){
        //마우스가 빠져나오면 sub메뉴와 메뉴백그라운드를 슬라이드업 시킨다
        $(this).find('a').next('span').stop().animate({'width':'0%'},600);
        $('.sub').stop().slideUp(350);
        $('.menu_bg').stop().slideUp(350);
    });
    
    $('.recruit').on('click',function(event){
		//섭메뉴 중 recruit을 클릭하면 새 창으로 모집양식이 popup된다.
        alert("모집양식을 작성해주세요");
		window.open("recruit.html","","left=400 top=50 width=730 height=480 scrollbars=no status=no");
    });
    
    $('#btn').on('click',function(){
        //햄버거 버튼을 클릭하면 전체를 가리는 백그라운드와 전체 메뉴를 띄운다
        $('.bg').addClass('on');
        $('.block_menu').addClass('on');
        $('.cl_btn').addClass('on');
        $('.block_menu').animate({'top':'10%'},300);
        $('.cl_btn').animate({'top':'25%'},300);
        //문자 투명도 설정
        $('.cl_btn').css('color','rgba(255,255,255,1)');
        $('.cl_btn').css('border-color','rgba(255,255,255,1)');
        $('.block_menu>ul>li>a').css('color','rgba(255,255,255,1)');
        $('.bg_sub a').css('color','rgba(255,255,255,1)');
    })
    
    $('.cl_btn').on('click',function(){
        //X 버튼을 누르면 햄버거버튼 메뉴가 사라지도록 한다.
        $('.bg').removeClass('on');
        $('.block_menu').removeClass('on');
        $('.cl_btn').removeClass('on');
        $('.block_menu').animate({'top':'0'},300);
        $('.cl_btn').animate({'top':'20%'},300);
        //문자 투명도 설정
        $('.cl_btn').css('color','rgba(255,255,255,0.5)');
        $('.cl_btn').css('border-color','rgba(255,255,255,0.5)');
        $('.block_menu>ul>li>a').css('color','rgba(255,255,255,0.5)');
        $('.bg_sub a').css('color','rgba(255,255,255,0.5)');
    })
    $('#media_btn').on('click',function(){
        //media 버튼과 youtube 버튼의 토글기능
        $('.media_contents').addClass('on');
        $('.tv_contents').removeClass('on');
        $('.media_contents').removeClass('off');
    })
    $('#tv_btn').on('click',function(){
        //media 버튼과 youtube 버튼의 토글기능
        $('.tv_contents').addClass('on');
        $('.media_contents').addClass('off');
        $('.media_contents').removeClass('on');
    })
});