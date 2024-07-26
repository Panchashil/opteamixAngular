import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ToggleimgComponent } from './Task/toggleimg/toggleimg.component';
import { AngularpipsComponent } from './components/angularpips/angularpips.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatabindingComponent,DirectiveComponent,
    ToggleimgComponent,AngularpipsComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myangproject';
}
