export enum VariantText {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  Inherit = "inherit"
}

export const chooseElementH = (variant: string) => {
  switch (variant) {
    case VariantText.H1:
      return VariantText.H1;
    case VariantText.H2:
      return VariantText.H2;
    case VariantText.H3:
      return VariantText.H3;
    case VariantText.H4:
      return VariantText.H4;
    case VariantText.H5:
      return VariantText.H5;
    case VariantText.H6:
      return VariantText.H6;
    default:
      return VariantText.Inherit;
  }
};
