const calculateAverageScore = scores => {
    if (scores.length === 0) return 0; // Return 0 if the array is empty
    
    const totalScore = scores.reduce((sum, score) => sum + score, 0); // Calculate total score
    return totalScore / scores.length; // Return the average score
};

// Example usage:
console.log(calculateAverageScore([80, 90, 70, 60])); 
console.log(calculateAverageScore([100, 90, 95]));            
console.log(calculateAverageScore([50, 50, 50, 50, 50]));            
console.log(calculateAverageScore([]));            

