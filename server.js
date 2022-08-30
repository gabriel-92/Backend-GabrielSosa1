const app = require('./app.js')
const PORT = process.env.PORT || 8080;
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io');
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
listOfProducts = [
    {
        id: 1,
        name: 'Producto 1',
        price: 100,
        img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem.'
    },
    {
        id: 2,
        name: 'Producto 2',
        price: 200,
        img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem.'
    },
    {
        id: 3,
        name: 'Producto 3',
        price: 300,
        img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem.'
    },
]
let messages = [
    {
        date: "25/8/2022 23:32:03 ",
        author: "Juan", text: "Hola ¿Qué tal?"
    },
    {
        date: "25/8/2022 23:32:03 ",
        author: "Pedro", text: "Muy Bien y vos?"
    },
    {
        date: "25/8/2022 23:32:03 ",
        author: "Ana", text: "Geinal!"
    }
]
const server = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', (error) => console.error(`Error en Servidor ${error}`));

server.on('error', (err) => {
    console.log(err);
})
io.on('connection', (socket) => {
    console.log('se conecto un cliente');
    socket.emit('messages', { messages, products: listOfProducts });

    socket.on('new-message', (data) => {
        messages = [...messages, data]
        let todo = { messages: messages, products: listOfProducts };
        io.sockets.emit('messages', todo)

    })
})

