import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IContact } from '../models/iContact';
import { IGroup } from '../models/iGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serverUrl: string = `http://localhost:9000/`;

  constructor(private httpClient: HttpClient) { }


  //get all contacts
  public getAllContacts(): Observable<IContact> {
    let dataUrl: string = `${this.serverUrl}/contacts`;
    return this.httpClient.get<IContact>(dataUrl).pipe(catchError(this.handleError));
  }

  // get single contact
  public getContact(contactId: string): Observable<IContact> {
    let dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient.get<IContact>(dataUrl).pipe(catchError(this.handleError));
  }
  //create contact
  public createContact(contact: IContact): Observable<IContact> {
    let dataUrl: string = `${this.serverUrl}/contacts/`;
    return this.httpClient.post<IContact>(dataUrl, contact).pipe(catchError(this.handleError));
  }
  //update contact
  public updateContact(contact: IContact,contactId:string): Observable<IContact> {
    let dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient.put<IContact>(dataUrl, contact).pipe(catchError(this.handleError));
  }
  //update contact
  public deleteContact(contactId:string): Observable<{}> {
    let dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError));
  }

  // -------------------------------
  
  //get all groups
   public getAllGroups(): Observable<IGroup> {
    let dataUrl: string = `${this.serverUrl}/groups`;
    return this.httpClient.get<IGroup>(dataUrl).pipe(catchError(this.handleError));
  }

  // get single group
  public getGroup(groupId: string): Observable<IGroup> {
    let dataUrl: string = `${this.serverUrl}/groups/${groupId}`;
    return this.httpClient.get<IGroup>(dataUrl).pipe(catchError(this.handleError));
  }
  //create group
  public createGroup(group: IGroup): Observable<IGroup> {
    let dataUrl: string = `${this.serverUrl}/group`;
    return this.httpClient.post<IGroup>(dataUrl, group).pipe(catchError(this.handleError));
  }
  //update group
  public updateGroup(group: IGroup,groupId:string): Observable<IGroup> {
    let dataUrl: string = `${this.serverUrl}/contacts/${groupId}`;
    return this.httpClient.put<IGroup>(dataUrl, group).pipe(catchError(this.handleError));
  }
  //update group
  public deleteGroup(groupId:string): Observable<{}> {
    let dataUrl: string = `${this.serverUrl}/contacts/${groupId}`;
    return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError));
  }










  //error handling
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = ``;
    if (error.error instanceof ErrorEvent) {
      //client error
      errorMessage = `Error : ${error.error.message}`;
    }
    else {
      //server error
      errorMessage = `status : ${error.status}`;
    }
    return throwError(() => errorMessage);
  }
}
