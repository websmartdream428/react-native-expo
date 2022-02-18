import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { ThemeProvider } from "styled-native-components";
import GradientButton from "./components/GradientButton";
import FeIcon from "react-native-vector-icons/Feather";
import Ionicon from "react-native-vector-icons/Ionicons";

import img from "./assets/png.png";
import {
  Container,
  CountWrapper,
  CustomImage,
  Header,
  HeaderShape,
  CountTitle,
  CountRow,
  CountNum,
  theme,
  DescWrapper,
  DescTitle,
  DescContent,
  Desc,
  IconWrapper,
} from "./App.styled";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Text>Duze prawdopodobienstwo wystapenia</Text>
          <HeaderShape />
        </Header>
        <CustomImage source={img} />
        <CountWrapper>
          <CountRow>
            <CountTitle>Cholesterol calkowity</CountTitle>
            <CountNum>200</CountNum>
          </CountRow>
          <CountRow>
            <CountTitle>HDL</CountTitle>
            <CountNum>34</CountNum>
          </CountRow>
          <CountRow>
            <CountTitle>Trojglicerydy</CountTitle>
            <CountNum>180</CountNum>
          </CountRow>
        </CountWrapper>
        <GradientButton
          onPress={() => {}}
          colors={["#232a82", "#0c3e9b"]}
          text="Dodaj pomiar"
        />
        <DescWrapper>
          <IconWrapper>
            <FeIcon name="star" size={20} color="#0742a0" />
          </IconWrapper>
          <View>
            <DescTitle>Zalecenia:</DescTitle>
            <DescContent>Kardiolog, zmiana stylu zycia</DescContent>
          </View>
        </DescWrapper>
        <DescWrapper>
          <IconWrapper>
            <Ionicon name="warning-sharp" size={30} color="#ea1369" />
          </IconWrapper>
          <Desc>
            <DescTitle>Zagrozenia:</DescTitle>
            <DescContent>
              Lorem ipsum dolor sit amet, consetetur adipiscing elit.
              Morbidictum finibus nunc, vulputate molestie ante lobortis vel.
              Donec asfelis imperdiet, ultricies massa eget, tristique turpis.
              Etiam sed consectetur
            </DescContent>
          </Desc>
        </DescWrapper>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}
