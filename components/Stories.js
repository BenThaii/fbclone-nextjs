import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    id: 0,
    name: "Warren Buffet",
    src: "https://dynaimage.cdn.cnn.com/cnn/w_1600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200827054439-44-warren-buffet-life-in-pictures-restricted.jpg",
    profile: "https://dynaimage.cdn.cnn.com/cnn/w_1600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180829220049-25-warren-buffett.jpg",
  },
  {
    id: 1,
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    id: 2,
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    id: 4,
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard key = {story.id} name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
