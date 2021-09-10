import React from "react";

export default function Story({ storyTitle, moral, story, imageSource }) {
  return (
    <div>
      <img src={imageSource} />
      <h1>{storyTitle}</h1>
      <h3>{moral}</h3>
      <p>{story}</p>
    </div>
  );
}
