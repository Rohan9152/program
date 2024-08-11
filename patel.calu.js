let display = document.getElementById('display');

// Function to append values to the display
function appendToDisplay(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Function to clear the display
function clearDisplay() {
    display.innerText = '0';
}

// Function to delete the last character from the display
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
}

// Function to calculate the result
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}