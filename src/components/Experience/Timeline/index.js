import React from "react";
import styled from "styled-components";

const Timeline = () => {
  return (
    <div class="flex-col">
      <div class="border-2-2 absolute border-opacity-60 border-white h-full border"></div>
      <div class="flex items-center w-full">
        <div class="z-20 flex items-center bg-white w-4 h-4 rounded-full"></div>
        <div class="px-6 py-4">
          <h3 class="mb-3 font-bold text-white text-3xl">Lorem Ipsum</h3>
          <p class="text-sm leading-snug tracking-wide text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div class="flex items-center w-full">
        <div class="z-20 flex items-center bg-white w-4 h-4 rounded-full"></div>
        <div class="px-6 py-4">
          <h3 class="mb-3 font-bold text-white text-3xl">Lorem Ipsum</h3>
          <p class="text-sm leading-snug tracking-wide text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
