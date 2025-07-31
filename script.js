let count = 0;

// Function to update the UI
function updateDisplay() {
  document.getElementById('counter').innerText = count;
}

// Increment function
function increment() {
  count++;
  updateDisplay();
}

// Decrement function
function decrement() {
  count--;
  updateDisplay();
}

// Reset function
function reset() {
  count = 0;
  updateDisplay();
}
