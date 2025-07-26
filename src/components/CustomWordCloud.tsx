'use client';
import { useTheme } from "next-themes";
import React from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {};

const data = [
  { text: "JavaScript", value: 1},
  { text: "React", value: 8},
  { text: "Node.js", value: 6 },
  { text: "CSS", value: 5 },
  { text: "HTML", value: 4 },
  { text: "TypeScript", value: 3 },
  { text: "Next.js", value: 2 },
];

const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

const CustomWordCloud = (props: Props) => {
  const theme = useTheme();

  return (
    <>
      <D3WordCloud
        data={data}
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme === "dark" ? "white" : "black"}
        
      />
    </>
  );
};

export default CustomWordCloud;