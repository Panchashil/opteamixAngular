import { Component } from '@angular/core';
import data from '../../shared/staticData/data'; 

@Component({
  selector: 'app-toggleimg',
  standalone: true,
  imports: [],
  templateUrl: './toggleimg.component.html',
  styleUrl: './toggleimg.component.css'
})
export class ToggleimgComponent {

  // imgPath: string = "assets/dosa.jfif";
  imgPath: string = data.dosa;
  imgName: string = "Dosa";
  isCond: boolean = false;
  
  toggleImg() {
    this.isCond = !this.isCond;
    if (this.isCond) {
      // this.imgPath = "assets/jalebi.jfif";
      this.imgPath =data.jalebi 
      this.imgName = "jalebi";
    } else {
      // this.imgPath = "assets/dosa.jfif";
      this.imgPath = data.dosa;
      this.imgName = "Dosa";
    }

  }

}
