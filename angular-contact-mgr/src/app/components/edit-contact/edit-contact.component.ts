import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models/iContact';
import { IGroup } from 'src/app/models/iGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public loading:boolean = false;
  public contact:IContact | null = null ;
  public errorMessage:string | null = null;
  public contactId:string | null = null;
  public groups:IGroup[] = [] as IGroup[];


  constructor(private ContactService:ContactService ,private activatedRoute : ActivatedRoute , private router : Router) { 

  }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.contactId = param.get('contactId');
    });
    if(this.contactId){
      this.ContactService.getContact(this.contactId).subscribe({
        next : (data)=>{
          this.contact = data;
          this.loading = false;
          this.ContactService.getAllGroups().subscribe({
            next : (data) =>{
              this.groups = data;
            }
          });
        },
        error : (e) =>{
          this.errorMessage = e;
          this.loading =false;
        }
      });
    }

}

public updateContact(){
  if(this.contactId && this.contact){
    this.ContactService.updateContact(this.contact,this.contactId).subscribe({
      next : (data) =>{
        this.router.navigate(['/']).then();
      },
      error : (e) =>{
        this.router.navigate([`/contants/edit/${this.contactId}`]).then();
      }
    });
  }
  
}

}

