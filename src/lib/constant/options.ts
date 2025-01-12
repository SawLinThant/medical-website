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
    }
]