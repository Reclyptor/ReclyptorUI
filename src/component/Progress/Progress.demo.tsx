import ProgressComponent from "./Progress";
import { ProgressProps } from "./Progress.types";

export const DefaultProps: ProgressProps = {
};

export const Progress = (props: ProgressProps) => {
  return <ProgressComponent { ...props } className="w-1/2" />;
};

export default () => <ProgressComponent { ...DefaultProps } />;