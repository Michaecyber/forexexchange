import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Markets",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to Trade",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Daily trading ideas",
  "Transparent trading conditions",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Free educational materials",
    text: "Watch our course on the basic aspects of trading, Attend regular webinars and live trading sessions for beginners and pros.",
    date: "March - Dec 2024",
    status: "Active",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Make Money with our invite program",
    text: "Willing to invite your friends and get a reward for that?",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Become a partner",
    text: "Earn 1 USD per each standard lot traded by your friends, while they get a unique 100% deposit bonus.",
    date: "Jan - Dec 2024",
    status: "Active",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Become IB",
    text: "Have already referred all your friends and feel like you can expand your client base even further than that? You can apply to become one of our Introducing brokers. IBs refer new clients regularly and get paid accordingly for their activities.",
    date: "Month to Month 2024",
    status: "In progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Increase your deposit by 50% with bonuses";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart investments",
  },
  {
    id: "2",
    title: "100% investment returns",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Bitcoin",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Spot Grid",
    description: "Buy low and sell high 24/7",
    price: "$1",
    features: [
      "How Does Bitcoin Work?",
      "Bitcoin runs on a decentralized, peer-to-peer network,",
      "making it possible for individuals to conduct transactions without intermediaries. ",
    ],
  },
  {
    id: "1",
    title: "Bitcoin's fixed supply.",
    description: "Amplify your purchasing power with an advanced version of Grid Trading",
    price: "24.99",
    features: [
      "With only 21 million bitcoins ever to be minted",
      "Bitcoin scarcity can lead to dramatic price changes as demand varies.",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Why Is the Bitcoin Price So Volatile?",
    description: "Use Our auto-invest to accumulate crypto overtime.",
    price: null,
    features: [
      "Firstly, the crypto market is smaller and not heavily traded like traditional markets.",
      "Secondly, Bitcoin's value depends on public sentiment and speculation, leading to short-term price changes. ",
      "Media coverage, influential opinions, and regulatory developments create uncertainty, affecting demand and supply dynamics and contributing to price fluctuations.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Rebalancing Bot",
    text: "A long term position strategy, supporting an investment portfolio.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Intuitive Automation",
    text: "Set up your algorithmic bot and automate your orders in a few clicks with TWAP, VP algos, and Grid trading",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Trending strategies",
    text: "Replicate and customize the most profitable Grid Trading strategies across a wide range of trading pairs.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Deep Liquidity",
    text: "Optimize order executions and reduce slippage while capturing market trends on the largest exchange.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Will Bitcoin Halving Affect BTC’s Price? ",
    text: "The live price of Bitcoin (BTC) is updated and available in real time on Binance.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "About Bitcoin (BTC)",
    text: "Bitcoin is one of the most popular cryptocurrencies in the market. First introduced in 2009 by Satoshi Nakamoto, Bitcoin has held the crypto market’s number one spot according to market capitalization",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
