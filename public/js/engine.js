    function engine(eventid, user){

        if(eventid == 'fuck'){
            fuck_engine(user);
        }
                else if(eventid == 'bend'){
                        bend_engine(user);
                }
                else if(eventid == 'fly'){
                        fly_engine(user);
                }
                else if(eventid == 'goodjob'){
                        goodjob_engine(user);
                }
                else if(eventid == 'isee'){
                        isee_engine(user);
                }
                else if(eventid == 'kiss'){
                        kiss_engine(user);
                }
                else if(eventid == 'why'){
                        why_engine(user);
                }
                else if(eventid == 'goodluck'){
                        goodluck_engine(user);
                }
                else if(eventid == 'byebye'){
                        byebye_engine(user);
                }
                else if(eventid == 'walk'){
                        walk_engine(user);
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

		if(user == 1) {

           requestAnimationFrameID = window.requestAnimationFrame(kiss);

		   requestAnimationFrameID = window.requestAnimationFrame(kiss2);

        }

        else {

         requestAnimationFrameID = window.requestAnimationFrame(kiss2);

		 requestAnimationFrameID = window.requestAnimationFrame(kiss);

        }

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
