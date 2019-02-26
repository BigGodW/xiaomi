const urls = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg']
var slide = document.querySelector('.slide')
var imgs = document.querySelector('.slide a img')
var pager = document.querySelector('.ui-pager')
var prev =document.querySelector('.ui-prev')
var next =document.querySelector('.ui-next')
 
var start ={
    index:0,
    num : urls.length,
    lis:'',
    myInter:'',
}
for(let i=0;i<start.num;i++){
    start.lis +='<li></li>'
}
pager.innerHTML = start.lis
function setInter() {
    start.myInter = setInterval(function () {
        start.index--
        _relax()
    }, 4000);
}
function _relax() {
    for (let i = 0; i < start.num; i++) {
        pager.children[i].classList.remove('active')
    }
    if (start.index > start.num - 1) {
        start.index = 0
    } else if (start.index < 0) {
        start.index = start.num - 1
    }
    pager.children[start.index].classList.add('active')
    imgs.src = "img/"+urls[start.index]
}
_relax()
setInter()
next.onclick = function () {
    clearInterval(start.myInter)
    start.index--;
    _relax()
    setInter()

}
prev.onclick = function () {
    clearInterval(start.myInter)
    start.index++;
    _relax()
    setInter()

}
pager.onclick = function (e) {
    clearInterval(start.myInter)
    if (e.target.nodeName = 'LI') {
        let list = Array.from(pager.children)
        start.index = list.indexOf(e.target)
        _relax()
        setInter()

    }
}