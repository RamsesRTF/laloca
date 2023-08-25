export default class Encounter {
    Monsters = [];
    Encounters = [];
    Boss = [];
  constructor(props,config) {
    fetch(config.URL1)
    .then((res) => res.json())
    .then((data) => {
      this.Monsters = data
    });
    fetch(config.URL2)
    .then((res) => res.json)
    .then((data)=> {
      this.Encounters = data
    });
  }
  
  SetEncounter(props, config) {
    fetch(config.URL2)
      .then((res) => res.json())
      .then((data) => {
        this.Encounters = data
      });  
  }
  SetMonsters(props,config) {
    fetch(config.URL1)
      .then((res) => res.json())
      .then((data) => {
        this.Monsters = data
      });  
  }
  GetMonsters(config){

  }
}
