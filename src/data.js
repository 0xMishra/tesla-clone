import CropLandscapeIcon from "@material-ui/icons/CropLandscape";
import AvTimerIcon from "@material-ui/icons/AvTimer";
const bgImageArray = [
  "Model-S",
  "Model-3",
  "Model-X",
  "Model-Y",
  "Solar-Roof",
  "Solar-Pannels",
];
const modelsArr = [
  {
    id: 0,
    header: "Plaid",
    head1: "396mi",
    para1: "Range (EPA est.)",
    head2: "1.99s",
    para2: "0-60 mph*",
    head3: "200 mph",
    para3: "Top Speed*",

    slogan: "High Power",
  },
  {
    id: 1,
    header: "long route",
    head1: "3.1s",
    para1: "0-60 mph*",
    head2: "353mi",
    para2: "Range(EPA est.)",
    head3: "AWD",
    para3: "Dual Motor",

    slogan: "High Power",
  },
  {
    id: 2,
    header: "Plaid",
    head1: "340mi",
    para1: "Range (EPA est.)",
    head2: "2.5s",
    para2: "0-60 mph*",
    head3: "9.9s",
    para3: "1/4 Mile",

    slogan: "High Power",
  },
  {
    id: 3,
    header: "Long Route",
    head1: "396mi",
    para1: "Range (EPA est.)",
    head2: "76 cu ft",
    para2: "Cargo Space",
    head3: "AWD",
    para3: "Dual Motor",

    slogan: "High Power",
  },
  {
    id: 4,
    header: "solar",

    head1: <CropLandscapeIcon />,
    para1: "Beautiful Solar",
    head2: "3X",
    para2: "Stronger than Tiles",
    head3: <AvTimerIcon />,
    para3: "Pays for itself ",
    slogan: "Transform your roof and produce clean energy",
  },
  {
    id: 5,
    header: "solar",
    head1: <CropLandscapeIcon />,
    para1: "Free Energy",
    head2: "$",
    para2: "Lowest Price",
    head3: "24/7",
    para3: "Monotoring ",
    slogan: "Lowest Cost Solar Panels in America",
  },
];

const infoModelArr = [
  {
    id: 0,
    head: "Plaid",
    title: "Beyond Ludicrous",
    para: `With the longest range and quickest acceleration of any electric vehiclein production,Plaid is the highest performing sedanever built. Both Long Range and Plaid powertrains, with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs.`,
    dir: "flex-row",
  },

  {
    id: 1,
    head: "Safety",
    title: "High Impact Protection",
    para: `Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost...`,
    dir: "flex-row-reverse",
  },
  {
    id: 2,
    head: "Autopilot",
    title: "Future of driving",
    para: `Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly.`,
    dir: "flex-row",
  },
];

const images = [
  {
    id: 0,
    url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/ea201786-4dec-4ca2-b266-c7a180443853/bvlatuR/std/1440x1080/MS-Specs-Hero-Desktop",
  },
  {
    id: 1,
    url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/2b239404-c402-4c55-9a10-a061f2cf0ae8/bvlatuR/std/947x677/global-spec-hero",
  },
  {
    id: 2,
    url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/afc47407-cc4b-4d51-9616-8672c7a60e89/bvlatuR/std/720x540/MX-Specs-Hero-Mobile",
  },
  {
    id: 3,
    url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/afc47407-cc4b-4d51-9616-8672c7a60e89/bvlatuR/std/720x540/MX-Specs-Hero-Mobile",
  },
];
export { bgImageArray, modelsArr, infoModelArr, images };
