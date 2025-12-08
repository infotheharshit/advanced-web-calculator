const display = document.getElementById('calc-display');
let isScientific = false;

// --- Main Calculator Functions ---

function appendInput(value) {
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
}

function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function calculateResult() {
    try {
        // Replace user-friendly symbols with JavaScript equivalents
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');

        // Evaluate the expression, which can contain Math methods like Math.sqrt
        // Using new Function() is safer than a direct eval()
        const result = new Function('return ' + expression)();
        
        // Handle floating point errors
        display.value = parseFloat(result.toFixed(10));
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleScientific() {
    isScientific = !isScientific;
    const container = document.querySelector('.calculator-container');
    if (isScientific) {
        container.classList.add('scientific-mode');
    } else {
        container.classList.remove('scientific-mode');
    }
}


// --- Tab Handling Function (Used in index.html) ---

function showPanel(panelIndex) {
    const panels = document.querySelectorAll('.tab-panel');
    const buttons = document.querySelectorAll('.tab-button');

    panels.forEach((panel, index) => {
        panel.classList.remove('active');
        buttons[index].classList.remove('active');
    });

    panels[panelIndex].classList.add('active');
    buttons[panelIndex].classList.add('active');
}