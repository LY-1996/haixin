var err1 = document.querySelectorAll('.error-i em')
$(function () {
    //进行切换
    //获取账户登录和快捷登录得按钮
    $('.zh').click(function () {
        this.style.color = '#00aaa6'
        $('.kjj').css('color', '#AAA')
        $('.zx').css('display', 'block')
        $('.zz').css('display', 'none')
    })

    $('.kjj').click(function () {
        this.style.color = '#00aaa6'
        $('.zh').css("color", '#AAA')
        $('.zz').css('display', 'block')
        $('.zx').css('display', 'none')
    })

    //验证用户名
    $('[name="user"]').focus(function () {
        $(".error-i").eq(0).css('display', 'none')
    }).blur(function () {
        if ($('[name="user"]').val() == '') {
            $(".error-i").eq(0).css('display', 'block')
        }
    })

    //验证密码
    $("[name='pwd']").focus(function () {
        $(".error-i").eq(1).css('display', 'none')
    }).blur(function () {
        if ($("[name='pwd']").val() == '') {
            $(".error-i").eq(1).css('display', 'block')
        } else {
            var reg = /^[\da-zA-Z]{6,16}$/
            if (reg.test(this.value) == false) {
                $(".error-i").eq(1).css('display', 'block')
                err1[1].innerHTML = '请输入6-16位数字大小写字母组合密码'
            }
        }
    })

    //验证手机号
    $("[name='phone']").focus(function () {
        $(".err1").eq(0).css('display', 'none')
    }).blur(function () {
        if (this.value == '') {
            $(".err1").eq(0).css('display', 'block')
        } else {
            var str = $(this).val()
            var reg = /^1(3|4|5|6|7|8|9)\d{9}$/
            if (reg.test(str)) {
                $(".err1").eq(0).css('display', 'none')
            } else {
                $(".err1").eq(0).html('手机号格式不对')
                $(".err1").eq(0).css('display', 'block')
            }
        }
    })
    //短信验证码
    $("[name='dx']").focus(function () {
        $(".err1").eq(1).css('display', 'none')
    }).blur(function () {
        if ($('.gg').val() == '') {
            $(".err1").eq(1).css('display', 'block')
        }
    })
    var dx = document.querySelector('.gg')
    dx.oninput = function () {
        if ($('.phone').val() != 0 && $('.gg').val().length >= 4) {
            $('.ybtn').css({
                'background': "#1fccd0",
                "color": "#fff"
            })
            $('.control-group>input').css({
                'background': "#1fccd0",
                "color": "#fff"
            })
        }
    }


})
//滚动
$(window).scroll(function () {
    var newTop = document.body.scrollTop || document.documentElement.scrollTop
    $('.fh').click(function () {
        var dsq = setInterval(function () {
            newTop = 0
            if (newTop <= 0) {
                clearInterval(dsq)
            }
            document.documentElement.scrollTop = newTop
        }, 50)
    })
})
//是否勾选同意的协议
var btn = document.getElementById('btn')
$('.is').click(function () {
    if (this.checked) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', 'disabled')
    }
})
//登录
btn.onclick = function () {
    //获取输入框信息
    var u1 = document.querySelector('[name="user"]').value
    var p1 = document.querySelector("[name='pwd']").value

    //获取地址栏中的参数信息
    var pathName = location.search
    //判断地址栏中是否有参数地址
    ajax({
        url: '../php/denglu.php',
        data: `username=${u1}&password=${p1}`,
        chenggong: function (res) {
            if (res == 1) {
                if (pathName) {
                    //获取跳转地址
                    var newUrl = pathName.split('=')[1]
                    //创建cookie
                    setCookie('login1', u1, 604800)
                    location.href = newUrl
                } else {
                    //创建cookie
                    setCookie('login1', u1, 604800)
                    location.href = '../html/index.html'
                }
            } else {
                if (u1 == '' && p1 == '') {
                    alert('请输入内容')
                } else {
                    alert("账号或密码错误，请从新登录")
                }
            }
        }
    })
}
$('#btn1').click(function () {
    if ($('.pp').val('') && $('.gg').val('')) {
        alert('请输入内容')
    }
})