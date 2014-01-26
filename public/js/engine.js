    function engine(eventid, user){

        window.cancelAnimationFrame(requestAnimationFrameID);
        resetall();
        resetPosition();
        
                if(eventid == 'bend'){
                        bend_engine(user);
                }
                else if(eventid == 'fly' || eventid == 'good'){
                        fly_engine(user);
                }
                else if(eventid == 'goodjob' || eventid == 'gj'){
                        goodjob_engine(user);
                }
                else if(eventid == 'isee' || eventid == 'ic'){
                        isee_engine(user);
                }
                else if(eventid == 'kiss'){
                        kiss_engine(user);
                }
                else if(eventid == 'why' || eventid == '?'){
                        why_engine(user);
                }
                else if(eventid == 'goodluck'){
                        goodluck_engine(user);
                }
                else if(eventid == 'byebye' || eventid == 'bye'){
                        byebye_engine(user);
                }
                else if(eventid == 'walk'){
                        walk_engine(user);
                }
				else if(eventid == 'resetposition')
				{
						resetposition_engine(user);
				}
				else if(eventid == 'hi'){
                        hi_engine(user);
                }
		//----------Kang Wang------------//

		else if(eventid== 'jump'){

			jump_engine(user);}		

		else if(eventid== 'hello'){

			Hello_engine(user);}

		else if(eventid== 'sorry'){

			sorry_engine(user);}

		else if(eventid== 'sleepy'){

			sleepy_engine(user);}

		//----------Kang Wang------------//
                        else if(eventid == 'fuck'){
            fuck_engine(user);
        } else if(eventid == 'shocked' || eventid== 'bad'){
            shocked_engine(user);
        } else if(eventid == 'love'){
            love_engine(user);   
        } else if(eventid == 'suck'){
            suck_engine(user);   
        } else if(eventid == 'wicked'){
//            scale_para=0;
            wicked_engine(user);
        } else if(eventid == 'lol' || eventid == 'happy'){
            lol_engine(user);
        } else if(eventid == 'sad'){
            sad_engine(user);   
        } else if(eventid == 'rain'){
            rain_engine(user);   
        }

    }

    function fuck_engine(user){
        if(user == 1) {
           requestAnimationFrameID = window.requestAnimationFrame(fuck);
        }
        else {
         requestAnimationFrameID = window.requestAnimationFrame(fuck2);
        }
    }


	function bend_engine(user){

		if(user == 1) {

           requestAnimationFrameID = window.requestAnimationFrame(bend);

        }

        else {

         requestAnimationFrameID = window.requestAnimationFrame(bend2);

        }

    }

	

	function fly_engine(user){

		if(user == 1) {

           requestAnimationFrameID = window.requestAnimationFrame(fly);

        }

        else {

         requestAnimationFrameID = window.requestAnimationFrame(fly2);

        }

    }

	

	function goodjob_engine(user){

		if(user == 1) {

           requestAnimationFrameID = window.requestAnimationFrame(goodjob);

        }

        else {

		 goodjobDirection = -1;

         requestAnimationFrameID = window.requestAnimationFrame(goodjob2);

        }

    }

	

	function isee_engine(user){

		if(user == 1) {

           requestAnimationFrameID = window.requestAnimationFrame(isee);

        }

        else {

		 shakeheadDirection = -1;

         requestAnimationFrameID = window.requestAnimationFrame(isee2);

        }

    }

	function kiss_engine(user){
			requestAnimationFrameID = window.requestAnimationFrame(love);
           requestAnimationFrameID = window.requestAnimationFrame(kiss);
		   requestAnimationFrameID = window.requestAnimationFrame(kiss2);
    }

	

	function why_engine(user){

		requestAnimationFrameID = window.requestAnimationFrame(why);

    }

	

	function goodluck_engine(user){

		if(user == 1) {

           requestAnimationFrameID = window.requestAnimationFrame(goodluck);

        }

        else {

         requestAnimationFrameID = window.requestAnimationFrame(goodluck2);

        }

	}

	

	function byebye_engine(user){

        if(user == 1) {

           requestAnimationFrameID = window.requestAnimationFrame(byebye);

        }

        else {

         requestAnimationFrameID = window.requestAnimationFrame(byebye2);

        }

    }



	function walk_engine(user){

        if(user == 1) {

           requestAnimationFrameID = window.requestAnimationFrame(walk);

        }

        else {

         requestAnimationFrameID = window.requestAnimationFrame(walk2);

        }

    }
	
	function hi_engine(user){
        if(user == 1) {
           requestAnimationFrameID = window.requestAnimationFrame(hi);
        }
        else {
         requestAnimationFrameID = window.requestAnimationFrame(hi2);
        }
    }
	
	function resetposition_engine(user)
	{
		//window.requestAnimationFrame(resetPosition);
		resetPosition();
	}

     function jump_engine(user){

		if(user == 1) {

           requestAnimationFrameID = window.requestAnimationFrame(jump);

        }

        else {

         requestAnimationFrameID = window.requestAnimationFrame(jump2);

        }

	  }

	  

	  function Hello_engine(user){

		  if(user == 1) {
			
           requestAnimationFrameID = window.requestAnimationFrame(Hello);

        }

        else {

         requestAnimationFrameID = window.requestAnimationFrame(Hello2);

         }

	   }

	   

	   function sorry_engine(user){

		   if(user == 1) {

           requestAnimationFrameID = window.requestAnimationFrame(sorry);

        }

        else {

			bendDirection1 = -1;

         requestAnimationFrameID = window.requestAnimationFrame(sorry2);

         }

		}

		

	   function sleepy_engine(user){

		   if(user == 1) {

           requestAnimationFrameID = window.requestAnimationFrame(sleepy);

        }

        else {

         requestAnimationFrameID = window.requestAnimationFrame(sleepy2);

          } 

		 } 

    function fuck_engine(user){
        if(user == 1) {
           requestAnimationFrameID = window.requestAnimationFrame(fuck);
        }
        else {
         requestAnimationFrameID = window.requestAnimationFrame(fuck2);
        }
    }

    function shocked_engine(user){
        if(user == 1) {
           requestAnimationFrameID = window.requestAnimationFrame(shocked);
        }
        else {
         requestAnimationFrameID = window.requestAnimationFrame(shocked2);
        }
    }

    function love_engine(user){
        if(user == 1) {
           requestAnimationFrameID = window.requestAnimationFrame(love);
        }
        else {
         requestAnimationFrameID = window.requestAnimationFrame(love2);
        }
    }

    function suck_engine(user){
        if(user == 1) {
           requestAnimationFrameID = window.requestAnimationFrame(suck);
        }
        else {
            requestAnimationFrameID = window.requestAnimationFrame(suck2);
        }
    }

    function wicked_engine(user){
        if(user == 1) {
           requestAnimationFrameID = window.requestAnimationFrame(wicked);
        }
        else {
            requestAnimationFrameID = window.requestAnimationFrame(wicked2);
        }
    }

    function lol_engine(user){
        if(user == 1) {
           requestAnimationFrameID = window.requestAnimationFrame(lol);
        }
        else {
            requestAnimationFrameID = window.requestAnimationFrame(lol2);
        } 
    }

    function sad_engine(user){
        if(user == 1) {
           requestAnimationFrameID = window.requestAnimationFrame(sad);
        }
        else {
            requestAnimationFrameID = window.requestAnimationFrame(sad2);
        } 
    }

    function rain_engine(user){
        if(user == 1) {
           requestAnimationFrameID = window.requestAnimationFrame(rain);
        }
        else {
            requestAnimationFrameID = window.requestAnimationFrame(rain_2);
        } 
    }
