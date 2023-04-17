import React, { useState } from "react";
import {
  Box,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import {
  HtmlLogo,
  CssLogo,
  JsLogo,
  TsLogo,
  CsharpLogo,
  NextLogo,
  ReactLogo,
  SqlServerLogo,
  FirebaseLogo,
  VscodeLogo,
  VsStudioIDE,
  GithubLogo,
} from "../svgs/SvgIcons";

const Skill = ({ icon, value, props }) => {
  const [sliderValue, setSliderValue] = useState(value);

  return (
    <Flex alignItems="center" w="100%" gap={2}>
      {icon}
      <Slider aria-label="slider-ex-6" defaultValue={value} isReadOnly="true">
        <SliderMark
          value={value}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-9"
          ml="-5"
          w="12"
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  );
};

export default Skill;
