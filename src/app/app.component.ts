import { Component, OnInit } from '@angular/core';

import { GetAbeJsonService } from './get-abe-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ReactiveMaterial';

  constructor(
    private abeService: GetAbeJsonService
  ) { }

  ngOnInit(): void {
    this.abeService.getAbe().subscribe((response) => {
      console.log({ response });
    })
  }
}
