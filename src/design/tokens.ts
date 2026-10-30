/** André Ávila · Design tokens v1
 * Primary colors documented in supplied brand artwork.
 * Supporting colors and typography are provisional pending brand approval.
 */
export const colors = {
  brand: { green: "#7DC24D", blue: "#316C91" },
  supporting: { navy: "#102E52", ink: "#25252D", mist: "#F5F7F8", line: "#DBE3E8", white: "#FFFFFF" },
} as const;
export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, "2xl": 48, "3xl": 64, "4xl": 96 } as const;
export const radii = { sm: 5, md: 8, lg: 12, pill: 999 } as const;
export const breakpoints = { mobile: 560, tablet: 800, desktop: 1200 } as const;
export const journeys = {
  americana: { slug: "/americana/proteses-dentarias", focus: "Próteses e reabilitação oral" },
  caconde: { slug: "/caconde/odontologia-geral", focus: "Odontologia geral" },
} as const;
