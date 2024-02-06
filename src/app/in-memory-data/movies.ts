import { Movie } from '../models/movie';
import { Entities } from '../enums/entities.enum';
import { Certifications } from '../enums/certifications.enum';

export const Movies: Array<Movie> = [
    {
        id: 1,
        name: "Captian Marvel",
        release_date: "20190308",
        entity_type: Entities.Movies,
        certification: Certifications.UA,
        runtime: 125,
        video: `<iframe width="900" height="506" src="https://www.youtube.com/embed/0LHxvxdRnYc?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        image: "captian-marvel.jpg",
        available_formats: {
            "English": ["2D", "3D"],
            "Hindi": ["2D"],
            "Telugu": ["2D"]
        },
        formats: ["2D", "3D"],
        languages: ["English", "Hindi", "Telugu"],
        critics_rating: 4,
        users_rating: 4.5,
        overall_rating: 88,
        genre: ["Action", "Adventure", "Fantasy"],
        summary: `Set in the 1990s, Marvel Studio's "Captain Marvel" is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe's most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.`,
        cast: [
            {
                id: 1,
                name: "Brie Larson",
                role: "Carol Danvers",
                image: "brie-larson.jpg"
            },
            {
                id: 2,
                name: "Samuel L Jackson",
                role: "Nick Fury",
                image: "samuel-l-jackson.jpg"
            }
        ]
    },
    {
        id: 2,
        name: "Luka Chuppi",
        release_date: "20190301",
        entity_type: Entities.Movies,
        certification: Certifications.UA,
        runtime: 125,
        video: `<iframe width="900" height="506" src="https://www.youtube.com/embed/-JLewvWBkCw?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        image: "luka-chuppi.jpg",
        available_formats: {            
            "Hindi": ["2D"]
        },
        formats: ["2D"],
        languages: ["Hindi"],
        critics_rating: 3,
        users_rating: 4.1,
        overall_rating: 77,
        genre: ["Comedy", "Romance"],
        summary: `Guddu, the star reporter of a local news channel in Mathura, falls for Rashmi, a feisty young woman. The couple decides to try a live-in relationship, but what happens when their old-fashioned family members decide to pry into their lives?`,
        cast: [
            {
                id: 3,
                name: "Kartik Aaryan",
                role: `Vinod "Guddu" Shukla`,
                image: "kartik-aaryan.jpg"
            },
            {
                id: 4,
                name: "Kriti Sanon",
                role: "Rashmi Trivedi",
                image: "kriti-sanon.jpg"
            }
        ]
    },
    {
        id: 3,
        name: "Majili",
        release_date: "20190405",
        entity_type: Entities.Movies,
        certification: Certifications.UA,
        runtime: 125,
        video: `<iframe width="900" height="506" src="https://www.youtube.com/embed/R9VF3m7UiLw?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        image: "majili.jpg",
        available_formats: {            
            "Telugu": ["2D"]
        },
        formats: ["2D"],
        languages: ["Telugu"],
        critics_rating: 3.5,
        users_rating: 4.5,
        overall_rating: 86,
        genre: ["Drama", "Romance"],
        summary: `The unfulfilled dream of a cricket career and a failed romance leaves a youngster disillusioned and puts a strain on his family life. Despite the support and encouragement of his newlywed wife, he fails to appreciate the blessings in his life. Will it be too late before he realises his mistakes?`,
        cast: [
            {
                id: 5,
                name: "Naga Chaitanya Akkineni",
                role: `Poorna`,
                image: "naga-chaitanya-akkineni.jpg"
            },
            {
                id: 6,
                name: "Samantha Akkineni",
                role: "Shravani",
                image: "samantha-akkineni.jpg"
            }
        ]
    },
    {
        id: 4,
        name: "Dumbo",
        release_date: "20190229",
        entity_type: Entities.Movies,
        certification: Certifications.U,
        runtime: 112,
        video: `<iframe width="900" height="506" src="https://www.youtube.com/embed/7NiYVoqBt-8?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        image: "dumbo.jpg",
        available_formats: { 
            "English": ["2D", "3D"],
            "Hindi": ["2D"],           
            "Telugu": ["2D"]
        },
        formats: ["2D", "3D"],
        languages: ["English", "Hindi", "Telugu"],
        critics_rating: 3.5,
        users_rating: 4.5,
        overall_rating: 83,
        genre: ["Action", "Adventure", "Family"],
        summary: `From Disney and visionary director Tim Burton, the all-new grand live-action adventure "Dumbo" expands on the beloved classic story where differences are celebrated, family is cherished and dreams take flight. Circus owner Max Medici (Danny DeVito) enlists former star Holt Farrier (Colin Farrell) and his children Milly (Nico Parker) and Joe (Finley Hobbins) to care for a newborn elephant whose oversized ears make him a laughingstock in an already struggling circus. But when they discover that Dumbo can fly, the circus makes an incredible comeback, attracting persuasive entrepreneur V.A. Vandevere (Michael Keaton), who recruits the peculiar pachyderm for his newest, larger-than-life entertainment venture, Dreamland.

        Dumbo soars to new heights alongside a charming and spectacular aerial artist, Colette Marchant (Eva Green), until Holt learns that beneath its shiny veneer, Dreamland is full of dark secrets.`,
        cast: [
            {
                id: 7,
                name: "Colin Farrell",
                role: `Captian Holt`,
                image: "user.jpg"
            },
            {
                id: 8,
                name: "Eva Green",
                role: "Colette Merchant",
                image: "eva-green.jpg"
            }
        ]
    },
    {
        id: 5,
        name: "Uri",
        release_date: "20190111",
        entity_type: Entities.Movies,
        certification: Certifications.UA,
        runtime: 138,
        video: `<iframe width="900" height="506" src="https://www.youtube.com/embed/VVY3do673Zc?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        image: "uri.jpg",
        available_formats: {             
            "Hindi": ["2D"]
        },
        formats: ["2D"],
        languages: ["Hindi"],
        critics_rating: 3,
        users_rating: 4.8,
        overall_rating: 90,
        genre: ["Action", "Drama", "War"],
        summary: `URI chronicles the events of the surgical strike conducted by the Indian military against the suspected militants in Pakistan occupied Kashmir (PoK). It tells the story of the 11 tumultuous events over which the operation was carried out.`,
        cast: [
            {
                id: 9,
                name: "Vicky Kaushal",
                role: `Major Vihaan Shergill`,
                image: "vicky-kaushal.jpg"
            },
            {
                id: 10,
                name: "Yami Gautam",
                role: "Pallavi Sharma",
                image: "yami-gautam.jpg"
            }
        ]
    },
    {
        id: 6,
        name: "Shazam!",
        release_date: "20190405",
        entity_type: Entities.Movies,
        certification: Certifications.UA,
        runtime: 132,
        video: `<iframe width="900" height="506" src="https://www.youtube.com/embed/go6GEIrcvFY?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        image: "shazam.jpg",
        available_formats: { 
            "English": ["2D", "3D"],
            "Hindi": ["2D"],           
            "Telugu": ["2D"]
        },
        formats: ["2D", "3D"],
        languages: ["English", "Hindi", "Telugu"],
        critics_rating: 4,
        users_rating: 4.4,
        overall_rating: 86,
        genre: ["Action", "Adventure", "Comedy"],
        summary: `We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson's (Angel) case, by shouting out one word - SHAZAM! This streetwise 14-year-old foster kid can turn into the adult Super Hero Shazam (Levi), courtesy of an ancient wizard. Still, a kid at heart-inside a ripped, godlike body-Shazam revels in this adult version of himself by doing what any teen would do with superpowers: have fun with them! 
        
        Can he fly? Does he have X-ray vision? Can he shoot lightning out of his hands? Can he skip his social studies test? Shazam sets out to test the limits of his abilities with the joyful recklessness of a child. But he'll need to master these powers quickly in order to fight the deadly forces of evil controlled by Dr. Thaddeus Sivana.`,
        cast: [
            {
                id: 11,
                name: "Zachary Levi",
                role: `Shazam`,
                image: "zachary-levi.jpg"
            },
            {
                id: 12,
                name: "Mark Strong",
                role: "Dr. Thaddeus Sivana",
                image: "mark-strong.jpg"
            }
        ]
    },
    {
        id: 7,
        name: "Chitralahari",
        release_date: "20190412",
        entity_type: Entities.Movies,
        certification: Certifications.U,
        runtime: 140,
        video: `<iframe width="900" height="506" src="https://www.youtube.com/embed/tBax6qOUECU?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        image: "chitralahari.jpg",
        available_formats: { 
            "Hindi": ["2D"]
        },
        formats: ["2D"],
        languages: ["Telugu"],
        critics_rating: 3,
        users_rating: 3.5,
        overall_rating: 78,
        genre: ["Drama", "Romance"],
        summary: `Chitralahari is a Telugu movie starring Sai Dharam Tej and Kalyani Priyadarshan in prominent roles. It is a drama directed by Kishore Tirumala.`,
        cast: [
            {
                id: 13,
                name: "Sai Dharam Tej",
                role: `Vijay`,
                image: "sai-dharam-tej.jpg"
            },
            {
                id: 14,
                name: "Kalyani Priyadarshan",
                role: "Chitra",
                image: "kalyani-priyadarshan.jpg"
            }
        ]
    }
]