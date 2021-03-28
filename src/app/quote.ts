export class Quote {
  showDetails:boolean;
  constructor(
    public id:number,
    public quote:string,
    public author:string,
    public user:string,
    public date:Date
  ){
    this.showDetails = false;
  }
}
