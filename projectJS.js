function generateMealPlan() {
	// Get user inputs
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var goal = document.getElementById("goal").value;
	var breakfast = document.getElementById("breakfast").value;
	var snack1 = document.getElementById("snack1").value;
	var lunch = document.getElementById("lunch").value;
	var snack2 = document.getElementById("snack2").value;
	var dinner = document.getElementById("dinner").value;
  
	// Validate email
	if (!validateEmail(email)) {
	  alert("Please enter a valid email address.");
	  return;
	}
  
	// Generate the meal plan page
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
	mealPlanPage += "  <h3>Monday</h3>\n";
	mealPlanPage += "  <p>Breakfast: " + breakfast + "</p>\n";
	mealPlanPage += "  <p>Snack: " + snack1 + "</p>\n";
	mealPlanPage += "  <p>Lunch: " + lunch + "</p>\n";
	mealPlanPage += "  <p>Snack: " + snack2 + "</p>\n";
	mealPlanPage += "  <p>Dinner: " + dinner + "</p>\n";
	// Repeat the above section for the remaining days of the week
  
	mealPlanPage += "</body>\n";
	mealPlanPage += "</html>";
  
	// Open the generated meal plan in a new window
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
  