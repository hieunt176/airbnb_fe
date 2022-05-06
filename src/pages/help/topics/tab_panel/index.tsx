import * as React from "react";

import Topic from "../topic";

import { BaseCard } from "../../../../@types/styles/baseCard";

import { TabPanelProps } from "../";

export interface IPanel {
  value: number;
  cards: BaseCard[];
  articles: BaseCard[];
}

export interface Props {
  tabPanel: TabPanelProps;
  value: number;
}

const TabPanel = (props: Props) => {
  const { children, index, ...other } = props.tabPanel;
  const value = props.value;

  const panels: IPanel[] = [
    {
      value: 0,
      cards: [
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
          title: "Getting started on Airbnb",
          content: "",
        },
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
          title: "Accessing your account",
          content: "",
        },
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
          title: "Getting started on Airbnb",
          content: "",
        },
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
          title: "Accessing your account",
          content: "",
        },
      ],
      articles: [
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
      ],
    },
    {
      value: 1,
      cards: [
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
          title: "Getting started on Airbnb",
          content: "",
        },

        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
          title: "Getting started on Airbnb",
          content: "",
        },
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
          title: "Accessing your account",
          content: "",
        },
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
          title: "Accessing your account",
          content: "",
        },
      ],
      articles: [
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
      ],
    },
    {
      value: 2,
      cards: [
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
          title: "Accessing your account",
          content: "",
        },
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
          title: "Getting started on Airbnb",
          content: "",
        },
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
          title: "Accessing your account",
          content: "",
        },
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
          title: "Getting started on Airbnb",
          content: "",
        },
      ],
      articles: [
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
      ],
    },
    {
      value: 3,
      cards: [
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
          title: "Accessing your account",
          content: "",
        },
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt085a97d5fcab4519/accessing-your-account-optimized.jpg",
          title: "Accessing your account",
          content: "",
        },
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
          title: "Getting started on Airbnb",
          content: "",
        },
        {
          img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg",
          title: "Getting started on Airbnb",
          content: "",
        },
      ],
      articles: [
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
        {
          img: "",
          title: "Canceling your reservation for a stay",
          content:
            "While it’s extremely rare, sometimes a Host will cancel a reservation. We understand this changes your plans in a big way, so don’t worry—we…",
        },
      ],
    },
  ];

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Topic panel={panels[index]} />}
    </div>
  );
};

export default TabPanel;
