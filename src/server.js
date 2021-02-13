const db=require('./db/db')
const app = require('./app')




db.sync()
  .then(() => {
    console.log('Conectado a la base de datos');
    app.listen(3000);
    console.log('Servidor escuchando en el puerto 3000');
  })
  .catch(console.error);

