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
    var transformObjectQuestionMark;
    var transformObjectRing0;
    var transformObjectRing1;


        //KW
	var transformObject20;
	var transformObject22;
	var transformObject23;
	var transformObject24;
	var transformObject25;
	var transformObject26;
        //
    var svgElement;
    var requestAnimationFrameID; // Contains the requestAnimationFrame() object.
    var velocity0 = 50;
    var velocity1 = 50;
    var bendDirection0 = 1; //BO
    var bendDirection1 = -1; //BO
    var flyDirection0 = 1;
    var flyDirection1 = 1;
    var flyCount0 = 0;
    var flyCount1 = 0
   //goodjob action
    var goodjobFlag = 0;            //Control the condition of hand
    var goodjobHandCount = 120;     //time for clapping. default = 120
    var goodjobDirection = 1        //1:forward to left, -1:forward to right
    //i see action
    var shakeheadFlag = 1;          //Control the condition of head
    var shakeheadCount = 120;       //time for shanking. default = 120
    var shakeheadDirection = 1;     //1:forward to left, -1:forward to right
    //kiss action
    var kissDirection0 = 1;         //1:forward to left, -1:forward to right
    var kissDirection1 = -1;        //for user2
    var kissCount0 = 30;            //time for kiss. default = 30
    var kissCount1 = 30;            //for user2
    //why
    var questionMarkScaler0 = 1;    //Control the scale of question mark
    var questionMarkScaler1 = 1;    //for user2
    var questionMarkFlag0 = 1;              //Control the condition of the question mark
    var questionMarkFlag1 = 1;              //for user2
    //walk action
    var walkFlag0 = 0;                  //For switching the action between movming whole body and rotating the hands/thighs
    var walkThighDirection0 = 1;    //Control the direction of the hands/thighs rotation
    var walkDirection0 = -1;                //-1:walk forward to left, 1:walk forward to right
    var walkDistance0 = MAX_X;
    var walkFlag1 = 0;                      //For user2
    var walkThighDirection1 = 1;    //For user2
    var walkDirection1 = 1;         //For user2
    var walkDistance1 = MAX_X;      //For user2
    //byebye action
    var byebyeHandFlag0 = 0;        //Control the condition of hand while doing byebye action. need to be set to 0 after byebye action.
    var byebyeWaveCount0 = 75;      //time for waving hands. default = 75
    var byebyeHandFlag1 = 0;        //For user2
    var byebyeWaveCount1 = 75;      //For user2


    var MAX_X = 500;
    var MAX_Y = 320;


	  var head0_x=-100; var head0_y=0; var head1_x=100; var head1_y=0;
	  var body0_x=-100; var body0_y=50; var body1_x=100; var body1_y=50; 
	  var lhand0_x=-100; var lhand0_y=75; var lhand1_x=100; var lhand1_y=75;
	  var rhand0_x=-100; var rhand0_y=75; var rhand1_x=100; var rhand1_y=75;
	  var lthigh0_x=-100; var lthigh0_y=150; var lthigh1_x=100; var lthigh1_y=150;
	  var rthigh0_x=-100; var rthigh0_y=150; var rthigh1_x=100; var rthigh1_y=150;

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

      //Bowen updates from here
      transformObjectQuestionMark = svgElement.createSVGTransform();
      transformObjectRing0 = svgElement.createSVGTransform();
      transformObjectRing1 = svgElement.createSVGTransform();

	  transformObject20 = svgElement.createSVGTransform();
	  transformObject22 = svgElement.createSVGTransform();
	  transformObject23 = svgElement.createSVGTransform();
	  transformObject24 = svgElement.createSVGTransform();
	  transformObject25 = svgElement.createSVGTransform();
	  transformObject26 = svgElement.createSVGTransform();

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

     //Bowen updates from heres
     var questionMark0 = document.getElementById("questionMark0");
     var ring0 = document.getElementById("ring0");
     var ring1 = document.getElementById("ring1");

     var z1 = document.getElementById("z1_0");
      var z2 = document.getElementById("z2_0");
      var z3 = document.getElementById("z3_0");
	  var z4 = document.getElementById("z1_1");
      var z5 = document.getElementById("z2_1");
      var z6 = document.getElementById("z3_1");


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

      //Bowen updates from here
      ring0.transform.baseVal.appendItem(transformObjectRing0);
      ring0.currentTheta = constants.initialTheta;
      ring1.transform.baseVal.appendItem(transformObjectRing1);
      ring1.currentTheta = constants.initialTheta;
      questionMark0.transform.baseVal.appendItem(transformObjectQuestionMark);
      questionMark0.currentTheta = constants.initialTheta;


	  z1.transform.baseVal.appendItem(transformObject20);
	  z2.transform.baseVal.appendItem(transformObject22);
	  z3.transform.baseVal.appendItem(transformObject23);
	  z4.transform.baseVal.appendItem(transformObject24);
	  z5.transform.baseVal.appendItem(transformObject25);
	  z6.transform.baseVal.appendItem(transformObject26);
    }

