
export default class API {
 

    constructor(configs) {
      this.URL = configs.URL;
      this.ID = configs.ID;
      this.search_type = configs.search_type;
      this.search = configs.search;
      this.Data = [{}];
    }
    async init() {
      switch (this.search_type) {
        case "All":
          await fetch(`${this.URL}`)
            .then((res) => res.json())
            .then((data) => {
              this.Data = data;
            });
          break;
        case "ID":
          await fetch(`${this.URL}${this.ID}`)
            .then((res) => res.json())
            .then((data) => {
              this.Data = data;
            });
          break;
        default:
          alert(`${this.search_type} is not a valid search type`);
          break;
      }
    }
    givedata(){
      return this.Data;
    }
    async save(){
        fetch(this.URL, {
            method: this.method,
            body: JSON.stringify(this.Data),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
    }
    async login(configs,Userz){
      switch (configs.type) {
        case "Player":
          alert(`Redirecting with ${configs.type} autentication`)
          await fetch(`${configs.URL}`, {
          method: 'post',
         body: JSON.stringify({Userz}),
         headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
     })
          break;
      
        default:
         await fetch(`${configs.URL}`, {
            method: 'post',
           body: JSON.stringify({
             email: Userz.email,
             password: Userz.password
          })
       })
          break;
      }
    }
  }
  