document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('click-btn') as HTMLButtonElement;
    const clickCountDisplay = document.getElementById('click-count') as HTMLParagraphElement;

    if (clickButton) {
        clickButton.addEventListener('click', () => {
            fetch('http://localhost:5000/click', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                clickButton.textContent = 'Clicked!';
                if (clickCountDisplay) {
                    clickCountDisplay.textContent = `Total Clicks: ${data.count}`;
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }
});