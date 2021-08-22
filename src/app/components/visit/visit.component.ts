import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {
  public deviceInfo:DeviceInfo;

  cards = [
    {
      title: "Dinner",
      color: "accent",
      places: [
        {
          name: "Harbor House",
          url: "https://www.bartolottas.com/harbor-house"
        },
        {
          name: "Centro Cafe",
          url: "http://centrocaferiverwest.com/"
        },
        {
          name: "Odd Duck",
          url: "https://www.oddduckrestaurant.com/"
        },
        {
          name: "Smoke Shack",
          url: "https://smoke-shack.com/"
        },
        {
          name: "La Merenda",
          url: "https://www.lamerenda125.com/"
        },
        {
          name: "Third Coast Provisions",
          url: "http://www.thirdcoastprovisions.com/"
        }
      ]
    },
    {
      title: "Lunch",
      color: "primary",
      places: [
        {
          name: "Crossroads Collective",
          url: "http://www.crossroadscollectivemke.com/"
        },
        {
          name: "Cafe Corazon",
          url: "https://www.corazonmilwaukee.com/"
        },
        {
          name: "Cafe Hollander",
          url: "https://cafehollander.com/"
        },
        {
          name: "Cafe Centraal",
          url: "https://cafecentraal.com/"
        },
        {
          name: "Cafe Lulu",
          url: "https://www.lulubayview.com/"
        },
        {
          name: "Fuel Cafe",
          url: "https://fuelcafe.com/"
        }
      ]
    },
    {
      title: "Breakfast/Brunch",
      color: "accent",
      places: [
        {
          name: "Sweetdiner",
          url: "https://www.sweetdiner.com/"
        },
        {
          name: "Engine Company No. 3",
          url: "https://www.enginecompany3.com/"
        },
        {
          name: "Beans & Barley",
          url: "https://www.beansandbarley.com/"
        },
        {
          name: "Toast",
          url: "https://toastmilwaukee.com/"
        },
        {
          name: "The Wicked Hop",
          url: "http://www.thewickedhop.com/"
        }
      ]
    },
    {
      title: "Staples",
      color: "primary",
      places: [
        {
          name: "Kopps",
          url: "https://www.kopps.com/"
        },
        {
          name: "Culvers",
          url: "https://www.culvers.com/menu-and-nutrition"
        },
        {
          name: "Belair",
          url: "https://belaircantina.com/"
        },
        {
          name: "Solly's Grille",
          url: "https://www.sollysbutterburgers.com/"
        },
        {
          name: "Safehouse",
          url: "https://www.safe-house.com/"
        },
        {
          name: "Sobelmans",
          url: "https://sobelmanspubandgrill.com/"
        }
      ]
    },
    {
      title: "Brewskies",
      color: "accent",
      places: [
        {
          name: "Hacienda Beer Company",
          url: "https://www.haciendabeerco.com/"
        },
        {
          name: "Dead Bird Brewing Company",
          url: "https://www.deadbirdbrewing.com/"
        },
        {
          name: "Cloud Red",
          url: "https://www.cloudredmke.com/"
        },
        {
          name: "Camp Bar",
          url: "https://www.campbarmke.com/"
        },
        {
          name: "Updown (Arcade Bar)",
          url: "https://www.updownarcadebar.com/milwaukee/"
        }, 
        {
          name: "Old German Beer Hall",
          url: "http://www.oldgermanbeerhall.com/"
        },
        {
          name: "Black Husky Brewing",
          url: "http://www.blackhuskybrewing.com/"
        },
        {
          name: "1840 Brewing Company",
          url: "https://www.1840brewing.com/"
        }
      ]
    },
    {
      title: "Coffee",
      color: "primary",
      places: [
        {
          name: "Collectivo (Lakefront Location)",
          url: "https://colectivocoffee.com/cafes/lakefront"
        },
        {
          name: "Rochambo",
          url: "https://www.rochambo.com/"
        },
        {
          name: "Stone Creek Coffee",
          url: "https://www.stonecreekcoffee.com/"
        }
      ]
    },
    {
      title: "Parks, Museums, Etc.",
      color: "accent",
      places: [
        {
          name: "Milwaukee Public Market",
          url: "https://milwaukeepublicmarket.org/"
        },
        {
          name: "Milwaukee Art Museum",
          url: "https://mam.org/"
        },
        {
          name: "Harley Davidson Museum",
          url: "https://www.harley-davidson.com/us/en/museum.html"
        },
        {
          name: "Mitchell Park Domes",
          url: "https://county.milwaukee.gov/EN/Parks/Explore/The-Domes"
        },
        {
          name: "The Milwaukee Riverwalk",
          url: "https://www.visitmilwaukee.org/articles/things-to-do/riverwalk/"
        },
        {
          name: "The Am Fam Clam",
          url: "https://www.mlb.com/brewers/ballpark/tours"
        }
      ]
    },
    {
      title: "Activites",
      color: "primary",
      places: [
        {
          name: "Adventure Rock",
          url: "https://adventurerock.com/"
        },
        {
          name: "Potawatomi Casino",
          url: "https://www.paysbig.com/"
        },
        {
          name: "Axe MKE (Axe Throwing Bar)",
          url: "https://www.axemke.com/"
        },
        {
          name: "Pedal Tavern",
          url: "https://milwaukeepedalandpaddletavern.com/pedal/"
        }
      ]
    },
    {
      title: "Brewery Tours",
      color: "accent",
      places: [
        {
          name: "Lakefront Brewery",
          url: "https://lakefrontbrewery.com/"
        },
        {
          name: "MKE Brewery",
          url: "https://mkebrewing.com/"
        },
        {
          name: "City Lights Brewing Co.",
          url: "http://citylightsbrewing.com/"
        },
        {
          name: "Pabst Beer History Tour",
          url: "https://www.bestplacemilwaukee.com/tours"
        },
        {
          name: "Miller Brewery Tour",
          url: "https://www.millerbrewerytour.com/av?url=https://www.millerbrewerytour.com/tour-information"
        }
      ]
    }
  ];

  constructor(private deviceDetectorService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
  }

}
