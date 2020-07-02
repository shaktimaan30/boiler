import { style } from "typestyle";

export const inputLarge = style({
  padding: "0px 22px",
  height: "48px",
  fontSize: "1.6em",
  fontWeight: 700,
  borderRadius: 5,
});

export const inputRegular = style({
  padding: "0px 21px",
  fontSize: "1.4em",
  height: "30px",
  fontWeight: 700,
  borderRadius: 3,
});

export const inputSmall = style({
  padding: "6px 10px",
  fontSize: "1.2em",
  fontWeight: 700,
  borderRadius: 3,
});

export const inputXSmall = style({
  padding: "6px 15px",
  fontSize: "1em",
  fontWeight: 700,
  borderRadius: 3,
});

export const inputPrimary = (hasError: boolean) =>
  style({
    color: "#000",
    border: `1px solid ${hasError ? "#E64747" : "#000"}`,
    maxWidth: "160px",
  });

export const input = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const inputBody = style({
  position: "relative",
});

export const errorMsg = style({
  color: "#E64747",
});
