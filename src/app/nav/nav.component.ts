import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  openStope = 'Open Stope';
  homeTitle = 'Home';
  aboutTitle = 'About';
  contactTitle = 'Contact';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
