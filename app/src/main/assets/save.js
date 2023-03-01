function saveCalculation() {
	// Get input values
	var loanAmount = document.getElementById("loanAmount").value;
	var interestRate = document.getElementById("interestRate").value;
	var loanTerm = document.getElementById("loanTerm").value;
	var paymentFrequency = document.getElementById("paymentFrequency").value;
	var startDate = document.getElementById("startDate").value;

	// Construct calculation object
	var calculation = {
		loanAmount: loanAmount,
		interestRate: interestRate,
		loanTerm: loanTerm,
		paymentFrequency: paymentFrequency,
		startDate: startDate,
	};

	// Get existing calculations from Local Storage
	var calculations = JSON.parse(localStorage.getItem("calculations")) || [];

	// Add new calculation to the list
	calculations.push(calculation);

	// Save the updated list to Local Storage
	localStorage.setItem("calculations", JSON.stringify(calculations));
}
function loadCalculations() {
	// Get existing calculations from Local Storage
	var calculations = JSON.parse(localStorage.getItem("calculations")) || [];

	// Display calculations in a list
	var list = document.createElement("ul");
	for (var i = 0; i < calculations.length; i++) {
		var item = document.createElement("li");
		var calculation = calculations[i];
		item.textContent = "Loan Amount: " + calculation.loanAmount + ", Interest Rate: " + calculation.interestRate + ", Loan Term: " + calculation.loanTerm + ", Payment Frequency: " + calculation.paymentFrequency + ", Start Date: " + calculation.startDate;
		list.appendChild(item);
	}
	document.getElementById("savedCalculations").appendChild(list);
}