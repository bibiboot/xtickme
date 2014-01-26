    function rotate_head(theta, cx, cy, direction) {
        //Rotate head by 
        head0.currentTheta += direction*theta;
        head0.transform.baseVal.getItem(0).setRotate(head0.currentTheta, cx, cy);
    }

    function rotate_body(theta, cx, cy, direction) {
        //Rotate body
        body0.currentTheta += direction*theta;
        body0.transform.baseVal.getItem(0).setRotate(body0.currentTheta, cx, cy);
    }

    function rotate_lhand(theta, cx, cy, direction) {
        // Rotate left hand
        lhand0.currentTheta += direction*theta;
        lhand0.transform.baseVal.getItem(0).setRotate(lhand0.currentTheta, cx, cy);
    }

    function rotate_rhand(theta, cx, cy, direction) {
        // Rotate right hand
        rhand0.currentTheta += direction*theta;
        rhand0.transform.baseVal.getItem(0).setRotate(rhand0.currentTheta, cx, cy);
    }

    function rotate_lthigh(theta, cx, cy, direction) {
        // Rotate left thigh
        lthigh0.currentTheta += direction*theta;
        lthigh0.transform.baseVal.getItem(0).setRotate(lthigh0.currentTheta, cx, cy);
    }

    function rotate_rthigh(theta, cx, cy, direction) {
        // Rotate right thigh
        rthigh0.currentTheta += direction*theta;
        rthigh0.transform.baseVal.getItem(0).setRotate(rthigh0.currentTheta, cx, cy);
    }

    function move_body_h() {
      //Move the complete body horizontal
      //if(head0.x.baseVal.value > MAX_X || head0.x.baseVal.value < -1*MAX_X) velocity *= -1;
      head0.x.baseVal.value += s2d(velocity)

      //try to control the body
      body0.x.baseVal.value += s2d(velocity)*cos(body0.currentTheta);
      body0.y.baseVal.value += s2d(velocity)*(-sin(body0.currentTheta));

      //try to control the hands
      lhand0.x.baseVal.value += s2d(velocity)*cos(lhand0.currentTheta);
      lhand0.y.baseVal.value += s2d(velocity)*(-sin(lhand0.currentTheta));

      rhand0.x.baseVal.value += s2d(velocity)*cos(rhand0.currentTheta);
      rhand0.y.baseVal.value += s2d(velocity)*(-sin(rhand0.currentTheta));

      //try to control the thighs
      lthigh0.x.baseVal.value += s2d(velocity)*cos(lthigh0.currentTheta);
      lthigh0.y.baseVal.value += s2d(velocity)*(-sin(lthigh0.currentTheta));

      rthigh0.x.baseVal.value += s2d(velocity)*cos(rthigh0.currentTheta);
      rthigh0.y.baseVal.value += s2d(velocity)*(-sin(rthigh0.currentTheta));

      //requestAnimationFrameID = window.requestAnimationFrame(move_body_h);
    }

    function move_body_v() {
      //Move the complete body vertical
      //if(head0.y.baseVal.value > MAX_Y || head0.y.baseVal.value < -1*MAX_Y) velocity *= -1;
      head0.y.baseVal.value += s2d(velocity)*(-cos(body0.currentTheta));

      //try to control the body
      body0.y.baseVal.value += s2d(velocity)*(-cos(body0.currentTheta));
      body0.x.baseVal.value += s2d(velocity)*(-sin(body0.currentTheta));

      //try to control the hands
      lhand0.y.baseVal.value += s2d(velocity)*(-cos(lhand0.currentTheta));
      lhand0.x.baseVal.value += s2d(velocity)*(-sin(lhand0.currentTheta));

      rhand0.y.baseVal.value += s2d(velocity)*(-cos(rhand0.currentTheta));
      rhand0.x.baseVal.value += s2d(velocity)*(-sin(rhand0.currentTheta));

      //try to control the thighs
      lthigh0.y.baseVal.value += s2d(velocity)*(-cos(lthigh0.currentTheta));
      lthigh0.x.baseVal.value += s2d(velocity)*(-sin(lthigh0.currentTheta));

      rthigh0.y.baseVal.value += s2d(velocity)*(-cos(rthigh0.currentTheta));
      rthigh0.x.baseVal.value += s2d(velocity)*(-sin(rthigh0.currentTheta));

      //requestAnimationFrameID = window.requestAnimationFrame(move_body_v);
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