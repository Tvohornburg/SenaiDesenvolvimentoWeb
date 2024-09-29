function listarReservas() {
    const tableBody = document.querySelector('#vagasTable tbody');
    tableBody.innerHTML = '';

    let reservas = JSON.parse(localStorage.getItem('reservas')) || [];

    reservas.forEach((reserva, index) => {
        const row = document.createElement('tr');

        Object.values(reserva).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actionsCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removerReserva(index);
        actionsCell.appendChild(removeButton);
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });
}

function removerReserva(index) {
    let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    reservas.splice(index, 1);
    localStorage.setItem('reservas', JSON.stringify(reservas));
    listarReservas();
}

// Inicializa a listagem ao carregar a página
listarReservas();