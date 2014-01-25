    "use strict";
    /*window.addEventListener('load', init, false); */

    /*function init() {

      initConstants(); 
      extendObject();
    }*/

    function bend2() {
    	if(body1.currentTheta > 90)
    		bendDirection1 = -1;
        // Mid point
        var cx = lthigh1.x.baseVal.value;
        var cy = lthigh1.y. baseVal.value;
    	rotate_body(1, cx, cy, bendDirection1, body1);
    	rotate_lhand(1, cx, cy, bendDirection1, lhand1);
    	rotate_rhand(1, cx, cy, bendDirection1, rhand1);
    	rotate_head(1, cx, cy, bendDirection1, head1);
    	if(body1.currentTheta == 0){
    		bendDirection1 = 1;
    		return;
    	}
    	requestAnimationFrameID = window.requestAnimationFrame(bend2);	
    }
    
    function fly2() {
    	if(lhand1.currentTheta > 80)
    		flyDirection1 = -1;
    	if(lhand1.currentTheta < -20)
    		flyDirection1 = 1;
        var lcx = lhand1.x.baseVal.value;
        var lcy = lhand1.y. baseVal.value;
        var rcx = rhand1.x.baseVal.value;
        var rcy = rhand1.y. baseVal.value;
    	rotate_lhand(1, 0, 75, flyDirection1, lhand1);
    	rotate_rhand(1, 0, 75, -flyDirection1, rhand1);
    	requestAnimationFrameID = window.requestAnimationFrame(fly2);
    }

    function thigh_split2() {
        flyDirection1 = 1;
        var cx = lthigh1.x.baseVal.value;
        var cy = lthigh1.y. baseVal.value;
        rotate_lthigh(1, cx, cy, flyDirection1, lthigh1);
        rotate_rthigh(-1, cx, cy, flyDirection1, rthigh1);
        requestAnimationFrameID = window.requestAnimationFrame(thigh_split2);
    }


    function split2(cx, cy) {
        // Joint of the thighs around which split happens
        flyDirection1 = 1;
        rotate_lthigh(1, cx, cy, flyDirection1, lthigh1);
        rotate_rthigh(-1, cx, cy, flyDirection1, rthigh1);
        //requestAnimationFrameID = window.requestAnimationFrame(split);
    }

    function split_fly2() {
        // Joint of the thighs around which split happens
        flyDirection1 = 1;
        var cx = lthigh1.x.baseVal.value;
        var cy = lthigh1.y. baseVal.value;
        rotate_lthigh(1, cx, cy, flyDirection1, lthigh1);
        rotate_rthigh(-1, cx, cy, flyDirection1, rthigh1);
        requestAnimationFrameID = window.requestAnimationFrame(split_fly2);
    }
    
    var jump_inc=0;
    function jump2(){
        //make stickman jumo---Kang Wang
        //jump up
         if(jump_inc<20){
                 jump_inc++;
                 velocity1=400;
                 move_body_v(body1, head1, lhand1, rhand1, lthigh1, rthigh1, velocity1);
                 requestAnimationFrameID = window.requestAnimationFrame(jump2);}
        else if(jump_inc>19 && jump_inc<35){
                 jump_inc++;
                 velocity1=270;
                 move_body_v(body1, head1, lhand1, rhand1, lthigh1, rthigh1, velocity1);
                 requestAnimationFrameID = window.requestAnimationFrame(jump2);}
        //jump down
        else if(jump_inc>34 && jump_inc<55){
                 jump_inc++;
                 velocity1=-270;
                 move_body_v(body1, head1, lhand1, rhand1, lthigh1, rthigh1, velocity1);
                 requestAnimationFrameID = window.requestAnimationFrame(jump2);}
        else if(jump_inc>54 && jump_inc<80){
                 jump_inc++;
                 velocity1=-320;
                 move_body_v(body1, head1, lhand1, rhand1, lthigh1, rthigh1, velocity1);
                 requestAnimationFrameID = window.requestAnimationFrame(jump2);}
    }


    var Hello_inc=0;
    function Hello2(){
        //Action bye-bye----Kang Wang
          var ltcx = lthigh1.x.baseVal.value;
          var ltcy = lthigh1.y.baseVal.value;
          var rtcx = rthigh1.x.baseVal.value;
          var rtcy = rthigh1.y.baseVal.value;
          var lcx = lhand1.x.baseVal.value;
          var lcy = lhand1.y. baseVal.value;
          var rcx = rhand1.x.baseVal.value;
          var rcy = rhand1.y. baseVal.value;
          //adduct the feet
          if(Hello_inc<=45){
                  Hello_inc++;
                  rotate_lhand(1, lcx, lcy, -1, lhand1);
                  rotate_lthigh(1, ltcx, ltcy, -1, lthigh1);
                  rotate_rthigh(-1, rtcx, rtcy, -1, rthigh1);
                  requestAnimationFrameID = window.requestAnimationFrame(Hello2);}
          //adduct the hands
          else if(Hello_inc>45 && Hello_inc<90){
                  Hello_inc++;
                  rotate_lhand(1, lcx, lcy, -1);
                  //rotate_lthigh(1, ltcx, ltcy, -1);
                  requestAnimationFrameID = window.requestAnimationFrame(Hello2);}
          //bend body
          else if(Hello_inc>=90 && Hello_inc<91){
                  Hello_inc++;
                  lhand1.y.baseVal.value = lthigh1.y.baseVal.value - 75*sin(body1.currentTheta);
                  lhand1.x.baseVal.value = lthigh1.x.baseVal.value + 75*cos(body1.currentTheta);
                  bend();
                  requestAnimationFrameID = window.requestAnimationFrame(Hello2);
         }
    }

    function bend_for_sorry2() {
        if(body1.currentTheta < 90){
            bendDirection1 = 1;
            // Mid point
            var cx = lthigh1.x.baseVal.value;
            var cy = lthigh1.y. baseVal.value;
            rotate_body(1, cx, cy, bendDirection1, body1)
            rotate_lhand(1, cx, cy, bendDirection1, lhand1);
            rotate_rhand(1, cx, cy, bendDirection1, rhand1);
            rotate_head(1, cx, cy, bendDirection1, head1);
            //if(body1.currentTheta == 0){
                //bendDirection1 = 1;
                //return;
            //}
            requestAnimationFrameID = window.requestAnimationFrame(bend_for_sorry2);
          }
    }

    function bend_back_from_sorry2(){
        //if(body1.currentTheta < 90){
        bendDirection1 = -1;
        // Mid point
        var cx = lthigh1.x.baseVal.value;
        var cy = lthigh1.y. baseVal.value;
        rotate_body(1, cx, cy, bendDirection1, body1)
        rotate_lhand(1, cx, cy, bendDirection1, lhand1);
        rotate_rhand(1, cx, cy, bendDirection1, rhand1);
        rotate_head(1, cx, cy, bendDirection1, head1);
        requestAnimationFrameID = window.requestAnimationFrame(bend_for_sorry2);
    }

    // rtong
    function on_the_knees2(){
        flyDirection1 = 1;

        if(i<120){
            i++;
            var cx = lthigh1.x.baseVal.value;
            var cy = lthigh1.y.baseVal.value-5*cos(body1.currentTheta);
            if(i<50)
                rotate_lthigh(1, cx, cy, flyDirection1, lthigh1);
            rotate_rthigh(1, cx, cy, flyDirection1, rthigh1);
        } else {
            flag=true;
        }
    }

    // rtong
    function suck2(){
        if(flag==false){
            on_the_knees2();
            incline2();
        } else if (flag==true){
            lean2();
            shake2();
        }

        requestAnimationFrameID = window.requestAnimationFrame(suck2);
    }

    // rtong
    var scale_para=1;
    function love2(){
        heart0.transform.baseVal.getItem(0).setScale(scale_para,scale_para);
        scale_para+=0.05;
        requestAnimationFrameID = window.requestAnimationFrame(love2);
    }

    // rtong
    function shocked2(){
        if (i%5==0){
            velocity1=-velocity1;
        }
        move_body_h(head1, body1, lhand1, rhand1, lthigh1, rthigh1, velocity1);
        move_body_v(body1, head1, lhand1, rhand1, lthigh1, rthigh1, velocity1); 
        i++;
        requestAnimationFrameID = window.requestAnimationFrame(shocked2);
    }

    // rtong
    var j=0;
    function incline2(){
        if (j<30){
            move_body_h(head1, body1, lhand1, rhand1, lthigh1, rthigh1, velocity1);
            elocity=-velocity1;
            move_body_v(body1, head1, lhand1, rhand1, lthigh1, rthigh1, velocity1); 
            velocity1=-velocity1;
            j++;
        }
    }


    var flag=false;

    // rtong
    function fuck2(){
        console.log('Entered Second');
        if(flag==false){
            hands_on_right2();
        } else if (flag){
            lhand1.y.baseVal.value = lthigh1.y.baseVal.value - 75*sin(body1.currentTheta);
            lhand1.x.baseVal.value = lthigh1.x.baseVal.value + 75*cos(body1.currentTheta);
            lean2();
            shake2();
        }

        requestAnimationFrameID = window.requestAnimationFrame(fuck2);
    }

    // rtong
    function lean2(){
        if(body1.currentTheta > 15)
                bendDirection1 = -1;
        // Mid point
        var cx = lthigh1.x.baseVal.value;
        var cy = lthigh1.y. baseVal.value;
        rotate_body(1, cx, cy, bendDirection1, body1)
        rotate_lhand(1, cx, cy, bendDirection1, lhand1);
        rotate_rhand(1, cx, cy, bendDirection1, rhand1);
        rotate_head(1, cx, cy, bendDirection1, head1);
        if(body1.currentTheta == 0){
                bendDirection1 = 1;
        }
    }

    // rtong
    function hands_on_right2() {
        if(lhand1.currentTheta > 0)
                flyDirection1 = -1;
        if(lhand1.currentTheta < -80){
            flag=true;
        }
        rotate_lhand(1, 0, 75, flyDirection1, lhand1);
    }

    // rtong
    var i=0;

    function shake2() {
        if(i<20){
            move_body_h(head1, body1, lhand1, rhand1, lthigh1, rthigh1, velocity1);
            i++;
        } else if(i<40){
            if(i==20) velocity1=-velocity1;
            move_body_h(head1, body1, lhand1, rhand1, lthigh1, rthigh1, velocity1);
            i++;
        } else {
            i=0;
            velocity1=-velocity1;
        }
    }

