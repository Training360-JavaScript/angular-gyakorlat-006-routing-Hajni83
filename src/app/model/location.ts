export class Location {
address:string;
city:string;
country:string;



constructor(address?:string, city?:string, country?:string){
  this.address = address ?? "";
  this.city = city ?? "";
  this.country = country ?? "";
}
}
