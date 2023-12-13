const firebaseConfig = {
    apiKey: "AIzaSyAvZtTyXsD5X-wK7wZJmTkl9MljRGjLKoU",
    authDomain: "vyomadb.firebaseapp.com",
    databaseURL: "https://vyomadb-default-rtdb.firebaseio.com",
    projectId: "vyomadb",
    storageBucket: "vyomadb.appspot.com",
    messagingSenderId: "481692697386",
    appId: "1:481692697386:web:0f84203e6b0fbf90d7d453"
  };


firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const form = document.getElementById("form_1");

let registration_number=0;

let tech_events = [];
let non_tech_events = [];

form.addEventListener("submit", (e)=>{
	e.preventDefault();	
	var name = document.getElementById("name").value;
	var clg_name = document.getElementById("clg_name").value;
	var usn = document.getElementById("USN").value;
	var phone_number = document.getElementById("phone_number").value;
	var dept_choice = document.getElementById("dept_choice").value;
	
	var Space_Quiz = document.getElementById("space_quiz")
	var Aerogami = document.getElementById("aerogami")
	var Poster_Presentation = document.getElementById("poster_presentation")
	var Model_Making = document.getElementById("model_making")
	var Blind_Balloon_Blast = document.getElementById("Blind_balloon_blast")
	var Jilebi_Jump_Fest = document.getElementById("Jilebi_Jump_Fest")
	var Blow_balloon_target = document.getElementById("Blow_balloon_target")
	var Catch_The_Ball = document.getElementById("Catch_the_ball")
	var Gully_Cricket = document.getElementById("Gully_cricket")
	var Ball_In_Basket = document.getElementById("Ball_in_basket")
	var Fun_Zone = document.getElementById("Fun_Zone")
	var Guess_the_Movie_Clip = document.getElementById("Guess_the_Movie_Clip")
	var Brick_Walk = document.getElementById("Brick_Walk")
	
	
	if(Space_Quiz.checked == true){tech_events.push(Space_Quiz.value);}
	else{}
	if(Poster_Presentation.checked == true){tech_events.push(Poster_Presentation.value);}
	else{}
	if(Model_Making.checked == true){tech_events.push(Model_Making.value);}
	else{}
	if(Aerogami.checked == true){tech_events.push(Aerogami.value);}
	else{}
	
	if(Blind_Balloon_Blast.checked == true){non_tech_events.push(Blind_Balloon_Blast.value);}
	else{}
	if(Jilebi_Jump_Fest.checked == true){non_tech_events.push(Jilebi_Jump_Fest.value);}
	else{}
	if(Blow_balloon_target.checked == true){non_tech_events.push(Blow_balloon_target.value);}
	else{}
	if(Catch_The_Ball.checked == true){non_tech_events.push(Catch_The_Ball.value);}
	else{}
	if(Gully_Cricket.checked == true){non_tech_events.push(Gully_Cricket.value);}
	else{}
	if(Ball_In_Basket.checked == true){non_tech_events.push(Ball_In_Basket.value);}
	else{}
	if(Fun_Zone.checked == true){non_tech_events.push(Fun_Zone.value);}
	else{}
	if(Guess_the_Movie_Clip.checked == true){non_tech_events.push(Guess_the_Movie_Clip.value);}
	else{}
	if(Brick_Walk.checked == true){non_tech_events.push(Brick_Walk.value);}
	else{}
	
	
	database.ref(`'${registration_number}'`+" Number "+usn).set({
		Name : name,
		NameOfInstitution : clg_name,
		Department : dept_choice,
		USN : usn,
		PhoneNumber : phone_number,
		TechEvents : tech_events,
		NonTechEvents : non_tech_events
	})
	
	registration_number = registration_number+1;
	console.log(tech_events);
	console.log(non_tech_events);
	
	tech_events=[];
	non_tech_events=[];
	
});
