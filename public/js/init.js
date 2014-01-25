    var constants = new Object();
    var transformObject1;
    var transformObject2;
    var transformObject3;
    var transformObject4;
    var transformObject5;
    var transformObject6;
    var transformObject11;
    var transformObject12;
    var transformObject13;
    var transformObject14;
    var transformObject15;
    var transformObject16;
    var transformObject21;
    var svgElement;
    var requestAnimationFrameID; // Contains the requestAnimationFrame() object.
    var velocity0 = 50;
    var velocity1 = 50;
    var bendDirection0 = 1;
    var bendDirection1 = 1;
    var flyDirection0 = 1;
    var flyDirection1 = 1;
    var walkFlag = 0;
    var MAX_X = 500;
    var MAX_Y = 320;
    function initConstants()
    {
      constants.delay = 12;
      constants.initialTheta = 0;
      constants.thetaDelta = 0.3;
      svgElement = document.getElementById("svgElement");
      transformObject1 = svgElement.createSVGTransform();
      transformObject2 = svgElement.createSVGTransform();
      transformObject3 = svgElement.createSVGTransform();
      transformObject4 = svgElement.createSVGTransform();
      transformObject5 = svgElement.createSVGTransform();
      transformObject6 = svgElement.createSVGTransform();
      transformObject21 = svgElement.createSVGTransform();
      transformObject11 = svgElement.createSVGTransform();
      transformObject12 = svgElement.createSVGTransform();
      transformObject13 = svgElement.createSVGTransform();
      transformObject14 = svgElement.createSVGTransform();
      transformObject15 = svgElement.createSVGTransform();
      transformObject16 = svgElement.createSVGTransform();
    }

    function extendObject(){

      var head0 = document.getElementById("head0");
      var body0 = document.getElementById("body0");
      var lhand0 = document.getElementById("lhand0");
      var rhand0 = document.getElementById("rhand0");
      var lthigh0 = document.getElementById("lthigh0");
      var rthigh0 = document.getElementById("rthigh0");

      var head1 = document.getElementById("head1");
      var body1 = document.getElementById("body1");
      var lhand1 = document.getElementById("lhand1");
      var rhand1 = document.getElementById("rhand1");
      var lthigh1 = document.getElementById("lthigh1");
      var rthigh1 = document.getElementById("rthigh1");

      var heart0 = document.getElementById("heart0");

      head0.transform.baseVal.appendItem(transformObject1);
      head0.currentTheta = constants.initialTheta;
      rhand0.transform.baseVal.appendItem(transformObject2);
      rhand0.currentTheta = constants.initialTheta;
      lhand0.transform.baseVal.appendItem(transformObject3);
      lhand0.currentTheta = constants.initialTheta;
      body0.transform.baseVal.appendItem(transformObject4);
      body0.currentTheta = constants.initialTheta;
      lthigh0.transform.baseVal.appendItem(transformObject5);
      lthigh0.currentTheta = constants.initialTheta;
      rthigh0.transform.baseVal.appendItem(transformObject6);
      rthigh0.currentTheta = constants.initialTheta;


      head1.transform.baseVal.appendItem(transformObject11);
      head1.currentTheta = constants.initialTheta;
      rhand1.transform.baseVal.appendItem(transformObject12);
      rhand1.currentTheta = constants.initialTheta;
      lhand1.transform.baseVal.appendItem(transformObject13);
      lhand1.currentTheta = constants.initialTheta;
      body1.transform.baseVal.appendItem(transformObject14);
      body1.currentTheta = constants.initialTheta;
      lthigh1.transform.baseVal.appendItem(transformObject15);
      lthigh1.currentTheta = constants.initialTheta;
      rthigh1.transform.baseVal.appendItem(transformObject16);
      rthigh1.currentTheta = constants.initialTheta;

      heart0.transform.baseVal.appendItem(transformObject21);
    }

