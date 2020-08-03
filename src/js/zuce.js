//验证输入框得内容
var iphone = document.querySelector('.phone') //用户名
var ts = document.querySelectorAll('.input-tip')
var err = document.querySelectorAll('.error1') //提示信息的盒子
var err1 = document.querySelectorAll('.error1 em') //用户名输入错误的提示信息
var imgBox = document.querySelector('.tp') //图片验证码
var dx = document.querySelector('.duanxin') //密码
var sj = document.querySelector('.hyz')
var code = document.getElementById('code')
var xbtn = document.getElementById('xbtn')
var pd=document.querySelectorAll('.pd')
function hj() {
    //手机号
    iphone.onfocus = function () {
        ts[0].style.display = 'block'
        err[0].style.display = 'none'
    }
    iphone.onblur = function () {
        if (this.value == '') {
            ts[0].style.display = 'none'
            err[0].style.display = 'block'
        } else {
            //验证用户名的格式
            var str = iphone.value
            var reg =/^[a-zA-Z0-9_-]{4,16}$/
            //判断
            if (reg.test(str)) {
                ts[0].style.display = 'none'
                // err[0].style.display = 'block'
                pd[0].style.display='block'
            } else {
                ts[0].style.display = 'none'
                err[0].style.display = 'block'
                err1[0].innerHTML = '亲，输入的格式不对，请重新输入'
            }
        }
    }

    //图片验证码
    imgBox.onfocus = function () {
        err[1].style.display = 'none'
    }
    imgBox.onblur = function () {
        if (this.value == '') {
            err[1].style.display = 'block'
        }else if(this.value!=code.innerHTML.toLocaleLowerCase()){
            err[1].style.display = 'block'
            err1[1].innerHTML='验证码有误'
        }
    }
    imgBox.oninput = function () {
        if (iphone.value.length != 0 && this.value.length == 4) {
            xbtn.style.background = '#00aaa6'
        }
    }

    //密码
    dx.onfocus = function () {
        ts[1].style.display = 'block'
        err[2].style.display = 'none'
    }
    dx.onblur = function () {
        if (this.value == '') {
            ts[1].style.display = 'none'
            err[2].style.display = 'block'
        } else {
            //验证密码的格式
            var str = dx.value
            var reg = /^[\da-zA-Z]{6,16}$/
            //判断
            if (reg.test(str)) {
                ts[1].style.display = 'none'
                pd[1].style.display='block'
            } else {
                ts[1].style.display = 'none'
                err[2].style.display = 'block'
                err1[2].innerHTML = '亲，输入的格式不对，请重新输入'
            }
        }
    }
}
hj()

// 点击按钮进行后端验证
xbtn.onclick=function(){
    if(iphone.value !=''||imgBox.value!=''||dx.value!=''){
        ajax({
            url:'../php/zuce.php',
            data:'username='+iphone.value+'&pass='+dx.value,
            chenggong:function(d1){
                if(d1==1){
                    alert('该用户已被注册')
                    location.href='../html/zuche.html'
                }else{

                    alert('恭喜注册成功')
                    location.href='../html/denglu.html'
                }
            },
            shibai:function(){
                console.log('请求失败')
            }
        })
    }
}
//随机数
var codeStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// 用来生成随机整数
function getRandom(n, m) {
    n = Number(n);
    m = Number(m);
    // 确保 m 始终大于 n
    if (n > m) {
        var temp = n;
        n = m;
        m = temp;
    }
    return Math.floor(Math.random() * (m - n) + n);
}

// 将随机生成的整数下标对应的字母放入div中
function getCode() {
    var str = '';
    // 验证码有几位就循环几次
    for (var i = 0; i < 4; i++) {
        var ran = getRandom(0, 62);
        str += codeStr.charAt(ran);
    }
    code.innerHTML = str;
    code.style.color = bg3()
}
// 调用函数，页面刷新也会刷新验证码
getCode();

// 点击刷新验证码
sj.onclick = function () {
    getCode();
}

//随机颜色
function bg3() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ',' + g + ',' + b + ")"; //所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
}