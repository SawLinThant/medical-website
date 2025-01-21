export type Payment = {
    id: string;
    name: string;
    logo: string
}

export type OptionType = {
    id: string
    name: string
}

export type ProvinceType = {
    id: string,
    zone: string,
    province:OptionType[]
}

export const ZONE:OptionType[] = [
    {
       id: "1",
       name: "Yangon"
    },
    {
        id: "2",
        name: "Mandalay"
     },
]

export const PROVINCE:ProvinceType[] = [
    {
        id:"1",
        zone: "Yangon",
        province:[
            {
                id:"1",
                name:"North Dagon"
            },
            {
                id:"2",
                name:"South Dagon"
            },
            {
                id:"3",
                name:"Bahan"
            },
            {
                id:"4",
                name:"Hlaing"
            },
        ]
    },
    {
        id:"2",
        zone: "Mandalay",
        province:[
            {
                id:"1",
                name:"Chan Aye Tharzan"
            },
            {
                id:"2",
                name:"29x24 Street"
            },
            {
                id:"3",
                name:"Kan Daw Mon"
            },
            {
                id:"4",
                name:"30th Street"
            },
        ]
    },
]

export const PAYMENT:Payment[] = [
    {
        id:"abfa998a-8e84-4ca0-887e-79f572127bdd",
        name: "Cash On Delivery",
        logo:"/images/payment/kpay.png"
    },
    {
        id:"5af460bc-bb4c-4183-b655-22d8dcc18d36",
        name: "KBZ Pay",
        logo:"/images/payment/kpay.png"
    },
    {
        id:"b6447a68-7a77-4365-a23f-6d9232a4ee27",
        name: "Wave Pay",
        logo:"/images/payment/wave.jpg"
    },
    {
        id:"d776755c-0120-4831-91fb-a8f8a7e5f233",
        name: "Aya Pay",
        logo:"/images/payment/aya.jpg"
    },
]