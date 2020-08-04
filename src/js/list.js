//先获取导航栏的传递过来的参数
var search = location.search
//渲染列表得数据
if (search) {
    //获取导航栏地址中的数据信息
    var urls = location.href
    var str = urls.split('?')[1]
    var id1 = str.split('=')[1]
    //发送ajax请求获取数据
    $.getJSON('../json/nav.json', function (data) {
        //获取分页器盒子
        var pag = document.querySelector('.pagination')
        //创建单个子元素得列表页
        var str1 = ''
        var ar1 = [] //创建一个存放数据得盒子
        data.forEach(function (item) {
            //渲染父页得数据和分页器
            if (item.id == id1) {
                item.child.forEach(function (k) {
                    k.product.forEach(function (f) {
                        ar1.push(f)
                    })
                })
                var obj = {
                    pagenum: 1,
                    pagesize: 12,
                    total: ar1.length,
                    totalpage: Math.ceil(ar1.length / 12)
                }
                new Pagination(pag, {
                    pageInfo: obj,
                    textInfo: {
                        first: '首页',
                        prev: "上页",
                        next: '下页',
                        last: '尾页'
                    },
                    change(num) {
                        var ar3 = ar1.slice((num - 1) * obj.pagesize, num * obj.pagesize)
                        var str3 = ''
                        var str4 = ''
                        ar3.forEach(function (v) {
                            str3 += `
                            <li class="product">
                            <div class="product-image">
                                <a href="xiangqing.html?id=${v.id}"target="_blank"><img src="${v.img1}" alt="" ></a>
                            </div>
                            <div class="product-right">
                                <p class="product-title">
                                    <a href="xiangqing.html?id=${v.id}" target="_blank" >${v.title}</a>
                                </p>
                            <div class="product-price price1">
                                <p>￥<span>${v.price}</span></p>
                                <em>${v.ts}</em>
                            </div>
                            </div>
                            </li>`
                            str4 += `
                            <li>
                            <div class="nr-wrapr1">
                                <a href="xiangqing.html?id=${v.id}"target="_blank"><img src="${v.img1}" alt="" ></a>
                            </div>
                            <div class="nr-wrapr2">
                                <p class="title">
                                    <a href="xiangqing.html?id=${v.id}" target="_blank">${v.title}</a>
                                </p>
                                <p class="price">
                                    <span>￥<span>${v.price}</span></span>
                                    <em>${v.ts}</em>
                                </p>
                            </div>
                        </li>
                            `

                        })
                        $(".nr-wrap").html(str3)
                        $(".nr-wrapr").html(str4)
                    }
                })
            }
            //渲染子页得数据和分页器
            item.child.forEach(function (item1) {
                //判断导航栏的id和点击得id是否一致
                if (id1 == item1.id) {
                    var a = item1.tit
                    //创建左边盒子得内容
                    for (var b in a) {
                        str1 += `
                        <dl><dt>${a[b]}</dt><dd><ul><li>${item1.fl[b]}</li></ul></dd></dl>   `
                    }
                    //创建一个数组接收数据
                    $('.search-side').html(str1)
                    item1.product.forEach(function (item2) {
                        ar1.push(item2)
                    })
                    var obj = {
                        pagenum: 1,
                        pagesize: 12,
                        total: ar1.length,
                        totalpage: Math.ceil(ar1.length / 12)
                    }
                    new Pagination(pag, {
                        pageInfo: obj,
                        textInfo: {
                            first: '首页',
                            prev: "上页",
                            next: '下页',
                            last: '尾页'
                        },
                        change(num) {
                            var ar2 = ar1.slice((num - 1) * obj.pagesize, num * obj.pagesize)
                            var str = ''
                            var str1 = ''
                            ar2.forEach(function (i) {
                                str += `
                                <li class="product">
                                <div class="product-image">
                                    <a href="xiangqing.html?id=${i.id}"target="_blank"><img src="${i.img1}" alt="" ></a>
                                </div>
                                <div class="product-right">
                                    <p class="product-title">
                                        <a  href="xiangqing.html?id=${i.id}" target="_blank">${i.title}</a>
                                    </p>
                                <div class="product-price price1">
                                    <p>￥<span>${i.price}</span></p>
                                    <em>${i.ts}</em>
                                </div>
                                </div>
                                </li>`
                                str1 += `
                                <li>
                                <div class="nr-wrapr1">
                                    <a href="xiangqing.html?id=${i.id}" target="_blank"><img src="${i.img1}" alt=""></a>
                                </div>
                                <div class="nr-wrapr2">
                                    <p class="title">
                                        <a href="xiangqing.html?id=${i.id}" target="_blank">${i.title}</a>
                                    </p>
                                    <p class="price">
                                        <span>￥<span>${i.price}</span></span>
                                        <em>${i.ts}</em>
                                    </p>
                                </div>
                            </li>`
                            })
                            $(".nr-wrap").html(str)
                            $(".nr-wrapr").html(str1)
                        }
                    })
                }
            })
        })
        //点击按钮显示相对于的按钮的内容
        $('.show2').click(function () {
            $(this).css({
                color: "#00aaa6"
            })
            $('.hide2').css({
                color: "#000"
            })
            $('.nr-wrap').css({
                display: 'block'
            })
            $('.nr-wrapr').css({
                display: 'none'
            })
        })
        $('.hide2').click(function () {
            $(this).css({
                color: "#00aaa6"
            })
            $('.show2').css({
                color: "#000"
            })
            $('.nr-wrap').css({
                display: 'none'
            })
            $('.nr-wrapr').css({
                display: 'block'
            })
        })
    })
}