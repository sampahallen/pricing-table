import visa from "../assets/visa.png";
import master from "../assets/mastercard.png"
import gpay from "../assets/gpay.png"
import paypal from "../assets/paypal.png"
import apple from "../assets/apple.png"

const pkg = [
  {
    name: "Lite",
    price: "$9/mo",
    offers: [
      {
        title: "Formula Generators",
        items: [
          {
            title: "Unlimited Generations",
            boost: false,
            proBoost: false,
          },

          {
            title: "Access to add-ins in Excel & Google Sheets",
            boost: false,
            proBoost: false,
          },
        ],
      },
      {
        title: "Data Analyzer",
        items: [
          {
            title: "250 messages",
            boost: false,
            proBoost: false,
          },
          {
            title: "50MB file upload limit",
            boost: false,
            proBoost: false,
          },
          {
            title: "Data connectors access",
            boost: false,
            proBoost: false,
          },
          {
            title: "Query one file in a single chat",
            boost: false,
            proBoost: false,
          },
        ],
      },
      {
        title: "AI in Spreadsheets",
        items: [
          {
            title: "500 automations",
            boost: false,
            proBoost: false,
          },
          {
            title: "Access to add-ons in Excel & Google Sheets",
            boost: false,
            proBoost: false,
          },
        ],
      },
    ],
    isActive: false,
    mostPopular: false,
  },
{
    name: "Pro",
    price: "$15/mo",
    offers: [
      {
        title: "Formula Generators",
        items: [
          {
            title: "Unlimited Generations",
            boost: false,
            proBoost: false,
          },

          {
            title: "Access to add-ins in Excel & Google Sheets",
            boost: false,
            proBoost: false,
          },
        ],
      },
      {
        title: "Data Analyzer",
        items: [
          {
            title: "Unlimited Messages",
            boost: true,
            proBoost: false,
          },
          {
            title: "100MB file upload limit",
            boost: true,
            proBoost: false,
          },
          {
            title: "Data connectors access",
            boost: false,
            proBoost: false,
          },
          {
            title: "Query multiple file in a single chat",
            boost: true,
            proBoost: false,
          },
        ],
      },
      {
        title: "AI in Spreadsheets",
        items: [
          {
            title: "500 automations",
            boost: true,
            proBoost: false,
          },
          {
            title: "Access to add-ons in Excel & Google Sheets",
            boost: false,
            proBoost: false,
          },
        ],
      },
    ],
    isActive: true,
    mostPopular: true,
  },
  {
    name: "Premium",
    price: "$30/mo",
    offers: [
      {
        title: "Formula Generators",
        items: [
          {
            title: "Unlimited Generations",
            boost: false,
            proBoost: false,
          },

          {
            title: "Access to add-ins in Excel & Google Sheets",
            boost: false,
            proBoost: false,
          },
        ],
      },
      {
        title: "Data Analyzer",
        items: [
          {
            title: "Unlimited Messages",
            boost: true,
            proBoost: false,
          },
          {
            title: "150MB file upload limit",
            boost: true,
            proBoost: true,
          },
          {
            title: "Data connectors access",
            boost: false,
            proBoost: false,
          },
          {
            title: "Query multiple file in a single chat",
            boost: true,
            proBoost: false,
          },
        ],
      },
      {
        title: "AI in Spreadsheets",
        items: [
          {
            title: "20,000 automations",
            boost: true,
            proBoost: true,
          },
          {
            title: "Access to add-ons in Excel & Google Sheets",
            boost: false,
            proBoost: false,
          },
        ],
      },
    ],
    isActive: false,
    mostPopular: false,
  },
];

const cards = [
    {
        id: "visa",
        image: visa
    },
    {
        id: "mastercard",
        image: master
    },
    {
        id: "gpay",
        image: gpay
    },
    {
        id: "paypal",
        image: paypal
    },
    {
        id: "apple",
        image: apple
    }
]

export { pkg, cards };
