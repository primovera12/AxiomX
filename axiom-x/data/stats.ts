export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

// Primary stats bar (displayed prominently)
export const stats: Stat[] = [
  {
    id: "years",
    value: 20,
    suffix: "+",
    label: "Years Operational Excellence",
  },
  {
    id: "orders",
    value: 2000000,
    suffix: "+",
    label: "Orders / Year Delivered",
  },
  {
    id: "sla",
    value: 98,
    suffix: "%",
    label: "SLA Achievement",
  },
  {
    id: "support",
    value: 160000,
    suffix: "+",
    label: "Technical Cases Resolutions / Yearly",
  },
];

// Secondary stats (can be displayed elsewhere)
export const additionalStats: Stat[] = [
  {
    id: "accuracy",
    value: 99,
    suffix: "%",
    label: "Inventory Accuracy",
  },
  {
    id: "iso",
    value: 5,
    suffix: "",
    label: "ISO Certifications Compliance",
  },
  {
    id: "hubs",
    value: 7,
    suffix: "",
    label: "Regional Network Hubs",
  },
  {
    id: "response",
    value: 30,
    suffix: " Sec",
    label: "Response Customer Support",
  },
];
