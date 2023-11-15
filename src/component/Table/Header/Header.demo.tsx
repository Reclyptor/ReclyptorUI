import HeaderComponent from "./Header";
import { HeaderProps } from "./Header.types";

export const DefaultProps: HeaderProps = {
};

export const Header = (props: HeaderProps) => {
  return <HeaderComponent { ...props } />;
};

export default () => <HeaderComponent { ...DefaultProps } />;