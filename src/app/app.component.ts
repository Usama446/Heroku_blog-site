import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog-site';

  constructor(private router: Router) {}

  ngOnInit() {
    if (window.location.pathname !== '/home') {
      this.router.navigate(['/home']); // Refresh hone par home par le jaye
    }
  }
}
