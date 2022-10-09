/* eslint-disable prettier/prettier */
import { ComponentProps } from "react";

import { styled } from "./styles";
// export type ButtonProps = ComponentProps<typeof Button> {
//   size: "small" | "big";
// };

export const Button = styled("button", {
  fontFamily: "$default",
  background: "$ignite300",
  borderRadius: "$md",
  fontWeight: "bold",
  color: "$white",
  border: 0,

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4",
      },

      big: {
        fontSize: 16,
        padding: "$3 $6",
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});

export type ButtonProps = ComponentProps<typeof Button>;
