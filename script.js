

function checkAge(){
    const age = document.getElementById('ageInput').value;
    const cardsSection = document.getElementById('cardsSection');
    let message, Adult;

    if (age >=18) {
        message = "Adult";
        Adult = "Adult";
    }
    else {
        message = "Child";
        Adult = "Child";
    }
    const cardHTML = `
    <div class="card text-white bg-${Adult} mb-3">
    <div class="card-body">
    <h5 class="card-title">${message}</h5>
    </div>
    </div>
    `;

    cardsSection.innerHTML = cardHTML;
}


