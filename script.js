//Exercise One

//var num = prompt("Enter A Number!"); 
//var total = 0;

//for(var i=1; i<=num; i++){
//	total = total + i;
//}

//console.log(total);

//Exercise Two

//var answer = prompt("Do you want to play?");
//var phrase ="";

//do{
//	var word = prompt("Enter a word.");
//	phrase = phrase + ' ' + word;
//	answer = prompt("Do you want to play again?");
//}
//while(answer == "yes");

//console.log(phrase);

//Exercise Three

//var name = prompt("Enter name: ");
//var answer = prompt("Would you like to print your name?");


//while(answer == "yes"){
//	console.log(name);
//	name = name + "!";
//	var answer = prompt("Would you like to print your name");
//}

//Exercise Four

var time = prompt("What time of day is it?");

if(time == "morning"){
	console.log("Since it is " + time + ", you should be eating breakfast. We suggest eggs and toast.");
}else if(time =="noon"){
	console.log("Since it is " + time + ", you should be eating lunch. We suggest a salad.");
}else if(time =="evening"){
	console.log("Since it is " + time + ", you should be eating dinner. We suggest chicken and rice.");
}else{
	alert("Invalid entry!");
}