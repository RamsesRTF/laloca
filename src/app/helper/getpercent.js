export default class GetPercent{
    
    static getchange(oldnumber,newnumber){
        let result = Math.floor((oldnumber-newnumber)/oldnumber*100)
        return(result)
    }
}