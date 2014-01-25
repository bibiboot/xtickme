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
