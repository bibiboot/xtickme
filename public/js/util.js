    function theta_to_radian(theta){
        return theta*(Math.PI/180);
    }

    function cos(theta){
        return Math.cos(theta_to_radian(theta));
    }

    function sin(theta){
        return Math.sin(theta_to_radian(theta));
    }

        function tan(theta){
        return Math.tan(theta_to_radian(theta));
    }
    
    function atan(value){
    	return Math.atan(value)*(180/Math.PI);
    }
    
    function pow(base, exponent) {
    	return Math.pow(base, exponent);
    }
    
    function sqrt(value) {
    	return Math.sqrt(value);
    }

    function s2d(s){
      //return 1;
      return (s / 1000) * constants.delay;
    }

    function s2dy(s, item){
      return (s / 1000) * constants.delay * Math.cos(theta_to_radian(item.currentTheta));
    }

    function get_keywords(data){
   //Extract keywords between # and space
        var regExp = /#([^)\s]+)\s?/;
        var matches = regExp.exec(data);
        //matches[1] contains the value between the parentheses
        if (matches == undefined) return -1;
        var result = matches[1].toLowerCase();
        //alert(JSON.stringify(result));
        console.log(result);
        return result;
    }


    $(document).ready(function(){
        $('#logo').hover(function() {
            $('#faq').show('slow');
        }, function() {
            $('#faq').hide('slow');
        });
       });

     function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
       var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

       return {
          x: centerX + (radius * Math.cos(angleInRadians)),
          y: centerY + (radius * Math.sin(angleInRadians))
         };
       }

     function describeArc(x, y, radius, startAngle, endAngle){
        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);

        var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

        var d = [
            "M", start.x, start.y, 
            "A", radius, radius, 0, arcSweep, 0, end.x, end.y
        ].join(" ");

        return d;       
     }
