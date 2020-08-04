//显示顶部导航栏的数据
function xs() {
    ajax({
        url: "../json/nav.json",
        chenggong: function (data) {
            var dt = eval('(' + data + ')')

            //创建li
            var str1 = `
            <li class="m2"><a href="index.html" >官网</a></li>
            <li class="m2"><a href="javascript:;" >巅峰狂欢</a></li>
            `
            //循环遍历数据,创建li
            dt.forEach(function (item) {
                str1 += `
                <li class="m1"><a href="list.html?id=${item.id}" target="_blank" >${item.name}</a></li>
                `
            })
            $('.dh-nav').html(str1) //创建每一个li

            //添加移入事件
            var div = $('<li></li>')
            div.append(`<a href=""><span>进入频道>></span></a>`)
            //遍历循环数据，显示数据在内容盒子里面
            dt.forEach(function (item1) {
                $('.m1').mouseenter(function () {
                    $(".dh-con").css('display', 'block') //移入让小盒子的内容显示
                    if (item1.id == $(this).index() - 1) {
                        $('.menu-l').empty() //移入时清空当前的内容
                        for (var key in item1.child) {
                            $(".menu-l").append(`<li><a href="list.html?id=${item1.child[key].id}"><img src="${item1.child[key].img}" alt=""><span>${item1.child[key].name}</span></a></li>`).append(div)
                        }
                    }
                }).mouseleave(() => {
                    $(".dh-con").css('display', 'none') //移出让小盒子的内容隐藏
                })
                //移入内容盒子显现和隐藏
                $('.dh-con').mouseenter(function () {
                    $(this).css('display', 'block')
                }).mouseleave(function () {
                    $(this).css('display', 'none')
                })
            })

        }
    })
}
xs()
//搜索栏
function search1() {
    //获取输入框
    var inp = document.getElementById('inp')
    //输入时显示数据
    inp.oninput = function () {
        var val = $('#inp').val()
        if (val.length > 0) {
            $('.search>ul').css('display', 'block')
            ajax({
                url: '../php/search.php',
                data: `keyword=${val}`,
                chenggong: function (d1) {
                    //返回的是一个函数的字符串
                    var a = eval('(' + d1 + ')')
                    var str = ''
                    a.forEach(item => {
                        str += `<li><a href=''>${item.suggest}</a></li>`
                    })
                    $('.search>ul').html(str)
                }
            })
        }
    }
    //失去焦点
    inp.onblur = function () {
        $('.search>ul').css('display', 'none')
        $('#inp').val('')
    }
}
search1()
//欢迎进入功能
$(function () {
    var name = getCookie('login1')
    if (name) {
        $('.nav_l').append(` <li>欢迎${name}进入</li>`)
    }
})
//顶部导航栏
$(window).scroll(function () {
    var newTop = document.body.scrollTop || document.documentElement.scrollTop
    //导航栏效果
    if (newTop > 600) {
        $('#dh').css({
            'position': 'fixed',
            'top': '0px',
            'background': '#fff'
        })
        $('.fh').css('display', 'block')
        $('.crbm-ul').css({
            'position': 'fixed',
            'bottom': '27%'
        })

    } else {
        $('#dh').css({
            'position': 'relative',
            'background': '#f7f7f7'
        })
        $('.fh').css({
            'display': 'none',
            "top": '50%'
        })
        $('.crbm-ul').css({
            'bottom': '0'
        })
    }
    //返回顶部效果
    $('.fh').click(function () {
        var dsq = setInterval(function () {
            newTop -= 300
            if (newTop <= 0) {
                clearInterval(dsq)
            }
            document.documentElement.scrollTop = newTop
        }, 50)
    })
})
//获取数据，渲染主页得主要内容板块
$(function () {
    $.ajax({
        url: "../json/content.json",
        dataType: 'json',
        success(data) {
            var $a = ''
            for (var i = 0; i < data.length; i++) {

                $a += `
                    <div class="tit1 tit2">
                    <p>${data[i].name}</p>
                    <a href="#">查看更多</a>
                </div>
                <div class="gao gao1 gao2">
                    <div class="gao-img ">
                        <div class="img1">
                            <a href="javascript:;">
                                <img src="${data[i].img[0]}" alt="">
                            </a>
                        </div>
                        <div class="img2">
                            <div class="img2-top">
                                <a href="javascript:;">
                                    <img src="${data[i].img[1]}" alt="">
                                </a>
                            </div>
                            <div class="img2-btm">
                                <a href="javascript:;">
                                    <img src="${data[i].img[2]}" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="goods">
                    <div class="goods-wrap">
                        <ul>`
                var str = ''
                for (var j = 0; j < data[i].product.length; j++) {
                    str += `
                    <li>
                        <a href="xiangqing.html?id=${data[i]['product'][j].id}">
                            <img src="${data[i]['product'][j]['img1']}" alt="">
                            <p>${data[i]['product'][j]['title']}</p>
                            <em>${data[i]['product'][j]['title2']}</em>
                            <span>${data[i]['product'][j]['price']}</span>
                        </a>
                    </li>`
                }
                $a += str
                $a += ` 
                        </ul>
                    </div>
                </div>
                `
            }
            document.querySelector('.eve-3').innerHTML = $a
        }
    })
})
//视频效果
$(function () {
    var video1 = document.querySelectorAll('.sp-con')
    var vImg = document.querySelectorAll('.video-box>img')
    var video2 = document.querySelectorAll('.video-box>video')
    for (let i = 0; i < video1.length; i++) {
        //移入播放
        video1[i].onmouseover = function () {
            for (let j = 0; j < video1.length; j++) {
                video2[j].style.display = 'none'
                vImg[j].style.display = 'block'
            }
            video2[i].style.display = 'block'
            vImg[i].style.display = 'none'
        }
        //移出暂停
        video1[i].onmouseout = function () {
            for (let j = 0; j < video1.length; j++) {
                video2[j].style.display = 'none'
                vImg[j].style.display = 'block'
            }
            video2[i].style.display = 'none'
            vImg[i].style.display = 'block'
        }
    }
})
//购物车按钮效果
$(function () {
    fna()

    function fna() {
        var login1 = getCookie('login1')
        var str2 = ''
        var str3 = ''
        //获取localStorage中是否存在数据
        var cartList = JSON.parse(localStorage.getItem('cartList')) || []
        if (login1) {
            //判断该数组中是否存在数据
            if (cartList.length > 0) {
                //登录了，并且有数据
                str2 = cartList.length
                $(".gwc-icon").html(str2)

                str3 = cartList.length
                $(".gwc-icon2 span").html(str3)
            } else {
                str2 = cartList.length
                $(".gwc-icon").html(str2)

                str3 = cartList.length
                $(".gwc-icon2 span").html(str3)
            }
        }
    }
})