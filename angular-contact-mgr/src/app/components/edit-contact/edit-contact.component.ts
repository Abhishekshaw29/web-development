import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/iContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public loading:boolean = false;
  public contacts:IContact | null = null ;
  public errorMessage:string | null = null;
  public contactId:string | null = null;


  constructor(private ContactService:ContactService) { 

  }

  ngOnInit(): void {
    // this.loading = true;
    // this.ContactService.getContact().subscribe({
    //   next: (data) => {
    //     this.contacts = data;
    //     this.loading = false;
    //   },
    //   error: (e) => {
    //     this.loading = false;
    //     this.errorMessage = e;
  //     }
  // });

}

}
