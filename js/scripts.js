var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$(document).ready(function() {

  $('#contenedor').mousemove(function(e) {
    var amountMovedX = (e.pageX * -1 / 10);
    var amountMovedY = (e.pageY * -1 / 15);
    $('#monte3').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    var amountMovedX2 = (e.pageX * -1 / 2);
    var amountMovedY2 = (e.pageY * -1 / 14);
    $('#monte2').css('background-position', amountMovedX2 + 'px ' + amountMovedY2 + 'px');
    $('#onda1').css('background-position', amountMovedX2 + 'px ' + amountMovedY2 + 'px');
    $('#onda2').css('background-position', amountMovedX2 + 'px ' + amountMovedY2 + 'px');
    $('#onda3').css('background-position', amountMovedX2 + 'px ' + amountMovedY2 + 'px');
    $('#barca').css('background-position', amountMovedX2 + 'px ' + amountMovedY2 + 'px');

    var amountMovedX3 = (e.pageX * -1 / 1);
    var amountMovedY3 = (e.pageY * -1 / 13);
    $('#monte1').css('background-position', amountMovedX3 + 'px ' + amountMovedY3 + 'px');

  });


  animateDiv();

  function makeNewPosition() {

    var h = $(window).height() - 40;
    var w = $(window).width() - 40;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

  }

  function animateDiv() {
    var newq = makeNewPosition();
    var oldq = $('#luciernaga').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('#luciernaga').animate({
      top: newq[0],
      left: newq[1]
    }, speed, function() {
      animateDiv();
    });

  };

  function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;
    var speedModifier = 0.4;
    var speed = Math.ceil(greatest / speedModifier);
    return speed;

  }
  animateDiv2();

  function makeNewPosition2() {

    var h = $(window).height() - 60;
    var w = $(window).width() - 40;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

  }

  function animateDiv2() {
    var newq = makeNewPosition2();
    var oldq = $('#luciernaga2').offset();
    var speed = calcSpeed2([oldq.top, oldq.left], newq);

    $('#luciernaga2').animate({
      top: newq[0],
      left: newq[1]
    }, speed, function() {
      animateDiv2();
    });

  };

  function calcSpeed2(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.2;
    var speed = Math.ceil(greatest / speedModifier);
    return speed;
  }

  animateDiv3();

  function makeNewPosition3() {

    var h = $(window).height() - 60;
    var w = $(window).width() - 40;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

  }

  function animateDiv3() {
    var newq = makeNewPosition3();
    var oldq = $('#luciernaga3').offset();
    var speed = calcSpeed3([oldq.top, oldq.left], newq);

    $('#luciernaga3').animate({
      top: newq[0],
      left: newq[1]
    }, speed, function() {
      animateDiv3();
    });

  };

  function calcSpeed3(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.2;
    var speed = Math.ceil(greatest / speedModifier);
    return speed;

  }

  animateDiv4();

  function makeNewPosition4() {

    var h = $(window).height() - 60;
    var w = $(window).width() - 40;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh, nw];
  }

  function animateDiv4() {
    var newq = makeNewPosition4();
    var oldq = $('#luciernaga4').offset();
    var speed = calcSpeed4([oldq.top, oldq.left], newq);

    $('#luciernaga4').animate({
      top: newq[0],
      left: newq[1]
    }, speed, function() {
      animateDiv4();
    });

  };

  function calcSpeed4(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest / speedModifier);

    return speed;

  }
  animateDiv5();

  function makeNewPosition5() {

    var h = $(window).height() - 60;
    var w = $(window).width() - 40;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

  }

  function animateDiv5() {
    var newq = makeNewPosition5();
    var oldq = $('#luciernaga5').offset();
    var speed = calcSpeed5([oldq.top, oldq.left], newq);

    $('#luciernaga5').animate({
      top: newq[0],
      left: newq[1]
    }, speed, function() {
      animateDiv5();
    });

  };

  function calcSpeed5(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest / speedModifier);
    return speed;
  }

  animateDiv6();

  function makeNewPosition6() {

    var h = $(window).height() - 60;
    var w = $(window).width() - 40;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

  }

  function animateDiv6() {
    var newq = makeNewPosition6();
    var oldq = $('#luciernaga6').offset();
    var speed = calcSpeed6([oldq.top, oldq.left], newq);

    $('#luciernaga6').animate({
      top: newq[0],
      left: newq[1]
    }, speed, function() {
      animateDiv6();
    });

  };

  function calcSpeed6(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.1;
    var speed = Math.ceil(greatest / speedModifier);
    return speed;
  }
});
