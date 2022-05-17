import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/iContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  public loading:boolean = false;
  public contacts:IContact[] = [];
  public errorMessage:string | null = null;


  constructor(private ContactService: ContactService) { 

  }

  ngOnInit(): void {
    this.getAllContacts();
  }
      
  /**
   * getAllContacts
   */
   public getAllContacts(){
    this.loading = true;
    this.ContactService.getAllContacts().subscribe({
      next: (data) => {
        this.contacts = data;
        this.loading = false;
      },
      error: (e) => {
        this.loading = false;
        this.errorMessage = e;
      }
  });

  }

  public deleteContact(contactId:string | undefined){
    this.ContactService.deleteContact(contactId).subscribe({
      next : (data) =>{
      this.getAllContacts();
      },
      error : (e) =>{
        this.errorMessage = e;
      }
    })
  }

}

