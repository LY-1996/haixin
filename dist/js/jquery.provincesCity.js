"use strict";$.fn.ProvinceCity=function(){var t=this;t.data("province",["山东","山东"]),t.data("city1",["青岛市","青岛市"]),t.data("city2",["市南区","市南区"]),t.append("<select></select>"),t.append("<select></select>"),t.append("<select></select>");var e=t.find("select").eq(0),n=t.find("select").eq(1),i=t.find("select").eq(2);t.data("province")&&e.append("<option value='"+t.data("province")[1]+"'>"+t.data("province")[0]+"</option>"),$.each(GP,function(t,a){e.append("<option value='"+a+"'>"+a+"</option>")}),t.data("city1")&&n.append("<option value='"+t.data("city1")[1]+"'>"+t.data("city1")[0]+"</option>"),t.data("city2")&&i.append("<option value='"+t.data("city2")[1]+"'>"+t.data("city2")[0]+"</option>");var a="";e.change(function(){n[0].options.length=0,(i[0].options.length=0)==(a=this.selectedIndex)?(t.data("city1")&&n.append("<option value='"+t.data("city1")[1]+"'>"+t.data("city1")[0]+"</option>"),t.data("city2")&&i.append("<option value='"+t.data("city2")[1]+"'>"+t.data("city2")[0]+"</option>")):($.each(GT[a-1],function(t,a){n.append("<option value='"+a+"'>"+a+"</option>")}),$.each(GC[a-1][0],function(t,a){i.append("<option value='"+a+"'>"+a+"</option>")}))}).change();var o="";return n.change(function(){i[0].options.length=0,o=this.selectedIndex,$.each(GC[a-1][o],function(t,a){i.append("<option value='"+a+"'>"+a+"</option>")})}),t};