//获取返回按钮
var fh = document.querySelector('.fh')
window.onscroll = function () {
    var newTop = document.body.scrollTop || document.documentElement.scrollTop
    fh.onclick = function () {
        var dsq = setInterval(function () {
            newTop = 0
            if (newTop <= 0) {
                clearInterval(dsq)
            }
            document.documentElement.scrollTop = newTop
        }, 50)
    }
}
//获取大盒子
var box = document.querySelector('.ee')
//获取cookie
var login1 = getCookie('login1')
//获取localStorage中是否存在数据
var cartList = JSON.parse(localStorage.getItem('cartList')) || []
show1()
//数据呈现
function show1() {
    if (login1) {
        //判断该数组中是否存在数据
        if (cartList.length > 0) {
            //登录了，并且有数据

           //添加商品效果
            var str2=cartList.length
            $(".gwc-icon").html(str2)

            var str3=cartList.length
            $(".gwc-icon2 span").html(str3)

             //获取所有商品是否都被选中
            var all = cartList.every(item => {
                return item.is_select == 1
            })
            //获取所选商品得总数量和总价
            var ar1 = fn1()

            //给页面添加内容

            //拼接上半段内容
            var str = `
                <div class="sc-body">
                    <div class="scbox-top">
                        <h4 class="top_1"><input type="checkbox" name="quanxuan" ${all?"checked":''}>全选</h4>
                        <h4>商品信息</h4>
                        <h4>价格(元)</h4>
                        <h4>数量</h4>
                        <h4>小计(元)</h4>
                        <h4>操作</h4>
                </div>`
            //拼接中间商品内容
            cartList.forEach(item => {
                str += `
                <div class="scbox-con" data-id="${item.id}">
                    <h4 class="top_1">
                        <input type="checkbox" ${item.is_select==1?"checked":''} name="xuan">
                        <img src="${item.img1}" alt="">
                        <a href="xiangqing.html?id=${item.id}"><p class="tit">${item.title1}</p></a>
                    </h4>
                    <h4 class="djj">￥<span class="dan">${item.price}</span></h4>
                    <h4>
                        <input class="aa" id="del" type="button" value="-"${item.cart_number==1?"disabled":''}>
                        <input class="cc" type="text" name="wenben" value="${item.cart_number}">
                        <input class="aa" type="button" value="+" ${item.cart_number==item.goods_number?"disabled":''} id="add">
                    </h4>
                        <h4 class="je">￥<span class="jee">${item.price}</span></h4>
                    <h4 class="sc">
                        <input type="button" value="删除" class="bb" id="delete">
                    </h4>
                </div>`
            })
            //拼接下半段内容
            str += `
                    <div class="sc-foot">
                        <div class="sc-foot_con">
                            <fieldset>
                            <div class="qs">
                                <div class="select">
                                    <input type="checkbox" class="check1" name="quanxuan" ${all?"checked":''}>
                                    <span>全选</span>
                                    <p class="xz" id='clear'>清空购物车</p>
                                </div>
                            </div>
                        <div class="yx">
                            <span class="yxsp">已选<em>${ar1[0]}</em>件商品</span>
                        <div class="hj">合计(不含运费)&nbsp;&nbsp;&nbsp;
                            <span class="price">￥<b>${ar1[1]}</b></span>
                        </div>
                    </div>
                    <div class="js"><button   id="jiesuan">去结算</button></div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>`
            //内容显示
            $('.ee').html(str)
            //使用事件委托得方式操作购物车
        } else {
            box.innerHTML = `
            <div class="shopp-con">
                <div class="shopp_wrap">
                    <div class="show-img">
                        <span>暂无添加的商品</span>
                    </div>
                </div>
                <div class="shopp-btn">
                    <a href="../html/index.html">马上去购物</a>
                </div>
            </div>`
        
            var str2=cartList.length
            $(".gwc-icon").html(str2)

            var str3=cartList.length
            $(".gwc-icon2 span").html(str3)
        }
    } else {
        alert('您还没有登录，请登录之后再跳转')
        //获取地址栏信息
        var url1 = location.href
        //跳转到登录页面
        location.href = 'denglu.html?pathname=' + url1;
    }
}

//使用事件委托得方式操作购物车
$('.ee').click(function (e) {
    var e = e || window.event
    //获取操作得对象
    var tag = e.target || e.srcElement
    //添加商品数量
    if (tag.id == "add") {
        //获取当前对象得id
        var dataId = tag.parentNode.parentNode.getAttribute('data-id')
        //遍历cartList中所有得商品信息
        cartList.forEach(item => {
            if (item.id == dataId) {
                //判断当前商品数量是否跟库存量相等
                item.cart_number = item.cart_number === item.goods_number ? item.goods_number : item.cart_number - 0 + 1
            }
        })
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }
    //减少商品数量
    if (tag.id == "del") {
        //获取当前商品对象得id
        var dataId = tag.parentNode.parentNode.getAttribute('data-id')
        //遍历cartList中所有得商品信息
        for (var item of cartList) {
            if (item.id == dataId) {
                console.log(1)
                item.cart_number = item.cart_number === 1 ? 1 : item.cart_number - 1
                break
            }
        }
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }

    //删除商品
    if (tag.id == "delete") {
        //获取当前对象得id
        var dataId = tag.parentNode.parentNode.getAttribute('data-id')
        //过滤删除商品
        cartList = cartList.filter(item => {
            return item.id != dataId
        })
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }
    //全选
    if (tag.name == "quanxuan") {
        //遍历商品信息
        cartList.forEach(item => {
            //判断当前全选框是否被选中
            item.is_select = tag.checked ? 1 : 0

        })
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }
    //选中框
    if (tag.name == "xuan") {
        //获取当前对象得id
        var dataId = tag.parentNode.parentNode.getAttribute('data-id')
        //遍历当前所有的商品信息
        cartList.forEach(item => {
            //判断是否为操作的商品
            if (item.id == dataId) {
                item.is_select = item.is_select == 1 ? 0 : 1
            }
        })
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }


    //结算
    if (tag.id == "jiesuan") {

        //获取支付的总价
        var zongjia = fn1()[1]
        //判断当前是否选中商品
        if (zongjia > 0) {
            alert("您支付了￥" + zongjia + '钱')
            //删除已购买的商品
            cartList = cartList.filter(item => {
                return item.is_select != 1
            })
        } else {
            alert('请购选产品')
        }
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show1()
    }
    //清空购物车
    if (tag.id == "clear") {
        localStorage.clear()
        cartList = JSON.parse(localStorage.getItem('cartList')) || []
        show1()
    }
})

//针对所选商品数量和总价的操作
function fn1() {
    var num = 0 //总数量
    var price = 0 //总数量
    //遍历当前所有商品
    cartList.forEach(item => {
        //判断当前商品是否被选中
        if (item.is_select == 1) {
            num += parseInt(item.cart_number)
            price += (parseInt(item.cart_number) * parseFloat(item.price))
        }
    })
    return [num, price]
}
 
