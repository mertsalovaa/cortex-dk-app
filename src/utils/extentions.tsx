import { useTranslation } from "react-i18next";

export function useLinkWithTranslation() {
  const { i18n } = useTranslation();
  return (c: any) => `/${i18n.language}/${leftTrim(c, "/")}`;
}

export function leftTrim(str: string, chars: any) {
  var start = 0,
    end = str.length;
  while (start < end && chars.indexOf(str[start]) >= 0) ++start;
  return start > 0 ? str.substring(start, end) : str;
}
