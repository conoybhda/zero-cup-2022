# ZERO-CUP-2022

>队名： Laoding...Please wait...
>组长： 袁博涵
>组员： 孙奥
>作品题目： 太空之眼
>联系我们：15871726092（电话，微信）；2079445820（qq）

## 一、介绍

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;评委您好，我们是队伍`Loading...Pleace wait...`,本组由两人组成，分别是来自于2022级国家网络安全学院的**袁博涵**和来自与2022级弘毅学堂的**孙奥**。
&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;感谢各位评委能在百忙之中抽出时间审批拙作。

####***注意：*** 由于浏览器同源策略的限制，我们的作品需要在本地服务器中打开（推荐使用vscode中的LiveServer打开）以获得最佳浏览体验。



## 二、作品简介

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;我们组的主题是<b>《太空之眼》</b>,以太空中俯瞰地球之眼为背景，从神州十三号出发，讲述了中国的航天发展史，以**游戏**及**时间轴**的方式加强观众的感知，使观众对中国航天的发展及未来趋势有更深刻的认识。（页面最小宽高按720设置，因为小于720时页面效果无法良好展现）

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;本作品开源，github仓库地址：[ZERO-CUP-2022]()

## 三、设计

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;本作品由三部分组成，主线为[index](#index)，两个分线分别为[game](#game)和[history](#history)
<h3 id = "index">主线（index）：</h3>

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;主线程一共由6个页面和一个加载界面（防止网速过慢导致页面体验差），使用滚动贴合的方式分页。

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;**历程界面**展示神十三的生命历程，在本地服务器中打开时右侧有可以被鼠标吸引的**粒子图像**，当鼠标在左侧列表滑动时会在右侧显示同主题的粒子图像，点击将会在新页面打开相应的页面；

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;**人物界面**以轮播图的方式展示在神十三上工作生活的三位宇航员；

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;**课堂界面**当鼠标划上左上角的按钮时左侧会划入航天器简介，同时中间的相应轨道将会亮起，点击左侧卡片中的了解更多会出现相应的讲解视频

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;**知识界面**分为左右两侧，分别为[**航天历史进程**](#history)和[**航天知识问答**](game)，点击六边形即可进入相应的分线；

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;**结尾界面**主体为以航天精神构成的词云图（随鼠标位置进行相应的响应），下面对中国的航天历程做出总结与升华。

<h3 id = "game"> 航天知识问答（game）：</h3>

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;以快速前近的星空为背景，在渲染出游戏的紧张感的同时体现航天事业发展的迅速；最后的视频体现出中国航天事业**穿过逆境，抵达群星**的历程和发展。

<h3 id = "history"> 航天历史进程（history）：</h3>

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;以数字0，1为背景，使页面充满航天历史数据库的科技感；以时间轴+描述+图片的方式展现从中国古代对太空的幻想一步步实现再到对未来太空发展的创想，突出**寻此苦旅，直指群星**的标题。

##四、使用的第三方库：

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;&nbsp;**​jQuery**： 用于部分DOM操作及部分简单动画；

&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;**lodash**： 用于粒子动画图片改变时粒子的打乱（利用其生成不重复的随机数组）

##五、资料来源

百度
[b站](https://www.bilibili.com/)
[好看视频](https://haokan.baidu.com/)
[iconfout](https://www.iconfont.cn/)
[凡科网](https://kt.fkw.com/)

---

由于时间仓促（特别是和期中重合在一起）和能力有限，作品存在一些差强人意的地方，部分动画效果没有精细的修改，敬请见谅。

​														 				2022.11.6





