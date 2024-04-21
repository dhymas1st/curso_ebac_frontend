    const form = document.getElementById('form');
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (campoA.value === '' || campoB.value === '') {
            showMessage('Os dois campos são de preenchimento obrigatório', 'error');
            return;
        }

        const valueA = parseFloat(campoA.value);
        const valueB = parseFloat(campoB.value);

        if (valueB > valueA) {
            showMessage('Campo B é maior que Campo A', 'success');
        } else {
            showMessage('Campo B não é maior que Campo A', 'error');
        }
    });

    function showMessage(msg, className) {
        message.textContent = msg;
        message.className = `message ${className}`;
    }