"use strict";function xs(){ajax({url:"../json/nav.json",chenggong:function chenggong(data){var dt=eval("("+data+")"),str1='\n            <li class="m2"><a href="http://www.hisense.cn/"  target="_blank">官网</a></li>\n            <li class="m2"><a href="https://www.hisense.com/special_activity_page/venue" target="_blank">巅峰狂欢</a></li>\n            ';dt.forEach(function(n){str1+='<li class="m1"><a href="list.html?id='+n.id+'" target="_blank">'+n.name+"</a></li> "}),$(".dh-nav").html(str1);var div=$("<li>></li>");div.append('<a href=""><span>进入频道></span></a>'),dt.forEach(function(a){$(".m1").mouseenter(function(){if($(".dh-con").css("display","block"),a.id==$(this).index()-1)for(var n in $(".menu-l").empty(),a.child)$(".menu-l").append('<li><a href="list.html?id='+a.child[n].id+'"><img src="'+a.child[n].img+'" alt=""><span>'+a.child[n].name+"</span></a></li>").append(div)}).mouseleave(function(){$(".dh-con").css("display","none")}),$(".dh-con").mouseenter(function(){$(this).css("display","block")}).mouseleave(function(){$(this).css("display","none")})})}})}function search1(){var inp1=document.getElementById("inp");inp1.oninput=function(){var val=$("#inp").val();0<val.length&&($(".search>ul").css("display","block"),ajax({url:"../php/search.php",data:"keyword="+val,chenggong:function chenggong(d1){var a=eval("("+d1+")"),str="";a.forEach(function(n){str+="<li><a href=''>"+n.suggest+"</a></li>"}),$(".search>ul").html(str)}}))},inp.onblur=function(){$(".search>ul").css("display","none"),$("#inp").val("")}}function fna(){var n=getCookie("login1"),a=JSON.parse(localStorage.getItem("cartList"))||[],t="",e="";n&&(a.length,t=a.length,$(".gwc-icon").html(t),e=a.length,$(".gwc-icon2 span").html(e))}xs(),search1(),$(window).scroll(function(){var a=document.body.scrollTop||document.documentElement.scrollTop;100<a?($(".fh").css("display","block"),$(".crbm-ul").css({position:"fixed",bottom:"27%"})):($(".fh").css({display:"none",top:"50%"}),$(".crbm-ul").css({bottom:"0"})),$(".fh").click(function(){var n=setInterval(function(){(a=0)<=0&&clearInterval(n),document.documentElement.scrollTop=a},50)})}),fna();