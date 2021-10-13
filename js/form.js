function validateForm(event) {
    const alert = document.getElementById('alert');
    const name = document.getElementById('name').value;
    const mail = document.getElementById('email').value;
    let message = '';
    let ok = true;

    event.preventDefault();

    if (name.length == 0) {
        message = `
        <button type="button" class="close">&times;</button>
        <strong>¡Por favor!</strong> Ingresa un nombre.
        `;
        alert.innerHTML = message;
        return ok = false;
    }
    if (mail.length == 0) {
        message = `
        <button type="button" class="close">&times;</button>
        <strong>¡Por favor!</strong> Ingresa un correo.
        `;
        alert.innerHTML = message;
        return ok = false;
    }
    if (ok === true) {
        onsubmit = true;
        console.log('Ok')
    }

}

document.getElementById("form").addEventListener('submit', validateForm);