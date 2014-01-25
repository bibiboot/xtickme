    function engine(eventid, user){

        if(eventid == 'fuck'){
            fuck(user);
        }
    }

    function fuck_engine(user){
        if(user == 1) requestAnimationFrameID = window.requestAnimationFrame(fuck);
        else requestAnimationFrameID = window.requestAnimationFrame(fuck2);
    }
