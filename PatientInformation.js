var json = {
	"questionLabels": ["first name", "last name", "birthday", "gender", "email", "parent first name", "parent last name", "parent email"],
	"patientInformation": [
	 	{"firstname": " "},
	 	{"lastname": " "},
	 	{"birthday": " "},
	 	{"gender": " "},
	 	{"email": " "},
	 	{"parentFirstName": " "},
	 	{"parentLastName": " "},
	 	{"parentEmail": " "}
	 ]
};


var el = document.getElementById("questions1");
var ans = document.getElementById("answers1");
var arrayLength = json['questionLabels'].length;


for(var i = 0; i<arrayLength; i++){
	var changes = "";
	changes += json['questionLabels'][i];
	changes += '<tab> </tab>'
	changes += '<input type="text">';
	el.innerHTML += '<h2>' + changes + '</h2>';
}


document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('submit').addEventListener('click', saveitems);
});


var saveitems= function(){
	var body = document.querySelectorAll("input");
	var answersLength=body.length-41;
	for(var i = 0; i < answersLength; i++){
		localStorage.setItem(json['questionLabels'][i], body[i].value);
		ans.innerHTML += '<h2>' + json['questionLabels'][i] + ": " + body[i].value + '</h2>';
		el.innerHTML = "";
	}
}




