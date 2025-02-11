import { PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "./header";

interface LayoutPropsBase {
  pageName?: string | undefined;
  theme: "dark" | "light";
}
interface LayoutProps extends PropsWithChildren<LayoutPropsBase> {}

export const MainLayout = (props: LayoutProps) => {
  return (
    <InnerContainer {...props}>
      <Header theme={props.theme} />
      {props.children}
    </InnerContainer>
  );
};

const InnerContainer = styled.div`
  width: 100%;
`;
