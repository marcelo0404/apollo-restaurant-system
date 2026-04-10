// document.addEventListener('DOMContentLoaded', () => {
//     const modal = document.getElementById('modalReserva');
//     const botoesAbrir = document.querySelectorAll('.btn-abrir');
//     const btnFechar = document.querySelector('.close');
//     const formReserva = document.getElementById('formReserva');

//     console.log("1. Script carregado");

//     if (botoesAbrir.length > 0) {
//         botoesAbrir.forEach(botao => {
//             botao.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 modal.style.display = 'flex';
//                 console.log("2. Modal aberto");
//             });
//         });
//     }

//     if (btnFechar) {
//         btnFechar.addEventListener('click', () => {
//             modal.style.display = 'none';
//         });
//     }

//     // A PARTE QUE NÃO ESTÁ FUNCIONANDO:
//     if (formReserva) {
//         console.log("3. Formulário encontrado!");

//         formReserva.addEventListener('submit', (event) => {
//             event.preventDefault(); // Impede o recarregamento [cite: 100]
//             console.log("4. Evento de Submit disparado!");

//             // Captura dos campos exigidos pelo cliente 
//             const nome = document.getElementById('nome').value;
//             const data = document.getElementById('data').value;

//             console.log("5. Dados capturados:", nome, data);

//             alert(`Obrigado, ${nome}! Sua reserva foi enviada.`);

//             formReserva.reset();
//             modal.style.display = 'none';
//         });
//     } else {
//         console.error("ERRO: O formulário 'formReserva' não foi encontrado!");
//     }
// });


document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('modalReserva');
    const btnAbrir = document.querySelectorAll('.btn-abrir');
    const btnFechar = document.querySelector('.close');
    const formReserva = document.getElementById('formReserva');

    // Abrir o modal
    btnAbrir.forEach(botao => {
        botao.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    });

    // Fechar o modal
    btnFechar.addEventListener('click', () => {
        modal.style.display = 'none'; // Esconde o modal
    });

    // Fechar o modal ao clicar fora
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Tratamento do Formulário 
    formReserva.addEventListener('submit', (event) => {
        event.preventDefault();

        // Coleta dos dados 
        const dadosReserva = {
            nome: document.getElementById('nome').value,
            data: document.getElementById('data').value,
            hora: document.getElementById('hora').value,
            pessoas: document.getElementById('pessoas').value
        };

        const dataPura = document.getElementById('data').value;

        
        const dataBrasil = dataPura.split('-').reverse().join('/');

        console.log("Dados da reserva prontos para o Back-end:", dadosReserva);

        alert(`Obrigado, ${dadosReserva.nome}! Sua reserva para o dia ${dataBrasil} às ${dadosReserva.hora} foi enviada.`);

        // Limpa o formulário e fecha o modal
        formReserva.reset();
        modal.style.display = 'none';
    });
});