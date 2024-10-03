function calculateVelocity(initialVelocity,acceleration,time) {
    const velocity = initialVelocity + (acceleration * time);
    console.log(`if initialVelocity=${initialVelocity},acceleration=${acceleration},time=${time}`)
    console.log(velocity)
    return velocity;
    
}
calculateVelocity(5, 2, 3);
calculateVelocity(0, 10, 5);
calculateVelocity(20, -3, 4);
calculateVelocity(15, 1, 10);

