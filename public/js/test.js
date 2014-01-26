    "use strict";
    window.addEventListener('load', init, false); 

    function init() {

      initConstants(); 
      extendObject();
      
    }

    function bend() {
        //BO
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
                //BO
                if(flyCount0++ < 100)
                {
                if(lhand0.currentTheta > 80)
                        flyDirection0 = -1;
                if(lhand0.currentTheta < -20)
                        flyDirection0 = 1;
                }
                else
                {
                        if(lhand0.currentTheta > 0)
                                flyDirection0 = -1;
                        if(lhand0.currentTheta < 0)
                        flyDirection0 = 1
                        if(lhand0.currentTheta == 0)
                        {
                                flyDirection0 = 1;
                                flyCount0 = 0;
                                return;
                        }
                }
                rotate_lhand(5, body0.x.baseVal.value, body0.y.baseVal.value + 25, flyDirection0, lhand0);
        rotate_rhand(5, body0.x.baseVal.value, body0.y.baseVal.value + 25, -flyDirection0, rhand0);
        requestAnimationFrameID = window.requestAnimationFrame(fly);
    }

    function fly_lol() {
                //BO
                if(flyCount0++ < 100)
                {
                if(lhand0.currentTheta > 80)
                        flyDirection0 = -1;
                if(lhand0.currentTheta < -20)
                        flyDirection0 = 1;
                }
                else
                {
                        if(lhand0.currentTheta > 0)
                                flyDirection0 = -1;
                        if(lhand0.currentTheta < 0)
                        flyDirection0 = 1
                        if(lhand0.currentTheta == 0)
                        {
                                flyDirection0 = 1;
                                flyCount0 = 0;
                                return;
                        }
                }
                rotate_lhand(5, body0.x.baseVal.value, body0.y.baseVal.value + 25, flyDirection0, lhand0);
        rotate_rhand(5, body0.x.baseVal.value, body0.y.baseVal.value + 25, -flyDirection0, rhand0);
    }

    function thigh_split() {
        flyDirection0 = 1;
        var cx = lthigh0.x.baseVal.value;
        var cy = lthigh0.y. baseVal.value;
        rotate_lthigh(1, cx, cy, flyDirection0, lthigh0);
        rotate_rthigh(-1, cx, cy, flyDirection0, rthigh0);
        requestAnimationFrameID = window.requestAnimationFrame(thigh_split);
    }


    function split(theta, cx, cy, direction) {
        //BO
        // Joint of the thighs around which split happens
        rotate_lthigh(theta, cx, cy, direction, lthigh0);
        rotate_rthigh(-theta, cx, cy, direction, rthigh0);
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

		else if(jump_inc==80){

            resetall();
			back_to_position();
			resetPosition();}

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
                  //requestAnimationFrameID = window.requestAnimationFrame(Hello);
				  }
          //adduct the hands
          else if(Hello_inc>45 && Hello_inc<90){
                  Hello_inc++;
                  rotate_lhand(1, lcx, lcy, -1, lhand0);
                  //rotate_lthigh(1, ltcx, ltcy, -1);
                  //requestAnimationFrameID = window.requestAnimationFrame(Hello);
				  }
          //bend body
          else if(Hello_inc>=90 && Hello_inc<91){
                  Hello_inc++;
                  lhand0.y.baseVal.value = lthigh0.y.baseVal.value - 75*sin(body0.currentTheta);
                  lhand0.x.baseVal.value = lthigh0.x.baseVal.value + 75*cos(body0.currentTheta);
                  console.log("bend don't run");
				  bend();
				  console.log("bend run");
                  //requestAnimationFrameID = window.requestAnimationFrame(Hello);
				  }
		  else if(Hello_inc++==300){
			  console.log(Hello_inc);
			  resetall();
			  resetPosition();
			  return;
			  }
			  requestAnimationFrameID = window.requestAnimationFrame(Hello);

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
    var suck_inc=0;
    function suck(){
        if(suck_inc<400){
            suck_inc++;
            if(flag==false){
                on_the_knees();
                incline();
            } else if (flag==true){
                lean();
                shake();
            }
    
            requestAnimationFrameID = window.requestAnimationFrame(suck);
        } else {
            resetall();
            resetPosition();
        }
    }

    // rtong
    var scale_para=1;
    var love_inc=1;
    function love(){
        if(love_inc<200){
            love_inc++;
            if(scale_para<1.5){
                $('#heart0').css('display', 'block');
                heart0.transform.baseVal.getItem(0).setScale(scale_para,scale_para);
                scale_para+=0.015;
            } else {
                scale_para=1;
                $('#heart0').css('display', 'none');
            }
            requestAnimationFrameID = window.requestAnimationFrame(love);
        } else {
            resetall();
            resetPosition();
        }
    }

    // rtong
    function shocked(){
        if(i<200){
            if (i%5==0){
                velocity0=-velocity0;
            }
            move_body_h(head0, body0, lhand0, rhand0, lthigh0, rthigh0, velocity0);
            move_body_v(body0, head0, lhand0, rhand0, lthigh0, rthigh0, velocity0); 
            i++;
            requestAnimationFrameID = window.requestAnimationFrame(shocked);
        } else {
            resetall();
            resetPosition();
        }
    }

    // rtong
    var j=0;
    function incline(){
        if (j<30){
            move_body_h(head0, body0, lhand0, rhand0, lthigh0, rthigh0, velocity0);
            velocity0=-velocity0;
            move_body_v(body0, head0, lhand0, rhand0, lthigh0, rthigh0, velocity0); 
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
            if(fuck_inc>200) {
                resetall();
                resetPosition();
                return;
            }
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
        rotate_lhand(1, xOffset0, 75, flyDirection0, lhand0);
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

    // rtong2
    var wicked_inc=0;
    function wicked(){
        $('#mouth0').css('display', 'block');
        if(wicked_inc<200){
            wicked_inc++;
            if(scale_para<10){
                mouth0.transform.baseVal.getItem(0).setSkewX(scale_para);
    //            mouth0.transform.baseVal.getItem(0).setSkewY(scale_para);
                scale_para+=0.3;
            } else {
                scale_para=-scale_para;
            }
            requestAnimationFrameID = window.requestAnimationFrame(wicked);
        } else {
            resetall();
            resetPosition();
        }
    }


    // rtong2
    var flag_lol=1;
    var scale_para=0.9
    var lol_inc=0;
    function lol(){
        $('#mouth0').css('display', 'block');
        if(lol_inc<200){
            lol_inc++;
            if(scale_para<1.2 && scale_para>0.8){
                if(flag_lol==1)
                    scale_para+=0.05;
                else if (flag_lol==-1)
                    scale_para-=0.05;
                mouth0.transform.baseVal.getItem(0).setScale(1,scale_para);
            } else {
                flag_lol=-flag_lol;
                scale_para=scale_para+0.05*flag_lol;
            }
            fly_lol();
            requestAnimationFrameID = window.requestAnimationFrame(lol);
        } else {
            resetall();
            resetPosition();
        }
    }

// rtong2
    var theta=0;
    var drop=0;
    var a=0.1;
    var sad_inc=0;
    function sad(){
        $('#mouth0').css('display', 'block');
        $('#tear0_0').css('display', 'block');
        $('#tear1_0').css('display', 'block');
        $('#tear2_0').css('display', 'block');
        $('#tear3_0').css('display', 'block');
        
        if(sad_inc<300){
            sad_inc++;
            if(theta<6){
                mouth0.currentTheta += theta;
                mouth0.transform.baseVal.getItem(0).setRotate(mouth0.currentTheta, xOffset0, 25);
                theta+=0.1;
            }
            if(drop>0)
                tear0_0.y.baseVal.value+=velocity0/100+a;
            if(drop>2)
                tear1_0.y.baseVal.value+=velocity0/100+a;
            if(drop>4)
                tear2_0.y.baseVal.value+=velocity0/100+a;
            if (drop>6)
                tear3_0.y.baseVal.value+=velocity0/100+a;
            if (drop>8){
                drop=0;
                a=0.1;
                tear0_0.y.baseVal.value=0;
                tear1_0.y.baseVal.value=0;
                tear2_0.y.baseVal.value=0;
                tear3_0.y.baseVal.value=0;
            }
            a+=0.1;
            drop+=0.1;
            requestAnimationFrameID = window.requestAnimationFrame(sad);
        } else {
            resetall();
            resetPosition();
        }
    }

    
    // rtong2
    var a1=0.1;
    var a2=0.1;
    var a3=0.1;
    var a4=0.1;
    var a5=0.1;
    function rain(){
        $('#rain1').css('display', 'block');
        $('#rain2').css('display', 'block');
        $('#rain3').css('display', 'block');
        $('#rain4').css('display', 'block');
        $('#rain5').css('display', 'block');
            rain1.y.baseVal.value+=velocity0/100+a1*0.1;
            rain2.y.baseVal.value+=velocity0/100+a2*0.2;
            rain3.y.baseVal.value+=velocity0/100+a3*0.4;
            rain4.y.baseVal.value+=velocity0/100+a4*0.8;
            rain5.y.baseVal.value+=velocity0/100+a5*1.6;
//            cloud0.x.baseVal.value+=velocity/100+a;
        
        if(rain1.y.baseVal.value>400){
            a1=0;
            rain1.y.baseVal.value=-400;
        }
        if(rain2.y.baseVal.value>400){
            a2=0;
            rain2.y.baseVal.value=-400;
        }
        if(rain3.y.baseVal.value>400){
            a3=0;
            rain3.y.baseVal.value=-400;
        }
        if(rain4.y.baseVal.value>400){
            a4=0;
            rain4.y.baseVal.value=-400;
        }
        if(rain5.y.baseVal.value>400){
            a5=0;
            rain5.y.baseVal.value=-400;
        }
        a1+=0.03;
        a2+=0.03;
        a3+=0.03;
        a4+=0.03;
        a5+=0.03;
        requestAnimationFrameID = window.requestAnimationFrame(rain);
    }





//BO CHANGES
	function goodjob()

	{

		if(goodjobFlag == 0)	//rotate the left hand

		{

			if(goodjobDirection == 1 && lhand0.currentTheta >= 0)

				rotate_lhand(5, body0.x.baseVal.value, body0.y.baseVal.value+25, 1, lhand0);

			if(goodjobDirection == -1 && rhand0.currentTheta <= 0)

				rotate_rhand(5, body0.x.baseVal.value, body0.y.baseVal.value+25, -1, rhand0);

			if(lhand0.currentTheta >= 190 || rhand0.currentTheta <= -190)

			{

				goodjobFlag = 1;

			}

		}

		else if(goodjobHandCount-- >= 0 && (goodjobFlag == 1 || goodjobFlag == -1)) //clapping

		{

			if(goodjobDirection == 1)

			{

				if(lhand0.currentTheta <= 190)

    				goodjobFlag = 1;

    			if(lhand0.currentTheta >= 230)

					goodjobFlag = -1;

			}

			else if(goodjobDirection == -1)

			{

				if(rhand0.currentTheta >= -190)

    				goodjobFlag = 1;

    			if(rhand0.currentTheta <= -230)

					goodjobFlag = -1;	

			}

			rotate_lhand(4, body0.x.baseVal.value, body0.y.baseVal.value+25, goodjobFlag, lhand0);

			rotate_rhand(4, body0.x.baseVal.value, body0.y.baseVal.value+25, -goodjobFlag, rhand0);

		}

		else

		{	

			if(rhand0.currentTheta != 0)

				rotate_rhand(2, body0.x.baseVal.value, body0.y.baseVal.value+25, 1, rhand0);

			if(lhand0.currentTheta != 0)

				rotate_lhand(2, body0.x.baseVal.value, body0.y.baseVal.value+25, -1, lhand0);

			if(lhand0.currentTheta == 0 && rhand0.currentTheta == 0) // set values to default

			{

				goodjobDirection = 1;

				goodjobFlag = 0;

				goodjobHandCount = 120;

				return;

			}

		}

		requestAnimationFrameID = window.requestAnimationFrame(goodjob);

	}



	function isee()	//just shake head

	{

		if(shakeheadCount-- >= 0 && (shakeheadFlag == 1 || shakeheadFlag == -1))

		{

			if(shakeheadDirection == 1)

			{

				if(head0.currentTheta <= 0)

					shakeheadFlag = 1;

				if(head0.currentTheta >= 30)

					shakeheadFlag = -1;

			}

			else if(shakeheadDirection == -1)

			{

				if(head0.currentTheta >= 0)

					shakeheadFlag = -1;

				if(head0.currentTheta <= -30)

					shakeheadFlag = 1;

			}

			rotate_head(1, body0.x.baseVal.value, body0.y.baseVal.value, shakeheadFlag, head0);

		}

		else

		{

			if(head0.currentTheta != 0)

				rotate_head(1, body0.x.baseVal.value, body0.y.baseVal.value, -shakeheadDirection, head0);

			else

			{

				shakeheadCount = 120;

				shakeheadFlag = 1;

				shakeheadDirection = 1;

				return;

			}

		}

		requestAnimationFrameID = window.requestAnimationFrame(isee);

	}

	

	function kiss()	//just rotate the head

	{

		if(kissCount0-- > 0)

			rotate_head(1, body0.x.baseVal.value, body0.y.baseVal.value, kissDirection0, head0);

		else if(kissCount0-- > -250)

		{

			//delay for a while

		}

		else if(head0.currentTheta != 0)

		{

			rotate_head(1, body0.x.baseVal.value, body0.y.baseVal.value, -kissDirection0, head0);

		}

		else

		{

			kissCount0 = 30;

			kissDirection0 = 1;

			return;

		}

		requestAnimationFrameID = window.requestAnimationFrame(kiss);

	}

	

	function why() // show question mark

	{	
		//$('#questionMark0').show('slow');
		$("#questionMark0").css('display','block');
		if(questionMarkFlag0 == 1) // magnify

		{	

			questionMarkScaler0 += 0.05;

			if(questionMarkScaler0 >= 2)

				questionMarkFlag0 = 0;

		}

		else if(questionMarkFlag0 == 0) // shrink

		{

			questionMarkScaler0 -= 0.05;

			if(questionMarkScaler0 <= 0)

				questionMarkFlag0 = 1;

		}

		questionMark0.transform.baseVal.getItem(0).setScale(questionMarkScaler0,questionMarkScaler0);

		requestAnimationFrameID = window.requestAnimationFrame(why);

	}

	

	function goodluck() //ring flys out

	{
                $('#ring1').show('slow');

		ring1.y.baseVal.value -= s2d(velocity1);

		if(ring1.y.baseVal.value <= -150)

		{

			ring1.y.baseVal.value = -60;

			ring1.x.baseVal.value = 100;

			return;

		}

		requestAnimationFrameID = window.requestAnimationFrame(goodluck);

	}

	

    function byebye(){	
		if(byebyeHandFlag0 == 0)	//raise the left hand

		{

			if(lhand0.currentTheta >= 0)

				rotate_lhand(1, body0.x.baseVal.value, body0.y.baseVal.value+25, 1, lhand0);

			if(lhand0.currentTheta >= 85)

			{

				byebyeHandFlag0 = -1;

			}

		}

		else if(byebyeWaveCount0-- >= 0 && (byebyeHandFlag0 == 1 || byebyeHandFlag0 == -1)) //wave hand

		{

			if(lhand0.currentTheta >= 85)

    			byebyeHandFlag0 = -1;

    		if(lhand0.currentTheta <= 60)

				byebyeHandFlag0 = 1;

    		rotate_lhand(2, lhand0.x.baseVal.value, lhand0.y.baseVal.value, byebyeHandFlag0, lhand0);

		}

		else // put down the hand

		{

			if(lhand0.currentTheta != 0)

				rotate_lhand(1, body0.x.baseVal.value, body0.y.baseVal.value+25, -1, lhand0);

			else // set values to default

			{
				walk();
				byebyeHandFlag0 = 0;

				byebyeWaveCount0 = 75;

				return;

			}

		}

			

		requestAnimationFrameID = window.requestAnimationFrame(byebye);

	}
	
	function hi(){	
		if(byebyeHandFlag0 == 0)	//raise the left hand

		{

			if(lhand0.currentTheta >= 0)

				rotate_lhand(1, body0.x.baseVal.value, body0.y.baseVal.value+25, 1, lhand0);

			if(lhand0.currentTheta >= 85)

			{

				byebyeHandFlag0 = -1;

			}

		}

		else if(byebyeWaveCount0-- >= 0 && (byebyeHandFlag0 == 1 || byebyeHandFlag0 == -1)) //wave hand

		{

			if(lhand0.currentTheta >= 85)

    			byebyeHandFlag0 = -1;

    		if(lhand0.currentTheta <= 60)

				byebyeHandFlag0 = 1;

    		rotate_lhand(2, lhand0.x.baseVal.value, lhand0.y.baseVal.value, byebyeHandFlag0, lhand0);

		}

		else // put down the hand

		{

			if(lhand0.currentTheta != 0)

				rotate_lhand(1, body0.x.baseVal.value, body0.y.baseVal.value+25, -1, lhand0);

			else // set values to default

			{
				byebyeHandFlag0 = 0;

				byebyeWaveCount0 = 75;

				return;

			}

		}

			

		requestAnimationFrameID = window.requestAnimationFrame(hi);

	}
	

	function walk() {

    	if(--walkDistance0 < 0)

		{

			velocity0 = 50;

			walkThighDirection0 = 1;

			walkDirection0 = -1;

			walkDistance0 = MAX_X;

			return;

		}

			

        velocity0 = 800;

    	if(walkFlag0 < 2){

    	        move_body_hb(head0, body0, lhand0, rhand0, lthigh0, rthigh0, velocity0 ,walkDirection0);

				walkFlag0 ++;

    	}

    	else if(walkFlag0 < 4){

             lthigh0.y.baseVal.value = body0.y.baseVal.value+100;

             lthigh0.x.baseVal.value = body0.x.baseVal.value;

             rthigh0.y.baseVal.value = body0.y.baseVal.value+100;

             rthigh0.x.baseVal.value = body0.x.baseVal.value;

				

			lhand0.y.baseVal.value = body0.y.baseVal.value+25;

            lhand0.x.baseVal.value = body0.x.baseVal.value;

            rhand0.y.baseVal.value = body0.y.baseVal.value+25;

            rhand0.x.baseVal.value = body0.x.baseVal.value;

			

			if(lthigh0.currentTheta <= -70)

				walkThighDirection0 = 1;

			else if(lthigh0.currentTheta >= -20)

				walkThighDirection0 = -1;

			split(7, body0.x.baseVal.value, body0.y.baseVal.value+100, walkThighDirection0);

			rotate_lhand(7, body0.x.baseVal.value, body0.y.baseVal.value+25, walkThighDirection0, lhand0);

        	rotate_rhand(-7, body0.x.baseVal.value, body0.y.baseVal.value+25, walkThighDirection0, rhand0);

			walkFlag0 ++;

    	}

		else

		{

			walkFlag0 = 0;

		}

    		

    	requestAnimationFrameID = window.requestAnimationFrame(walk);

    }

//konwon
	var sorry_inc=0;

	function sorry(){

	//Action: Sorry----Kang Wang

	  var ltcx = lthigh0.x.baseVal.value;

      var ltcy = lthigh0.y.baseVal.value;

	  var rtcx = rthigh0.x.baseVal.value;

	  var rtcy = rthigh0.y.baseVal.value;

	  var lcx = lhand0.x.baseVal.value;

      var lcy = lhand0.y. baseVal.value;

      var rcx = rhand0.x.baseVal.value;

      var rcy = rhand0.y. baseVal.value;

	  if(sorry_inc<45){

		  sorry_inc++;

		  rotate_rhand(1, lcx, lcy, 1, rhand0);

		  rotate_lthigh(1, ltcx, ltcy, -1, lthigh0);

		  rotate_rthigh(1, rtcx, rtcy, 1, rthigh0);

		  //rotate_rhand(1, lcx, lcy, 1);

		  //requestAnimationFrameID = window.requestAnimationFrame(sorry);
		  }

	  else if(sorry_inc>=45 && sorry_inc<90){

		   sorry_inc++;

		   rotate_rhand(1, lcx, lcy, 1, rhand0);

		   //rotate_lhand(1, lcx, lcy, -1, lhand0);

		   //rotate_rthigh(-1, rtcx, rtcy, -1, rthigh0);

		   //requestAnimationFrameID = window.requestAnimationFrame(sorry);
		   }

	  else if(sorry_inc>=90 && sorry_inc<135){

		  sorry_inc++;

		  //rotate_rthigh(-1, rtcx, rtcy, -1, rthigh0);

		  //requestAnimationFrameID = window.requestAnimationFrame(sorry);
		  }

	  else if(sorry_inc>=135 && sorry_inc<136){

		  sorry_inc++;

		  rhand0.y.baseVal.value = lthigh0.y.baseVal.value + 75*sin(body0.currentTheta);

          rhand0.x.baseVal.value = lthigh0.x.baseVal.value - 75*cos(body0.currentTheta)+10;

		  bend_for_sorry();

		  //requestAnimationFrameID = window.requestAnimationFrame(sorry);
		  }
	  else if(sorry_inc++==300){
		  resetall();
		  resetPosition();
		  return;}
		  
      requestAnimationFrameID = window.requestAnimationFrame(sorry);
	  /*else if(sorry_inc>=136 && sorry_inc<137){

		  sorry_inc++;

		  back_from_sorry();

		  requestAnimationFrameID = window.requestAnimationFrame(sorry);}*/

	  }

	 

	 var sleepy_inc=0;

	 function sleepy(){

     //Action: sleepy----Kang Wang		 

	   if(sleepy_inc>=0 && sleepy_inc<30){

		   sleepy_inc++;

		   requestAnimationFrameID = window.requestAnimationFrame(sleepy);}

		 else if(sleepy_inc>=30 && sleepy_inc<70){

			 sleepy_inc++;

			 $("#z1_0").css('display','block');

			 console.log("work!");

			 requestAnimationFrameID = window.requestAnimationFrame(sleepy);}

		 else if(sleepy_inc>=70 && sleepy_inc<110){

			 sleepy_inc++;

			 //$("#z1_0").css('display','none');

			 $("#z2_0").css('display','block');

			 console.log("work2!");

			 requestAnimationFrameID = window.requestAnimationFrame(sleepy);}

		 else if(sleepy_inc>=110 && sleepy_inc<150){

			 sleepy_inc++;

			 $("#z3_0").css('display','block');

			 requestAnimationFrameID = window.requestAnimationFrame(sleepy);}

	     else if(sleepy_inc==150){

			 $("#z1_0").css('display','none');

			 $("#z2_0").css('display','none');

			 $("#z3_0").css('display','none');

			 resetall();

		     requestAnimationFrameID = window.requestAnimationFrame(sleepy);}

	 }

	 

	 function stop_sleepy(){

		 resetall();
		 resetPosition();}

		 

	 function back_to_position(){

		 head0.x.baseVal.value=head0_x; head0.y.baseVal.value=head0_y;

		 body0.x.baseVal.value=body0_x; body0.y.baseVal.value=body0_y;

		 lhand0.x.baseVal.value=lhand0_x; lhand0.y.baseVal.value=lhand0_y;

		 rhand0.x.baseVal.value=rhand0_x; rhand0.y.baseVal.value=rhand0_y;

		 lthigh0.x.baseVal.value=lthigh0_x; lthigh0.y.baseVal.value=lthigh0_y;

		 rthigh0.x.baseVal.value=rthigh0_x; rthigh0.y.baseVal.value=rthigh0_y;

		 }


//konwon
