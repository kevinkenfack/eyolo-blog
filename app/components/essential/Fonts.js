import { Lexend_Deca, Prata } from "next/font/google";

export const fontPrata = Prata({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
});

export const fontLexendDeca = Lexend_Deca({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-secondary",
});
