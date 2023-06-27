import CardComponent from "./Card";
import { CardProps } from "./Card.types";

export const DefaultProps: CardProps = {
};

export const Card = (props: CardProps) => {
  return <CardComponent { ...props } className="w-[500px] h-[500px]" />;
};

export default () => <CardComponent { ...DefaultProps } />;