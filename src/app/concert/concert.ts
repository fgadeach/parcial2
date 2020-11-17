import { Ticket } from "../concert/ticket";

export class Concert {
  id: number;
  band: string;
  image: string;
  date: string;
  general: Ticket;
  platino: Ticket;

  constructor(
  id: number,
  band: string,
  image: string,
  date: string,
  general: Ticket,
  platino: Ticket) {
    this.id = id;
    this.band = band;
    this.image = image;
    this.date = date;
    this.general = general;
    this.general= platino;
  }
}
