function setProgress(value) {
    // Ensure the value is within the valid range (0 to 100)
    const progressValue = Math.min(100, Math.max(0, value));

    // Update the width of the progress fill
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = `${progressValue}%`;

    // Update the text content
    const progressText = document.getElementById('progressText');
    progressText.textContent = `${progressValue}%`;

    // Check if progress is 100% and apply special styling
    if (progressValue === 100) {
        progressFill.classList.add('full-progress');
    } else {
        progressFill.classList.remove('full-progress');
    }
}

setProgress(60)

document.addEventListener("DOMContentLoaded", function () {
    // Get all bars with the class 'bar'
    const bars = document.querySelectorAll('.bar');

    // Loop through each bar
    bars.forEach(bar => {
        // Get the data-value attribute and convert it to a number
        const value = parseInt(bar.dataset.value, 10);

        // Set the height of the bar based on the data-value
        bar.style.height = `${value}px`;

        // Optional: Add event listener for interactivity (e.g., click)
        bar.addEventListener('click', function () {
            alert(`Clicked on bar with value ${value}`);
        });
    });
});