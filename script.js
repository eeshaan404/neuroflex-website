document.getElementById('train-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const brainwaveData = document.getElementById('brainwave_data').value;
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `You have successfully recorded your brainwaves for
