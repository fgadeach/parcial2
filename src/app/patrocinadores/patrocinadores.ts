import { Contacto } from "../patrocinadores/contacto";

export class Patrocinador {
  id: number;
  name: string;
  sponsorship: number;
  image:string;
  contacto:Contacto;

  constructor(
    id: number,
    name: string,
    sponsorship: number,
    image:string,
    contacto:Contacto
  ) {
    this.id = id;
    this.name = name;
    this.sponsorship = sponsorship;
    this.image = image;
    this.contacto = contacto;
  }
}
