changeHello = function(){
	let nextHello = HELLOS[Math.floor(Math.random()*HELLOS.length)];
	while(nextHello === $('#hello').text()){
		nextHello = HELLOS[Math.floor(Math.random()*HELLOS.length)];
	}
	$('#hello').fadeOut(400, function(){
		$('#hello').text(nextHello);
	$('#hello').fadeIn();
	});
	
};

 $(document).ready(function(){
     changeHello();
     setInterval(changeHello, 10000)
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


