const btn = document.getElementById('generateBtn');
const result = document.getElementById('result');
btn.addEventListener("click", generateActivity);

function generateActivity() {
    fetch('http://www.boredapi.com/api/activity/')
        .then(res => res.json())
        .then(data => {
            let resultHTML = `
            <h2>Welcome and here is the Activity</h2>
            <div>
            <p>${data.activity}</p>
            <p>Type: ${data.type}</p>
            </div>`;
            result.innerHTML = resultHTML;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
