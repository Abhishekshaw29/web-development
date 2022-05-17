import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models/iContact';
import { IGroup } from 'src/app/models/iGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public loading : boolean = false;
  public contact : IContact = {} as IContact;
  public errorMessage : string | null = null; 
  public groups:IGroup[] = [] as IGroup[];
  public default:string = "Select a option"

  constructor(private contactService:ContactService , private router:Router) { }

  ngOnInit(): void {
    this.loading=true;
    this.contactService.getAllGroups().subscribe({
      next: (data) => {
        this.groups = data;
        this.loading = false;
      },
      error: (e) => {
        this.loading = false;
        this.errorMessage = e;
      }
    })
  }

  public createSubmit(){
    this.contactService.createContact(this.contact).subscribe({
      next: (data)=>{
        this.router.navigate(['/']).then();

      },
      error: (e)=>{
        this.errorMessage = e;
        this.router.navigate(['/contacts/add']).then();
      }
    });
  }

} 
