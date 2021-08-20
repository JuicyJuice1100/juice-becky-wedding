import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  getVenueImages() {
    return venueImagesData;
  }

  getVenueImage(id: number){
    return venueImagesData.find(image => image.id == id);
  }

  getEngagementImages() {
    return engagementImagesData;
  }

  getEngagementImage(id: number){
    return engagementImagesData.find(image => image.id ==id);
  }
  
  constructor() { }
}

const venueImagesData = [
  {"id": 1, "src": "../assets/images/venue/1d1ab030-b787-48df-8f86-5333215fb186-min.jpg", "alt": "1d1ab030-b787-48df-8f86-5333215fb186", "description": ""},
  {"id": 2, "src": "../assets/images/venue/FullWidth_Image_1680x860_Sampson_0-min.jpg", "alt": "FullWidth_Image_1680x860_Sampson_0", "description": ""},
  {"id": 3, "src": "../assets/images/venue/FullWidth_Image_1680x860_streets_2-min.jpg", "alt": "FullWidth_Image_1680x860_streets", "description": ""},
  {"id": 4, "src": "../assets/images/venue/FullWidth_Image_1680x860_torosaur-min.jpg", "alt": "FullWidth_Image_1680x860_torosaur", "description": ""},
  {"id": 5, "src": "../assets/images/venue/MPM_0134_GenStore_Interior-min.jpg", "alt": "MPM_0134_GenStore_Interior", "description": ""},
  {"id": 6, "src": "../assets/images/venue/MPM_0136_GeneralStore-min.jpg", "alt": "MPM_0136_GeneralStore", "description": ""},
  {"id": 7, "src": "../assets/images/venue/MPM_0157_Chapman's-min.jpg", "alt": "MPM_0157_Chapman's", "description": ""},
  {"id": 8, "src": "../assets/images/venue/MPM_0169_FountainMural-min.jpg", "alt": "MPM_0169_FountainMural", "description": ""},
  {"id": 9, "src": "../assets/images/venue/MPM_0185_Granny'sHouse-min.jpg", "alt": "MPM_0185_Granny'sHouse", "description": ""},
  {"id": 10, "src": "../assets/images/venue/MPM_0317_PfisterEntrance-min.jpg", "alt": "MPM_0317_PfisterEntrance", "description": ""},
  {"id": 11, "src": "../assets/images/venue/MPM_0483_NorthSide-min.jpg", "alt": "MPM_0483_NorthSide", "description": ""}
]

const engagementImagesData = [
  {"id": 1, "src": "../assets/images/engagement/Engagement00010-min.jpg", "alt": "Engagement00010", "description": ""},
  {"id": 2, "src": "../assets/images/engagement/Engagement00028-min.jpg", "alt": "Engagement00028", "description": ""},
  {"id": 3, "src": "../assets/images/engagement/Engagement00040-min.jpg", "alt": "Engagement00040", "description": ""},
  {"id": 4, "src": "../assets/images/engagement/Engagement00058-min.jpg", "alt": "Engagement00058", "description": ""},
  {"id": 5, "src": "../assets/images/engagement/Engagement00073-min.jpg", "alt": "Engagement00073", "description": ""},
  {"id": 6, "src": "../assets/images/engagement/Engagement00098-min.jpg", "alt": "Engagement00098", "description": ""},
  {"id": 7, "src": "../assets/images/engagement/Engagement00102-min.jpg", "alt": "Engagement00102", "description": ""},
  {"id": 8, "src": "../assets/images/engagement/Engagement00115-min.jpg", "alt": "Engagement00115", "description": ""},
  {"id": 9, "src": "../assets/images/engagement/Engagement00136-min.jpg", "alt": "Engagement00136", "description": ""},
  // {"id": 10, "src": "../assets/images/engagement/Engagement00141-min.jpg", "alt": "Engagement00141", "description": ""}
]
