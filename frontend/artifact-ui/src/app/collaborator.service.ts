import { Injectable } from '@angular/core';

import { Collaborator } from './collaborator';
import { COLLABORATORS } from './mock-collaborators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  constructor() { }

  getCollaborators(): Observable<Collaborator[]> {
    return of(COLLABORATORS);
  }
}
