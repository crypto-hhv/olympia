$(window).load(function(){$(".loader").fadeOut(1e3,function(){});})
$(document).ready(function(){jQuery('header nav').meanmenu();$(window).scroll(function(){var scroll=$(window).scrollTop();var windowwidth=$(window).width();var heightDiv=$(".midPanel").height()
if((scroll>=130)&&(windowwidth>900)){$(".headerPanel").addClass("fixedheader").stop();;$(".headerPanel").css("top","0");}
else{$(".headerPanel").removeClass("fixedheader").stop();$(".headerPanel").css("top","-100px");}});});function portfolioFilter(){$(".portfolioFilter").ready(function(){var filterbtns=$('.filterHead ul li').click(function(){if(this.id=='all'){$('.filterBody ul li').fadeIn(700);}else{var el=$('.'+this.id).fadeIn(700);$('.filterBody ul li').not(el).hide();}
$(".filterHead ul li").removeClass("active")
$(this).addClass('active');})});}
function bubbleAnim()
{$('.bubblesL').ready(function(){$('.bubblesL span').css({left:'125px',top:'75px',opacity:'1'});var sizer,rnleft,rntop=0;function throwCords()
{rnleft=Math.floor(Math.random()*300);if(rnleft>=0&&rnleft<=10)
{return rnleft;}
else
{throwCords();}
rntop=Math.floor(Math.random()*100);return rntop;}
function init()
{$('.bubblesL span').each(function(i){throwCords();$(this).animate({left:rnleft+'px',top:rntop+'px',width:sizer+'px',height:sizer+'px'},(i+1)*600).animate({opacity:'0'},(i+1)*50).animate({left:'125px',top:'75px',opacity:'1'},0,function(){init();});});}
init();});}
function bubbleAnim2()
{$('.bubblesR').ready(function(){$('.bubblesR span').css({right:'165px',top:'95px',opacity:'1'});var sizer,rnright,rntop=0;function throwCords()
{rnright=Math.floor(Math.random()*300);if(rnright>=0&&rnright<=100)
{return rnright;}
else
{throwCords();}
rntop=Math.floor(Math.random()*100);return rntop;}
function init()
{$('.bubblesR span').each(function(i){throwCords();$(this).animate({right:rnright+'px',top:rntop+'px',width:sizer+'px',height:sizer+'px'},(i+1)*600).animate({opacity:'0'},(i+1)*50).animate({right:'165px',top:'95px',opacity:'1'},0,function(){init();});});}
init();});}
function bubbleAnim3()
{$('.bubblesB').ready(function(){$('.bubblesB span').css({left:'0px',top:'0px',opacity:'1'});var sizer,rnleft,rntop=0;function throwCords()
{rnleft=Math.floor(Math.random()*300);if(rnleft>=0&&rnleft<=40)
{return rnleft;}
else
{throwCords();}
rntop=Math.floor(Math.random()*300);return rntop;}
function init()
{$('.bubblesB span').each(function(i){throwCords();$(this).animate({left:rnleft+'px',top:rntop+'px',width:sizer+'px',height:sizer+'px'},(i+1)*400).animate({opacity:'0'},(i+1)*50).animate({left:'0px',top:'0px',opacity:'1'},0,function(){init();});});}
init();});}
function errorAnim(){$(".joinParty").click(function(){$(".error").hide();$(".party").show();$(".errorArea").addClass("globeAnimImg");});}
$(document).ready(function(){
	
	$('ul.main-category-list li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.main-category-list li').removeClass('current');
		$('.tab-link').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
if($(window).width() <800 ) {
    $(document).ready(function() {
      $(".click").click(function() {
        if ($('.footer-ac').is(':visible')) {
          $(".footer-ac").slideUp(300);
          $(".plusminus").text('+');
        }
        if ($(this).next(".footer-ac").is(':visible')) {
          $(this).next(".footer-ac").slideUp(300);
          $(this).children(".plusminus").text('+');
        } else {
          $(this).next(".footer-ac").slideDown(300);
          $(this).children(".plusminus").text('-');
        }
      });
    });
}