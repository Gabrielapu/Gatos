import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchControl: FormControl;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required);
  }

  onSubmit() {
    if(this.searchControl.valid){
      this.router.navigate(['/breeds', this.searchControl.value]);
      this.searchControl.reset();
    }
  }

}
