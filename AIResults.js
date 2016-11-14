var json={
	"title": "Additional Information",
	"questions": [
		{
			"text": "What sports do you play?",
			"answers": ["Football", "Baseball", "Softball", "Basketball", "Lacrosse", "Hockey", "Rugby", "Soccer", "Cycling", "Gymnastics", "Other:"],
			"answerType": ["checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "text"],
			//"userInput":[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
			"userInput":["1","2","3","4","5","6","7","8","9","10","11"]
		}, {
			"text": "What sports have you played in the past?",
			"answers": ["Football", "Baseball", "Softball", "Basketball", "Lacrosse", "Hockey", "Rugby", "Soccer", "Cycling", "Gymnastics", "Other:"],
			"answerType": ["checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "text"],
			//"userInput":[" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
			"userInput":["12","13","14","15","16","17","18","19","20","21","22"]
		}, {
			"text": "Race:",
			"answers": ["Alaskan/American Indian", "Asian/Pacific Islander", "Black, not Hispanic", "Hispanic", "Caucasian", "Other, please specify:"],
			"answerType": ["checkbox", "checkbox", "checkbox", "checkbox", "checkbox", "text"],
			//"userInput":[" ", " ", " ", " ", " ", " "]
			"userInput":["23","24","25","26","27","28"]
		}, {
			"text": "Marital Status:",
			"answers": ["Single, never married", "Married or in a domestic partnership", "Divorced", "Separated", "Widowed"],
			"answerType":["checkbox","checkbox","checkbox","checkbox","checkbox"],
			//"userInput":[" ", " ", " ", " ", " "]
			"userInput":["29","30","31","32","33"]
		}, {
			"text": "Highest Level of Education:",
			"answers": ["No high school", "Some high school, no diploma", "High school diploma", "Associate's degree", "Bachelor's degree", "Master's degree", "MD/DO"],
			"answerType":["checkbox","checkbox","checkbox","checkbox","checkbox","checkbox","checkbox"],
			//"userInput":[" ", " ", " ", " ", " ", " ", " "]
			"userInput":["34","35","36","37","38","39","40"]
		}, {
			"text": "Is there anything you would like us to know about your concussion or concussion recovery?",
			"answers":[""],
			"answerType":["text"],
			//"userInput":[" "]
			"userInput":["41"]
		}
	]
}
var el=document.getElementById("header2");
el.innerHTML="<h1>"+json["title"]+" Results"+"</h1>";


var q=document.getElementById("questions2");
var questionsLength= json["questions"].length;

var questionsText="";


for(var i=0; i<questionsLength; i++){
	questionsText+="<h2>"+json["questions"][i].text+"<h2><h3>";

	var answersLength= json["questions"][i].answers.length;
	for(var j=0; j<answersLength; j++){
		if(json["questions"][i].answerType[j]=="text"){
			questionsText+=" "+localStorage.getItem("id: "+json["questions"][i].userInput[j]);
		}
		else if(json["questions"][i].answerType[j]=="checkbox"){ 
			if(localStorage.getItem("id: "+json["questions"][i].userInput[j])=="true"){
				questionsText+=json["questions"][i].answers[j]+"<input type='checkbox' disabled ='' checked >";
			}
			else{
				questionsText+=json["questions"][i].answers[j]+"<input type='checkbox' disabled =''>";
			}
		
		}
	}
	questionsText+="</h3>"
}
q.innerHTML+=questionsText
console.log(localStorage.getItem(json["questions"][1].userInput[10]));










