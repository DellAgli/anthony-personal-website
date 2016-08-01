var helloInterval;
changeHello = function(){
	let nextHello = HELLOS[Math.floor(Math.random()*HELLOS.length)];
	while(nextHello === $('#hello').text()){
		nextHello = HELLOS[Math.floor(Math.random()*HELLOS.length)];
	}
	$('#hello').fadeOut(400, function(){
		$('#hello').text(nextHello);
	$('#hello').fadeIn();
	});

	clearInterval(helloInterval);
	helloInterval = setInterval(changeHello, 10000)
	
};

 $(document).ready(function(){
     changeHello();
     
   });


const HELLOS = 
[
	"Hello World!",//max length ~~~12 char
	"Well Met",
	"Greetings",
	"Good Day",
	"What's Up?",
	"What’s New?",
	"How Goes It?", 
	"Cheers",
	"Salutations",
	"Ahoy",
	"Howdy",
	"Aloha",
	"Hola",
	"Bonquer",
	"Hallo",
	"你好",
	"こんにちは",
	"Ciao",
]


