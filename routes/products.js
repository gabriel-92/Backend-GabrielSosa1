const express = require('express');
const router = express.Router();
const Contenedor = require("../container/Contenedor");
const data = new Contenedor();

/* getAll (devuleve todos los productos) y si no devuelve un menssaje 
de error en caso de que no haya productos en ingles*/
router.get('/', function (req, res, next) {
  res.send({ data: data.getAll() });
}
);

/* getById (devuelve un producto por id) y si no devuelve un menssaje*/
router.get('/:id', (req, res) => {
  let obj = data.getById(req.params.id);
  if (obj.length == 0) {
    res.send("Product could not be found");
  } else {
    res.send({ data: obj });
  }
}
);

router.post("/", ({ body }, res) => {
  data.addOne(body)
  res.send({ data: body });
});


router.put("/:id", (req, res, next) => {
  let id = req.params.id;
  res.send({ data: req.body });
}
);
router.delete("/:id", (req, res, next) => {
  let newData = data.deleteById(req.params.id);
  res.send({ data: newData });
}
);
module.exports = router;
