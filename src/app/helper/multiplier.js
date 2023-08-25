export default class Multiplier {
  multiplayer = 0.0;
  rank = "";
  level = 0;
  Class = "";
  multiplyx(x,b,c) {
    this.level = b;
    this.rank = c;
    this.levelx = this.level / 1000;
    this.multiplayer = 1.1 + this.levelx;
    this.maxmultiplayer = 1.2 + this.levelx;
    switch (this.rank) {
      case "F":
        this.multiplayer += 0.05;
        this.maxmultiplayer += 0.125;
        break;
      case "E":
        this.multiplayer += 0.1;
        this.maxmultiplayer += 0.145;
        break;
      case "D":
        this.multiplayer += 0.135;
        this.maxmultiplayer += 0.155;
        break;
      case "C":
        this.multiplayer += 0.145;
        this.maxmultiplayer += 0.265;
        break;
      case "C+":
        this.multiplayer += 0.155;
        this.maxmultiplayer += 0.275;
        break;
      case "B":
        this.multiplayer += 0.165;
        this.maxmultiplayer += 0.285;
        break;
      case "B+":
        this.multiplayer += 0.175;
        this.maxmultiplayer += 0.295;
        break;
      case "B++":
        this.multiplayer += 0.185;
        this.maxmultiplayer += 0.305;
        break;
      case "A":
        this.multiplayer += 0.295;
        this.maxmultiplayer += 0.415;
        break;
      case "A+":
        this.multiplayer += 0.305;
        this.maxmultiplayer += 0.425;
        break;
      case "A++":
        this.multiplayer += 0.415;
        this.maxmultiplayer += 0.535;
        break;
      case "S":
        this.multiplayer += 0.65;
        this.maxmultiplayer += 0.715;
        break;
      case "S+":
        this.multiplayer += 0.75;
        this.maxmultiplayer += 0.865;
        break;
      case "S++":
        this.multiplayer += 0.85;
        this.maxmultiplayer += 0.95;
        break;
      default:
        this.multiplayer += 0.1;
        this.maxmultiplayer += 0.2;
        break;
    }
    let cal = x * this.multiplayer;
    let result = parseInt(cal);
    return result;
  }
  multiplymax(x,b,c) {
    this.level = b;
    this.rank = c;
    this.levelx = this.level / 1000;
    this.multiplayer = 1.1 + this.levelx;
    this.maxmultiplayer = 1.2 + this.levelx;
    switch (this.rank) {
      case "F":
        this.multiplayer += 0.05;
        this.maxmultiplayer += 0.125;
        break;
      case "E":
        this.multiplayer += 0.1;
        this.maxmultiplayer += 0.145;
        break;
      case "D":
        this.multiplayer += 0.135;
        this.maxmultiplayer += 0.155;
        break;
      case "C":
        this.multiplayer += 0.145;
        this.maxmultiplayer += 0.265;
        break;
      case "C+":
        this.multiplayer += 0.155;
        this.maxmultiplayer += 0.275;
        break;
      case "B":
        this.multiplayer += 0.165;
        this.maxmultiplayer += 0.285;
        break;
      case "B+":
        this.multiplayer += 0.175;
        this.maxmultiplayer += 0.295;
        break;
      case "B++":
        this.multiplayer += 0.185;
        this.maxmultiplayer += 0.305;
        break;
      case "A":
        this.multiplayer += 0.295;
        this.maxmultiplayer += 0.415;
        break;
      case "A+":
        this.multiplayer += 0.305;
        this.maxmultiplayer += 0.425;
        break;
      case "A++":
        this.multiplayer += 0.415;
        this.maxmultiplayer += 0.535;
        break;
      case "S":
        this.multiplayer += 0.65;
        this.maxmultiplayer += 0.715;
        break;
      case "S+":
        this.multiplayer += 0.75;
        this.maxmultiplayer += 0.865;
        break;
      case "S++":
        this.multiplayer += 0.85;
        this.maxmultiplayer += 0.95;
        break;
      default:
        this.multiplayer += 0.1;
        this.maxmultiplayer += 0.2;
        break;
    }
    let cal = x * this.maxmultiplayer;
    let result = parseInt(cal);
    return result;
  }
}
