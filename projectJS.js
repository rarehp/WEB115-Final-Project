function generateInputField(day) {
	document.write('<h3>' + day + '</h3>');
	document.write('<label for="' + day.toLowerCase() + '-breakfast">Breakfast:</label>');
	document.write('<input type="text" id="' + day.toLowerCase() + '-breakfast" required><br>');
  
	document.write('<label for="' + day.toLowerCase() + '-snack1">Snack:</label>');
	document.write('<input type="text" id="' + day.toLowerCase() + '-snack1" required><br>');
  
	document.write('<label for="' + day.toLowerCase() + '-lunch">Lunch:</label>');
	document.write('<input type="text" id="' + day.toLowerCase() + '-lunch" required><br>');
  
	document.write('<label for="' + day.toLowerCase() + '-snack2">Snack:</label>');
	document.write('<input type="text" id="' + day.toLowerCase() + '-snack2" required><br>');
  
	document.write('<label for="' + day.toLowerCase() + '-dinner">Dinner:</label>');
	document.write('<input type="text" id="' + day.toLowerCase() + '-dinner" required><br>');
  }
  
  var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  for (var i = 0; i < daysOfWeek.length; i++) {
	generateInputField(daysOfWeek[i]);
  }

  function generateMealPlan() {
	// Get user inputs
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var goal = document.getElementById("goal").value;
  
	var mealPlanPage = "<!DOCTYPE html>\n";
	mealPlanPage += "<html>\n";
	mealPlanPage += "<head>\n";
	mealPlanPage += "  <title>Meal Plan</title>\n";
	mealPlanPage += "  <style>\n";
	mealPlanPage += "    body {\n";
	mealPlanPage += "      font-family: monospace;\n";
	mealPlanPage += "      white-space: pre-wrap;\n";
	mealPlanPage += "    }\n";
	mealPlanPage += "  </style>\n";
	mealPlanPage += "</head>\n";
	mealPlanPage += "<body>\n";
	mealPlanPage += "  <h1>Weekly Meal Plan</h1>\n";
	mealPlanPage += "  <h2>Name: " + name + "</h2>\n";
	mealPlanPage += "  <h2>Email: " + email + "</h2>\n";
	mealPlanPage += "  <h2>Goal for the Week: " + goal + "</h2>\n";
  
	for (var i = 0; i < daysOfWeek.length; i++) {
	  var day = daysOfWeek[i].toLowerCase();
	  var breakfast = document.getElementById(day + "-breakfast").value;
	  var snack1 = document.getElementById(day + "-snack1").value;
	  var lunch = document.getElementById(day + "-lunch").value;
	  var snack2 = document.getElementById(day + "-snack2").value;
	  var dinner = document.getElementById(day + "-dinner").value;
  
	  mealPlanPage += "  <h3>" + daysOfWeek[i] + "</h3>\n";
	  mealPlanPage += "  <p>Breakfast: " + breakfast + "</p>\n";
	  mealPlanPage += "  <p>Snack: " + snack1 + "</p>\n";
	  mealPlanPage += "  <p>Lunch: " + lunch + "</p>\n";
	  mealPlanPage += "  <p>Snack: " + snack2 + "</p>\n";
	  mealPlanPage += "  <p>Dinner: " + dinner + "</p>\n";
	}
  
	mealPlanPage += "</body>\n";
	mealPlanPage += "</html>";
  
	var mealPlanWindow = window.open();
	mealPlanWindow.document.write(mealPlanPage);
  }
  
  function clearForm() {
	document.getElementById("mealPlanForm").reset();
  }
  
  function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
  }

  
