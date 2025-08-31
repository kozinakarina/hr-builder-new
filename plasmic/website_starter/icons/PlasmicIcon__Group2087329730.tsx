/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2087329730IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2087329730Icon(props: Group2087329730IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M9.75 3.25H6.5V0h1.828c.498 0 .747 0 .937.097a.9.9 0 0 1 .388.388c.097.19.097.44.097.937zM13 5.078c0 .498 0 .747-.097.937a.9.9 0 0 1-.388.388c-.19.097-.44.097-.937.097H9.75V3.25h1.828c.498 0 .747 0 .937.097a.9.9 0 0 1 .388.388c.097.19.097.44.097.937zm-3.25 3.25c0 .498 0 .747-.097.937a.9.9 0 0 1-.388.388c-.19.097-.44.097-.937.097H6.5V6.5h3.25zM6.5 9.75H3.25V7.922c0-.498 0-.747.097-.937a.9.9 0 0 1 .388-.388c.19-.097.44-.097.937-.097H6.5zM3.25 10H1.422c-.498 0-.747 0-.937.097a.9.9 0 0 0-.388.388c-.097.19-.097.44-.097.937v.406c0 .498 0 .747.097.937a.9.9 0 0 0 .388.388c.19.097.44.097.937.097h.406c.498 0 .747 0 .937-.097a.9.9 0 0 0 .388-.388c.097-.19.097-.44.097-.937zM0 1.422C0 .924 0 .675.097.485A.9.9 0 0 1 .485.097C.675 0 .925 0 1.422 0H3.25v3.25H1.422c-.498 0-.747 0-.937-.097a.9.9 0 0 1-.388-.388C0 2.575 0 2.325 0 1.828zM3.25 0H6.5v3.25H3.25z"
        }
      ></path>
    </svg>
  );
}

export default Group2087329730Icon;
/* prettier-ignore-end */
