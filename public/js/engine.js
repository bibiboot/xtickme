    function engine(eventid, user){

        if(eventid == 'fuck'){
            fuck_engine(user);
        }
        else if(eventid == 'bend'){
            bend_engine(user);

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
