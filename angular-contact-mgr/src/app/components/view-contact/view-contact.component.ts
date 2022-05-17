import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/models/iContact';
import { IGroup } from 'src/app/models/iGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  public loading :boolean = false;
  public contactId : string | null = null;
  public contact : IContact = {} as IContact;
  public errorMessage : string | null = null;
  public group:IGroup = {} as IGroup;

  constructor(private activatedRoute:ActivatedRoute , private contactService:ContactService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.contactId = param.get('contactId')
    });
    if(this.contactId){
      this.contactService.getContact(this.contactId).subscribe({
        next: (data) => {
          this.contact = data;
          this.loading = false;
          this.contactService.getGroup(data.groupId).subscribe({
            next: (gdata) =>{
              this.group = gdata;
            }
          })
        },
        error: (e) => {
          this.loading = false;
          this.errorMessage = e;
        }
    });
    }
  }

  public isNotEmpty(){
    return Object.keys(this.contact).length > 0 
    &&
    Object.keys(this.group).length>0;
  }

}
