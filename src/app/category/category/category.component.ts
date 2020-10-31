import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private router: Router) { }
  categaroyList: Category[] = [];

  ngOnInit(): void {
    
      this.categaroyList =  [{ id: "1", name: "Aerospace", photo: "../../../assets/image/Aeroplance.jpg", description: "" },
      { id: "2", name: "Air and thermal", photo: "../../../assets/image/Air-and-thermal-management.jpg", description: "" },
      { id: "3", name: "Life Support", photo: "../../../assets/image/Life_Support_System.jpg", description: "" },
      { id: "4", name: "Plane Landinglist", photo: "../../../assets/image/plane-landinglist.jpg", description: "" }];
      
  }

  WhenClicked() {
    this.router.navigate(["/add-category"]);
  }

}
