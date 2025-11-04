document.addEventListener('DOMContentLoaded', () => {
    const radioSi = document.getElementById('radio-si');
    const radioNo = document.getElementById('radio-no');
    const responseMessage = document.getElementById('response-message');

    function updateMessage() {
        if (radioNo.checked) {
            responseMessage.textContent = 'Ha pulsado “no” osea que ademas de manco usted es mentiroso';
        } else if (radioSi.checked) {
            responseMessage.textContent = ''; // Si se selecciona "Sí", no se muestra ningún mensaje.
        }
    }

    // Asegurarse de que el mensaje se actualice cuando cambie la selección
    radioSi.addEventListener('change', updateMessage);
    radioNo.addEventListener('change', updateMessage);

    // Llamar a updateMessage al cargar la página para que se muestre el estado inicial
    updateMessage();
});
