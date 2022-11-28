import { Component } from '@angular/core';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent {
  
  books:any = [
    {
      "title":"To kill a mocking bird",
      "image":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/to-kill-a-mockingbird-1623750649.jpg?crop=0.908xw:1.00xh;0.0466xw,0&resize=480:*",
      "description":"To Kill a Mockingbird is both a young girl's coming-of-age story and a darker drama about the roots and consequences of racism and prejudice, probing how good and evil can coexist within a single community or individual.",
    
    },
    {
      "title":"Stephen King",
      "image":"https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/7847deca-a141-4da5-980e-49680e909ffc/the-shining-stephen-king-cover.jpg",
      "description":"The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.",
    },
    {
      "title":"Rain Birds",
      "image":"https://www.blackincbooks.com.au/sites/default/files/styles/book_large/public/9781925435795_FC_0.jpg?itok=cOSiXHsZ",
      "description":"Rain Birds is a powerful and lyrical novel about love, grief and loss, one that examines personal tragedy as set against global and environmental responsibilities, and how we negotiate our often-conflicting ideals.",
      
    
    },
    {
      "title":"The Four winds",
      "image":"https://www.booklistqueen.com/wp-content/uploads/the-four-winds-kristin-hannah.jpg",
      "description":"The Four Winds (St. Martin's) by Kristin Hannah is a sweeping saga of a family's struggle to survive set against the backdrop of The Great Depression and the Dust Bowl of America's Plains states. At the heart of the story is Elsa Wolcott, a tall, awkward girl who suffered rheumatic fever as a teenager.",
    },
    {
      "title":"Good sisters",
      "image":"https://www.booklistqueen.com/wp-content/uploads/the-good-sister-sally-hepworth.jpg",
      "description":"The novel follows two fraternal twins in their late 20s—Fern and Rose. Fern is on at the autistic spectrum and has sensory issues and Rose is her protector in many ways. We know that Fern did something very bad when they were children and Fern believes that without Rose, she could do something like that again",
    
    },
    {
      "title":"The Survivors",
      "image":"https://www.booklistqueen.com/wp-content/uploads/the-survivors-jane-harper.jpg",
      "description":"The Survivors is a dark, atmospheric read; about the secrets of the past and how it can affect you in your present. Kieron Elliot returns to his small coastal town, with his now partner, Mia and their infant daughter, Audrey.",
    },
    {
      "title":"How beautiful we were",
      "image":"https://www.booklistqueen.com/wp-content/uploads/how-beautiful-we-were-imbolo-mbue.jpg",
      "description":"Told from the perspective of a generation of children and the family of a girl named Thula who grows up to become a revolutionary, How Beautiful We Were is a masterful exploration of what happens when the reckless drive for profit, coupled with the ghost of colonialism, comes up against one community’s determination to hold on to its ancestral land and a young woman’s willingness to sacrifice everything for the sake of her people’s freedom.",
    
    },
    {
      "title":"All the children are home",
      "image":"https://www.booklistqueen.com/wp-content/uploads/all-the-children-are-home-patry-francis.jpg",
      "description":"Set in the late 1950s through 1960s in a small town in Massachusetts, All the Children Are Home follows the Moscatelli family—Dahlia and Louie, foster parents, and their long-term foster children Jimmy, Zaidie, and Jon—and the irrevocable changes in their lives when a six-year-old indigenous girl, Agnes, is comes to live with them.",
    
    },
    {
      "title":"Klara and the sun",
      "image":"https://m.media-amazon.com/images/I/711cXHTd3+L.jpg",
      "description":"t is a dystopian science fiction story. Set in the U.S. in an unspecified future, the book is told from the point of view of Klara, a solar-powered AF (Artificial Friend), who is chosen by Josie, a sickly child, to be her companion. The novel was longlisted for the 2021 Booker Prize.",
      
    
    },
    {
      "title":"Survive the night",
      "image":"https://m.media-amazon.com/images/I/71SMBZnlyVL.jpg",
      "description":"The book follows Charlie, a young woman who drops out of film college due to the trauma of witnessing the murder of her best friend Maddy by a serial killer."
      
    
    },
    {
      "title":"The Rose Code",
      "image":"https://www.booklistqueen.com/wp-content/uploads/the-rose-code-kate-quinn.jpg",
      "description":"As England prepares to fight the Nazis, three very different women answer the call to mysterious country estate Bletchley Park, where the best minds in Britain train to break German military codes."
      
    
    }
  ]

}
