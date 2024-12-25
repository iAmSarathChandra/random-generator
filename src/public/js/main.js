function getRandomResult() {
    const choice = document.getElementById('choice').value;
    if (!choice) return;

    fetch(`/get_random/${choice}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = data.message;
        });
}

function resetPage() {
    document.getElementById('choice').value = "";
    document.getElementById('result').innerHTML = "";
} 