
//    轮播图列
var ul = document.querySelector('ul')
//    小圆点控件列表
var listO = document.querySelector('.listO')
//    前后控件
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
//    全局变量对象
var start = {
    index: 0,  // 显示第几个图
    num: ul.childElementCount,  //轮播图个数
    mLeft: 0,         //ul偏移量
    width: 508, //ul宽
    spans: "",  //小圆点
    myInter: undefined,

}
ul.style.width = start.num * 508 + "px"   //设置ul总宽度=单个图宽*个数
for (let i = 0; i < start.num; i++) {
    start.spans += '<span></span>'
}
listO.innerHTML = start.spans

function setInter() {
    start.myInter = setInterval(function () {
        start.index++
        _relax()
    }, 1000);
}
//初始化函数
function _relax() {
    for (let i = 0; i < start.num; i++) {
        listO.children[i].classList.remove('active')
    }
    if (start.index > start.num - 1) {
        start.index = 0
    } else if (start.index < 0) {
        start.index = start.num - 1
    }
    listO.children[start.index].classList.add('active')
    start.mLeft = -start.index * start.width + "px"
    ul.style.marginLeft = start.mLeft
}
_relax()
setInter()
next.onclick = function () {
    clearInterval(start.myInter)
    start.index++;
    _relax()
    setInter()

}
prev.onclick = function () {
    clearInterval(start.myInter)
    start.index--;
    _relax()
    setInter()

}
listO.onclick = function (e) {
    clearInterval(start.myInter)
    if (e.target.nodeName = 'SPAN') {
        let list = Array.from(listO.children)
        start.index = list.indexOf(e.target)
        _relax()
        setInter()

    }
}