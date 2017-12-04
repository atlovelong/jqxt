/*
* @Author: Administrator
* @Date:   2017-08-28 08:49:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 08:38:10
*/

$(document).ready(function(){
  var lit=$(`.rbtq li`);
  var imgs=$(`.peijianbox .active1`)
  var lit1=$(`.asidebox-box`)
  var imgs2=$(`.asidejs`)
  var box=$(`.bigbox`);
  var img=$(`.img li`);
  var width=$(".bigbox").width();
  var diandian=$(`.dian li`);
  var left=$(`.left`);
  var right=$(`.right`);
  var gwcbox=$(`.gouwuche`);
  var gwc=$(`.gwcbox`);
  var mxdpbox=$(`.mxdpbox`)
  var starleft=$(`.textbox ul li:first-child`);
  var starright=$(`.textbox ul li:last-child`);
  var mxdp=$(`.mxdp`)
  var starwidth=$(".mxdpbox").width();
  var flag=true;
  // console.log(starwidth);
  var now=0;
  var next=0;
  console.log(width)
  // 配件
  lit.each(function(index,value){
      $(value).mouseover(function(){
          for (let i=0;i<lit.length;i++){
            lit.eq(i).removeClass('active');
            imgs.eq(i).removeClass('active2')
            // lit[i].classList.remove(`active`);
            // imgs[i].classList.remove(`active2`);
          }
          $(value).addClass('active');
          imgs.eq(index).addClass('active2')
      })
  })
  //侧导航
  lit1.each(function(index,value){
    $(value).hover(function(){
      imgs2.eq(index).addClass('asidejsactive')
    },function(){
      imgs2.eq(index).removeClass('asidejsactive')
    })
  })
  //轮播图
  
var move=function(){
    next=now+1
    if (next>=img.length) {
      next=0
    }
    diandian.eq(now).removeClass('active');
    diandian.eq(next).addClass('active');
    img.eq(now).animate({opacity:0}, 700);
    img.eq(next).animate({opacity:1}, 700,function(){
      flag=true;
    })
    now=next;
  }
  let t=setInterval(move,3000)
  box.mouseover(function(){
    clearInterval(t)
  })
  box.mouseout(function(){
    t=setInterval(move, 3000)
  })
  right.click(function(){
    if (flag) {
      move()
    }
    flag=false;
  })
  left.click(function(){
    if (flag) {
        next=now-1
        if (now<=0) {
          next=img.length-1
        }
        diandian.eq(now).removeClass('active');
        diandian.eq(next).addClass('active');
        img.eq(now).animate({opacity:0}, 700);
        img.eq(next).animate({opacity:1}, 700,function(){
            flag=true;
        });
        now=next;
    }
    flag=false;    
  })
  var t2;
  diandian.each(function(index,value){
      $(value).mouseover(function(){
        t2=setTimeout(function(){
          diandian.eq(now).removeClass('active');
          diandian.eq(index).addClass('active');
          img.eq(now).animate({opacity:0}, 700);
          img.eq(index).animate({opacity:1}, 700)
          now=index;
        }, 300)                  
      })
      $(value).mouseout(function(){
             clearTimeout(t2)
      })
  }) 
  gwcbox.hover(function(){
    gwc.animate({height:100}, 200)
  },function(){
    gwc.animate({height:0}, 200)
  })
  starright.click(function(){
    mxdp.animate({left:-starwidth}, 500)
  })
  starleft.click(function(){
    mxdp.animate({left:0}, 500)
  })
  var nrbigbox=$(".spt > li:nth-child(1) .nrbigbox");
  console.log(nrbigbox)
  var nrbox=$(".spt > li:nth-child(1) .nrbox");
  var nrleft=$(".spt > li:nth-child(1) .nrleft");
  var nrright=$(".spt > li:nth-child(1)  .nrright");
  var nrwidth=$(".spt > li:nth-child(1) .nrbox").width();
  // console.log(nrwidth)
  var nrdian=$(".spt > li:nth-child(1)> ul> li")
  var nrbigbox1=$(".spt > li:nth-child(2) .nrbigbox1");
  var nrleft1=$(".spt > li:nth-child(2) .nrleft");
  var nrright1=$(".spt > li:nth-child(2) .nrright");
  var nrdian1=$(".spt > li:nth-child(2)> ul> li")
  var nrbigbox2=$(".spt > li:nth-child(3) .nrbigbox");
  var nrleft2=$(".spt > li:nth-child(3) .nrleft");
  var nrright2=$(".spt > li:nth-child(3) .nrright");
  var nrdian2=$(".spt > li:nth-child(3)> ul> li");
  var nrbigbox3=$(".spt > li:nth-child(4) .nrbigbox1");
  var nrleft3=$(".spt > li:nth-child(4) .nrleft");
  var nrright3=$(".spt > li:nth-child(4) .nrright");
  var nrdian3=$(".spt > li:nth-child(4)> ul> li")
  // console.log(nrdian)

  var nrclick=function(box,dian,left,right){
    var n=1;
    console.log(1)
    right.click(function(){
      // console.log(nrwidth)
      box.animate({left:-nrwidth*n}, 500)
      // animate(box,{left:-nrwidth*n})
      for(var i=0;i<dian.length;i++){
        dian.eq(i).removeClass('nractive');
        // dian[i].classList.remove("nractive");
      }
      dian.eq(n).addClass('nractive');
      // dian[n].classList.add('nractive')
      if (n<dian.length-1) {
        n++;
      }else{
        return
      }
    })
    left.click(function(){
      box.animate({left:-nrwidth*(n-1)}, 500)
      // animate(box,{left:-nrwidth*(n-1)})
      for(var i=0;i<dian.length;i++){
        dian.eq(i).removeClass('nractive');
        // dian[i].classList.remove("nractive");
      }
      dian.eq(n-1).addClass('nractive');
      // dian[n-1].classList.add('nractive')
      if (n<=1) {
        return
      }else{
        n--
      }
    })
    dian.each(function(index,value){
      $(value).click(function(){
         for(var i=0;i<dian.length;i++){
          dian.eq(i).removeClass('nractive');
            // dian[i].classList.remove("nractive");
          }
          dian.eq(index).addClass('nractive');
          box.animate({left:-nrwidth*index}, 500)
          // dian[index].classList.add('nractive')
          // animate(box,{left:-nrwidth*index})
      })
    })}
  nrclick(nrbigbox,nrdian,nrleft,nrright);
  nrclick(nrbigbox1,nrdian1,nrleft1,nrright1);
  nrclick(nrbigbox2,nrdian2,nrleft2,nrright2);
  nrclick(nrbigbox3,nrdian3,nrleft3,nrright3);

  var dhbox=$(".dhbox");
  var dhzb=$(".dhzb > li");
  var dhzbbox=$(".dhzb");
  var dhxxk=$(".dhbox > main > ul");
  var aa=true;
  dhzb.each(function(index,value){
      $(value).mouseover(function(){
        for(let i=0;i<dhxxk.length;i++){
          dhxxk.eq(i).removeClass('actives')
          // dhxxk[i].classList.remove("actives")
        }
        // console.log(index)
        dhxxk.eq(index).addClass('actives')
        // dhxxk[index].classList.add('actives')
        if(aa){
          aa=false;
          dhbox.animate({height:200}, 300,function(){
            // aa=true;
        })
        }
        
          // animate(dhbox,{height:200},300);
        })
  })
  dhzbbox.mouseout(function(){
    if (aa) {
      aa=false;
      dhbox.animate({height:0}, 300,function(){
        aa=true;
      })
          // animate(dhbox,{height:0},300)
    }
  })
    

})
 