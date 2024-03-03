import { Icon1 } from "../assets";
import { Icon2 } from "../assets";
import { Icon3 } from "../assets";
import { Icon4 } from "../assets";
import { FeatureTransparent } from "../assets";
import { Applications } from "../assets";
import { Sheild } from "../assets";
import { Eye } from "../assets";
import { Dollar } from "../assets";

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

const Featuresection =[
    {
        id:0,
        counts:"100",
        title:"We drive points per day",
        iconBottom:FeatureTransparent,
    }, 
    {
        id:1,
        counts:"1.2KM",
        title:"We cross area per day in Karachi",
        iconBottom:FeatureTransparent,
    }, 
    {
        id:2,
        counts:"110",
        title:"Professional drivers force behind",
        iconBottom:FeatureTransparent,
    }, 
    {
        id:3,
        counts:"90",
        title:"Pick locations Pick & Drop",
        iconBottom:FeatureTransparent,
    },
]

const Featuresection2 =[
    {
        id:0,
        icon:Applications,
        step:"01",
        title:"Strict Schedules"
    }, 
    {
        id:1,
        icon:Sheild,
        step:"02",
        title:"Committed to Duty"
    },
     {
        id:2,
        icon:Eye,
        step:"03",
        title:"Continuous Monitoring"
    }, 
    {
        id:3,
        icon:Dollar,
        step:"04",
        title:"Making Dollars"
    },
]


export {
     Navlink,
     Herosection,
     Featuresection,
     Featuresection2,
}