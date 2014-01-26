    "use strict";
    /*window.addEventListener('load', init, false); */

    /*function init() {

      initConstants(); 
      extendObject();
    }*/

    function bend2() {
        //BO
        if(body1.currentTheta < -90)
                bendDirection1 = 1;
        // Mid point
        var cx = lthigh1.x.baseVal.value;
        var cy = lthigh1.y. baseVal.value;
        rotate_body(1, cx, cy, bendDirection1, body1);
        rotate_lhand(1, cx, cy, bendDirection1, lhand1);
        rotate_rhand(1, cx, cy, bendDirection1, rhand1);
        rotate_head(1, cx, cy, bendDirection1, head1);
        if(body1.currentTheta == 0){
                bendDirection1 = -1;
                return;
        }
        requestAnimationFrameID = window.requestAnimationFrame(bend2);
    }
   //-------------------------------------Kang Wang--------------------------------------------//
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
		else if(jump_inc>=80 && jump_inc<81){
			resetall();
			back_to_position2();
			resetPosition();}
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
                  //rotate_lhand(1, lcx, lcy, -1, lhand1);
				  rotate_rhand(1, lcx, lcy, 1, rhand1);
                  rotate_lthigh(1, ltcx, ltcy, -1, lthigh1);
                  rotate_rthigh(-1, rtcx, rtcy, -1, rthigh1);
                  //requestAnimationFrameID = window.requestAnimationFrame(Hello2);
				  }
          //adduct the hands
          else if(Hello_inc>45 && Hello_inc<90){
                  Hello_inc++;
				  rotate_rhand(1, lcx, lcy, 1, rhand1);
                  //rotate_lhand(1, lcx, lcy, -1, lhand1);
                  //rotate_lthigh(1, ltcx, ltcy, -1);
                  //requestAnimationFrameID = window.requestAnimationFrame(Hello2);
				  }
          //bend body
          else if(Hello_inc>=90 && Hello_inc<91){
                  Hello_inc++;
                  rhand1.y.baseVal.value = lthigh1.y.baseVal.value + 75*sin(body1.currentTheta);
                  rhand1.x.baseVal.value = lthigh1.x.baseVal.value - 75*cos(body1.currentTheta);
                  bend2();
                  //requestAnimationFrameID = window.requestAnimationFrame(Hello2);
				  }
		  else if(Hello_inc++==300){
			  console.log(Hello_inc);
			  resetall();
			  resetPosition();
			  return;
			  }
		  requestAnimationFrameID = window.requestAnimationFrame(Hello2);
    }
	
	function bend_for_sorry2() {
        if(body1.currentTheta < -90){
            bendDirection1 = -1;
            return ;
           }
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
	
		 var sleepy_inc=0;

	 function sleepy2(){

     //Action: sleepy----Kang Wang		 

	   if(sleepy_inc>=0 && sleepy_inc<30){

		   sleepy_inc++;

		   requestAnimationFrameID = window.requestAnimationFrame(sleepy2);}

		 else if(sleepy_inc>=30 && sleepy_inc<70){

			 sleepy_inc++;

			 $("#z1_1").css('display','block');

			 console.log("work!");

			 requestAnimationFrameID = window.requestAnimationFrame(sleepy2);}

		 else if(sleepy_inc>=70 && sleepy_inc<110){

			 sleepy_inc++;

			 //$("#z1_0").css('display','none');

			 $("#z2_1").css('display','block');

			 console.log("work2!");

			 requestAnimationFrameID = window.requestAnimationFrame(sleepy2);}

		 else if(sleepy_inc>=110 && sleepy_inc<150){

			 sleepy_inc++;

			 $("#z3_1").css('display','block');

			 requestAnimationFrameID = window.requestAnimationFrame(sleepy2);}

	     else if(sleepy_inc==150){

			 $("#z1_1").css('display','none');

			 $("#z2_1").css('display','none');

			 $("#z3_1").css('display','none');

			 resetall();

		     requestAnimationFrameID = window.requestAnimationFrame(sleepy2);}

	 }

	 

	 function stop_sleepy(){

		 resetall();
		 resetPosition();}

		 

	function back_to_position2(){

		 head1.x.baseVal.value=head1_x; head1.y.baseVal.value=head1_y;

		 body1.x.baseVal.value=body1_x; body1.y.baseVal.value=body1_y;

		 lhand1.x.baseVal.value=lhand1_x; lhand1.y.baseVal.value=lhand1_y;

		 rhand1.x.baseVal.value=rhand1_x; rhand1.y.baseVal.value=rhand1_y;

		 lthigh1.x.baseVal.value=lthigh1_x; lthigh1.y.baseVal.value=lthigh1_y;

		 rthigh1.x.baseVal.value=rthigh1_x; rthigh1.y.baseVal.value=rthigh1_y;

		 }
	var sorry_inc=0;

	function sorry2(){

	//Action: Sorry----Kang Wang

	  var ltcx = lthigh1.x.baseVal.value;

      var ltcy = lthigh1.y.baseVal.value;

	  var rtcx = rthigh1.x.baseVal.value;

	  var rtcy = rthigh1.y.baseVal.value;

	  var lcx = lhand1.x.baseVal.value;

      var lcy = lhand1.y. baseVal.value;

      var rcx = rhand1.x.baseVal.value;

      var rcy = rhand1.y. baseVal.value;

	  if(sorry_inc<45){

		  sorry_inc++;

		  rotate_lhand(1, lcx, lcy, -1, lhand1);

		  rotate_lthigh(1, ltcx, ltcy, -1, lthigh1);

		  rotate_rthigh(1, rtcx, rtcy, 1, rthigh1);

		  //rotate_rthigh(1, rtcx, rtcy, 1, rthigh1);

		  //requestAnimationFrameID = window.requestAnimationFrame(sorry2);
		  }

	  else if(sorry_inc>=45 && sorry_inc<90){

		   sorry_inc++;

		   //rotate_lthigh(1, ltcx, ltcy, -1, lthigh1);

		   rotate_lhand(1, lcx, lcy, -1, lhand1);

		   //rotate_rthigh(1, rtcx, rtcy, -1, rthigh1);

		   //requestAnimationFrameID = window.requestAnimationFrame(sorry2);
		   }

	  else if(sorry_inc>=90 && sorry_inc<135){

		  sorry_inc++;

		  //rotate_lthigh(1, ltcx, ltcy, -1, lthigh1);

		  //requestAnimationFrameID = window.requestAnimationFrame(sorry2);
		  }

	  else if(sorry_inc>=135 && sorry_inc<136){

		  sorry_inc++;

		  lhand1.y.baseVal.value = lthigh1.y.baseVal.value - 75*sin(body0.currentTheta);

          lhand1.x.baseVal.value = lthigh1.x.baseVal.value + 75*cos(body0.currentTheta)+10;

		  bend_for_sorry2();

		  //requestAnimationFrameID = window.requestAnimationFrame(sorry2);
		  }
	  else if(sorry_inc++==300){
		 resetall();
		 resetPosition();
		 return;}
		 
      requestAnimationFrameID = window.requestAnimationFrame(sorry2);
	  /*else if(sorry_inc>=136 && sorry_inc<137){

		  sorry_inc++;

		  back_from_sorry();

		  requestAnimationFrameID = window.requestAnimationFrame(sorry);}*/

	  }

   //-------------------------------------Kang Wang--------------------------------------------//
    function fly2() {
        //BO
        if(flyCount1++ < 100)
                {
                if(lhand1.currentTheta > 80)
                        flyDirection1 = -1;
                if(lhand1.currentTheta < -20)
                        flyDirection1 = 1;
                }
                else
                {
                        if(lhand1.currentTheta > 0)
                                flyDirection1 = -1;
                        if(lhand1.currentTheta < 0)
                        flyDirection1 = 1
                        if(lhand1.currentTheta == 0)
                        {
                                flyDirection1 = 1;
                                flyCount1 = 0;
                                return;
                        }
                }
                rotate_lhand(5, body1.x.baseVal.value, body1.y.baseVal.value + 25, flyDirection1, lhand1);
        rotate_rhand(5, body1.x.baseVal.value, body1.y.baseVal.value + 25, -flyDirection1, rhand1);
        requestAnimationFrameID = window.requestAnimationFrame(fly2);
    }


    function fly2_lol() {
        //BO
        if(flyCount1++ < 100)
                {
                if(lhand1.currentTheta > 80)
                        flyDirection1 = -1;
                if(lhand1.currentTheta < -20)
                        flyDirection1 = 1;
                }
                else
                {
                        if(lhand1.currentTheta > 0)
                                flyDirection1 = -1;
                        if(lhand1.currentTheta < 0)
                        flyDirection1 = 1
                        if(lhand1.currentTheta == 0)
                        {
                                flyDirection1 = 1;
                                flyCount1 = 0;
                                return;
                        }
                }
                rotate_lhand(5, body1.x.baseVal.value, body1.y.baseVal.value + 25, flyDirection1, lhand1);
        rotate_rhand(5, body1.x.baseVal.value, body1.y.baseVal.value + 25, -flyDirection1, rhand1);
    }





    function thigh_split2() {
        flyDirection1 = 1;
        var cx = lthigh1.x.baseVal.value;
        var cy = lthigh1.y. baseVal.value;
        rotate_lthigh(1, cx, cy, flyDirection1, lthigh1);
        rotate_rthigh(-1, cx, cy, flyDirection1, rthigh1);
        requestAnimationFrameID = window.requestAnimationFrame(thigh_split2);
    }

    function split2(theta, cx, cy, direction) {
        // BO
        // Joint of the thighs around which split happens
        rotate_lthigh(theta, cx, cy, direction, lthigh1);
        rotate_rthigh(-theta, cx, cy, direction, rthigh1);
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
    

    // rtong
    function on_the_knees2(){
        flyDirection1 = -1;

        if(i>-110){
            i--;
            var cx = lthigh1.x.baseVal.value;
            var cy = lthigh1.y.baseVal.value-5*cos(body1.currentTheta);
            rotate_lthigh(1, cx, cy, flyDirection1, lthigh1);
            if(i>-40)
                rotate_rthigh(1, cx, cy, flyDirection1, rthigh1);
        } else {
            flag=true;
        }
    }

    // rtong
    var suck_inc=0;
    function suck2(){
        if(suck_inc<400){
            suck_inc++;
            if(flag==false){
                on_the_knees2();
                incline2();
            } else if (flag==true){
                lean2();
                shake2();
            }
    
            requestAnimationFrameID = window.requestAnimationFrame(suck2);
        } else {
            resetall();
            resetPosition();
        }
    }

    // rtong
    var scale_para=1;
    function love2(){
        if(scale_para<1.5){
            $('#heart0').css('display', 'block');
            heart0.transform.baseVal.getItem(0).setScale(scale_para,scale_para);
            scale_para+=0.015;
        } else {
            scale_para=1;
            $('#heart0').css('display', 'none');
        }
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
            velocity1=-velocity1;
            move_body_v(body1, head1, lhand1, rhand1, lthigh1, rthigh1, velocity1); 
            velocity1=-velocity1;
            j++;
        }
    }


    var flag=false;
    var fuck_inc = 0;
    // rtong
    function fuck2(){
        if(fuck_inc<200){
            fuck_inc++;
            if(flag==false){
                hands_on_right2();
            } else if (flag){
                rhand1.y.baseVal.value = rthigh1.y.baseVal.value + 75*sin(body1.currentTheta);
                rhand1.x.baseVal.value = rthigh1.x.baseVal.value - 75*cos(body1.currentTheta);
                lean2();
                shake2();
                fuck_inc = fuck_inc + 1;
                if(fuck_inc>500) return;
            }
    
            requestAnimationFrameID = window.requestAnimationFrame(fuck2);
        } else {
            resetall();
            resetPosition();
        }
    }

    // rtong
    function lean2(){
        if(body1.currentTheta < -15)
                bendDirection1 = 1;
        // Mid point
        var cx = lthigh1.x.baseVal.value;
        var cy = lthigh1.y.baseVal.value;
        rotate_body(1, cx, cy, bendDirection1, body1)
        rotate_lhand(1, cx, cy, bendDirection1, lhand1);
        rotate_rhand(1, cx, cy, bendDirection1, rhand1);
        rotate_head(1, cx, cy, bendDirection1, head1);
        if(body1.currentTheta == 0){
                bendDirection1 = -1;
        }
    }

    // rtong
    function hands_on_right2() {
        if(rhand1.currentTheta < 0)
            flyDirection1 = 1;
        if(rhand1.currentTheta > 80){
            flag=true;
        }
        rotate_rhand(1, xOffset1, 75, flyDirection1, rhand1);
    }

    // rtong
    var shake_inc=0;

    function shake2() {
        if(shake_inc<20){
            move_body_h(head1, body1, lhand1, rhand1, lthigh1, rthigh1, velocity1);
            shake_inc++;
        } else if(shake_inc<40){
            if(shake_inc==20) velocity1=-velocity1;
            move_body_h(head1, body1, lhand1, rhand1, lthigh1, rthigh1, velocity1);
            shake_inc++;
        } else {
            shake_inc=0;
            velocity1=-velocity1;
        }
    }

    var wicked_inc=0;
    function wicked2(){
        $('#mouth1').css('display', 'block');
        
        if(wicked_inc<200){
            wicked_inc++;
            if(scale_para<10){
                mouth1.transform.baseVal.getItem(0).setSkewX(scale_para);
    //            mouth1.transform.baseVal.getItem(0).setSkewY(scale_para);
                scale_para+=0.3;
            } else {
                scale_para=-scale_para;
            }
            requestAnimationFrameID = window.requestAnimationFrame(wicked2);
        } else {
            resetall();
            resetPosition();
        }
    }


   // rtong2
    var lol_inc = 0;
    var flag_lol=1;
    var scale_para=0.9;
    var lol_inc=0;
    function lol2(){
        $('#mouth1').css('display', 'block');

        if(lol_inc<200){
            lol_inc++;
            if(scale_para<1.2 && scale_para>0.8){
                if(flag_lol==1)
                    scale_para+=0.05;
                else if (flag_lol==-1)
                    scale_para-=0.05;
                mouth1.transform.baseVal.getItem(0).setScale(1,scale_para);
            } else {
                flag_lol=-flag_lol;
                scale_para=scale_para+0.05*flag_lol;
            }
            fly2_lol();
            requestAnimationFrameID = window.requestAnimationFrame(lol2);
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
    function sad2(){
        $('#mouth1').css('display', 'block');
        $('#tear0_1').css('display', 'block');
        $('#tear1_1').css('display', 'block');
        $('#tear2_1').css('display', 'block');
        $('#tear3_1').css('display', 'block');
        
        if(sad_inc<400){
            sad_inc++;
            if(theta<6){
                mouth0.currentTheta += theta;
                mouth0.transform.baseVal.getItem(0).setRotate(mouth0.currentTheta, xOffset1, 25);
                theta+=0.1;
            }
            if(drop>0)
                tear0_1.y.baseVal.value+=velocity1/100+a;
            if(drop>2)
                tear1_1.y.baseVal.value+=velocity1/100+a;
            if(drop>4)
                tear2_1.y.baseVal.value+=velocity1/100+a;
            if (drop>6)
                tear3_1.y.baseVal.value+=velocity1/100+a;
            if (drop>8){
                drop=0;
                a=0.1;
                tear0_1.y.baseVal.value=0;
                tear1_1.y.baseVal.value=0;
                tear2_1.y.baseVal.value=0;
                tear3_1.y.baseVal.value=0;
            }
            a+=0.1;
            drop+=0.1;
            requestAnimationFrameID = window.requestAnimationFrame(sad2);
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
    function rain_2(){
        $('#rain1').css('display', 'block');
        $('#rain2').css('display', 'block');
        $('#rain3').css('display', 'block');
        $('#rain4').css('display', 'block');
        $('#rain5').css('display', 'block');
            rain1.y.baseVal.value+=velocity1/100+a1*0.1;
            rain2.y.baseVal.value+=velocity1/100+a2*0.2;
            rain3.y.baseVal.value+=velocity1/100+a3*0.4;
            rain4.y.baseVal.value+=velocity1/100+a4*0.8;
            rain5.y.baseVal.value+=velocity1/100+a5*1.6;
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
        requestAnimationFrameID = window.requestAnimationFrame(rain_2);
    }


	function goodjob2()

	{

		if(goodjobFlag == 0)	//rotate the left hand

		{

			if(goodjobDirection == 1 && lhand1.currentTheta >= 0)

				rotate_lhand(5, body1.x.baseVal.value, body1.y.baseVal.value+25, 1, lhand1);

			if(goodjobDirection == -1 && rhand1.currentTheta <= 0)

				rotate_rhand(5, body1.x.baseVal.value, body1.y.baseVal.value+25, -1, rhand1);

			if(lhand1.currentTheta >= 190 || rhand1.currentTheta <= -190)

			{

				goodjobFlag = 1;

			}

		}

		else if(goodjobHandCount-- >= 0 && (goodjobFlag == 1 || goodjobFlag == -1)) //clapping

		{

			if(goodjobDirection == 1)

			{

				if(rhand1.currentTheta >= -190)

    				goodjobFlag = 1;

    			if(rhand1.currentTheta <= -230)

					goodjobFlag = -1;

			}

			else if(goodjobDirection == -1)

			{

				if(rhand1.currentTheta >= -190)

    				goodjobFlag = 1;

    			if(rhand1.currentTheta <= -230)

					goodjobFlag = -1;	

			}

			rotate_lhand(4, body1.x.baseVal.value, body1.y.baseVal.value+25, goodjobFlag, lhand1);

			rotate_rhand(4, body1.x.baseVal.value, body1.y.baseVal.value+25, -goodjobFlag, rhand1);

		}

		else

		{	

			if(rhand1.currentTheta != 0)

				rotate_rhand(2, body1.x.baseVal.value, body1.y.baseVal.value+25, 1, rhand1);

			if(lhand1.currentTheta != 0)

				rotate_lhand(2, body1.x.baseVal.value, body1.y.baseVal.value+25, -1, lhand1);

			if(lhand1.currentTheta == 0 && rhand1.currentTheta == 0) // set values to default

			{

				goodjobDirection = 1;

				goodjobFlag = 0;

				goodjobHandCount = 120;

				return;

			}

		}

		requestAnimationFrameID = window.requestAnimationFrame(goodjob2);

	}

	

	function isee2()	//just shake head

	{

		if(shakeheadCount-- >= 0 && (shakeheadFlag == 1 || shakeheadFlag == -1))

		{

			if(shakeheadDirection == 1)

			{

				if(head1.currentTheta <= 0)

					shakeheadFlag = 1;

				if(head1.currentTheta >= 30)

					shakeheadFlag = -1;

			}

			else if(shakeheadDirection == -1)

			{

				if(head1.currentTheta >= 0)

					shakeheadFlag = -1;

				if(head1.currentTheta <= -30)

					shakeheadFlag = 1;

			}

			rotate_head(1, body1.x.baseVal.value, body1.y.baseVal.value, shakeheadFlag, head1);

		}

		else

		{

			if(head1.currentTheta != 0)

				rotate_head(1, body1.x.baseVal.value, body1.y.baseVal.value, -shakeheadDirection, head1);

			else

			{

				shakeheadCount = 120;

				shakeheadFlag = 1;

				shakeheadDirection = 1;

				return;

			}

		}

		requestAnimationFrameID = window.requestAnimationFrame(isee2);

	}

	

	function kiss2()	//just rotate the head

	{

		if(kissCount1-- > 0)

			rotate_head(1, body1.x.baseVal.value, body1.y.baseVal.value, kissDirection1, head1);

		else if(kissCount1-- > -250)

		{

			//delay for a while

		}

		else if(head1.currentTheta != 0)

		{

			rotate_head(1, body1.x.baseVal.value, body1.y.baseVal.value, -kissDirection1, head1);

		}

		else

		{

			kissCount1 = 30;

			kissDirection1 = -1;

			return;

		}

		requestAnimationFrameID = window.requestAnimationFrame(kiss2);

	}



	function why2() // show question mark

	{	
		$("#questionMark0").css('display','block');
		if(questionMarkFlag1 == 1) // magnify

		{	

			questionMarkScaler1 += 0.05;

			if(questionMarkScaler1 >= 2)

				questionMarkFlag1 = 0;

		}

		else if(questionMarkFlag1 == 0) // shrink

		{

			questionMarkScaler1 -= 0.05;

			if(questionMarkScaler1 <= 0)

				questionMarkFlag1 = 1;

		}

		questionMark0.transform.baseVal.getItem(0).setScale(questionMarkScaler1,questionMarkScaler1);

		requestAnimationFrameID = window.requestAnimationFrame(why2);

	}

	

	function goodluck2() //ring flys out

	{
                $('#ring0').show('slow');
                
		ring0.y.baseVal.value -= s2d(velocity0);

		if(ring0.y.baseVal.value <= -150)

		{

			ring0.y.baseVal.value = -60;

			ring0.x.baseVal.value = -100;

			return;

		}

		requestAnimationFrameID = window.requestAnimationFrame(goodluck2);

	}

	

	function byebye2(){	

		if(byebyeHandFlag1 == 0)	//raise the left hand

		{

			if(lhand1.currentTheta >= 0)

				rotate_lhand(1, body1.x.baseVal.value, body1.y.baseVal.value+25, 1, lhand1);

			if(lhand1.currentTheta >= 85)

			{

				byebyeHandFlag1 = -1;

			}

		}

		else if(byebyeWaveCount1-- >= 0 && (byebyeHandFlag1 == 1 || byebyeHandFlag1 == -1)) //wave hand

		{

			if(lhand1.currentTheta >= 85)

    			byebyeHandFlag1 = -1;

    		if(lhand1.currentTheta <= 60)

				byebyeHandFlag1 = 1;

    		rotate_lhand(2, lhand1.x.baseVal.value, lhand1.y.baseVal.value, byebyeHandFlag1, lhand1);

		}

		else // put down the hand

		{

			if(lhand1.currentTheta != 0)

				rotate_lhand(1, body1.x.baseVal.value, body1.y.baseVal.value+25, -1, lhand1);

			else // set values to default

			{
				walk2();
				byebyeHandFlag1 = 0;

				byebyeWaveCount1 = 75;

				return;

			}

		}

			

		requestAnimationFrameID = window.requestAnimationFrame(byebye2);

	}
	
	function hi2(){	

		if(byebyeHandFlag1 == 0)	//raise the left hand

		{

			if(lhand1.currentTheta >= 0)

				rotate_lhand(1, body1.x.baseVal.value, body1.y.baseVal.value+25, 1, lhand1);

			if(lhand1.currentTheta >= 85)

			{

				byebyeHandFlag1 = -1;

			}

		}

		else if(byebyeWaveCount1-- >= 0 && (byebyeHandFlag1 == 1 || byebyeHandFlag1 == -1)) //wave hand

		{


			if(lhand1.currentTheta >= 85)

    			byebyeHandFlag1 = -1;

    		if(lhand1.currentTheta <= 60)

				byebyeHandFlag1 = 1;

    		rotate_lhand(2, lhand1.x.baseVal.value, lhand1.y.baseVal.value, byebyeHandFlag1, lhand1);

		}

		else // put down the hand

		{

			if(lhand1.currentTheta != 0)

				rotate_lhand(1, body1.x.baseVal.value, body1.y.baseVal.value+25, -1, lhand1);

			else // set values to default

			{
				byebyeHandFlag1 = 0;

				byebyeWaveCount1 = 75;

				return;

			}

		}

			

		requestAnimationFrameID = window.requestAnimationFrame(hi2);

	}
	

	function walk2() {

    	if(--walkDistance1 < 0)

		{

			velocity1 = 50;

			walkThighDirection1 = 1;

			walkDirection1 = 1;

			walkDistance1 = MAX_X;

			return;

		}

			

        velocity1 = 800;

    	if(walkFlag1 < 2){

    	        move_body_hb(head1, body1, lhand1, rhand1, lthigh1, rthigh1, velocity1, walkDirection1);

				walkFlag1 ++;

    	}

    	else if(walkFlag1 < 4){

             lthigh1.y.baseVal.value = body1.y.baseVal.value+100;

             lthigh1.x.baseVal.value = body1.x.baseVal.value;

             rthigh1.y.baseVal.value = body1.y.baseVal.value+100;

             rthigh1.x.baseVal.value = body1.x.baseVal.value;

				

			lhand1.y.baseVal.value = body1.y.baseVal.value+25;

            lhand1.x.baseVal.value = body1.x.baseVal.value;

            rhand1.y.baseVal.value = body1.y.baseVal.value+25;

            rhand1.x.baseVal.value = body1.x.baseVal.value;

			

			if(lthigh1.currentTheta <= -70)

				walkThighDirection1 = 1;

			else if(lthigh1.currentTheta >= -20)

				walkThighDirection1 = -1;

			split2(7, body1.x.baseVal.value, body1.y.baseVal.value+100, walkThighDirection1);

			rotate_lhand(7, body1.x.baseVal.value, body1.y.baseVal.value+25, walkThighDirection1, lhand1);

        	rotate_rhand(-7, body1.x.baseVal.value, body1.y.baseVal.value+25, walkThighDirection1, rhand1);

			walkFlag1 ++;

    	}

		else

		{

			walkFlag1 = 0;

		}

    		

    	requestAnimationFrameID = window.requestAnimationFrame(walk2);

    }

