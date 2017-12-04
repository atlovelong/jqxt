$(document).ready(function(){
	//上导航
    $('.header-1').each(function(index,value){
    	// console.log($('.header-1'))
        $(this).hover(function(){
            $('.scj1').get(index).style.display='block';
        },function(){
            $('.scj1').get(index).style.display='none';
        })
    })
    //侧导航
    $(".asideleft").each(function(index,value){
    	// console.log($(".imgs > ul > li"))
    	$(value).hover(function(){
    		$(".imgs > ul > li").get(index).style.display='block';
    	},function(){
            $('.imgs > ul > li').get(index).style.display='none';
    	})
    })
    //轮播图
    var now=0;
    var next=0;
    var flag=true;
	// console.log($(".img > li"))

	var move=function(){
		next=now+1
		// console.log($(".img > li").get(now))
		if (next>=$(".img > li").length) {
			next=0
		}
		$(".img > li").get(now).style.opacity=0;
		$(".img > li").get(next).style.opacity=1;
		$(".dian > li").get(now).style.backgroundColor="#888";
		$(".dian > li").get(next).style.backgroundColor="#fff";
	    now=next;
	}
	var t=setInterval(move,3000);
    $('.box').mouseover(function(){
        clearInterval(t)
    }).mouseout(function(){
        t=setInterval(move,3000);
    });
	var t2
	$(".dian > li").each(function(index,value){
		var index=index;
		// console.log(value)
 	    value.onmouseover=function(){
 	    	t2=setTimeout(function(){
              $(".dian > li").get(now).style.backgroundColor="#888";
              $(".dian > li").get(index).style.backgroundColor="#fff";
              $(".img > li").get(now).style.opacity=0;
		      $(".img > li").get(index).style.opacity=1;
              now=index;
            }, 200)  
        }
       value.onmouseleave=function(){
             clearTimeout(t2)
        }    
	})	
	// 图片选项卡
    var spwidth=$(".shipinbottom").get(0).offsetWidth;
	// console.log(spwidth);
	$(".shipinbottom > ul > li").each(function(index,value){
		var index=index;
		// console.log(value,index)
        value.onmouseover=function(){
        	for(var i=0;i<$(".shipintop > li").length;i++){
			$(".shipintop > li").get(i).style.opacity=0;
		}
        	$(".shipintop > li").get(index).style.opacity=1;
        }
	})
	$(".left").click(function(){
		$(".shipinbottom > ul").animate({left:-spwidth},300);
		$(".left").css("display","none");
		$(".right").css("display","block");
	})
	$(".right").click(function(){
		$(".shipinbottom > ul").animate({left:0}, 300);
		// animate(spbox,{left:0})
		$(".left").css("display","block");
		$(".right").css("display","none");
	})
	//楼跳转
	var floors=$(`.floor`);
    var lits=$(`.asidebox > li`);
    console.log(lits)
    var lit=$(`.asidebox`);
    var top=$(`.asidetop li`);
    var topbox=$(`.asidetop`);
    // console.log(top)
    var color=[`yellow`,`blue`,`red`,`green`,`pink`,`yellowgreen`];
    var asiflag=true; 
    var headernav=$(".headernav")
    window.onscroll=function(){
		var obj=$("document.body").scrollTop()||$("document.documentElement").scrollTop();
		console.log(obj)
		floors.each(function(index,value){
			asicolor=index;
			if(value.offsetTop-300<=obj){
				for(var i=0;i<lits.length;i++){
					lits.eq(i).css("background-color","#fff")
				   // lits[i].style.backgroundColor=`#fff`;
			    }
			       lits.eq(index).style.backgroundColor=color[index];
			       // lits[index].style.backgroundColor=color[index];
			}
			if (floors.eq(0).offsetTop-300<=obj) {
				if(asiflag){
					asiflag=false;
					headernav.animate({top:0},500)
					// animate(headernav,{display:"block"},200)
					lit.animate({width:40,height:240,opacity:1}, 200)
					// animate(lit,{width:40,height:240,opacity:1},200);
					topbox.animate({width:38,height:38,opacity:1}, 200,function(){
			   	     asiflag1=true;	   

					})
			        // animate(topbox,{width:38,height:38,opacity:1},200,function(){
			   	     // asiflag1=true;	   
			        // });
		        }
		   }
			if (floors[0].offsetTop-300>obj) {
				if (asiflag1) {
			        asiflag1=false;
					animate(headernav,{top:-50})
					// animate(headernav,{opacity:0},300)
					animate(lit,{width:0,height:0,opacity:0},300);
		            animate(topbox,{width:0,height:0,opacity:0},300,function(){
		   	        asiflag=true;
		   	        })
				} 
	        }	
	    })
    }
	lits.each(function(index,value){
		asicolor=index;
		value.onclick=function(){
			animate(document.body,{scrollTop:floors[index].offsetTop})
			animate(document.documentElement,{scrollTop:floors[index].offsetTop})
		} 
		value.onmouseover=function(){

	        console.log(1)
            for(var i=0;i<lits.length;i++){
    	        value.style.backgroundColor=`#fff`;
            }
            lits[index].style.backgroundColor=color[index]
        }
        value.onmouseout=function(){
        	if (index==asicolor) {
        		return
        	}else{
        	    lits[index].style.backgroundColor=`#fff`
        	}
        }   
	})
	top.onclick=function(){
		animate(document.body,{scrollTop:0})
	}
// 	
// 	//右导航
	var rlit=$(".asiboxy");
    var rbox=$(".asibox1")
    var rflag=true;
    rlit.each(function(index,value) {
    	$(value).mouseenter(function() {
    		if (rflag) {
 	    		rflag=false;
	 	    	rbox.eq(index).animate({left:-75,opacity:1}, 500,function(){
 	    			rflag=true;
	 	    	})
    		}
    	});
    	$(value).mouseleave(function(){
	 	    rbox.eq(index).animate({left:-140,opacity:0}, 300)
    	})
    });
})

    