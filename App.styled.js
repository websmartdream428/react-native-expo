import styled from "styled-native-components";
import { Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const theme = {
  rem: 8,
  colors: {
    accent: "#11C5D9",
    background: "#141417",
    text: "#D2D2D6",
  },
  elevation: (value) => ({
    shadowColor: "black",
    shadowOffset: { width: 0, height: value },
    shadowRadius: value * 2.5,
    shadowOpacity: 0.3,
    elevation: value,
    zIndex: value,
  }),
};

export const Container = styled(View)`
  padding: 30px 20px 0 20px;
`;

export const Header = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

export const HeaderShape = styled(View)`
  width: 20px;
  height: 20px;
  background-color: #ea1369;
  border-radius: 20px;
`;

export const CustomImage = styled(Image)`
  margin-top: 40px;
  margin-bottom: 20px;
  width: 100%;
  height: 150px;
`;

export const CountWrapper = styled(View)``;

export const CountRow = styled(View)`
  display: flex;
  flex-direction: row;
  margin: 5px;
`;

export const CountTitle = styled(Text)`
  color: #414141;
  width: 50%;
  text-align: right;
  font-size: 14;
  font-weight: 700;
`;

export const CountNum = styled(Text)`
  color: #414141;
  width: 50%;
  text-align: center;
`;

export const CustomGradientButton = styled(LinearGradient)`
  padding: 20px;
  padding-top: 7;
  padding-bottom: 7;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 20px;
  align-items: center;
  border-radius: 50px;
  flex-direction: row;
  width: fit-content;
  box-shadow: 0 5px 10px #00000030;
`;

export const DescWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const DescTitle = styled(Text)`
  color: #414141;
  font-weight: 700;
`;

export const DescContent = styled(Text)`
  color: #414141;
  margin-top: 5px;
  word-wrap: break-word;
`;

export const Desc = styled(View)`
  width: 80%;
`;

export const IconWrapper = styled(View)`
  width: 30px;
  text-align: center;
`;

export const ButtonText = styled(Text)`
  font-size: 16px;
  color: white;
  font-weight: 700;
`;
