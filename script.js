const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    // Set the initial value of the counter to 0
    counter.innerText = '0';

    // Function to update 
    const updateCounter = () => {
        // Get the target value from the 'data-target' attribute of the counter element
        const target = +counter.getAttribute('data-target');

        // Get the current value of the counter
        const current = +counter.innerText;

        // Calculate the increment value
        const increment = target / 100;

        // Check if the current value is less than the target value
        if (current < target) {
            // Increment the counter value and update the display
            counter.innerText = `${Math.ceil(current + increment)}`;
            // Call the updateCounter function again after a short delay (1 millisecond)
            setTimeout(updateCounter, 1);
        } else {
            // If the current value is greater than or equal to the target value, set the counter to the target value
            counter.innerText = target;
        }
    }

    // Call the updateCounter function to start the counter animation
    updateCounter();
});
