import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
  cards = [
    {
      url: "https://www.zola.com/registry/bjwedding2022",
      image: "../../../assets/images/registry/zola.jpg",
      title: "Zola Wedding Registry"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
