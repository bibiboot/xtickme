  var fname;
  var sname;
  var socket;

  $(document).ready(function() {
    $('#uname').keydown(function(event) {
        if (event.keyCode == 13) {
            add_user();
            return false;
         }
    });
  });

  function load(){
     $('#uname').focus();
     //demoMatchClick();
  }

  function draw_agent0(){
      $('#agent0').show('slow');
  }

  function draw_agent1(){
      $('#agent1').show('slow');
  }

  function hide_agent1(){
      $('#agent1').css('display', 'none');;
      $("#w2").remove();
  }

  function loading_chat(){
      /* Once the user has selected his name , the connect */
      draw_agent0();
      socket = io.connect('http://localhost:8080');

      socket.on('connect', function(){
        fname = $('#uname')[0].value 
        socket.emit('adduser', fname);
      });

  socket.on('updatechat', function (username, data) {
    $('#data').focus();
    display_conversation(username, data);

    if(username == fname){
        $('#conversation').append('<b class="fname">'+username + ':</b> ' + data + '<br>');
        var event = get_keywords(data);
        if(event!=-1) engine(event, 1);
    }
    else if(username!='server'){
        $('#conversation').append('<b class="sname">'+username + ':</b> ' + data + '<br>');
        var event = get_keywords(data);
        if(event!=-1) engine(event, 2);
    }
    else{
        $('#conversation').append('<b class="server">'+username + ':</b> ' + data + '<br>');
    }
    $('#conversation').scrollTop($('#conversation')[0].scrollHeight);
  });

  socket.on('updateusers', function(data) {
    //$('#users').empty();
    $.each(data, function(key, value) {
      //$('#users').append('<div>' + key + '</div>');
    });
  });


  }


  function display_conversation(username, data){
    if(username!=fname && username!='server' && sname==undefined) {
        draw_agent1();
        sname = username;
    }

    if(username == 'server'){
       //data = data.replace('has', 'has'); 
       if (sname == data.split(" ")[0]){
           hide_agent1();
       }

    }

    if(username == fname){
        // Local user chat
        var t = $("<div><div id='w1' class='content'>"+data+"</div></div>");
        $("#w1").remove();
        $('body').append(t);
        //$('body').append(b);
        var cx = 400+head0.x.baseVal.value;
        var cy = 200+head0.y.baseVal.value;

        $("#w1").css('left', cx);
        $("#w1").css('top', cy);
    }
    else if(username!='server'){
        var t = $("<div><div id='w2' class='content'>"+data+"</div></div>");
        $("#w2").remove();
        $('body').append(t);
        var cx = 600+head1.x.baseVal.value;
        var cy = 200+head1.y.baseVal.value;
        $("#w2").css('left', cx);
        $("#w2").css('top', cy);
    }
  }

  function add_user(){
    $('#cover').css('display', 'none');
    $('#login').css('display', 'none');
    loading_chat();
  }

  // on load of page
  $(function(){
    // when the client clicks SEND
    $('#datasend').click( function() {
      var message = $('#data').val();
      $('#data').val('');
      $('#data').focus();
      // tell server to execute 'sendchat' and send along one parameter
      socket.emit('sendchat', message);
    });

    // when the client hits ENTER on their keyboard
    $('#data').keypress(function(e) {
      if(e.which == 13) {
        $(this).blur();
        $('#datasend').focus().click();
      }
    });
  });

