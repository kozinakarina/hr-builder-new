/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2087327872IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2087327872Icon(props: Group2087327872IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={".741"}
        d={
          "M3.964 3.964h2.964v2.964H3.964zm2.964 2.964H8.41a1.482 1.482 0 1 1 0 2.964A1.48 1.48 0 0 1 6.928 8.41zm-2.964 0H2.482a1.482 1.482 0 1 0 0 2.964c.819 0 1.482-.664 1.482-1.482zm2.964-2.964H8.41c.819 0 1.482-.664 1.482-1.482a1.483 1.483 0 0 0-2.964 0zm-2.964 0H2.482A1.48 1.48 0 0 1 1 2.482a1.482 1.482 0 1 1 2.964 0z"
        }
      ></path>
    </svg>
  );
}

export default Group2087327872Icon;
/* prettier-ignore-end */
