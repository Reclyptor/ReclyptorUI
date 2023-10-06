import CardComponent from "./Card";
import { CardProps } from "./Card.types";

export const DefaultProps: CardProps = {
};

export const Card = (props: CardProps) => {
  return <CardComponent { ...props } />;
};

export default () => <CardComponent { ...DefaultProps } />;