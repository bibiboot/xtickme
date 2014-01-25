    "use strict";
    window.addEventListener('load', init, false); 

    function init() {

      initConstants(); 
      extendObject();

      //requestAnimationFrameID = window.requestAnimationFrame(move_body_v);
      //requestAnimationFrameID = window.requestAnimationFrame(move_body_h);
      //requestAnimationFrameID = window.requestAnimationFrame(bend);//Not Working
      //requestAnimationFrameID = window.requestAnimationFrame(fly);
      //requestAnimationFrameID = window.requestAnimationFrame(thigh_split);
      //requestAnimationFrameID = window.requestAnimationFrame(split);
      //requestAnimationFrameID = window.requestAnimationFrame(walk);
      //requestAnimationFrameID = window.requestAnimationFrame(fuck);
      //requestAnimationFrameID = window.requestAnimationFrame(jump);//Not Working
      //requestAnimationFrameID = window.requestAnimationFrame(suck);
      //requestAnimationFrameID = window.requestAnimationFrame(Hello);
      //requestAnimationFrameID = window.requestAnimationFrame(love);
      
    }

    function bend() {
    	if(body0.currentTheta > 90)
    		bendDirection0 = -1;
        // Mid point
        var cx = lthigh0.x.baseVal.value;
        var cy = lthigh0.y. baseVal.value;
    	rotate_body(1, cx, cy, bendDirection0, body0);
    	rotate_lhand(1, cx, cy, bendDirection0, lhand0);
    	rotate_rhand(1, cx, cy, bendDirection0, rhand0);
    	rotate_head(1, cx, cy, bendDirection0, head0);
    	if(body0.currentTheta == 0){
    		bendDirection0 = 1;
    		return;
    	}
    	requestAnimationFrameID = window.requestAnimationFrame(bend);	
    }
    
    function fly() {
    	if(lhand0.currentTheta > 80)
    		flyDirection0 = -1;
    	if(lhand0.currentTheta < -20)
    		flyDirection0 = 1;
        var lcx = lhand0.x.baseVal.value;
        var lcy = lhand0.y. baseVal.value;
        var rcx = rhand0.x.baseVal.value;
        var rcy = rhand0.y. baseVal.value;
    	rotate_lhand(1, 0, 75, flyDirection, lhand0);
    	rotate_rhand(1, 0, 75, -flyDirection, rhand0);
    	requestAnimationFrameID = window.requestAnimationFrame(fly);
    }

    function thigh_split() {
        flyDirection0 = 1;
        var cx = lthigh0.x.baseVal.value;
        var cy = lthigh0.y. baseVal.value;
        rotate_lthigh(1, cx, cy, flyDirection0, lthigh0);
        rotate_rthigh(-1, cx, cy, flyDirection0, rthigh0);
        requestAnimationFrameID = window.requestAnimationFrame(thigh_split);
    }


    function split(cx, cy) {
        // Joint of the thighs around which split happens
        flyDirection = 1;
        rotate_lthigh(1, cx, cy, flyDirection0, lthigh0);
        rotate_rthigh(-1, cx, cy, flyDirection0, rthigh0);
        //requestAnimationFrameID = window.requestAnimationFrame(split);
    }

    function split_fly() {
        // Joint of the thighs around which split happens
        flyDirection0 = 1;
        var cx = lthigh0.x.baseVal.value;
        var cy = lthigh0.y. baseVal.value;
        rotate_lthigh(1, cx, cy, flyDirection0, lthigh0);
        rotate_rthigh(-1, cx, cy, flyDirection0, rthigh0);
        requestAnimationFrameID = window.requestAnimationFrame(split_fly);
    }
    
    var jump_inc=0;
    function jump(){
        //make stickman jumo---Kang Wang
        //jump up
         if(jump_inc<20){
                 jump_inc++;
                 velocity0=400;
                 move_body_v(body0, head0, lhand0, rhand0, lthigh0, rthigh0, velocity0);
                 requestAnimationFrameID = window.requestAnimationFrame(jump);}
        else if(jump_inc>19 && jump_inc<35){
                 jump_inc++;
                 velocity0=270;
                 move_body_v(body0, head0, lhand0, rhand0, lthigh0, rthigh0, velocity0);
                 requestAnimationFrameID = window.requestAnimationFrame(jump);}
        //jump down
        else if(jump_inc>34 && jump_inc<55){
                 jump_inc++;
                 velocity0=-270;
                 move_body_v(body0, head0, lhand0, rhand0, lthigh0, rthigh0, velocity0);
                 requestAnimationFrameID = window.requestAnimationFrame(jump);}
        else if(jump_inc>54 && jump_inc<80){
                 jump_inc++;
                 velocity0=-320;
                 move_body_v(body0, head0, lhand0, rhand0, lthigh0, rthigh0, velocity0);
                 requestAnimationFrameID = window.requestAnimationFrame(jump);}
    }


    var Hello_inc=0;
    function Hello(){
        //Action bye-bye----Kang Wang
          var ltcx = lthigh0.x.baseVal.value;
          var ltcy = lthigh0.y.baseVal.value;
          var rtcx = rthigh0.x.baseVal.value;
          var rtcy = rthigh0.y.baseVal.value;
          var lcx = lhand0.x.baseVal.value;
          var lcy = lhand0.y. baseVal.value;
          var rcx = rhand0.x.baseVal.value;
          var rcy = rhand0.y. baseVal.value;
          //adduct the feet
          if(Hello_inc<=45){
                  Hello_inc++;
                  rotate_lhand(1, lcx, lcy, -1, lhand0);
                  rotate_lthigh(1, ltcx, ltcy, -1, lthigh0);
                  rotate_rthigh(-1, rtcx, rtcy, -1, rthigh0);
                  requestAnimationFrameID = window.requestAnimationFrame(Hello);}
          //adduct the hands
          else if(Hello_inc>45 && Hello_inc<90){
                  Hello_inc++;
                  rotate_lhand(1, lcx, lcy, -1);
                  //rotate_lthigh(1, ltcx, ltcy, -1);
                  requestAnimationFrameID = window.requestAnimationFrame(Hello);}
          //bend body
          else if(Hello_inc>=90 && Hello_inc<91){
                  Hello_inc++;
                  lhand0.y.baseVal.value = lthigh0.y.baseVal.value - 75*sin(body0.currentTheta);
                  lhand0.x.baseVal.value = lthigh0.x.baseVal.value + 75*cos(body0.currentTheta);
                  bend();
                  requestAnimationFrameID = window.requestAnimationFrame(Hello);
         }
    }

    function bend_for_sorry() {
        if(body0.currentTheta < 90){
            bendDirection0 = 1;
            // Mid point
            var cx = lthigh0.x.baseVal.value;
            var cy = lthigh0.y. baseVal.value;
            rotate_body(1, cx, cy, bendDirection0, body0)
            rotate_lhand(1, cx, cy, bendDirection0, lhand0);
            rotate_rhand(1, cx, cy, bendDirection0, rhand0);
            rotate_head(1, cx, cy, bendDirection0, head0);
            //if(body0.currentTheta == 0){
                //bendDirection = 1;
                //return;
            //}
            requestAnimationFrameID = window.requestAnimationFrame(bend_for_sorry);
          }
    }

    function bend_back_from_sorry(){
        //if(body0.currentTheta < 90){
        bendDirection0 = -1;
        // Mid point
        var cx = lthigh0.x.baseVal.value;
        var cy = lthigh0.y. baseVal.value;
        rotate_body(1, cx, cy, bendDirection0, body0)
        rotate_lhand(1, cx, cy, bendDirection0, lhand0);
        rotate_rhand(1, cx, cy, bendDirection0, rhand0);
        rotate_head(1, cx, cy, bendDirection0, head0);
        requestAnimationFrameID = window.requestAnimationFrame(bend_for_sorry);
    }

    // rtong
    function on_the_knees(){
        flyDirection0 = 1;

        if(i<120){
            i++;
            var cx = lthigh0.x.baseVal.value;
            var cy = lthigh0.y.baseVal.value-5*cos(body0.currentTheta);
            if(i<50)
                rotate_lthigh(1, cx, cy, flyDirection0, lthigh0);
            rotate_rthigh(1, cx, cy, flyDirection0, rthigh0);
        } else {
            flag=true;
        }
    }

    // rtong
    function suck(){
        if(flag==false){
            on_the_knees();
            incline();
        } else if (flag==true){
            lean();
            shake();
        }

        requestAnimationFrameID = window.requestAnimationFrame(suck);
    }

    // rtong
    var scale_para=1;
    function love(){
        heart0.transform.baseVal.getItem(0).setScale(scale_para,scale_para);
        scale_para+=0.05;
        requestAnimationFrameID = window.requestAnimationFrame(love);
    }

    // rtong
    function shocked(){
        if (i%5==0){
            velocity0=-velocity0;
        }
        move_body_h(head0, body0, lhand0, rhand0, lthigh, rthigh, velocity0);
        move_body_v(body0, head0, lhand0, rhand0, lthigh0, rthigh0, velocity0); 
        i++;
        requestAnimationFrameID = window.requestAnimationFrame(shocked);
    }

    // rtong
    var j=0;
    function incline(){
        if (j<30){
            move_body_h(head0, body0, lhand0, rhand0, lthigh0, rthigh0);
            elocity=-velocity0;
            move_body_v(body0, head0, lhand0, rhand0, lthigh0, rthigh0); 
            velocity0=-velocity0;
            j++;
        }
    }


    var flag=false;
    var fuck_inc = 0;
    // rtong
    function fuck(){
        if(flag==false){
            hands_on_right();
        } else if (flag){
            lhand0.y.baseVal.value = lthigh0.y.baseVal.value - 75*sin(body0.currentTheta);
            lhand0.x.baseVal.value = lthigh0.x.baseVal.value + 75*cos(body0.currentTheta);
            lean();
            shake();
            fuck_inc = fuck_inc + 1;
            if(fuck_inc>1000) return;
        }

        requestAnimationFrameID = window.requestAnimationFrame(fuck);
    }

    // rtong
    function lean(){
        if(body0.currentTheta > 15)
                bendDirection0 = -1;
        // Mid point
        var cx = lthigh0.x.baseVal.value;
        var cy = lthigh0.y. baseVal.value;
        rotate_body(1, cx, cy, bendDirection0, body0)
        rotate_lhand(1, cx, cy, bendDirection0, lhand0);
        rotate_rhand(1, cx, cy, bendDirection0, rhand0);
        rotate_head(1, cx, cy, bendDirection0, head0);
        if(body0.currentTheta == 0){
                bendDirection0 = 1;
        }
    }

    // rtong
    function hands_on_right() {
        if(lhand0.currentTheta > 0)
                flyDirection0 = -1;
        if(lhand0.currentTheta < -80){
            flag=true;
        }
        rotate_lhand(1, 0, 75, flyDirection0, lhand0);
    }

    // rtong
    var i=0;

    function shake() {
        if(i<20){
            move_body_h(head0, body0, lhand0, rhand0, lthigh0, rthigh0, velocity0);
            i++;
        } else if(i<40){
            if(i==20) velocity0=-velocity0;
            move_body_h(head0, body0, lhand0, rhand0, lthigh0, rthigh0, velocity0);
            i++;
        } else {
            i=0;
            velocity0=-velocity0;
        }
    }

