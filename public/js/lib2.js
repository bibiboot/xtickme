    /* Library functions file */
    function rotate_head(theta, cx, cy, direction, head) {
        //Rotate head by 
        head.currentTheta += direction*theta;
        head.transform.baseVal.getItem(0).setRotate(head.currentTheta, cx, cy);
    }

    function rotate_body(theta, cx, cy, direction, body) {
        //Rotate body
        body.currentTheta += direction*theta;
        body.transform.baseVal.getItem(0).setRotate(body.currentTheta, cx, cy);
    }

    function rotate_lhand(theta, cx, cy, direction, lhand) {
        // Rotate left hand
        lhand.currentTheta += direction*theta;
        lhand.transform.baseVal.getItem(0).setRotate(lhand.currentTheta, cx, cy);
    }

    function rotate_rhand(theta, cx, cy, direction, rhand) {
        // Rotate right hand
        rhand.currentTheta += direction*theta;
        rhand.transform.baseVal.getItem(0).setRotate(rhand.currentTheta, cx, cy);
    }

    function rotate_lthigh(theta, cx, cy, direction, lthigh) {
        // Rotate left thigh
        lthigh.currentTheta += direction*theta;
        lthigh.transform.baseVal.getItem(0).setRotate(lthigh.currentTheta, cx, cy);
    }

    function rotate_rthigh(theta, cx, cy, direction, rthigh) {
        // Rotate right thigh
        rthigh.currentTheta += direction*theta;
        rthigh.transform.baseVal.getItem(0).setRotate(rthigh.currentTheta, cx, cy);
    }

    function move_body_h(headx, body, lhand, rhand, lthigh, rthigh, velocity) {
      headx.x.baseVal.value += s2d(velocity)

      //try to control the body
      body.x.baseVal.value += s2d(velocity)*cos(body.currentTheta);
      body.y.baseVal.value += s2d(velocity)*(-sin(body.currentTheta));

      //try to control the hands
      lhand.x.baseVal.value += s2d(velocity)*cos(lhand.currentTheta);
      lhand.y.baseVal.value += s2d(velocity)*(-sin(lhand.currentTheta));

      rhand.x.baseVal.value += s2d(velocity)*cos(rhand.currentTheta);
      rhand.y.baseVal.value += s2d(velocity)*(-sin(rhand.currentTheta));

      //try to control the thighs
      lthigh.x.baseVal.value += s2d(velocity)*cos(lthigh.currentTheta);
      lthigh.y.baseVal.value += s2d(velocity)*(-sin(lthigh.currentTheta));

      rthigh.x.baseVal.value += s2d(velocity)*cos(rthigh.currentTheta);
      rthigh.y.baseVal.value += s2d(velocity)*(-sin(rthigh.currentTheta));
    }

    function move_body_v(body, head, lhand, rhand, lthigh, rthigh, velocity) {
      head.y.baseVal.value += s2d(velocity)*(-cos(body.currentTheta));

      //try to control the body
      body.y.baseVal.value += s2d(velocity)*(-cos(body.currentTheta));
      body.x.baseVal.value += s2d(velocity)*(-sin(body.currentTheta));

      //try to control the hands
      lhand.y.baseVal.value += s2d(velocity)*(-cos(lhand.currentTheta));
      lhand.x.baseVal.value += s2d(velocity)*(-sin(lhand.currentTheta));

      rhand.y.baseVal.value += s2d(velocity)*(-cos(rhand.currentTheta));
      rhand.x.baseVal.value += s2d(velocity)*(-sin(rhand.currentTheta));

      //try to control the thighs
      lthigh.y.baseVal.value += s2d(velocity)*(-cos(lthigh.currentTheta));
      lthigh.x.baseVal.value += s2d(velocity)*(-sin(lthigh.currentTheta));

      rthigh.y.baseVal.value += s2d(velocity)*(-cos(rthigh.currentTheta));
      rthigh.x.baseVal.value += s2d(velocity)*(-sin(rthigh.currentTheta));
    }

    function move_body_hb(headx, body, lhand, rhand, lthigh, rthigh, velocity, walkDirection) {
      headx.x.baseVal.value += walkDirection*s2d(velocity);

      //try to control the body
      body.x.baseVal.value += walkDirection*s2d(velocity)*cos(body.currentTheta);
      body.y.baseVal.value += walkDirection*s2d(velocity)*(-sin(body.currentTheta));

      //try to control the hands
      lhand.x.baseVal.value += walkDirection*s2d(velocity)*cos(lhand.currentTheta);
      lhand.y.baseVal.value += walkDirection*s2d(velocity)*(-sin(lhand.currentTheta));

      rhand.x.baseVal.value += walkDirection*s2d(velocity)*cos(rhand.currentTheta);
      rhand.y.baseVal.value += walkDirection*s2d(velocity)*(-sin(rhand.currentTheta));

      //try to control the thighs
      lthigh.x.baseVal.value += walkDirection*s2d(velocity)*cos(lthigh.currentTheta);
      lthigh.y.baseVal.value += walkDirection*s2d(velocity)*(-sin(lthigh.currentTheta));

      rthigh.x.baseVal.value += walkDirection*s2d(velocity)*cos(rthigh.currentTheta);
      rthigh.y.baseVal.value += walkDirection*s2d(velocity)*(-sin(rthigh.currentTheta));
    }
	
	function resetPosition()
	{
	  	window.cancelAnimationFrame(requestAnimationFrameID);
		//reset user1
		head0.currentTheta = constants.initialTheta;
		head0.x.baseVal.value = head0_x;
		head0.y.baseVal.value = head0_y;
		head0.transform.baseVal.getItem(0).setRotate(head0.currentTheta, head0_x, head0_y);
	  body0.currentTheta = constants.initialTheta;
	  body0.x.baseVal.value = body0_x;
	  body0.y.baseVal.value = body0_y;
	  body0.transform.baseVal.getItem(0).setRotate(body0.currentTheta, body0_x, body0_y);
	  lhand0.currentTheta = constants.initialTheta;
	  lhand0.x.baseVal.value = lhand0_x;
	  lhand0.y.baseVal.value = lhand0_y;
	  lhand0.transform.baseVal.getItem(0).setRotate(lhand0.currentTheta, lhand0_x, lhand0_y);
	  rhand0.currentTheta = constants.initialTheta;
	  rhand0.x.baseVal.value = rhand0_x;
	  rhand0.y.baseVal.value = rhand0_y;
	  rhand0.transform.baseVal.getItem(0).setRotate(rhand0.currentTheta, rhand0_x, rhand0_y);
	  lthigh0.currentTheta = constants.initialTheta;
	  lthigh0.x.baseVal.value = lthigh0_x;
	  lthigh0.y.baseVal.value = lthigh0_y;
	  lthigh0.transform.baseVal.getItem(0).setRotate(lthigh0.currentTheta, lthigh0_x, lthigh0_y);
	  rthigh0.currentTheta = constants.initialTheta;
	  rthigh0.x.baseVal.value = rthigh0_x;
	  rthigh0.y.baseVal.value = rthigh0_y;
	  rthigh0.transform.baseVal.getItem(0).setRotate(rthigh0.currentTheta, rthigh0_x, rthigh0_y);
	  
	  	//reset user2
	  head1.currentTheta = constants.initialTheta;	
	  head1.x.baseVal.value = head1_x;
	  head1.y.baseVal.value = head1_y;
	  head1.transform.baseVal.getItem(0).setRotate(head1.currentTheta, head1_x, head1_y);
	  body1.currentTheta = constants.initialTheta;
	  body1.x.baseVal.value = body1_x;
	  body1.y.baseVal.value = body1_y;
	  body1.transform.baseVal.getItem(0).setRotate(body1.currentTheta, body1_x, body1_y);
	  lhand1.currentTheta = constants.initialTheta;
	  lhand1.x.baseVal.value = lhand1_x;
	  lhand1.y.baseVal.value = lhand1_y;
	  lhand1.transform.baseVal.getItem(0).setRotate(lhand1.currentTheta, lhand1_x, lhand1_y);
	  rhand1.currentTheta = constants.initialTheta;
	  rhand1.x.baseVal.value = rhand1_x;
	  rhand1.y.baseVal.value = rhand1_y;
	  rhand1.transform.baseVal.getItem(0).setRotate(rhand1.currentTheta, rhand1_x, rhand1_y);
	  lthigh1.currentTheta = constants.initialTheta;
	  lthigh1.x.baseVal.value = lthigh1_x;
	  lthigh1.y.baseVal.value = lthigh1_y;
	  lthigh1.transform.baseVal.getItem(0).setRotate(lthigh1.currentTheta, lthigh1_x, lthigh1_y);
	  rthigh1.currentTheta = constants.initialTheta;
	  rthigh1.x.baseVal.value = rthigh1_x;
	  rthigh1.y.baseVal.value = rthigh1_y;
	  rthigh1.transform.baseVal.getItem(0).setRotate(rthigh1.currentTheta, rthigh1_x, rthigh0_y);
	  
	  $("#z1_0").css('display','none');
	  $("#z2_0").css('display','none');
	  $("#z3_0").css('display','none');
	  $('#questionMark0').css('display','none');
	  $('#heart0').css('display','none');
	  $('#mouth0').css('display','none');
	  $('#mouth1').css('display','none');
	  
	}
	
    function resetall(){
		velocity0 = 50;
        velocity1 = 50;
	//-----------Kang Wang-----------//
		jump_inc=0;
		Hello_inc=0;
		sorry_inc=0;
		sleepy_inc=0;
	//-----------Bo Wang-----------//
	    flyCount1 = 0;
       //goodjob action
        goodjobFlag = 0;
        goodjobHandCount = 120;
        goodjobDirection = 1;
       //i see action
        shakeheadFlag = 1;
        shakeheadCount = 120;
        shakeheadDirection = 1;
      //kiss action
        kissDirection0 = 1;
        kissDirection1 = -1;
        kissCount0 = 30;
        kissCount1 = 30;
      //why
        questionMarkScaler0 = 1;
        questionMarkScaler1 = 1;
        questionMarkFlag0 = 1;
        questionMarkFlag1 = 1;
      //walk action
        walkFlag0 = 0;
        walkThighDirection0 = 1;
        walkDirection0 = -1;
        walkDistance0 = MAX_X;
        walkFlag1 = 0;
        walkThighDirection1 = 1;
        walkDirection1 = 1;
        walkDistance1 = MAX_X;
      //byebye action
        byebyeHandFlag0 = 0;
        byebyeWaveCount0 = 75;
        byebyeHandFlag1 = 0;
        byebyeWaveCount1 = 75;

	//-----------Rui Tong-----------//
	    scale_para=0.9;
        flag=false;
        fuck_inc = 0;
        love_inc = 0;
        suck_inc = 0;
        lol_inc = 0;
        sad_inc = 0;
        wicked_inc=0;
        i=0;
        flag_lol=1;
		drop=0;
		theta=0;
		a=0.1;
		a1=0.1;
        a2=0.1;
        a3=0.1;
        a4=0.1;
        a5=0.1;
		$('#heart0').css('display', 'none');

        $('#mouth0').css('display', 'none');

        $('#tear0_0').css('display', 'none');
        $('#tear1_0').css('display', 'none');
        $('#tear2_0').css('display', 'none');
        $('#tear3_0').css('display', 'none');

        $('#rain1').css('display', 'none');
        $('#rain2').css('display', 'none');
        $('#rain3').css('display', 'none');
        $('#rain4').css('display', 'none');
        $('#rain5').css('display', 'none');
	}
