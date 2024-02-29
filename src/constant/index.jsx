import { Icon1 } from "../assets";
import { Icon2 } from "../assets";
import { Icon3 } from "../assets";
import { Icon4 } from "../assets";

const Navlink = [
    {
        id: 0,
        title: "Home",
        link: "/",

    },
    {
        id:1,
        title:"About",
        link:"/",
    },
    {
        id:2,
        title:"News",
        link:"/",

    },
    {
        id:3,
        title:"Transport",
        link:"/",
    },
]

const Herosection = [
    {
        id:0,
        icon:Icon1,
        title:"Registration Process",
        process:"01"
    }, 
     {
        id:1,
        icon:Icon2,
        title:"Schedules and buses routes",
        process:"02"
    }, 
     {
        id:2,
        icon:Icon3,
        title:"News and Updates",
        process:"03"
    },  {
        id:3,
        icon:Icon4,
        title:"Enjoy your ride",
        process:"04"
    },
]


export {
     Navlink,
     Herosection
}