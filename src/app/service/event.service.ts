import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}

  getAll(): Event[] {
    return [
      new Event(
        'Robert',
        '2022',
        '12:00',
        new Location('Kis utca 4.', 'Budapest', 'Magyarország')
      ),
      new Event(
        'Robert',
        '2022',
        '12:00',
        new Location('Kis utca 4.', 'Budapest', 'Magyarország')
      ),
      new Event(
        'Robert',
        '2022',
        '12:00',
        new Location('Kis utca 4.', 'Budapest', 'Magyarország')
      ),
    ];
  }
}
