const socket = io.connect();
const render = (data) => {
    const messages = document.getElementById('messages');
    if (messages) {
        messages.innerHTML = '';
    }
    const html = data.messages.map((elem) => {
        return (
            `<div>
            <strong class="text-primary">${elem.author}</strong>:
            <span class="text-danger">[${elem.date}]<span>
            <em class="text-success">${elem.text}</em>
            </div>`)
    }).join('');
    document.getElementById("messages").innerHTML = html;

}
const addMessage = (e) => {
    let fecha = new Date().toLocaleDateString();
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value,
        date: fecha,
    };
    socket.emit('new-message', mensaje);
    limpiarInput();
    return false;
}
const limpiarInput = () => {
    document.getElementById("texto").value = ' ';
}

const addProduct = (e) => {
    let title = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("Image").value;
    let description = document.getElementById("description").value;
    const products = {
        title: title,
        price: price,
        image: image,
        description: description,
    }

    socket.emit('new-product', products);
    return false;
}

socket.on('messages', (data) => { render(data) })