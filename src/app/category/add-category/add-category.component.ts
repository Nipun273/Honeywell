import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  baseApiUrl: string;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onUpload(image) {
    const formData = new FormData(); 
    this.baseApiUrl = ""; 
        
      // Store form name as "file" with file data 
      formData.append("image", image, image.name); 
        
      // Make http post request over api 
      // with formData as req 
      return this.http.post(this.baseApiUrl, formData) 
  }
  
  onChange(event) {

  }
}
