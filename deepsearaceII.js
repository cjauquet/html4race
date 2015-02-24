
$('#startRace').on('click', function(){
  var bet = $('#pick').val(); 
  var Animal = function(n, s, f, z, i) {
    this.name = n;
    this.speed = s;
    this.focus = f;
    this.size = z;
    this.intelligence = i;
    this.position = 0;
    this.report = function(){
      return this.name + " is at " + this.position;
    };
    this.run = function() {
      if((this.focus + this.size + this.intelligence) > (Math.random() * 15)) {
        this.position += this.speed;  
      }   
    };
  }

  var squid = new Animal("Willy", 1.5, 7, 4, 5), 
    lobster = new Animal("Frank", 2, 4, 3, 1),
    shark = new Animal("Stella", .5, 5, 2, 2),
    anglerfish = new Animal("Ricardo", 3, 4, 9, 9);

  var distance = 50;
  var winner;
  
  while(squid.position < distance && lobster.position < distance && shark.position < distance && anglerfish.position < distance) { 
    squid.run();
    lobster.run();
    shark.run();
    anglerfish.run();
  };

  if(squid.position > lobster.position && squid.position > shark.position && squid.position > anglerfish.position) {
    deepestbaddest = squid.name;
    message = " Willy the Squid has won."
  }

  else if(lobster.position > squid.position && lobster.position > shark.position && lobster.position > anglerfish.position) {
    deepestbaddest = lobster.name;
    message = "Frank the Shark has won."
  }

  else if(shark.position > squid.position && shark.position > lobster.position && shark.position > anglerfish.position){
    deepestbaddest = shark.name;
    message = "Stella the Shark has won."
  }

  else {
    winner = anglerfish.name;
    message = "Ricardo the Anglerfish has won."
  };

  console.log(squid.report());
  console.log(lobster.report());
  console.log(shark.report());
  console.log(anglerfish.report());

  if(winner === bet) {
      message = "You are the winner!";
  }
  else {
      message = "You lost!";
  }

  $('.character').fadeout();
  $('#' + winner).stop();
});

  
