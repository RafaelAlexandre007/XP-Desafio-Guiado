import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rounting1',
  templateUrl: './rounting1.component.html',
  styleUrls: ['./rounting1.component.css'],
})
export class Rounting1Component implements OnInit {
  id: any = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
    });
  }
}
