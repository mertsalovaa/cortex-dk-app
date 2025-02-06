import styled from "styled-components";

export function Header({ theme }: { theme: string }) {
  return (
    <HeaderDiv themeType={theme}>
      <p>Item</p>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div<{ themeType: string }>`
  background-color: ${(props) =>
    props.themeType === "dark" ? "#000" : "aqua"};
`;
