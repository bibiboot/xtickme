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
