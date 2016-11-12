var json={
	"title": "additionalInformation",
	"questions": [
		{
			"text": "What sports do you play?",
			"answers": ["Football", "Baseball", "Softball", "Basketball", "Lacrosse", "Hockey", "Rugby", "Soccer", "Cycling", "Gymnastics", "Other:"],
			"type": "check",
			"input":" "
		}, {
			"text": "What sports have you played in the past?",
			"answers": ["Football", "Baseball", "Softball", "Basketball", "Lacrosse", "Hockey", "Rugby", "Soccer", "Cycling", "Gymnastics", "Other:"],
			"type": "check",
			"input":" "

		}, {
			"text": "Race",
			"answers": ["Alaskan/American Indian", "Asian/Pacific Islander", "Black, not Hispanic", "Hispanic", "Caucasian", "Other, please specify:"],
			"type": "check",
			"input":" "
		}, {
			"text": "Marital Status:",
			"answers": ["Single, never married", "Married or in a domestic partnership", "Divorced", "Separated", "Widowed"],
			"type":"check",
			"input":" "
		}, {
			"text": "Highest Level of Education:",
			"answers": ["No high school", "Some high school, no diploma", "High school diploma", "Associate's degree", "Bachelor's degree", "Master's degree", "MD/DO"],
			"type":"check",
			"input":" "
		}, {
			"text": "Is there anything you would like us to know about your concussion or concussion recovery?",
			"answers":[""],
			"type":"response",
			"input":" "
		}
	]
}

var el=document.getElementById("header2");
el.innerHTML="<h1>"+json["title"]+"</h1>";


var q=document.getElementById("questions2");
var questionsLength= json["questions"].length;

for(var i=0;i<questionsLength;i++){
	var answersText="";
	answersText+="<h2>"+json["questions"][i].text+"<h2>";
	




	var answersLength= json["questions"][i].answers.length;
	for(var j=0;j<answersLength;j++){
		if(json["questions"][i].answers[j]=="Other:"||json["questions"][i].answers[j]=="Other, please specify:"||json["questions"][i].type=="response"){
			questionsText+=json['questions'][i].answers[j]+"<input type='text'>";
		}
		else{
			questionsText+=json['questions'][i].answers[j]+"<input type='checkbox'>";
		}
	}
	

	q.innerHTML+="<h2>"+ questionsText+'</h2>';
	
}