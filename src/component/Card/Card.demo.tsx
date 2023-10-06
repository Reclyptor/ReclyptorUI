import CardComponent from "./Card";
import { CardProps } from "./Card.types";

export const DefaultProps: CardProps = {
};

export const Card = (props: CardProps) => {
  return <CardComponent { ...props } className="w-48 h-48" front="Front" back="Back" />;
};

export default () => <CardComponent { ...DefaultProps } />;