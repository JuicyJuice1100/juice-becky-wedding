import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-registry",
  templateUrl: "./registry.component.html",
  styleUrls: ["./registry.component.scss"]
})
export class RegistryComponent implements OnInit {
  cards = [
    {
      title: 'Amazon',
      url: 'https://www.amazon.com/',
      image: 'https://picsum.photos/300/500'
    },
    {
      title: 'Target',
      url: 'https://www.target.com/',
      image: 'https://picsum.photos/300/500'
    }
  ]

  constructor() {}

  ngOnInit(): void {}
}
