import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-party-carousel',
  templateUrl: './wedding-party-carousel.component.html',
  styleUrls: ['./wedding-party-carousel.component.scss']
})
export class WeddingPartyCarouselComponent implements OnInit {
  groomsmen = [
    {
      name: 'Brenton Wienkes',
      role: 'Best Man',
      image: '../assets/images/bridalParty/groomsmen/brenton.jpg',
      about: ['Juice and I met all the way back in 5th grade and we have been best friends since. ' + 
      'From his proficient multitasking ability of playing a video game while simultaneously typing on a ' +
      'typewriter and yelling "That\'s a bug" or "It missed my input", all the way to his strange ability ' +
      'to run into someone who knows him regardless of where he goes, I\'ve been there with him. He has been ' +
      'the greatest friend, the best advisor, and the most deviant teammate that I\'ve never once regretted having in my life.'
      ]},
    {
      name: 'Peter Abraham',
      role: 'Groomsman',
      image: '../assets/images/bridalParty/groomsmen/pete.jpg',
      about: ['Justin met this cat one day outside of Breese Hall (rip) during his freshman year ' +
      'of college.  Justin was so impressed by how cool, beautiful, funny, and handsome Pete was ' +
      'that he decided to befriend him.  Luckily for Justin, Pete accepted his plea for friendship.  ' +
      'Since then, these two have been harassing each other over petty differences and the fact ' +
      'that Justin doesn\'t play well with others when it comes to sharing loot in Gauntlet Legends.  ' +
      'Its a Co-op game, share the damn power-ups, don\'t just pin me behind you and take all the ' + 
      'kills.',
      'Then one day this Becky girl showed up and Justin stopped hanging out as much.  ' +
      'We were shocked, confused, and scared at this recent development.  ' +
      'Was he being led into a perilous trap with no help or exit strategy?  ' + 
      'Is he being led astray by the siren\'s call?  The answer was yes.  ' +
      'The Justin we knew was dead.  Now, in his place, a doppelganger that ' +
      'seems happy and content, someone willing to share his ill-gotten video game loot.  ' +
      'So while everything wasn\'t that bad we knew the change was permanent.  Now, with this ' + 
      'curse being sealed in with a ring there is nothing we can do to revert him to his old ways.  ' +
      'May his lost soul find comfort with he new life.',
      'I heard there\'s going to be food at the ring swapping ritual so ' +
      'its not a bad trade-off overall.'
      ]},    
    {
      name: 'Mitch Ladwig',
      role: 'Groomsman',
      image: '../assets/images/bridalParty/groomsmen/mitch.jpg',
      about: ['A haiku:',
      'Pool at Varsity',
      'To a museum wedding',
      'What a lovely trek.']
    },
    {
      name: 'Michelle Mills',
      role: 'Groomswoman',
      image: '../assets/images/bridalParty/groomsmen/michelle.jpg',
      about: ['I\'ve known Juice for almost a decade!  We met in a nerdy club called Oshkosh ' +
      'Gaming Society and bonded over our love of games, karaoke nights, and day-drinking ' +
      'during interim. I remember when Juice first told me he found a gal he really liked.  ' +
      'At first I was a little skeptical, but after getting to meet Becky it all made sense.  ' +
      'I don\'t think anyone could be a more perfect match for him!  So happy for both of you!']
    },
    {
      name: 'Jared Putz',
      role: 'Groomsman',
      image: '../assets/images/bridalParty/groomsmen/jared.jpeg',
    }
  ];

  bridesmaids = [
    {
      name: 'Megan Schmitz',
      role: 'Maid of Honor',
      image: '../assets/images/bridalParty/bridesmaids/megan.jpeg',
      about: ['Becky and Megan met in 7th grade art classes and became fast friends. ' +
      'As years went on they became closer and closer, and Becky is one of Megan\'s best friends. ' +
      'There are endless inside jokes between the two of them. ' + 
      'Becky and Megan are always looking for their next adventures to go on, a new museum to ' +
      'explore, new restaurant or even a new local playground. ' +
      'Megan is very excited to stand next to Becky on her special day.'
      ]},
    {
      name: 'Grace Broadnax',
      role: 'Bridesmaid',
      image: '../assets/images/bridalParty/bridesmaids/',
      about: ["insert about"]
    },
    {
      name: 'Jackie Espiritu',
      role: 'Bridesmaid',
      image: '../assets/images/bridalParty/bridesmaids/jackie.jpeg',
      about: ['It’s me!! The best, oldest, smartest, prettiest, and only sister of the groom, ' +
      'and officially the bride now too!! I’ve obviously known Justin since he was in diapers ' +
      'and Becky it seems like forever now. Ive witnessed Justin through all stages of life so ' +
      'feel free to ask me about any embarrassing story because I have many!! Becky has been a ' +
      'part of so many family events, holidays, dinners, etc that I can’t even remember when we ' +
      'first met. Shes always just been a wonderful addition to our family. ' +
      'I knew she was a keeper when she fell in love with my moms filipino food. ' +
      'She might even cook sinigang better than me now. One story I remember between just the ' +
      'two of us is when we skipped a crazy line at Summerfest music festival in Milwaukee by ' +
      'somehow convincing a security guard to let us in through a crack in the gate lol. ' +
      'So excited to have another girl in the family that can side with me since I grew up ' +
      'getting picked on by my two brothers. I am so happy and excited to be a part of the bridal ' +
      'party and witness the ever growing love between these two. Happy wedding day to you both. ' +
      'Welcome to the family Becky, even though to me you have always been a part of the family. ' +
      'Love you both, MABUHAY!!!!']
    },
    {
      name: 'Emily Petersen',
      role: 'Bridesmaid',
      image: '../assets/images/bridalParty/bridesmaids/emily.jpg',
      about: ['Sometimes the best ideas come at night. "It was this big but really THIS big"']
    },
    {
      name: 'Ashley Trad',
      role: 'Bridesmaid',
      image: '../assets/images/bridalParty/bridesmaids/ashley.jpg',
      about: ['Hey! I\'m Ashley! Becky and I met our freshman year in college. ' +
      'She lived in the dorm room across the hall from me. She came over to talk ' +
      'to me during freshman orientation since I was the shy one and that\'s where our ' +
      'friendship began.Thanks to Becky\'s outgoing personality, I made a friend for life. ' +
      'I am so grateful for Becky to  choose me as a bridesmaid. ' +
      'I am so happy for her and Juice to start the next chapter in their lives!'
      ]},
  ];

  other = [
    {
      name: 'Arthur D\'Amato',
      role: 'Officiant',
      image: '../assets/images/bridalParty/other/arthur.jpg',
      about: ['Justin and I first met in 2008, when we began attending the University of ' +
      'Wisconsin-Oshkosh together. Our shared love of music is what brought us together, ' +
      'and I have had the privilege of performing with and also being his roommate. I have ' +
      'always appreciated his spontaneity, humor and wit, and am so happy that he has found ' +
      'such a compatible partner in Becky. I knew that they were going to be a great pair after ' +
      'he told me their first date together was at a pistol range, something neither one of them ' +
      'had done before. ']
    },
    {
      name: 'Tayler Phillips',
      role: 'DJ',
      image: '../assets/images/bridalParty/other/tayler.jpg',
    },
    {
      name: 'Zazu',
      role: 'Bird of Honor',
      image: '../assets/images/bridalParty/other/zazu.jpg',
      about: ["insert about"]
    }
  ];

  slideConfig = {
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    autoplaySpeed: 3000,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplaySpeed: 5000
        }
      },
      {
        breakpoint: 925,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplaySpeed: 4000
        }
      }
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
