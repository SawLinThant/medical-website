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