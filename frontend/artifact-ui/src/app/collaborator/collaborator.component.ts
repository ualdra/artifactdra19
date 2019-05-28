import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../collaborator';
import { CollaboratorService } from '../collaborator.service';
 
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
 
export class CollaboratorComponent implements OnInit {
 
  collaborators: Collaborator[];
  selectedCollaborator: Collaborator;
 
  constructor(private collaboratorService: CollaboratorService) { }
 
  ngOnInit() {
    this.getCollaborators();
  }
 
  getCollaborators(): void {
    this.collaboratorService.getCollaborators()
      .subscribe(collaborators => this.collaborators = collaborators);
  }
}