// Get the display and button elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Store the current input value
let currentInput = "";

// Function to handle the button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === "C") {
            // Clear the display
            currentInput = "";
            display.value = "";
        } else if (value === "DEL") {
            // Delete the last character
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (value === "=") {
            // Evaluate the expression (simple eval)
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
            }
        } else if (value === "±") {
            // Toggle the sign of the current input
            if (currentInput.startsWith("-")) {
                currentInput = currentInput.slice(1); // Remove the negative sign
            } else {
                currentInput = "-" + currentInput; // Add the negative sign
            }
            display.value = currentInput;
        } else if (value === "√") {
            // Calculate the square root
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();
            display.value = currentInput;
        } else if (value === "%") {
            // Calculate percentage
            currentInput = (parseFloat(currentInput) / 100).toString();
            display.value = currentInput;
        } else {
            // Add the value to the current input (numbers, operators)
            currentInput += value;
            display.value = currentInput;
        }
    });
});
