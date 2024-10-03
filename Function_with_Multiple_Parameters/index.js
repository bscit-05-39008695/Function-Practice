function calculate(num1, num2, operation) {
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                return "Error: Division by zero"; // Handle division by zero
            }
            result = num1 / num2;
            break;
        default:
            return "Error: Invalid operation"; // Handle invalid operation
    }

    return result;
}

// Example usage:
console.log(calculate(10, 5, "add"));        // Logs: 15
console.log(calculate(10, 5, "subtract"));   // Logs: 5
console.log(calculate(10, 5, "multiply"));   // Logs: 50
console.log(calculate(10, 5, "divide"));     // Logs: 2
