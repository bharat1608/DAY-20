
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImageDiv = document.getElementById('dog-image');
            dogImageDiv.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <img src="${data.message}" class="img-fluid" alt="Random Dog Image">
                    </div>
                </div>
            `;
        })
        .catch(error => console.error('Error fetching dog image:', error));
}

fetchDogImage();

