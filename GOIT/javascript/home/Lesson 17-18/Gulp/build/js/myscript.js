function changeCheck(a){var a=a,n=a.find("input").eq(0);return n.attr("checked")?(a.css("background-position","0 0"),n.attr("checked",!1)):(a.css("background-position","0 -17px"),n.attr("checked",!0)),!0}function changeCheckStart(a){var a=a,n=a.find("input").eq(0);return n.attr("checked")&&a.css("background-position","0 -17px"),!0}$(function(){var a=$(".dropdown");a.on("mouseenter",function(){$(this).find(".submenu:first").slideDown("fast").animate({backgroundColor:"#c25451"},400)}),a.on("mouseleave",function(){$(this).find(".submenu:first").slideUp("fast").animate({backgroundColor:"#9b3432"},200)})}),$(function(){$(".jcarousel").jcarousel({wrap:"circular",scroll:1,auto:5});$(".jcarousel-control-prev").on("jcarouselcontrol:active",function(){$(this).removeClass("inactive")}).on("jcarouselcontrol:inactive",function(){$(this).addClass("inactive")}).jcarouselControl({target:"-=1"}),$(".jcarousel-control-next").on("jcarouselcontrol:active",function(){$(this).removeClass("inactive")}).on("jcarouselcontrol:inactive",function(){$(this).addClass("inactive")}).jcarouselControl({target:"+=1"}),$(".jcarousel-pagination").on("jcarouselpagination:active","a",function(){$(this).addClass("active")}).on("jcarouselpagination:inactive","a",function(){$(this).removeClass("active")}).jcarouselPagination(),$(".jcarousel").jcarousel({animation:{duration:300,easing:"linear"}}),$(".jcarousel").jcarouselAutoscroll({interval:3e3,target:"+=1",autostart:!0})});var params={changedEl:"#confession",visRows:8};cuSel(params);var params={changedEl:"#zodiac",visRows:5,scrollArrows:!0};cuSel(params),$(function(){$(".niceCheck").mousedown(function(){changeCheck($(this))})}),$(".niceCheck").each(function(){changeCheckStart($(this))});