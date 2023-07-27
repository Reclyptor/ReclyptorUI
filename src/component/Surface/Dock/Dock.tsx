import React, { forwardRef } from "react";
import { DockProps, StandardProps } from "./Dock.types";
import useHAF from "../../../hook/useHAF";
import useProps from "../../../hook/useProps";
import "../../../tailwind.css";

const Dock = forwardRef<HTMLDivElement, DockProps & StandardProps>((_props, _ref) => {
  const { props, rest } = useProps<DockProps, StandardProps>(_props, []);
  const { ref } = useHAF<HTMLDivElement>(_ref);

  return (
    <div { ...rest } ref={ ref }>
      { rest.children }
    </div>
  );
});

export default Dock;