var json={
	"title": "additionalInformation",
	"questions": [
		{
			"text": "What sports do you play?",
			"answers": ["Football", "Baseball", "Softball", "Basketball", "Lacrosse", "Hockey", "Rugby", "Soccer", "Cycling", "Gymnastics", "Other:"],
			"answerType": ["checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "text"],
			"userInput":[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
		}, {
			"text": "What sports have you played in the past?",
			"answers": ["Football", "Baseball", "Softball", "Basketball", "Lacrosse", "Hockey", "Rugby", "Soccer", "Cycling", "Gymnastics", "Other:"],
			"answerType": ["checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "text"],
			"userInput":[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
		}, {
			"text": "Race:",
			"answers": ["Alaskan/American Indian", "Asian/Pacific Islander", "Black, not Hispanic", "Hispanic", "Caucasian", "Other, please specify:"],
			"answerType": ["checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "text"],
			"userInput":[" ", " ", " ", " ", " ", " "]
		}, {
			"text": "Marital Status:",
			"answers": ["Single, never married", "Married or in a domestic partnership", "Divorced", "Separated", "Widowed"],
			"answerType":["checkbox","checkbox","checkbox","checkbox","checkbox"],
			"userInput":[" ", " ", " ", " ", " "]
		}, {
			"text": "Highest Level of Education:",
			"answers": ["No high school", "Some high school, no diploma", "High school diploma", "Associate's degree", "Bachelor's degree", "Master's degree", "MD/DO"],
			"answerType":["checkbox","checkbox","checkbox","checkbox","checkbox","checkbox","checkbox"],
			"userInput":[" ", " ", " ", " ", " ", " ", " "]
		}, {
			"text": "Is there anything you would like us to know about your concussion or concussion recovery?",
			"answers":[""],
			"answerType":["text"],
			"userInput":" "
		}
	]
}

var el=document.getElementById("header2");
el.innerHTML="<h1>"+json["title"]+"</h1>";


var q=document.getElementById("questions2");
var questionsLength= json["questions"].length;

for(var i=0;i<questionsLength;i++){
	var questionsText="";
	questionsText+="<h2>"+json["questions"][i].text+"<h2>";


	var answersLength= json["questions"][i].answers.length;
	for(var j=0;j<answersLength;j++){
		/*if(json["questions"][i].answers[j]=="Other:"||json["questions"][i].answers[j]=="Other, please specify:"||json["questions"][i].type=="response"){
			questionsText+=json['questions'][i].answers[j]+"<input type='text'>";
		}*/
		if(json["questions"][i].answerType[j]=="text"){
			questionsText+=json['questions'][i].answers[j]+"<input type='text'>";
		}
		else{
			questionsText+=json['questions'][i].answers[j]+"<input type='checkbox'>";
		}
	}
	

	q.innerHTML+="<h2>"+ questionsText+'</h2>';
	
}




document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('submit').addEventListener('click', saveitems);
});


var saveitems= function(){
	var body = document.querySelectorAll("input");
	console.log(body.length);
	var answerCount=8;
	for(var i=0; i<json['questions'].length; i++){
		for(var j=0; j<json['questions'][i].answers.length; j++){
			if(json["questions"][i].answerType[j]=="text"){
				localStorage.setItem(json['questions'][i].userInput[j], body[answerCount].value);
				answerCount++;
			}
			else if (json["questions"][i].answerType[j]=="checkbox"){
				localStorage.setItem(json['questions'][i].userInput, body[answerCount].checked);
				answerCount++;
			}
		}
	}
	console.log(localStorage.getItem(json["questions"][1].userInput[1]));

}

	/*
	for(var i = 8; i < body.length; i++){
		console.log(body[i]);
		
		if(body[i].type=="text"){
			localStorage.setItem(json['questions'][i].userInput, body[i].value);
		}
		else if (body[i].type=="checkbox"){
			localStorage.setItem(json['questions'][i].userInput, body[i].checked);
		}
		else{
			localStorage.setItem(json['questions'][i].userInput, body[i].value)

		}
		
	} 
	*/




/*


	for(var i = 8; i < body.length; i++){
		if(typeof body[i]=="stringValue"){
			console.log(body[i].value);
			localStorage.setItem(json['questions'][i].answers[i], body[i].value);
		}
		else if(typeof body[i]=="checkbox"){
			localStorage.setItem(json['questions'][i].answers[i], body[i].checked);
		}

*/
	





