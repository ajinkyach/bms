import { Theatre } from '../models/theatre';

export const Theatres: Array<Theatre> = [
    {
        id: 1,
        name: "PVR ICON: The Pavillion Pune",
        address: "Pavillion Mall, 3rd floor, Senapati Bapat Road No.30, Laxmi Society, Model Colony, Shivajinagar",
        city_id: 1,
        state_id: 1,
        zipcode: "411016",
        available_formats: {
            "English": ["2D", "3D"],
            "Telugu": ["2D", "3D"],
            "Hindi": ["2D", "3D"]
        },
        cancellation_available: true,
        food_beverages: true,
        mticket: true,
        screens: 1
    },
    {
        id: 2,
        name: "Bollywood Multiplex: Kharadi",
        address: "Old Mundhwa Road, Sector Number 3, Maruti Nagar, Kharadi, Wadgaon Sheri Bypass",
        city_id: 1,
        state_id: 1,
        zipcode: "411014",
        available_formats: {
            "English": ["2D"],
            "Telugu": ["2D"],
            "Hindi": ["2D"]
        },
        cancellation_available: true,
        mticket: true,
        screens: 1
    },
    {
        id: 3,
        name: "City Pride: Kothrud",
        address: "Survey No.20/1,2, Kothrud, Near Tara Residency",
        city_id: 1,
        state_id: 1,
        zipcode: "411038",
        available_formats: {
            "English": ["2D"],
            "Telugu": ["2D"],
            "Hindi": ["2D"]
        },
        cancellation_available: true,
        food_beverages: true,
        mticket: true,
        screens: 1
    },
    {
        id: 4,
        name: "E-Square Carnival, University Road",
        address: "132/A, University Road, Ganesh Khind, Premnagar Ashok Nagar, Near Reserve Bank Of India",
        city_id: 1,
        state_id: 1,
        zipcode: "411016",
        available_formats: {
            "English": ["2D"],
            "Telugu": ["2D"],
            "Hindi": ["2D"]
        },      
        mticket: true,  
        screens: 1
    },    
    {
        id: 5,
        name: "PVR: Phoenix Market City, Pune",
        address: "2nd Floor, Phoenix Market City, Nagar Road, Viman Nagar, Near Baker Gauges",
        city_id: 1,
        state_id: 1,
        zipcode: "411014",
        available_formats: {
            "English": ["2D", "3D"],
            "Telugu": ["2D", "3D"],
            "Hindi": ["2D", "3D"]
        },
        cancellation_available: true,
        food_beverages: true,
        mticket: true,
        screens: 1 
    }
];
