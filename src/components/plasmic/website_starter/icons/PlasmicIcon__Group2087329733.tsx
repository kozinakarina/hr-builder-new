/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2087329733IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2087329733Icon(props: Group2087329733IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M3.578 4.264c0-.24 0-.36-.047-.452a.43.43 0 0 0-.187-.188c-.092-.047-.212-.047-.453-.047H.687c-.24 0-.36 0-.453.047a.43.43 0 0 0-.187.188C0 3.904 0 4.024 0 4.264V6.47c0 .24 0 .36.047.452a.43.43 0 0 0 .187.188c.092.046.212.046.453.046h2.891v-2.89zm3.578 3.579c0-.24 0-.36-.047-.452a.43.43 0 0 0-.187-.188c-.092-.047-.212-.047-.453-.047H3.578v2.891c0 .241 0 .361.047.453a.43.43 0 0 0 .187.188c.092.046.212.046.453.046h2.891zm3.578 2.891H7.156v2.891c0 .24 0 .36.047.453a.43.43 0 0 0 .188.187c.091.047.212.047.452.047h2.204c.24 0 .361 0 .453-.047a.43.43 0 0 0 .188-.188c.046-.091.046-.211.046-.452zm3.578-3.578h-3.578v3.578h2.891c.24 0 .361 0 .453-.046a.43.43 0 0 0 .188-.188c.046-.092.046-.212.046-.453v-2.89zm-3.578-3.579H7.843c-.24 0-.36 0-.452.047a.43.43 0 0 0-.188.188c-.047.092-.047.212-.047.452V6.47c0 .24 0 .36.047.452a.43.43 0 0 0 .188.188c.091.046.212.046.452.046h2.891zm3.578 0h-3.578v3.578h3.578z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M14.312.687c0-.24 0-.36-.046-.453a.43.43 0 0 0-.188-.187C13.986 0 13.866 0 13.625 0h-2.204c-.24 0-.36 0-.452.047a.43.43 0 0 0-.188.187c-.047.092-.047.212-.047.453v2.891h3.578zm3.578 3.577c0-.24 0-.36-.046-.452a.43.43 0 0 0-.188-.188c-.092-.047-.212-.047-.452-.047h-2.892v3.578h2.892c.24 0 .36 0 .452-.046a.43.43 0 0 0 .188-.188c.046-.092.046-.212.046-.452z"
        }
      ></path>
    </svg>
  );
}

export default Group2087329733Icon;
/* prettier-ignore-end */
