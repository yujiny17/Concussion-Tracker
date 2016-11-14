var json={
	"title": "Additional Information",
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
			"userInput":[" "]
		}
	]
}
var el=document.getElementById("header2");
el.innerHTML="<h1>"+json["title"]+" Results"+"</h1>";


var q=document.getElementById("questions2");
var questionsLength= json["questions"].length;

var questionsText="";


for(var i=0;i<questionsLength;i++){
	questionsText+="<h2>"+json["questions"][i].text+"<h2>";

	var answersLength= json["questions"][i].answers.length;
	for(var j=0;j<answersLength;j++){
		if(json["questions"][i].answerType[j]=="text"){
			questionsText+="<h2>"+localStorage.getItem(json["questions"][i].userInput[j])+"</h2>";
		}
		else if(json["questions"][i].answerType[j]=="checkbox"){
			questionsText+="<input type='checkbox' disabled =''"; 


			if(localStorage.getItem(json["questions"][i].userInput[j])=="true"){
				questionsText+=" checked >"+json["questions"][i].answers[j];
			}
			else{
				questionsText+=">"+json["questions"][i].answers[j];
			}
		
		}
	}

}
q.innerHTML+="<h2>"+ questionsText+'</h2>'
console.log(localStorage.getItem(json["questions"][1].userInput[10]));










