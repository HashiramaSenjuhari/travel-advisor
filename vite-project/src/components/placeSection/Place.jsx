import React from "react";
import HeroMain from "../Boilerplate/HeroSkeleton";
import HeroSkeleton from "../Boilerplate/HeroSkeleton";
import Popular from './Popular';
import NearMe from "./NearMe";
import MostlyVisited from "./MostlyVisted";

const buttonType = [
  {
    name: "Popular",
    to: "/*",
    element: <Popular />,
  },
  {
    name: "Near Me",
    to: "/near/*",
    element: <NearMe />,
  },
  {
    name: "Most Visited",
    to: "/most/*",
    element: <MostlyVisited />,
  },
];

const Place = () => {
  return (
    <>
      <HeroSkeleton
        header={'Travel'}
        buttonDetail={buttonType}
        id={'place'}
        key={'place'}
      ></HeroSkeleton>
    </>
  );
};

export default Place;
