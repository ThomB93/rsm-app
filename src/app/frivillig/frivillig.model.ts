export class Frivillig {
  public id : number;
  public firstName: string;
  public lastName: string;
  public address: string;
  public email: string;
  public phone: string;
  public hours: number;

  constructor(id: number, firstName: string, lastName: string,
  adress: string, email: string, phone: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = adress;
    this.email = email;
    this.phone = phone;
  }
}
