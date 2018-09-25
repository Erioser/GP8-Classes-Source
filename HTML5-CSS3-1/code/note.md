


### 知识点

1. H5基本上所有的现代浏览器都支持，低版本浏览器（IE6,7,8）都不支持，IE9部分支持

> 查询兼容情况的网站： can i use -> [链接](https://caniuse.com/)

2. H5新增了很多的语义化标签 (结构标签)

   语义化？

   顾名思义，就是，见名知意，这些标签都代表这某个有意义页面内容区域

   使用语义化标签的好处？

   * 大大提高代码的可读性
   * 提高浏览器的渲染/解析速度
   * 对SEO友好

   SEO？

   Search Engine Optimization 搜索引擎优化

   用户访问应用程序，流量最大的入口就是搜索引擎，所以提高再搜索引擎搜索出来的结果中的排名顺序是极为重要的。

   用户搜索的时候，搜索引擎爬虫就会对大量网页进行数据的爬取，爬虫爬取标签内容的时候也会有先后顺序。

    head > title > meta (description/keywords/author...) 10

    body > 语义化标签（header, section,h1 - h6, p ） 0.1

    标准： 再不影响代码可读性/正常结构的情况下，尽可能的使用语义化标签！

3. H5还新增了一些功能标签

    媒体标签

    video/audio, 取代了flash

    canvas... 在实现游戏等需要进行大量的dom操作的时候，利用canvas可以避免这些dom操作，提高性能。

4. H5还对表单里的表单元素进行增强  （表单元素增强）

    type类型新增了很多： email/tel..... 类型更改后，form在提交的时候会自动对我们该类型的input的value值进行对应的验证
    
    新增了表单属性： min max step, required, autofocus,novalidator multiple....


    在以前，前后端不分离的时候，使用传统的表单提交，有如下的缺点：

    1. 跳转到要提交的地址，需要让后端再帮浏览器调整回来，用户体验差差差！

    2. 表单提交是同步的... 

    前端分离，有了ajax技术了，都会采取表单异步提交，需要阻止表单提交

    * 不要form了 不可取，破坏了表单的提交流程（不规范）
    * 不写submit,使用button，添加点击事件 不可取 （不规范）
    * 依然在form的submit中处理逻辑，需要阻止浏览器的默认行为
    


5. querySelector/querySelectorAll

6. 优雅降级和渐进增强

    指的是在开发过程中对现代浏览器和低版本浏览器兼容处理的方式

    渐进增强： 先写支持低版本浏览器的代码，保证低版本浏览器没有问题，再去针对高版本浏览器进行处理。。。

    优雅降级： 先写高版本浏览器的功能代码，向下兼容，去掉一些在低版本浏览器中不能使用的功能


7. css选择器

    id， class， tag， attr， 后代， 子选择器...

    css样式权重。

    内联样式  style = ""    1000

    id                     100

    class                   10

    tag                     1

    !important              最大


    CSS3中对属性选择器进行了扩展：

    属性:

    = (值等于)/ ~= (值包含完整单词) / ^= (值以什么开头)/ $=(值以什么结束) / |= (值以什么-开头) / *= (值包含)

    结构伪类:

    first-child (是否是第一个孩子)/ last-child (是否是最后一个孩子) / nth-child(n) 是否是第N个孩子, n可以取值为odd （奇数）， even （偶数）

    nth-last-child(n) 是否是倒数第n个孩子。

    only-child 独生子


    first-of-type (是否是同类型中的第一个) / last-of-type (是否是同类型中的最后一个) / nth-of-type(n) 是否是同类型中的第n一个。

    nth-last-of-type(n )是否是同类型中的倒数第n个

    only-of-type  同一类型独生子

    
    :empty 内容是不是空的, :root 根元素


    ---

    表单元素选择器

    :enabled 被启用
    :disabled 被禁用
    :checked 被选中
    :focus 获取焦点

    ::selection 选中后的文字样式

    :not(selector) 否定,表示除了.....

    div>p {  } 父元素为div的p
    div p {  } 外面有div的p
    div~p {  } 前面有div的p (同级)


8. CSS3的属性，基本上现代浏览器都能兼容，但是在某些版本下，需要对其添加前缀进行处理

    webkit   safari/old chrome    apple / google     -webkit-

    blink    chrome                 google           -webkit-

    gecko    firefox                mozillar         -moz-

    presto   opera                  欧朋              -o-

    trident  IE                     microsoft        -ms-



        -ms-border-radius: 50%;
         -o-border-radius: 50%;
    -webkit-border-radius: 50%;
            border-radius: 50%;


    
    * box-shadow 盒子阴影  x轴偏移量  y轴偏移量  模糊半径  阴影颜色，隔开可以写多组

    * text-shadow 文字阴影，参数和box-shadow一样

    * 文本换行 word-break, word-wrap

        word-wrap
        属性值：
        normal
        说明：只在允许的断字点换行（浏览器保持默认处理）
        break-word
        说明：属性允许长单词或 URL 地址换行到下一行。
        属性用来标明是否允许浏览器在单词内进行断句，这是为了防止当一个字符串太长而找不到它的自然断句点时产生溢出现象。

        Word-break

        属性值：
        break-all
        说明：它断句的方式非常粗暴，它不会尝试把长单词挪到下一行，而是直接进行单词内的断句
        Keep-all
        说明：文本不会换行，只能在半角空格或连字符处换行。

    * background: 

        background-origin

        background-clip

        background-size

        box-shadow

        border-radius...

    * transform (2d, 3d | translate, scale, rotate, skew) / animation / transition 


9. css3里允许自定义字体

    项目中出现的特殊字体，我们的处理方式：

    1. 使用图片! 

        适合特殊字体出现的少，是静态的。

    2. 自定义一个特殊字体

        针对的是特殊字体出现的多，多是静态的。


    css3中使用@font-face关键字来自定义字体

    @font-face{
        url: ''// 引入字体的文件资源
        font-family: ''// 指定我们自定义的自己的名字
    }

    在web开发中，自定义特殊字体很少用：

    1. 字体文件有兼容问题...
    2. 字体文件太大，导致网页响应速度慢，耗时长，使用成本


    字体图标是开发中必不可少的。字体图标也是一种字体，大多情况下使用的是ali图标

    font-awesome ..... 

