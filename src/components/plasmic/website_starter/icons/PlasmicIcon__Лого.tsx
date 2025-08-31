/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ЛогоIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ЛогоIcon(props: ЛогоIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 68 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M24.752 0h2.176v4.339h4.352v2.17h-4.352v7.05h4.352v2.17h-3.808q-2.72 0-2.72-2.712V6.508h-2.72V4.34h2.72z"
        }
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M0 3.525v9.492q0 2.712 2.72 2.712h3.264q2.72 0 2.72-2.712V3.525q0-2.71-2.72-2.711H2.72Q0 .814 0 3.525M6.528 13.56V2.983H2.176V13.56z"
        }
        clipRule={"evenodd"}
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M15.504 3.525V13.56h2.72v2.17h-7.888v-2.17h2.992V2.983h-2.992V.813h2.448q2.72 0 2.72 2.712m35.632.543c-3.264 0-5.712 2.712-5.712 5.966S47.872 16 51.136 16c2.7 0 4.842-1.856 5.501-4.339h-2.389c-.502 1.307-1.627 2.17-3.112 2.17-2.04 0-3.4-1.628-3.4-3.797s1.36-3.797 3.4-3.797c1.485 0 2.61.863 3.112 2.17h2.39c-.66-2.484-2.802-4.34-5.502-4.34zM20.4 13.56h2.176v2.169H20.4zM60.384 0h-2.176v15.729h2.176v-9.22h5.44v9.22H68V7.05q0-2.712-2.72-2.712h-4.896z"
        }
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M38.352 4.068c-3.264 0-5.712 2.712-5.712 5.966S35.088 16 38.352 16c2.396 0 4.352-1.461 5.223-3.525h-2.544c-.596.839-1.53 1.356-2.679 1.356-1.821 0-3.1-1.297-3.354-3.12h9.03a6 6 0 0 0 .036-.677c0-3.254-2.448-5.966-5.712-5.966m3.244 4.746c-.411-1.532-1.61-2.577-3.244-2.577s-2.833 1.045-3.244 2.577z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ЛогоIcon;
/* prettier-ignore-end */
