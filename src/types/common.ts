/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
export declare namespace ICommon {
  type ITheme = "light" | "dark" | "oled";
  type ILanguage = "vi" | "en";

  type IOption = {
    id: number | string;
    label: string;
    value: string;
  };
}

declare module "react" {
  interface HTMLAttributes<T> {
    "data-theme"?: ICommon.ITheme;
  }
}
