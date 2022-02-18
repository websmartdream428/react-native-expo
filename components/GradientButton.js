import React from "react";

import { TouchableOpacity } from "react-native";
import { ButtonText, CustomGradientButton } from "../App.styled";

const GradientButton = ({ onPress, style, colors, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomGradientButton
        colors={colors}
        style={style}
        start={{ x: 0, y: 0.3 }}
        end={{ x: 1, y: 0.7 }}
      >
        <ButtonText>{text}</ButtonText>
      </CustomGradientButton>
    </TouchableOpacity>
  );
};

export default GradientButton;
