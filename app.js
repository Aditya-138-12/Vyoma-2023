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

const ref = database.ref("VyomaDB"); 

const form = document.getElementById("form_1");

form.addEventListener("submit", (e)=>{
	
	e.preventDefault();	
	var name = document.getElementById("name").value;
	ref.push({
				
		Name: name,
		
	})
});
