
/*轮播图开始*/
var items=document.getElementsByClassName("item");//图片
var goprebtn=document.getElementById("gopre");
var gonextbtn=document.getElementById("gonext");
var points=document.getElementsByClassName("point");//点

var index = 0;//index表示第几张图片在展示---第index张图片有active这个类名

var clearActive=function () {
    for (var i=0;i<items.length;i++){
        items[i].className='item';
    }
    for (var i=0;i<points.length;i++){
        points[i].className='point';
    }
};
var goIndex=function () {
    clearActive();
    console.log(index);
    points[index].className='point active';
    items[index].className='item active';
};
function gitTest() {
    
}
var goNext=function () {
    if (index<3){
        index++;
    }else{
        index=0;
    }
    goIndex();
};
var goPre=function(){
    if (index==0){
        index=3;
    }else{
        index--;
    }
    goIndex();
}

var time=0;//定时器跳转参数
gonextbtn.addEventListener('click',function () {
    goNext();
});
goprebtn.addEventListener('click',function () {
    goPre();
});
for (var i=0;i<points.length;i++){
    points[i].addEventListener('click',function () {
        var pointindex=this.getAttribute('data-index');
        index=pointindex;
        goIndex();
        time=0;
    })
}
//2000毫秒跳转一次

setInterval(function () {
    time++;
    if(time==20){
        goNext();
        time=0;
    }
},100)
/*轮播图结束*//*轮播图结束*//*轮播图结束*//*轮播图结束*//*轮播图结束*//*轮播图结束*//*轮播图结束*//*轮播图结束*/

/*vue注册页面跳转开始*//*vue注册页面跳转开始*//*vue注册页面跳转开始*//*vue注册页面跳转开始*//*vue注册页面跳转开始*/
/*new Vue({
    el:"#vue-app",
    data:{

    },
    methods:{
        TosecondPage:function(){
    var index=document.getElementById("LoginPage");
    index.style.display="block"
}
    }

});*/

function ToLoginPage(){
    var index=document.getElementById("LoginPage");
    var index1=document.getElementById("denglu");
    index1.style.display="none";
    index.style.display="block";
    index.style.zIndex='1001';
}

function Todenglu() {
    var index=document.getElementById("LoginPage");
    var index1=document.getElementById("denglu");
    index.style.display="none";
    index1.style.display="block";
}

function firm() {
    //利用对话框返回的值 （true 或者 false）
    if (confirm("注册成功,是否返回首页去登录？")) {
        /*alert("返回首页中.........");*/
        Todenglu();
    }
else {
        /*alert("点击了取消");*/
    }
}

function GetCode(){
    alert("我们已将验证码信息下发至您的手机，请耐心等待！");

}
/*注册页面跳转结束*//*注册页面跳转结束*//*注册页面跳转结束*//*注册页面跳转结束*//*注册页面跳转结束*//*注册页面跳转结束*/

/*主页跳转开始*//*主页跳转开始*//*主页跳转开始*//*主页跳转开始*//*主页跳转开始*//*主页跳转开始*//*主页跳转开始*/
function ToHomePage() {
    var index = document.getElementById("HomePage");
    var index1 = document.getElementById("denglu");
    index1.style.display = "none";
    index.style.display = "block";
    index.style.zIndex = '1002';
}
/*主页跳转结束*//*主页跳转结束*//*主页跳转结束*//*主页跳转结束*//*主页跳转结束*//*主页跳转结束*//*主页跳转结束*/