const express = require('express')
const app = express();
const morgan = require('morgan');
const path = require('path');
//* \\ Server Configurations //

var Data = {
  assets: path.join(__dirname, "assets"),
  port: 4882 || process.env.PORT,
  views: path.join(__dirname, "views"),
};

app.set("configs", Data);

class Server {
  constructor(configs) {
    this.data = configs;
    app.set("globalport", this.data.port);
    console.log(app.get("globalport"));
  }
  start() {
    this.initLocalFiles();
    this.initMiddlewares();
    this.initRoutes();
    this.initViews();
    this.initServer();
  }
  initLocalFiles() {
    //* \\ Database Initializacion //
  require("./configs/database");
  }
  initViews() {
    //* \\ views folder //
    app.set("views", this.data.views);
    //* \\ main view engine //
    app.set("view engine", "ejs");
    //* \\ rendering html files with ejs //
    app.engine("html", require("ejs").renderFile);
    //* \\ Static Files //
    app.use(express.static(this.data.assets));
  }
  initRoutes() {
    //* \\ Server Routes //
    app.use(require("./routes"));
    app.use("/api", require("./routes/database.routes"));
  }
  initServer() {
    //* \\ Listening //
    app.listen(this.data.port, function() {
      console.log("Servidor encendido");
      console.log(`http://localhost:${app.get("globalport")}`);
    });
    console.log(app.get("views"));
    console.log(this.data.assets);
  }
  initMiddlewares() {
    //* \\ Middlewares //
    app.use(morgan("dev"));
    app.use(express.json());
  }
}
//honestamente esto es totalmente inutil asi que borralo XD khe,listo

//* \\ Starting the server //
const gameserver = new Server(app.get("configs"));
gameserver.start();


