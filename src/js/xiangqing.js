//获取导航栏的地址信息
var search = location.search
if (search) {
    //截取地址，获取地址中的id信息
    var urls = location.href
    var str = urls.split('?')[1]
    var id1 = str.split('=')[1]
    //从列表页进来展现相关的数据
    $.ajax({
        url: '../json/nav.json',
        dataType: 'json',
        success(data) {
            //显示详情页面的数据
            data.forEach(function (item) {
                item.child.forEach(function (item1) {
                    var p1 = item1.product
                    p1.forEach(function (item2) {
                        if (item2.id == id1) {
                            var str = `
                       <!-- 左边放大镜部分 -->
                       <div class="pro-con">
                           <div class="pro-top">
                               <div class="loupe">
                                   <div class="img-box">
                                       <img src="${item2.imgs[0]}" alt="">
                                       <div class="mark"></div>
                                   </div>
                                   <div class="img-btn">
                                       <div class="imgs">
                                           <ul>
                                               <li class="show"><img src="${item2.imgs[0]}" alt=""></li>
                                               <li><img src="${item2.imgs[1]}" alt=""></li>
                                               <li><img src="${item2.imgs[2]}" alt=""></li>
                                               <li><img src="${item2.imgs[3]}" alt=""></li>
                                               <li><img src="${item2.imgs[4]}" alt=""></li>
                                           </ul>
                                       </div>
                                       <span>&lt;</span>
                                       <span>&gt;</span>
                                   </div>
                               </div>
                               <div class="box2">
                               <img src="${item2.imgs[0]}" alt="">
                               </div>
                               <div class="js">
                                   <div class="js-top">
                                       <h1 class="biaoti">${item2.title1}</h1>
                                       <h3 class="nr">
                                           <div>
                                               活动价${item2.price1}!/欲购从速手慢无/本机参加以下活动，购机前请详细阅读
                                               <a href="https://www.hisense.com/special_activity_page/peak_explain">活动规则</a>
                                               <br>
                                               <div>
                                                   参加26-27日10:00-10:30/15:00-15:30/21:00-21:30指定型号购机各瓜分3000元；
                                                   <br>跨品类套购返100/200/300/500元现金补贴、赚积分兑好礼；&nbsp;
                                               </div>
                                           </div>
                                           <div>
                                               晒图评价咨询客服有惊喜+送整机免费保修三年+送180天延保~参与冰洗指定型号组合满减！
                                               <a
                                                   href="https://www.hisense.com/special_activity_page/xyjpd01">冰洗冷套购专享满减&gt;&gt;</a>
                                           </div>
                                           <div>
                                               30天保价+送货入户保障+官方正品
                                           </div>
                                       </h3>
                                       <div class="item-info">
                                           <ul>
                                               <li>
                                               <span class="item-price">
                                                    <span class="js-item-price">￥<em>${item2.price1}</em></span>
                                                    <span class="ui2-price-extra">
                                                    <span class="ui2-price-high">${item2.price}</span>
                                                         <em>${item2.ts}</em>
                                                    </span>
                                                </span>
                                                    <p class="jiangjia">降价提醒</p>
                                               </li>
                                               <li class="info1">
                                                   <label for="">促销</label>
                                                   <div class="info_box">
                                                       <p>[满减]
                                                           <span>满3000元且满2件减100元; 满4000元且满2件减150元; 满5000元且满2件减200元</span>
                                                       </p>
                                                   </div>
                                               </li>
                                               <li class="info1">
                                                   <label for="">承诺</label>
                                                   <div class="info_box">
                                                       <div class="in_box">
                                                           <div class="in_i">
                                                               <img src="../images/btn1.jpg" alt="">
                                                               <span>30天保价</span>
                                                           </div>
                                                           <div class="in_i">
                                                               <img src="../images/btn2.jpg" alt="">
                                                               <span>七天无理由</span>
                                                           </div>
                                                           <div class="in_i">
                                                               <img src="../images/btn3.jpg" alt="">
                                                               <span>全场包邮</span>
                                                           </div>
                                                           <div class="in_i">
                                                               <img src="../images/btn4.jpg" alt="">
                                                               <span>全国联保</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </li>
                                           </ul>
                                       </div>
                                       <div class="item-dw">
                                           <div class="a-left"></div>
                                           <div class="df">
                                               <span>山东</span>
                                               <span>青岛市</span>
                                               <span>市南区</span>
                                               <span class="xiugai">修改</span>
                                               <div class="xh">
                                                   <h4>现货</h4>
                                               </div>
                                           </div>
           
                                       </div>
                                       <div class="item-skus">
                                           <ul class="shuliang">
                                               <li class="choose-amount">
                                                   <h4>选择数量</h4>
                                                   <h3 class="shijian">
                                                       <input class="aa" type="button" value="-">
                                                       <input class="cc" type="text" name="wenben" value="1">
                                                       <input class="aa" type="button" value="+">
                                                   </h3>
                                               </li>
                                               <li class="choose-btns">
                                               <a href="shoppingcar.html" >立即购买</a>
                                                   <button id='btn'>加入购物车</button>
                                               </li>
                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <!-- 详情介绍部分 -->
                       <div class="pro-box">
                           <div class="pro-foot">
                               <div class="pro-ll" id="fix">
                                   <ul class="pro-t">
                                       <li>图片详情</li>
                                       <li>${item2.pj}</li>
                                       <li>包装及参数</li>
                                       <li>服务</li>
                                   </ul>
                               </div>
                               <ol class="foot-con">
                                    <li class="foot-box show">
                                        <p><img src="../images/foot1.jpg" alt=""></p>
                                        <p><img src="../images/foot2.jpg" alt=""></p>
                                        <p><img src="../images/foot3.jpg" alt=""></p>
                                        <p><img src="../images/foot4.jpg" alt=""></p>
                                        <p><img src="../images/foot5.jpg" alt=""></p>
                                        <p><img src="../images/foot6.jpg" alt=""></p>
                                        <p><img src="../images/foot7.jpg" alt=""></p>
                                        <p><img src="../images/foot8.jpg" alt=""></p>
                                        <p><img src="../images/foot10.jpg" alt=""></p>
                                        <p><img src="../images/foot11.jpg" alt=""></p>
                                        <p><img src="../images/foot12.jpg" alt=""></p>
                                        <p><img src="../images/foot13.jpg" alt=""></p>
                                        <p><img src="../images/foot14.jpg" alt=""></p>
                                        <p><img src="../images/foot15.jpg" alt=""></p>
                                        <p><img src="../images/foot16.jpg" alt=""></p>
                                        <p><img src="../images/foot17.jpg" alt=""></p>
                                        <p><img src="../images/foot18.jpg" alt=""></p>
                                        <p><img src="../images/foot19.jpg" alt=""></p>
                                        <p><img src="../images/foot20.jpg" alt=""></p>
                                        <p><img src="../images/foot21.jpg" alt=""></p>
                                        <p class="bac"><br><br></p>
                                    </li>
                                    <li>
                                        <p><img src="../images/cc.png" alt=""></p>
                                        <p class="bac"><br><br></p>
                                    </li>
                                    <li>
                                        <p><img src="../images/xx.png" alt=""></p>
                                        <p class="bac"><br><br></p>
                                    </li>
                                    <li>
                                        <p><img src="//img.shop.hisense.com/2020/06/03/e7d5f781-c3c5-4d2d-be0c-fc03ea75cc11.jpg" alt=""></p>
                                        <p><img src="//img.shop.hisense.com/2020/06/03/ff03b693-6095-4b82-b391-727afcd17b87.jpg" alt=""></p>
                                        <p><img src="//img.shop.hisense.com/2020/06/03/489e9860-0fad-4b37-9ece-07ec2164330c.jpg" alt=""></p>
                                        <p><img src="//img.shop.hisense.com/2020/06/03/bb4a79b6-eb03-4f98-b97b-41f33be46a75.jpg" alt=""></p>
                                        <p><img src="//img.shop.hisense.com/2020/06/03/f8e15829-3bfb-4665-b9d1-d497a21af1fe.jpg" alt=""></p>
                                        <p><img src="//img.shop.hisense.com/2020/06/03/489e9860-0fad-4b37-9ece-07ec2164330c.jpg" alt=""></p>
                                        <p class="bac"><br><br></p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                       `

                            $('.pro1').html(str) //数据展示
                            //tab选项卡
                            let ulLis = document.querySelectorAll('.pro-ll ul>li')
                            let olLis = document.querySelectorAll('.foot-con>li')

                            class Tab {
                                constructor(uls, ols) {
                                    this.ulLis = uls
                                    this.olLis = ols
                                    this.switch1()
                                }
                                //操作切换的方法
                                switch1() {
                                    //把当前的this赋值给变量
                                    let tab1 = this
                                    //遍历导航，并给每个导航添加点击事件
                                    for (let i = 0; i < tab1.ulLis.length; i++) {
                                        tab1.ulLis[i].onclick = function () {
                                            //先把所有的导航和内容的class属性清空
                                            for (let j = 0; j < tab1.ulLis.length; j++) {
                                                tab1.ulLis[j].style.color = '#aaa'
                                                tab1.ulLis[j].className = ''
                                                tab1.olLis[j].className = ''
                                            }
                                            //给指定显示的导航和内容添加class属性值
                                            // this.className = 'active' //这里的this代表点击的那个导航
                                            tab1.ulLis[i].style.color = '#262626'
                                            tab1.olLis[i].className = 'show'
                                        }
                                    }
                                }
                            }
                            new Tab(ulLis, olLis)

                            //加入购物车得效果

                            fna()

                            function fna() {
                                var login1 = getCookie('login1')
                                //获取localStorage中是否存在数据
                                var cartList = JSON.parse(localStorage.getItem('cartList')) || []
                                if (login1) {
                                    //判断该数组中是否存在数据
                                    if (cartList.length > 0) {
                                        //登录了，并且有数据
                                        var str2 = cartList.length
                                        $(".gwc-icon").html(str2)

                                        var str3 = cartList.length
                                        $(".gwc-icon2 span").html(str3)
                                    } else {
                                        var str2 = cartList.length
                                        $(".gwc-icon").html(str2)

                                        var str3 = cartList.length
                                        $(".gwc-icon2 span").html(str3)
                                    }
                                }
                            }

                            $('#btn').click(function () {
                                //获取localStorage对象中的cartList
                                var cartList = localStorage.getItem('cartList')
                                //判断cartList是否存在
                                if (cartList) {
                                    cartList = JSON.parse(cartList)
                                    //判断当前添加的商品是否已存在于localStorage中
                                    var a = 0
                                    cartList.forEach(attr => {
                                        if (attr.id == item2.id) {
                                            attr.cart_number = attr.cart_number - 0 + 1
                                            localStorage.setItem("cartList", JSON.stringify(cartList))
                                            a++
                                        }
                                    })
                                    if (a != 1) {
                                        item2.cart_number = 1
                                        //把该商品追加到购物车中
                                        cartList.push(item2)
                                        localStorage.setItem("cartList", JSON.stringify(cartList))
                                    }
                                } else {
                                    //添加商品效果

                                    //商品数量加1
                                    item2.cart_number = 1
                                    //把当前商品信息添加到cartList中
                                    localStorage.setItem("cartList", JSON.stringify([item2]))
                                }
                                fna()
                            })

                            //放大镜效果
                            var imgBox = document.querySelector('.img-box') //获取左边的图片
                            var mark = document.querySelector('.mark') //移动的小盒子
                            var box2 = document.querySelector('.box2') //右边移动的图片
                            function fn1(e) {
                                //获取光标的位置
                                var left = e.pageX - imgBox.offsetLeft - parseInt((mark.offsetWidth / 2))
                                var top = e.pageY - imgBox.offsetTop - parseInt((mark.offsetHeight / 2))

                                //  获取小盒子在大盒子里面可以移动的位置
                                var minX = 0,
                                    maxX = imgBox.offsetWidth - mark.offsetWidth
                                var minY = 0,
                                    maxY = imgBox.offsetWidth - mark.offsetWidth

                                var leftBox = 0,
                                    topBox = 0

                                //边界判断

                                if (left < minX) {
                                    mark.style.left = minX + 'px'
                                    leftBox = minX
                                } else if (left > maxX) {
                                    mark.style.left = maxX + 'px'
                                    leftBox = maxX
                                } else {
                                    mark.style.left = left + 'px'
                                    leftBox = left
                                }

                                if (top < minY) {
                                    mark.style.top = minY + 'px'
                                    topBox = minY
                                } else if (top > maxY) {
                                    mark.style.top = maxY + 'px'
                                    topBox = maxY
                                } else {
                                    mark.style.top = top + 'px'
                                    topBox = top
                                }

                                //获取图片
                                var imgs = box2.children[0]
                                imgs.style.left = -2 * leftBox + 'px'
                                imgs.style.top = -2 * topBox + 'px'
                            }
                            //移入，移动，移出效果
                            $('.img-box').mouseover(function (e) {
                                var e = e || window.event
                                $('.mark').css({
                                    "display": "block"
                                })
                                $('.box2').css({
                                    "display": "block"
                                })
                                fn1(e)
                            }).mousemove(function (e) {
                                var e = e || window.event
                                fn1(e)
                            }).mouseout(function () {
                                $('.mark').css({
                                    "display": "none"
                                })
                                $('.box2').css({
                                    "display": "none"
                                })
                            })

                            //点击下面的小图片，切换至相关的图片
                            var imgs = document.querySelector('.imgs').children[0].children //获取的是所有的图片
                            for (let i = 0; i < imgs.length; i++) {
                                imgs[i].onclick = function () {
                                    for (let j = 0; j < imgs.length; j++) {
                                        imgs[j].className = ''
                                    }
                                    this.className = 'show'
                                    var a = this.children[0].getAttribute('src')
                                    imgBox.children[0].setAttribute('src', a)
                                    box2.children[0].setAttribute('src', a)
                                }
                            }

                            //点击数量，加一减一
                            var shijian = document.querySelector('.shijian')
                            //事件委托给父元素
                            shijian.onclick = function (e) {
                                var e = e || window.event
                                var target = e.target || e.srcElement
                                //加一
                                var val = document.getElementsByName('wenben')[0].value
                                if (target.value == '+') {
                                    val++
                                    document.getElementsByName('wenben')[0].value = val
                                }
                                //减一
                                if (target.value == '-') {
                                    if (val <= 1) {
                                        val = 1
                                    } else {
                                        val--
                                    }
                                    document.getElementsByName('wenben')[0].value = val
                                }
                            }

                            window.onscroll = fn2
                            //获取返回按钮
                            var fn = document.querySelector('.fh')
                            var ul = document.querySelector('.crbm-ul')
                            //顶部导航栏
                            function fn2() {
                                var newTop = document.body.scrollTop || document.documentElement.scrollTop
                                if (newTop > 1000) {
                                    //商品描述得导航
                                    fix.style = 'position: fixed;top:0px;border-show:0px 10px 8px #cacaca;background:#fff;'
                                } else {
                                    fix.style = 'position: relative;'
                                }
                                if (newTop > 100) {
                                    fn.style = 'display:block;'
                                    ul.style = 'position: fixed;bottom:27%'
                                } else {
                                    fn.style = 'display:none;top:50%'
                                    ul.style = 'bottom:0'

                                }
                            }
                        }
                    })
                })
            })
        }
    })
    //从首页进入展示相关的数据
    $.ajax({
        url: '../json/content.json',
        dataType: 'json',
        success(data) {
            data.forEach(function (item) {
                item.product.forEach(function (item1) {
                    // console.log(item1)
                    if (item1.id == id1) {
                        console.log(item1.title2)
                        var str = `
                        <!-- 左边放大镜部分 -->
                        <div class="pro-con">
                            <div class="pro-top">
                                <div class="loupe">
                                    <div class="img-box">
                                        <img src="${item1.imgs[0]}" alt="">
                                        <div class="mark"></div>
                                    </div>
                                    <div class="img-btn">
                                        <div class="imgs">
                                            <ul>
                                                <li class="show"><img src="${item1.imgs[0]}" alt=""></li>
                                                <li><img src="${item1.imgs[1]}" alt=""></li>
                                                <li><img src="${item1.imgs[2]}" alt=""></li>
                                                <li><img src="${item1.imgs[3]}" alt=""></li>
                                                <li><img src="${item1.imgs[4]}" alt=""></li>
                                            </ul>
                                        </div>
                                        <span>&lt;</span>
                                        <span>&gt;</span>
                                    </div>
                                </div>
                                <div class="box2">
                                <img src="${item1.imgs[0]}" alt="">
                                </div>
                                <div class="js">
                                    <div class="js-top">
                                        <h1 class="biaoti">${item1.title1}</h1>
                                        <h3 class="nr">
                                            <div>
                                                活动价${item1.price1}!/欲购从速手慢无/本机参加以下活动，购机前请详细阅读
                                                <a href="https://www.hisense.com/special_activity_page/peak_explain">活动规则</a>
                                                <br>
                                                <div>
                                                    参加26-27日10:00-10:30/15:00-15:30/21:00-21:30指定型号购机各瓜分3000元；
                                                    <br>跨品类套购返100/200/300/500元现金补贴、赚积分兑好礼；&nbsp;
                                                </div>
                                            </div>
                                            <div>
                                                晒图评价咨询客服有惊喜+送整机免费保修三年+送180天延保~参与冰洗指定型号组合满减！
                                                <a
                                                    href="https://www.hisense.com/special_activity_page/xyjpd01">冰洗冷套购专享满减&gt;&gt;</a>
                                            </div>
                                            <div>
                                                30天保价+送货入户保障+官方正品
                                            </div>
                                        </h3>
                                        <div class="item-info">
                                            <ul>
                                                <li>
                                                <span class="item-price">
                                                     <span class="js-item-price">￥<em>${item1.price1}</em></span>
                                                     <span class="ui2-price-extra">
                                                     <span class="ui2-price-high">${item1.price}</span>
                                                          <em>${item1.ts}</em>
                                                     </span>
                                                 </span>
                                                     <p class="jiangjia">降价提醒</p>
                                                </li>
                                                <li class="info1">
                                                    <label for="">促销</label>
                                                    <div class="info_box">
                                                        <p>[满减]
                                                            <span>满3000元且满2件减100元; 满4000元且满2件减150元; 满5000元且满2件减200元</span>
                                                        </p>
                                                    </div>
                                                </li>
                                                <li class="info1">
                                                    <label for="">承诺</label>
                                                    <div class="info_box">
                                                        <div class="in_box">
                                                            <div class="in_i">
                                                                <img src="../images/btn1.jpg" alt="">
                                                                <span>30天保价</span>
                                                            </div>
                                                            <div class="in_i">
                                                                <img src="../images/btn2.jpg" alt="">
                                                                <span>七天无理由</span>
                                                            </div>
                                                            <div class="in_i">
                                                                <img src="../images/btn3.jpg" alt="">
                                                                <span>全场包邮</span>
                                                            </div>
                                                            <div class="in_i">
                                                                <img src="../images/btn4.jpg" alt="">
                                                                <span>全国联保</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="item-dw">
                                            <div class="a-left"></div>
                                            <div class="df">
                                                <span>山东</span>
                                                <span>青岛市</span>
                                                <span>市南区</span>
                                                <span class="xiugai">修改</span>
                                                <div class="xh">
                                                    <h4>现货</h4>
                                                </div>
                                            </div>
            
                                        </div>
                                        <div class="item-skus">
                                            <ul class="shuliang">
                                                <li class="choose-amount">
                                                    <h4>选择数量</h4>
                                                    <h3 class="shijian">
                                                        <input class="aa" type="button" value="-">
                                                        <input class="cc" type="text" name="wenben" value="1">
                                                        <input class="aa" type="button" value="+">
                                                    </h3>
                                                </li>
                                                <li class="choose-btns">
                                                <a href="shoppingcar.html" >立即购买</a>
                                                    <button id='btn'>加入购物车</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 详情介绍部分 -->
                        <div class="pro-box">
                            <div class="pro-foot">
                                <div class="pro-ll" id="fix">
                                    <ul class="pro-t">
                                        <li>图片详情</li>
                                        <li>${item1.pj}</li>
                                        <li>包装及参数</li>
                                        <li>服务</li>
                                    </ul>
                                </div>
                                <ol class="foot-con">
                                     <li class="foot-box show">
                                         <p><img src="../images/foot1.jpg" alt=""></p>
                                         <p><img src="../images/foot2.jpg" alt=""></p>
                                         <p><img src="../images/foot3.jpg" alt=""></p>
                                         <p><img src="../images/foot4.jpg" alt=""></p>
                                         <p><img src="../images/foot5.jpg" alt=""></p>
                                         <p><img src="../images/foot6.jpg" alt=""></p>
                                         <p><img src="../images/foot7.jpg" alt=""></p>
                                         <p><img src="../images/foot8.jpg" alt=""></p>
                                         <p><img src="../images/foot10.jpg" alt=""></p>
                                         <p><img src="../images/foot11.jpg" alt=""></p>
                                         <p><img src="../images/foot12.jpg" alt=""></p>
                                         <p><img src="../images/foot13.jpg" alt=""></p>
                                         <p><img src="../images/foot14.jpg" alt=""></p>
                                         <p><img src="../images/foot15.jpg" alt=""></p>
                                         <p><img src="../images/foot16.jpg" alt=""></p>
                                         <p><img src="../images/foot17.jpg" alt=""></p>
                                         <p><img src="../images/foot18.jpg" alt=""></p>
                                         <p><img src="../images/foot19.jpg" alt=""></p>
                                         <p><img src="../images/foot20.jpg" alt=""></p>
                                         <p><img src="../images/foot21.jpg" alt=""></p>
                                         <p class="bac"><br><br></p>
                                     </li>
                                     <li>
                                        <p><img src="../images/cc.png" alt=""></p>
                                         <p class="bac"><br><br></p>
                                     </li>
                                     <li>
                                     <p><img src="../images/xx.png" alt=""></p>
                                         <p class="bac"><br><br></p>
                                     </li>
                                     <li>
                                         <p><img src="//img.shop.hisense.com/2020/06/03/e7d5f781-c3c5-4d2d-be0c-fc03ea75cc11.jpg" alt=""></p>
                                         <p><img src="//img.shop.hisense.com/2020/06/03/ff03b693-6095-4b82-b391-727afcd17b87.jpg" alt=""></p>
                                         <p><img src="//img.shop.hisense.com/2020/06/03/489e9860-0fad-4b37-9ece-07ec2164330c.jpg" alt=""></p>
                                         <p><img src="//img.shop.hisense.com/2020/06/03/bb4a79b6-eb03-4f98-b97b-41f33be46a75.jpg" alt=""></p>
                                         <p><img src="//img.shop.hisense.com/2020/06/03/f8e15829-3bfb-4665-b9d1-d497a21af1fe.jpg" alt=""></p>
                                         <p><img src="//img.shop.hisense.com/2020/06/03/489e9860-0fad-4b37-9ece-07ec2164330c.jpg" alt=""></p>
                                         <p class="bac"><br><br></p>
                                     </li>
                                 </ol>
                             </div>
                         </div>
                        `
                        $('.pro1').html(str) //数据展示
                        //tab选项卡
                        let ulLis = document.querySelectorAll('.pro-ll ul>li')
                        let olLis = document.querySelectorAll('.foot-con>li')

                        class Tab {
                            constructor(uls, ols) {
                                this.ulLis = uls
                                this.olLis = ols
                                this.switch1()
                            }
                            //操作切换的方法
                            switch1() {
                                //把当前的this赋值给变量
                                let tab1 = this
                                //遍历导航，并给每个导航添加点击事件
                                for (let i = 0; i < tab1.ulLis.length; i++) {
                                    tab1.ulLis[i].onclick = function () {
                                        //先把所有的导航和内容的class属性清空
                                        for (let j = 0; j < tab1.ulLis.length; j++) {
                                            tab1.ulLis[j].style.color = '#aaa'
                                            tab1.ulLis[j].className = ''
                                            tab1.olLis[j].className = ''
                                        }
                                        //给指定显示的导航和内容添加class属性值
                                        this.className = 'active' //这里的this代表点击的那个导航
                                        tab1.ulLis[i].style.color = '#262626'
                                        tab1.olLis[i].className = 'show'
                                    }
                                }
                            }
                        }
                        new Tab(ulLis, olLis)

                        //更改页面中购物车按钮的数量
                        function fna() {
                            var login1 = getCookie('login1')
                            //获取localStorage中是否存在数据
                            var cartList = JSON.parse(localStorage.getItem('cartList')) || []
                            var str2 = ''
                            var str3 = ''
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
                        fna()

                        //加入购物车得效果
                        $('#btn').click(function () {
                            //获取localStorage对象中的cartList
                            var cartList = localStorage.getItem('cartList')
                            //判断cartList是否存在
                            if (cartList) {
                                cartList = JSON.parse(cartList)
                                //判断当前添加的商品是否已存在于localStorage中
                                var a = 0
                                cartList.forEach(attr => {
                                    if (attr.id == item1.id) {
                                        attr.cart_number = attr.cart_number - 0 + 1
                                        localStorage.setItem("cartList", JSON.stringify(cartList))
                                        a++
                                    }
                                })
                                if (a != 1) {
                                    item1.cart_number = 1
                                    //把该商品追加到购物车中
                                    cartList.push(item1)
                                    localStorage.setItem("cartList", JSON.stringify(cartList))
                                }
                            } else {
                                //商品数量加1
                                item1.cart_number = 1
                                //把当前商品信息添加到cartList中
                                localStorage.setItem("cartList", JSON.stringify([item1]))
                            }
                            fna()
                        })

                        //放大镜效果
                        var imgBox = document.querySelector('.img-box') //获取左边的图片
                        var mark = document.querySelector('.mark') //移动的小盒子
                        var box2 = document.querySelector('.box2') //右边移动的图片
                        function fn1(e) {
                            //获取光标的位置
                            var left = e.pageX - imgBox.offsetLeft - parseInt((mark.offsetWidth / 2))
                            var top = e.pageY - imgBox.offsetTop - parseInt((mark.offsetHeight / 2))

                            //  获取小盒子在大盒子里面可以移动的位置
                            var minX = 0,
                                maxX = imgBox.offsetWidth - mark.offsetWidth
                            var minY = 0,
                                maxY = imgBox.offsetWidth - mark.offsetWidth

                            var leftBox = 0,
                                topBox = 0

                            //边界判断

                            if (left < minX) {
                                mark.style.left = minX + 'px'
                                leftBox = minX
                            } else if (left > maxX) {
                                mark.style.left = maxX + 'px'
                                leftBox = maxX
                            } else {
                                mark.style.left = left + 'px'
                                leftBox = left
                            }

                            if (top < minY) {
                                mark.style.top = minY + 'px'
                                topBox = minY
                            } else if (top > maxY) {
                                mark.style.top = maxY + 'px'
                                topBox = maxY
                            } else {
                                mark.style.top = top + 'px'
                                topBox = top
                            }

                            //获取图片
                            var imgs = box2.children[0]
                            imgs.style.left = -2 * leftBox + 'px'
                            imgs.style.top = -2 * topBox + 'px'
                        }
                        //移入，移动，移出效果
                        $('.img-box').mouseover(function (e) {
                            var e = e || window.event
                            $('.mark').css({
                                "display": "block"
                            })
                            $('.box2').css({
                                "display": "block"
                            })
                            fn1(e)
                        }).mousemove(function (e) {
                            var e = e || window.event
                            fn1(e)
                        }).mouseout(function () {
                            $('.mark').css({
                                "display": "none"
                            })
                            $('.box2').css({
                                "display": "none"
                            })
                        })

                        //点击下面的小图片，切换至相关的图片
                        var imgs = document.querySelector('.imgs').children[0].children //获取的是所有的图片
                        for (let i = 0; i < imgs.length; i++) {
                            imgs[i].onclick = function () {
                                for (let j = 0; j < imgs.length; j++) {
                                    imgs[j].className = ''
                                }
                                this.className = 'show'
                                var a = this.children[0].getAttribute('src')
                                imgBox.children[0].setAttribute('src', a)
                                box2.children[0].setAttribute('src', a)
                            }
                        }

                        //点击数量，加一减一
                        var shijian = document.querySelector('.shijian')
                        //事件委托给父元素
                        shijian.onclick = function (e) {
                            var e = e || window.event
                            var target = e.target || e.srcElement
                            //加一
                            var val = document.getElementsByName('wenben')[0].value
                            if (target.value == '+') {
                                val++
                                document.getElementsByName('wenben')[0].value = val
                            }
                            //减一
                            if (target.value == '-') {
                                if (val <= 1) {
                                    val = 1
                                } else {
                                    val--
                                }
                                document.getElementsByName('wenben')[0].value = val
                            }
                        }


                        window.onscroll = fn2
                        //顶部导航栏
                        function fn2() {
                            //获取返回按钮
                            var fn = document.querySelector('.fh')
                            var ul = document.querySelector('.crbm-ul')
                            var newTop = document.body.scrollTop || document.documentElement.scrollTop
                            //商品描述得导航
                            if (newTop > 1000) {
                                fix.style = 'position: fixed;top:0px;border-show:0px 10px 8px #cacaca;background:#fff;'
                            } else {
                                fix.style = 'position: relative;'
                            }
                            if (newTop > 100) {
                                fn.style = 'display:block;'
                                ul.style = 'position: fixed;bottom:27%'
                            } else {
                                fn.style = 'display:none;top:50%'
                                ul.style = 'bottom:0'

                            }


                        }
                    }
                })
            })
        }
    })
}