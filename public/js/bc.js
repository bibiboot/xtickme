    "use strict";
    window.addEventListener('load', init, false); // Execute the initWindow function just after the page loads.
    /* --- GLOBALS ------------------------------------------------------------------------------------------- */
    var constants = new Object(); // Used to store global constants, set by initConstants() via init().
    var requestAnimationFrameID; // Contains the requestAnimationFrame() object.
    /* --- CONSTANTS ----------------------------------------------------------------------------------------- */
    function initConstants()
    {
      //Create a single global variable that contains all required constants. Called by init();
      constants.delay = 12; // The delay between animation stills, in milliseconds. This affects animation smoothness.
      constants.epsilon = 1; // Coefficient of restitution. 1 means a perfectly elastic collision (i.e., rock hard superballs), 0 means a perfectly inelastic collision (i.e., super sticky clay balls).
    }
    /* --- VECTOR FUNCTIONS ---------------------------------------------------------------------------------- */
    function Vector(x_component, y_component)
    {
      //Creates a generic 2D vector object.
      this.xc = x_component; // "xc" stands for the x-component of a generic vector.
      this.yc = y_component; // "yc" stands for the y-component of a generic vector.
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function vAdd(a, b)
    {
      //Adds vectors "a" and "b" and returns the vector result.
      var gv = new Vector(0, 0); // "gv" stands for "generic vector".
      gv.xc = a.xc + b.xc;
      gv.yc = a.yc + b.yc;
      return gv;
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function vDiff(a, b)
    {
      // Subtracts vector "a" and "b" (i.e., a - b) and returns the vector result.
      var gv = new Vector(0, 0); // "gv" stands for "generic vector".
      gv.xc = a.xc - b.xc;
      gv.yc = a.yc - b.yc;
      return gv;
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function vMulti(s, a)
    {
      //Multiplies the scale "s" with the vector "a" and returns the vector result.
      var gv = new Vector(0, 0); // "gv" stands for "generic vector".
      gv.xc = s * a.xc;
      gv.yc = s * a.yc;
      return gv;
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function vDot(a, b)
    {
      //Returns the dot product of vectors "a" and "b", which is a scalar.
      return ((a.xc) * (b.xc) + (a.yc) * (b.yc)); // The extra parentheses are unnecessary but aid readability.
    }
    /* --- HELPER FUNCTIONS ---------------------------------------------------------------------------------- */
    function init() {
      var svgElement = document.getElementById("svgElement"); // Required for Mozilla, this line not necessary for IE9 or Chrome.
      var ball0 = document.getElementById("ball0"); // Required for Mozilla, this line not necessary for IE9 or Chrome.
      var ball1 = document.getElementById("ball1"); // Required for Mozilla, this line not necessary for IE9 or Chrome.

      initConstants(); // Initialize the global variable that carries all of the script's constants.
      requestAnimationFrameID = window.requestAnimationFrame(doAnim); // Call the doAnim() function.

      var gv0 = new Vector(0, 0); // Create a generic vector object.
      var gv1 = new Vector(0, 0); // "gv" stands for "generic vector".

      ball0.v = gv0; // Append a custom property, representing the balls velocity vector, to the ball0 circle element.
      ball0.v.xc = 200; // The x-component of the velocity vector of the ball 0, in pixels per second (assuming the SVG viewport has been set up such that 1 user unit equals 1 pixel).
      ball0.v.yc = 80; // Set the y-component of the velocity vector for ball0 to 80 pixels per second.

      ball1.v = gv1; // Objects are by reference, so we must use gv1 (as opposed to re-using gv0)!
      ball1.v.xc = 200;
      ball1.v.yc = -180;
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function s2d(s)
    {
        /*
        The function name "s2d" means "speed to displacement". This function returns the required
        displacement value for an object traveling "s" pixels per second. This function assumes the following:
           * The parameter s is in pixels per second.
           * "constants.delay" is a valid global constant.
           * The SVG viewport is set up such that 1 user unit equals 1 pixel.*/
        return (s / 1000) * constants.delay; // Given "constants.delay", return the object's displacement such that it will travel at s pixels per second across the screen.
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function ball_r(ball) {
      return ball.r.baseVal.value;
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function ball_cx(ball) {
      //return ball.cx.baseVal.value;
      return ball.x.baseVal.value;
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function ball_cy(ball) {
      //return ball.cy.baseVal.value;
      return ball.y.baseVal.value;
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function radiusToMass(ballRadius)
    {
      //Based on a ball's radius, returns an appropriate value representing the ball's mass.
      var A = Math.PI * (ballRadius * ballRadius); // The area of the ball's circle.
      return A; // Return a mass value equal to the ball's area. To force all masses to be the same, return 1 here.
    }
    /* --- COLLISION FUNCTIONS ------------------------------------------------------------------------------- */
    function moveBall(ball) {
      //ball.cx.baseVal.value += s2d(ball.v.xc); // Given the x-component of the ball's velocity vector, make the ball move in the x-direction (on the screen, that is).
      //ball.cy.baseVal.value += s2d(ball.v.yc); // Given the y-component of the ball's velocity vector, make the ball move in the y-direction (on the screen, that is).
      console.log(ball.v.x);
      ball.x.baseVal.value += s2d(ball.v.xc); // Given the x-component of the ball's velocity vector, make the ball move in the x-direction (on the screen, that is).
      ball.y.baseVal.value += s2d(ball.v.yc); // Given the y-component of the ball's velocity vector, make the ball move in the y-direction (on the screen, that is).
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function verticalWallCollision(ball)
    {
      /*
        Returns true if the ball has hit (or gone past) the left wall or the right wall, false otherwise.
        Assumes the origin (0, 0) for the SVG viewport is in the center of the viewport.*/
      var cx = ball_cx(ball); // The x-coordinate of the center of the ball.
      //var r = ball_r(ball); // The radius of the ball.
      var width = svgElement.width.baseVal.value; // The width of the SVG viewport.
      //return Math.abs(cx) >= ((width / 2) - r); // Draw a picture with the origin in the center of the "ball box" and this statement should become clear.
      return Math.abs(cx) >= width/2;
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function horizontalWallCollision(ball)
    {
      //Returns true if the ball has hit (or gone past) the top wall or the bottom wall, false otherwise.
      //Assumes the origin (0, 0) for the SVG viewport is in the center of the viewport.
      var cy = ball_cy(ball); // The y-coordinate of the center of the ball.
      //var r = ball_r(ball); // The radius of the ball.
      var height = svgElement.height.baseVal.value; // The height of the SVG viewport.
      //return Math.abs(cy) >= ((height / 2) - r); // Draw a picture with the origin in the center of the "ball box" and this statement should become clear.
      return Math.abs(cy) >= height/2;
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function processWallCollision(ball)
    {
      //Changes the direction of the ball appropriately if the ball has collided with a wall.
      if (verticalWallCollision(ball))
        ball.v.xc *= -1; // Flip the x-component of the ball's velocity vector.

      if (horizontalWallCollision(ball))
        ball.v.yc *= -1; // Flip the y-component of the ball's velocity vector.
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function ballsOverlap(ballA, ballB)
    {
      //Returns true if ballA and ballB are touching or overlapping, false otherwise.
      var delta_x = ball_cx(ballA) - ball_cx(ballB);
      var delta_y = ball_cy(ballA) - ball_cy(ballB);
      var d = Math.sqrt((delta_x * delta_x) + (delta_y * delta_y)); // The classic distance-between-two-points formula.
      var A_r = ball_r(ballA); // The radius of ball A.
      var B_r = ball_r(ballB); // The radius of ball B.

      if (ballA.id == ballB.id) // Then ballA and ballB are the same ball.
        return (false);

      return d <= (A_r + B_r); // Draw this out on paper and it should make sense.
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function collisionN(ballA, ballB)
    {
      //Returns a unit vector that is normal to the point of contact between ball A and ball B.
      var gv = new Vector(0, 0); // Create a generic vector.
      var delta_y = ball_cy(ballB) - ball_cy(ballA);
      var delta_x = ball_cx(ballB) - ball_cx(ballA);
      var theta = Math.atan2(delta_y, delta_x); // The angle, in radians, that the line connecting the centers of ball A and B makes relative to the positive x-axis.

      gv.xc = Math.cos(theta); // The x-component of the unit normal vector.
      gv.yc = Math.sin(theta); // The y-component of the unit normal vector.
      return gv;
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function collisionResponse(ballA, ballB)
    {
      //Processes the collision of ballA and ballB based on the mathematics presented presented in the
      //"Have Collision, Will Travel" section of http://www.essentialmath.com/CollisionResponse.pps
      var Vab = vDiff(ballA.v, ballB.v); // The difference of vector ballA.v and ballB.v (i.e., ballA.v - ballB.v).
      var n = collisionN(ballA, ballB); // Calculates a unit vector that is normal to the point of ball-to-ball contact.
      var Ma = radiusToMass(ball_r(ballA)); // Returns an appropriate value for the mass of ball A based on its radius.
      var Mb = radiusToMass(ball_r(ballB)); // Returns an appropriate value for the mass of ball B based on its radius.
      var f; // The magnitude of the collision "impulse" between ball A and ball B such that momentum is conserved.
      var f_numerator; // Break the calculation for f into two parts, its numerator and denominator.
      var f_denominator;

      f_numerator = -(1 + constants.epsilon) * vDot(Vab, n); // For this and the remaining lines, see http://www.essentialmath.com/CollisionResponse.pps for details.
      f_denominator = vDot(n, n) * (1 / Ma + 1 / Mb);
      f = f_numerator / f_denominator;

      ballA.v = vAdd(ballA.v, vMulti(f / Ma, n)); // Per the collision, change the direction of ball A appropriately.
      ballB.v = vDiff(ballB.v, vMulti(f / Mb, n)); // Per the collision, change the direction of ball B appropriately.
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    function processBallCollision(ballA, ballB) {
      if (ballsOverlap(ballA, ballB))
        collisionResponse(ballA, ballB); // These two balls have collided, change their velocity vectors appropriately.
    }
    /* --- ANIMATION FUNCTIONS ------------------------------------------------------------------------------- */
    function doAnim() {
      moveBall(ball0); // Move the ball by a small amount.
      //moveBall(ball1); // Move the ball by a small amount.
      processWallCollision(ball0); // If this ball has collided with a wall, change the direction of the ball appropriately.
      //processWallCollision(ball1); // If this ball has collided with a wall, change the direction of the ball appropriately.
      //processBallCollision(ball0, ball1); // If this ball has collided with another, change the direction of both balls appropriately.
      //requestAnimationFrameID = window.requestAnimationFrame(doAnim); // Continue calling the doAnim() function.
    }
