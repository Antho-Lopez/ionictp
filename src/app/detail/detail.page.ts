import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  data: any;

  constructor() { }
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        title: 'Spider-man',
        desc: 'Lorem ipsum dolor sit amet, consectetur',
        comment: 'adipiscing elit.',
        user: 'Théo'
      };
    }, 1000);
  }

  ngOnInit() {
  }

}
