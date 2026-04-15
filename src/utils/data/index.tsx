type Project = {
  id: number;
  title: string;
  description: string;
  date: number;
  address?: string;
  addressLabel?: string;
  repository?: string;
  note?: string;
};

const DummyData = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Dippi Portal",
      description:
        "Contributed to the internal dashboard behind Dippi, where wineries and other product-based companies manage product data, create digital labels, and maintain digital product passports aligned with modern market and compliance needs.",
      date: 2024,
      address: "https://dippi.app/",
      addressLabel: "Public informational website",
      note: "Internal portal code is private due to company policy.",
    },
    {
      id: 2,
      title: "Wineland Vendor Portal",
      description:
        "Worked on an admin platform for wine vendors to upload and manage catalog data that later powers the Wineland storefront, helping streamline product publishing and day-to-day marketplace operations.",
      date: 2025,
      address: "https://wineland.ge/",
      addressLabel: "Storefront website",
      note: "Internal dashboard code is private due to company policy.",
    },
    {
      id: 3,
      title: "Medusa POS Desktop App",
      description:
        "Currently contributing to a cross-platform POS desktop application built with React and Tauri, focused on real-world retail workflows such as checkout, order handling, receipts, and operational reliability.",
      date: 2026,
      repository: "https://github.com/narisolutions/medusa-pos/tree/develop",
    },
  ];

  return projects;
};

export default DummyData;
