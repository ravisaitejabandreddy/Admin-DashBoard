import Home from "../../../../public/images/home.svg";
import Candidates from "../../../../public/images/candidates.svg";
import Adverse from "../../../../public/images/adverse.svg";
import analytics from "../../../../public/images/analytics.svg";
import logs from "../../../../public/images/logs.svg";
import account from "../../../../public/images/account.svg";
import screenings from "../../../../public/images/screenings.svg";
export const NavItems = [
    {
      icon: Home,
      name: "Home",
      id: 1,
      url: "/",
    },
    {
      icon: Candidates,
      name: "Candidates",
      id: 2,
      url: "/candidateList",
    },
    {
      icon: Adverse,
      name: "Adverse Actions",
      id: 3,
      url: "/adverseActions",
    },
    {
      icon: logs,
      name: "Logs",
      id: 4,
      url: "/",
    },
    {
      icon: analytics,
      name: "Analytics",
      id: 5,
      url: "/",
    },
    {
      icon: account,
      name: "Account",
      id: 6,
      url: "/",
    },
    {
      icon: screenings,
      name: "Screenings",
      id: 7,
      url: "/",
    },
  ];