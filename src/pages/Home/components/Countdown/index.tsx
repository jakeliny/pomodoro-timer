import { CountdownContainer, Separator } from "./styles";

export const Countdown = () => {
  return (
    <CountdownContainer>
      <span>3</span>
      <span>0</span>
      <Separator>:</Separator>
      <span>0</span>
      <span>0</span>
    </CountdownContainer>
  );
};
