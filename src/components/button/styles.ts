import { style } from "typestyle";

export const btnLarge = style({
  padding: "0px 22px",
  height: "48px",
  fontSize: "1.6em",
  fontWeight: 700,
  borderRadius: 5,
});

export const btnRegular = style({
  padding: "0px 21px",
  fontSize: "1.4em",
  height: "35px",
  fontWeight: 700,
  borderRadius: 3,
});

export const btnSmall = style({
  padding: "6px 10px",
  fontSize: "1.2em",
  fontWeight: 700,
  borderRadius: 3,
  height: "33px",
});

export const btnXSmall = style({
  padding: "6px 15px",
  fontSize: "1em",
  fontWeight: 700,
  borderRadius: 3,
  width: "30px",
});

export const btnPrimary = (disable: boolean) =>
  style({
    color: "#000",
    border: `1px solid #000`,
    opacity: disable ? 0.44 : 1,
    mixBlendMode: disable ? "luminosity" : "normal",
  });

export const btn = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});
