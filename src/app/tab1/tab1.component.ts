import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from "carbon-components-angular/file-uploader/file-uploader.component";
import { DatePicker } from "carbon-components-angular/datepicker/datepicker.component";
import { RadioGroup } from "carbon-components-angular/radio/radio-group.component";
import { PaginationModel } from 'carbon-components-angular/pagination/pagination-model.class';
import { NotificationService } from 'carbon-components-angular/notification/notification.service';
import { RouterModule, Routes,Router } from '@angular/router';


import { TextInput } from "carbon-components-angular/input/input.directive";
import { Label } from "carbon-components-angular/input/label.component";
import { TextArea } from "carbon-components-angular/input/text-area.directive";



@Component({
  selector: 'app-emp-details',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class EmpDetailsComponent implements OnInit,AfterContentInit,AfterViewInit {
  //Tooltip
  private file : File | null=null;
  @Input() empForm:any;
  @Input() empSubmit:boolean;
  @Input() loadedData:boolean;
  @Input() canEdit:boolean;

  attachResumeConfirmLabel:any;
  reviewedResumelabel:any;
  min:number=0;
  max:number;

  empDate:boolean=false;
  showIbmerContact:boolean=false;

  disabledWork:boolean=false;
  yearsOnCurrentProject:boolean=false;
  confirmResumeDisabled:boolean=false;
  attachResumeDisabled:boolean=false;
  joinedDateDisabled:boolean=false;
  
  public ibmUserUrl: string = "https://bluepages.ibm.com/BpHttpApisv3/slaphapi?ibmperson/";
  public ibmerContactUsers: any = null; 
  isAttached:boolean=false;
  isRemove:boolean=false;
  resumeUploadDisabled:boolean=true;
  
  //add upload file
  title = "Attach Resume" ;
  description="";
  @Input() files = new Set();
  buttonText ='Add files';
  accept = ['.pdf', '.doc','.docx'];
  multiple = false;
  showUpload:boolean=true;
 
  
  label='';
  invalidText ='Invalid date format';
  invalid=false;
  pro_skill=['abc','xyz','mno','sso'];
  special_skill=['qwz','rrr','jjj','ggg'];
  
   //Radio buttons
  confirmResumeOption=[{ num: 'Yes',check:false }, { num: 'No',check:false }];
  
   
  @Input() resumeFlag:boolean;
  @Input() resumeOfUrl:string;
  @Input() requestResumeName:string;
  showResumeTxt:boolean=false;
  resumeEnable:boolean=false;
  hideResume:boolean=false;
  special_skill_disabled:boolean=false;
  proprietary_skill_disabled:boolean=false;



  constructor(protected notificationService: NotificationService,private router:Router) 
  { 
  
  }
  ngOnInit() {
    
  }
  
  dateSelectionForNew(event){
    
    this.empForm.get('date_joined_ibm').setValue(event[0]);
    if (this.empForm.value.date_joined_ibm !=undefined || this.empForm.value.date_joined_ibm!="") {
      this.invalid = false;
     
     }
  }
  
  dateSelectionForExisting(event){ 

    if (this.empForm.value.date_joined_ibm !=undefined || this.empForm.value.date_joined_ibm!="") {
      this.invalid = false;
     
     }
    else if(this.empForm.value.date_joined_ibm=="" || this.empForm.value.date_joined_ibm==undefined){
      this.empForm.get('date_joined_ibm').setValue(event[0]);
    } 
    
}
empDateChange(event){
  if(event.target.value==""){
    this.empForm.get('date_joined_ibm').setValue('');
  }
  else{
    this.empForm.get('date_joined_ibm').setValue(event.target.value);
  }
}

  readFile(fileEvent) {
 
      this.isRemove = true;
      if(this.isAttached=true) {
        
       this.resumeFlag=false;
        this.showResumeTxt=false;
      this.file = <File>fileEvent.target.files[0];
      this.requestResumeName=this.file.name;
      this.empForm.get('attach_resume').setValue(this.file);
      console.log(this.empForm.value.attach_resume,'resume value');
      if((<HTMLInputElement>document.getElementById('uploadFile')).value==""){
        this.isRemove = false;
      }
 }
}
 
  radioGetCount(event){
    if(event.source.checked){
      this.empForm.get('resume_reviewed').setValue(event.value);
    }
  }

}
