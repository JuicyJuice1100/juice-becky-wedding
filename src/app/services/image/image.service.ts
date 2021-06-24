import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  venueImages = [];

  getVenueImages() {
    return this.venueImages = venueImageDetails.slice(0);
  }

  getVenueImage(id: number){
    return venueImageDetails.slice(0).find(image => image.id == id);
  }
  
  constructor() { }
}

const venueImageDetails = [
  {"id": 1, "url": "../assets/images/venue/1d1ab030-b787-48df-8f86-5333215fb186-min.jpg", "alt": "", "description": ""},
  {"id": 2, "url": "../assets/images/venue/FullWidth_Image_1680x860_Sampson_0-min.jpg", "alt": "", "description": ""},
  {"id": 3, "url": "../assets/images/venue/FullWidth_Image_1680x860_streets_2-min.jpg", "alt": "", "description": ""},
  {"id": 4, "url": "../assets/images/venue/FullWidth_Image_1680x860_torosaur-min.jpg", "alt": "", "description": ""},
  {"id": 5, "url": "../assets/images/venue/MPM_0134_GenStore_Interior-min.jpg", "alt": "", "description": ""},
  {"id": 6, "url": "../assets/images/venue/MPM_0136_GeneralStore-min.jpg", "alt": "", "description": ""},
  {"id": 7, "url": "../assets/images/venue/MPM_0157_Chapman's-min.jpg", "alt": "", "description": ""},
  {"id": 8, "url": "../assets/images/venue/MPM_0169_FountainMural-min.jpg", "alt": "", "description": ""},
  {"id": 9, "url": "../assets/images/venue/MPM_0185_Granny'sHouse-min.jpg", "alt": "", "description": ""},
  {"id": 10, "url": "../assets/images/venue/MPM_0317_PfisterEntrance-min.jpg", "alt": "", "description": ""},
  {"id": 11, "url": "../assets/images/venue/MPM_0483_NorthSide-min.jpg", "alt": "", "description": ""}
]
