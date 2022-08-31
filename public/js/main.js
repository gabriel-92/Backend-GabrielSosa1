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

    const paintProducts = document.getElementById('paintProducts');
    if (paintProducts) {
        paintProducts.innerHTML = '';
    }
    const paint = data.products.map((p) => {
        return (
            `<div class="card col-md-auto  " style="width: 18rem;">
                        <img src="${p.img}" class="card-img-top" alt="...">
                        <div class="card-body ">
                            <h5 class="card-title">
                                ${p.name}
                            </h5>
                            <div class="container text-truncate   ">
                                <p class="card-text border  ">
                                    ${p.description}
                                </p>
                            </div>
                            <a href="/products/detail/${p.id}" class="btn btn-primary">Details</a>
                        </div>
                    </div>`)
    }).join('');
    document.getElementById("paintProducts").innerHTML = paint
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