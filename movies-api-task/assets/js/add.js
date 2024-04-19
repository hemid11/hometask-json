function addRow() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const contactTitle = document.getElementById('contacttitle').value;
    const country = document.getElementById('country').value;

    const tableBody = document.getElementById('booktableBody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${tableBody.children.length + 1}</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${contactTitle}</td>
        <td>${country}</td>
    `;
    tableBody.appendChild(newRow);

    const moviesWrapper = document.querySelector('.movies-wrapper');
    const newMovieCard = document.createElement('div');
    newMovieCard.classList.add('col-md-4', 'mb-4');
    newMovieCard.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${firstName}</h5>
                <p class="card-text">${lastName}</p>
                <p class="card-text">${contactTitle}</p>
                <p class="card-text">${country}</p>
            </div>
        </div>
    `;
    moviesWrapper.appendChild(newMovieCard);

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('contacttitle').value = '';
    document.getElementById('country').value = '';
}
