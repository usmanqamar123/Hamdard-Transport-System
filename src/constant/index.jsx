import { Icon1, Icon1Hover, Icon2Hover, Icon3Hover, Icon4Hover,Arrow } from "../assets";
import { Icon2 } from "../assets";
import { Icon3 } from "../assets";
import { Icon4 } from "../assets";
import { FeatureTransparent } from "../assets";
import { Applications } from "../assets";
import { Sheild } from "../assets";
import { Eye } from "../assets";
import { Dollar } from "../assets";
import { GiFlyingTarget } from "react-icons/gi";
import { RiVerifiedBadgeLine,RiTwitterXFill } from "react-icons/ri";
import { AiOutlineGlobal,AiOutlineQuestionCircle, } from "react-icons/ai";
import { PiFacebookLogoLight } from "react-icons/pi";
import { IoIosCheckmarkCircleOutline,IoMdInformationCircleOutline } from "react-icons/io";

// import { RiVerifiedBadgeLine } from "react-icons/ri";




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
        hoverIcon:Icon1Hover,
        arrow: Arrow,
        title:"Registration Process",
        process:"01"
    }, 
     {
        id:1,
        icon:Icon2,
        hoverIcon:Icon2Hover,
        arrow: Arrow,
        title:"Schedules and buses routes",
        process:"02"
    }, 
     {
        id:2,
        icon:Icon3,
        hoverIcon:Icon3Hover,
        arrow: Arrow,
        title:"News and Updates",
        process:"03"
    },  {
        id:3,
        icon:Icon4,
        hoverIcon:Icon4Hover,
        arrow: Arrow,
        title:"Enjoy your ride",
        process:"04"
    },
]

const Featuresection =[
    {
        id:0,
        counts:"100",
        sup:"+",
        title:"We drive points per day",
        iconBottom:FeatureTransparent,
    }, 
    {
        id:1,
        counts:"1.2KM",
        sup: 2,
        title:"We cross area per day in Karachi",
        iconBottom:FeatureTransparent,
    }, 
    {
        id:2,
        counts:"110",
        sup: "",
        title:"Professional drivers force behind",
        iconBottom:FeatureTransparent,
    }, 
    {
        id:3,
        counts:"90",
        sup: "+",
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

const Platform =[
    {
        id:0,
        icon: <GiFlyingTarget/>,
        title:"DETECT"
    },
      {
        id:1,
        icon: <IoIosCheckmarkCircleOutline/>,
        title:"VERIFY"
    },
      {
        id:2,
        icon: <IoMdInformationCircleOutline/>,
        title:"INFORMATION"
    },
      {
        id:3,
        icon: <RiVerifiedBadgeLine/>,
        title:"AUTHENTICATE"
    }
]
const Platformnumber =[
    {
        id:0,
        number: 8,
    },
     {
        id:1,
        number: 1,
    },
     {
        id:2,
        number: 5,
    },
     {
        id:3,
        number: 0,
    }, 
    {
        id:4,
        number: 14,
    },
]

const Getintouch = [
    {
        id:0,
        icon: RiTwitterXFill,
        title:"TWITTER",
        link:"https://twitter.com/hamdarduni?lang=en"

    },
     {
        id:1,
        icon:AiOutlineGlobal,
        title:"HAMDARD.EDU.PK",
        link:"https://www.hamdard.edu.pk"
    },
     {
        id:2,
        icon:PiFacebookLogoLight,
        title:"FACEBOOK",
        link:"https://www.facebook.com/HamdardUniversityPK"
    },
     {
        id:3,
        icon:AiOutlineQuestionCircle,
        title:"ABOUT THIS WEBSITE",
        link:"/"
    }
]

const Footer_Links = [
    {
        id:1,
        title:"HOME",
        link:"/",
    },
     {
        id:2,
        title:"UNIVERSITY",
        link:"/www.hamdard.edu.pk",

    },
     {
        id:3,
        title:"ABOUTUS",
        link:"/",

    }, 
    {
        id:4,
        title:"DEVS",
        link:"/",

    }, 
    {
        id:5,
        title:"CONTACT US",
        link:"/contactus",

    }, 
]

export {
     Navlink,
     Herosection,
     Featuresection,
     Featuresection2,
     Platform,
     Platformnumber,
     Getintouch,
     Footer_Links,
}