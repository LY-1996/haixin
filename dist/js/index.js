"use strict";function xs(){ajax({url:"../json/nav.json",chenggong:function chenggong(data){var dt=eval("("+data+")"),str1='\n            <li class="m2"><a href="index.html" >官网</a></li>\n            <li class="m2"><a href="javascript:;" >巅峰狂欢</a></li>\n            ';dt.forEach(function(n){str1+='\n                <li class="m1"><a href="list.html?id='+n.id+'" target="_blank" >'+n.name+"</a></li>\n                "}),$(".dh-nav").html(str1);var div=$("<li></li>");div.append('<a href=""><span>进入频道>></span></a>'),dt.forEach(function(i){$(".m1").mouseenter(function(){if($(".dh-con").css("display","block"),i.id==$(this).index()-1)for(var n in $(".menu-l").empty(),i.child)$(".menu-l").append('<li><a href="list.html?id='+i.child[n].id+'"><img src="'+i.child[n].img+'" alt=""><span>'+i.child[n].name+"</span></a></li>").append(div)}).mouseleave(function(){$(".dh-con").css("display","none")}),$(".dh-con").mouseenter(function(){$(this).css("display","block")}).mouseleave(function(){$(this).css("display","none")})})}})}function search1(){var inp=document.getElementById("inp");inp.oninput=function(){var val=$("#inp").val();0<val.length&&($(".search>ul").css("display","block"),ajax({url:"../php/search.php",data:"keyword="+val,chenggong:function chenggong(d1){var a=eval("("+d1+")"),str="";a.forEach(function(n){str+="<li><a href=''>"+n.suggest+"</a></li>"}),$(".search>ul").html(str)}}))},inp.onblur=function(){$(".search>ul").css("display","none"),$("#inp").val("")}}xs(),search1(),$(function(){var n=getCookie("login1");n&&$(".nav_l").append(" <li>欢迎"+n+"进入</li>")}),$(window).scroll(function(){var i=document.body.scrollTop||document.documentElement.scrollTop;600<i?($("#dh").css({position:"fixed",top:"0px",background:"#fff"}),$(".fh").css("display","block"),$(".crbm-ul").css({position:"fixed",bottom:"27%"})):($("#dh").css({position:"relative",background:"#f7f7f7"}),$(".fh").css({display:"none",top:"50%"}),$(".crbm-ul").css({bottom:"0"})),$(".fh").click(function(){var n=setInterval(function(){(i-=300)<=0&&clearInterval(n),document.documentElement.scrollTop=i},50)})}),$(function(){$.ajax({url:"../json/content.json",dataType:"json",success:function(n){for(var i="",a=0;a<n.length;a++){i+='\n                    <div class="tit1 tit2">\n                    <p>'+n[a].name+'</p>\n                    <a href="#">查看更多</a>\n                </div>\n                <div class="gao gao1 gao2">\n                    <div class="gao-img ">\n                        <div class="img1">\n                            <a href="javascript:;">\n                                <img src="'+n[a].img[0]+'" alt="">\n                            </a>\n                        </div>\n                        <div class="img2">\n                            <div class="img2-top">\n                                <a href="javascript:;">\n                                    <img src="'+n[a].img[1]+'" alt="">\n                                </a>\n                            </div>\n                            <div class="img2-btm">\n                                <a href="javascript:;">\n                                    <img src="'+n[a].img[2]+'" alt="">\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="goods">\n                    <div class="goods-wrap">\n                        <ul>';for(var l="",o=0;o<n[a].product.length;o++)l+='\n                    <li>\n                        <a href="xiangqing.html?id='+n[a].product[o].id+'">\n                            <img src="'+n[a].product[o].img1+'" alt="">\n                            <p>'+n[a].product[o].title+"</p>\n                            <em>"+n[a].product[o].title2+"</em>\n                            <span>"+n[a].product[o].price+"</span>\n                        </a>\n                    </li>";i+=l,i+=" \n                        </ul>\n                    </div>\n                </div>\n                "}document.querySelector(".eve-3").innerHTML=i}})}),$(function(){for(var a=document.querySelectorAll(".sp-con"),l=document.querySelectorAll(".video-box>img"),o=document.querySelectorAll(".video-box>video"),n=function(i){a[i].onmouseover=function(){for(var n=0;n<a.length;n++)o[n].style.display="none",l[n].style.display="block";o[i].style.display="block",l[i].style.display="none"},a[i].onmouseout=function(){for(var n=0;n<a.length;n++)o[n].style.display="none",l[n].style.display="block";o[i].style.display="none",l[i].style.display="block"}},i=0;i<a.length;i++)n(i)}),$(function(){var n,i,a,l;n=getCookie("login1"),a=i="",l=JSON.parse(localStorage.getItem("cartList"))||[],n&&(l.length,i=l.length,$(".gwc-icon").html(i),a=l.length,$(".gwc-icon2 span").html(a))});