const app = require("./app");
const { PORT } = require("./config");
app.listen(PORT, () => {
  console.log("El servidor se encuentra corriendo en el puerto " + PORT);
});