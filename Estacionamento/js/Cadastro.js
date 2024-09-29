document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const reserva = {
        placa: document.getElementById('placa').value,
        proprietario: document.getElementById('proprietario').value,
        apartamento: document.getElementById('apartamento').value,
        bloco: document.getElementById('bloco').value,
        modelo: document.getElementById('modelo').value,
        cor: document.getElementById('cor').value,
        vaga: document.getElementById('vaga').value
    };

    let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    reservas.push(reserva);
    localStorage.setItem('reservas', JSON.stringify(reservas));

    alert('Reserva salva com sucesso!');
    this.reset();
    listarReservas();
});

function listarReservas() {
    console.log('Listando Reservas:', JSON.parse(localStorage.getItem('reservas')) || []);
}

function removerReserva(index) {
    let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    reservas.splice(index, 1);
    localStorage.setItem('reservas', JSON.stringify(reservas));
    listarReservas();
}