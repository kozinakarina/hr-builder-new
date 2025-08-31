/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer1Icon(props: Layer1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M2.875 9.333H.958c-.53 0-.958-.446-.958-1v-2c0-.553.428-1 .958-1h2.875v3c0 .554-.428 1-.958 1m7.667-8h-5.75c-.53 0-.959.447-.959 1v3H11.5v-3c0-.553-.428-1-.958-1m.958 4H7.667v3c0 .554.428 1 .958 1H11.5zm2.875 0H11.5v4h3.833v-3c0-.553-.428-1-.958-1m3.833 4h-2.875v3c0 .554.428 1 .959 1h1.916c.53 0 .959-.446.959-1v-2c0-.553-.428-1-.959-1"
        }
      ></path>
    </svg>
  );
}

export default Layer1Icon;
/* prettier-ignore-end */
