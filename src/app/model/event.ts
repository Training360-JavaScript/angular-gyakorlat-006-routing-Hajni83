import { Location } from './location';

export class Event {
  name: string;
  date: string;
  time: string;
  location: Location;

  constructor(name: string, date: string, time: string, location: Location) {
    this.name = name;
    this.date = date;
    this.time = time;
    this.location = location;
  }
}
