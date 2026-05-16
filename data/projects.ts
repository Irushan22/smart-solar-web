export type Category = "all" | "residential" | "commercial";

export interface Project {
  id: string;
  image: string;
  images: string[];
  title: string;
  location: string;
  category: Category;
  description: string;
  longDescription?: string;
  testimonial?: {
    name: string;
    text: string;
    designation: string;
    rating: number;
  };
  stats: { value: string; label: string }[];
}

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const allProjects: Project[] = [
  {
    id: "p1",
    image: img("photo-1509391366360-2e959784a276"),
    images: [
      img("photo-1509391366360-2e959784a276"),
      img("photo-1466611653911-95081537e5b7"),
      img("photo-1497440001374-f26997328c1b"),
    ],
    title: "25kW Commercial Rooftop System",
    location: "Oakridge",
    category: "commercial",
    description:
      "25kW on-grid solar system designed for a combined home and retail property, reducing electricity costs while generating extra income through net export schemes.",
    longDescription:
      "This retail property required a smart and efficient solar solution to handle high daytime electricity demand while maintaining uninterrupted business operations. The 25kW on-grid system is strategically designed to maximize solar generation during peak business hours, significantly reducing electricity costs. Excess energy is exported back to the grid, improving overall return on investment. The system ensures reliable performance, helping the business operate more sustainably while lowering long-term operational expenses.",
    testimonial: {
      name: "Alex Morgan",
      text: "The team delivered a perfect solution for both our home and retail shop. Our electricity costs have reduced significantly, and we now generate extra income by exporting excess power to the grid. A smart investment.",
      rating: 5,
      designation: "Owner, Sample Retail Co.",
    },
    stats: [
      { value: "25kW", label: "System Size" },
      { value: "Net Export", label: "Scheme" },
    ],
  },
  {
    id: "p2",
    image: img("photo-1466611653911-95081537e5b7"),
    images: [
      img("photo-1466611653911-95081537e5b7"),
      img("photo-1508514177221-188b1cf16e9d"),
    ],
    title: "15kW Residential System",
    location: "Lakeside",
    category: "residential",
    description:
      "15kW on-grid solar system for a modern home, reducing electricity bills while generating extra income through net accounting.",
    longDescription:
      "This residence required a reliable and efficient solar solution to manage high household electricity usage. The 15kW on-grid system is designed to maximize daytime energy generation, significantly reducing dependence on the grid. During periods of low consumption, excess electricity is exported back to the grid under net accounting, creating an additional source of income.",
    testimonial: {
      name: "Jamie Carter",
      text: "Smart, clean install. Our electricity bills have dropped significantly, and earning extra income from excess energy is a great benefit. The system works flawlessly.",
      rating: 5,
      designation: "Homeowner",
    },
    stats: [
      { value: "15kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
    ],
  },
  {
    id: "p4",
    image: img("photo-1497440001374-f26997328c1b"),
    images: [
      img("photo-1497440001374-f26997328c1b"),
      img("photo-1545209463-e2825498edbf"),
      img("photo-1497436072909-60f360e1d4b1"),
    ],
    title: "25kW Premium Home System",
    location: "Greenfield",
    category: "residential",
    description:
      "25kW on-grid solar system for a residence, reducing electricity costs while benefiting from net export pricing.",
    longDescription:
      "This residential property required a high-capacity solar solution to manage its daily energy consumption efficiently. The 25kW on-grid system is designed to maximize solar generation during daytime hours, significantly reducing reliance on the grid. Excess energy generated is exported and credited, providing financial returns over time.",
    testimonial: {
      name: "Riley Bennett",
      text: "Reliable system installation that has significantly reduced our electricity bills. The export scheme gives us great value by utilizing excess energy efficiently. Highly satisfied.",
      rating: 5,
      designation: "Engineering Manager",
    },
    stats: [
      { value: "25kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Export", label: "Scheme" },
    ],
  },
  {
    id: "p5",
    image: img("photo-1545209463-e2825498edbf"),
    images: [
      img("photo-1545209463-e2825498edbf"),
      img("photo-1497440001374-f26997328c1b"),
      img("photo-1509391366360-2e959784a276"),
      img("photo-1466611653911-95081537e5b7"),
    ],
    title: "20kW Slab Rooftop Installation",
    location: "Maple Heights",
    category: "residential",
    description:
      "20kW on-grid solar system installed on a slab rooftop for a residence, reducing electricity bills and maximizing energy efficiency.",
    longDescription:
      "This residential property required an efficient solar solution to utilize its slab rooftop space effectively. The 20kW on-grid system was carefully designed to ensure optimal panel placement for maximum sunlight exposure while maintaining structural safety and aesthetics. The system significantly reduces household electricity costs by generating power during daytime usage.",
    testimonial: {
      name: "Sam Patel",
      text: "Great job with our home installation. They made the best use of our rooftop space, and our electricity bills have reduced significantly. The system works perfectly every day.",
      rating: 5,
      designation: "Project Lead",
    },
    stats: [
      { value: "20kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
    ],
  },
  {
    id: "p6",
    image: img("photo-1508514177221-188b1cf16e9d"),
    images: [
      img("photo-1508514177221-188b1cf16e9d"),
      img("photo-1497436072909-60f360e1d4b1"),
      img("photo-1466611653911-95081537e5b7"),
    ],
    title: "15kW Eco-Home System",
    location: "Brookside",
    category: "residential",
    description:
      "15kW on-grid solar system for a residence, reducing electricity costs while benefiting from the net export scheme.",
    longDescription:
      "This residential property required an efficient and cost-effective solar solution to manage daily electricity usage. The 15kW on-grid system is designed to maximize energy generation during daytime hours, significantly reducing dependence on the grid.",
    testimonial: {
      name: "Jordan Reeves",
      text: "Reliable system installation that has greatly reduced our electricity bills. The export scheme gives us excellent value by making use of excess energy.",
      rating: 5,
      designation: "Operations Officer",
    },
    stats: [
      { value: "15kW", label: "System Size" },
      { value: "Net Export", label: "Scheme" },
    ],
  },
  {
    id: "p7",
    image: img("photo-1497436072909-60f360e1d4b1"),
    images: [
      img("photo-1497436072909-60f360e1d4b1"),
      img("photo-1509391366360-2e959784a276"),
      img("photo-1497440001374-f26997328c1b"),
    ],
    title: "3kW Starter Home System",
    location: "Riverbend",
    category: "residential",
    description:
      "3kW on-grid solar system for a home, reducing electricity bills and supporting daily energy needs efficiently.",
    longDescription:
      "This residential property required a compact and cost-effective solar solution to manage everyday electricity usage. The 3kW on-grid system is designed to generate power during daytime hours, helping to reduce reliance on the grid and lower monthly electricity bills.",
    testimonial: {
      name: "Casey Lin",
      text: "Simple and efficient solution for our home. We've seen a clear reduction in our electricity bills, and the system works smoothly every day.",
      rating: 5,
      designation: "Homeowner",
    },
    stats: [
      { value: "3kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
    ],
  },
  {
    id: "p8",
    image: img("photo-1532601224476-15c79f2f7a51"),
    images: [
      img("photo-1532601224476-15c79f2f7a51"),
      img("photo-1466611653911-95081537e5b7"),
      img("photo-1509391366360-2e959784a276"),
      img("photo-1545209463-e2825498edbf"),
    ],
    title: "40kW Investment-Grade Array",
    location: "Harborview",
    category: "commercial",
    description:
      "40kW on-grid solar system installed on a custom roof structure, designed purely for energy generation and income through net export.",
    longDescription:
      "This project was developed as a dedicated solar investment with no on-site electricity consumption. The 40kW on-grid system is installed on a purpose-built roof structure to maximize solar exposure and energy generation. All electricity produced is exported directly to the grid, generating a steady income stream for the owner.",
    testimonial: {
      name: "Taylor Kim",
      text: "Purely an investment for us, and the team delivered exactly what we needed. The system generates consistent income every month, and the installation quality is excellent.",
      rating: 5,
      designation: "Finance Director",
    },
    stats: [
      { value: "40kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Export", label: "Scheme" },
    ],
  },
  {
    id: "p9",
    image: img("photo-1576773689115-5cd2b0223523"),
    images: [
      img("photo-1576773689115-5cd2b0223523"),
      img("photo-1497436072909-60f360e1d4b1"),
      img("photo-1497440001374-f26997328c1b"),
      img("photo-1466611653911-95081537e5b7"),
    ],
    title: "25kW Family Estate",
    location: "Hillcrest",
    category: "residential",
    description:
      "25kW on-grid solar system for a residence, reducing electricity costs while generating additional value through solar energy.",
    longDescription:
      "This residential property required a high-capacity solar solution to efficiently manage its daily electricity consumption. The 25kW on-grid system is designed to maximize energy generation during daytime hours, significantly reducing reliance on the grid.",
    testimonial: {
      name: "Morgan Hayes",
      text: "Powerful system installation that has greatly reduced our electricity bills. We also benefit from exporting excess energy, making it a valuable long-term investment.",
      rating: 5,
      designation: "Homeowner",
    },
    stats: [
      { value: "25kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Export", label: "Scheme" },
    ],
  },
  {
    id: "p10",
    image: img("photo-1581090464777-f3220bbe1b8b"),
    images: [
      img("photo-1581090464777-f3220bbe1b8b"),
      img("photo-1509391366360-2e959784a276"),
      img("photo-1508514177221-188b1cf16e9d"),
    ],
    title: "5kW Suburban Home System",
    location: "Pinewood",
    category: "residential",
    description:
      "5kW on-grid solar system for a residence, reducing electricity costs while generating additional value through solar energy.",
    longDescription:
      "This residential property required an efficient solar solution to manage daily electricity usage. The 5kW on-grid system is optimized for maximum daytime energy generation, significantly reducing dependence on the grid.",
    testimonial: {
      name: "Avery Brooks",
      text: "After installing the solar system, our electricity bill has dropped significantly. The system runs smoothly, and exporting extra energy is an added benefit.",
      rating: 5,
      designation: "Operations Coordinator",
    },
    stats: [
      { value: "5kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Export", label: "Scheme" },
    ],
  },
  {
    id: "p11",
    image: img("photo-1473341304170-971dccb5ac1e"),
    images: [
      img("photo-1473341304170-971dccb5ac1e"),
      img("photo-1532601224476-15c79f2f7a51"),
      img("photo-1545209463-e2825498edbf"),
      img("photo-1466611653911-95081537e5b7"),
    ],
    title: "20kW Commercial Facility",
    location: "Westgate",
    category: "commercial",
    description:
      "20kW on-grid solar system for a commercial facility, reducing operational electricity costs and improving energy efficiency.",
    longDescription:
      "This commercial installation required a high-capacity solar solution to handle significant daily energy consumption. The 20kW on-grid system is designed to optimize power generation during peak hours, reducing electricity expenses for the business.",
    testimonial: {
      name: "Robin Sage",
      text: "This solar system has helped us reduce a large portion of our electricity expenses. A great investment for our business, and the installation process was smooth and professional.",
      rating: 5,
      designation: "Operations Manager",
    },
    stats: [
      { value: "20kW", label: "System Size" },
      { value: "Net Accounting", label: "Scheme" },
    ],
  },
  {
    id: "p12",
    image: img("photo-1573164574572-cb89e39749b4"),
    images: [
      img("photo-1573164574572-cb89e39749b4"),
      img("photo-1509391366360-2e959784a276"),
      img("photo-1497440001374-f26997328c1b"),
      img("photo-1497436072909-60f360e1d4b1"),
    ],
    title: "5kW Urban Home System",
    location: "Cedarpark",
    category: "residential",
    description:
      "5kW on-grid solar system for a residence, reducing electricity costs while generating additional value through solar energy.",
    longDescription:
      "This home required a reliable solar solution to reduce rising electricity costs. The 5kW on-grid system efficiently generates power during the day, minimizing reliance on the grid.",
    testimonial: {
      name: "Drew Nakamura",
      text: "Installation was very professional, and we are already seeing a noticeable reduction in our electricity bills. The system works perfectly and gives us peace of mind.",
      rating: 5,
      designation: "Healthcare Professional",
    },
    stats: [
      { value: "5kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
    ],
  },
  {
    id: "p13",
    image: img("photo-1542621334-a254cf47733d"),
    images: [
      img("photo-1542621334-a254cf47733d"),
      img("photo-1497436072909-60f360e1d4b1"),
      img("photo-1473341304170-971dccb5ac1e"),
      img("photo-1466611653911-95081537e5b7"),
    ],
    title: "5kW Family Home System",
    location: "Foxglove",
    category: "residential",
    description:
      "5kW on-grid solar system for a residence, reducing electricity costs while generating additional value through solar energy.",
    longDescription:
      "This project focused on delivering a cost-effective solar solution for a residential property. The 5kW on-grid system ensures efficient energy production during daylight hours, reducing electricity costs and improving energy independence.",
    testimonial: {
      name: "Quinn Adler",
      text: "Very happy with the solar system installation. It has reduced our electricity costs, and the entire process was handled efficiently by the team.",
      rating: 5,
      designation: "Project Coordinator",
    },
    stats: [
      { value: "5kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Accounting", label: "Scheme" },
    ],
  },
  {
    id: "p14",
    image: img("photo-1532601224476-15c79f2f7a51", 1200),
    images: [
      img("photo-1532601224476-15c79f2f7a51"),
      img("photo-1508514177221-188b1cf16e9d"),
      img("photo-1509391366360-2e959784a276"),
    ],
    title: "5kW Cottage System",
    location: "Stonemill",
    category: "residential",
    description:
      "A 5kW on-grid solar system installed for a residence, helping significantly reduce electricity bills while maximizing solar energy usage.",
    longDescription:
      "This project was designed to provide an efficient and cost-effective solar solution for a residential property. The 5kW on-grid system generates clean energy during the day, allowing the homeowner to reduce reliance on the grid and lower monthly electricity expenses.",
    testimonial: {
      name: "Parker Whitfield",
      text: "Very satisfied with the solar installation. Our electricity bills have reduced noticeably, and the entire process was smooth and professionally handled.",
      rating: 5,
      designation: "Small Business Owner",
    },
    stats: [
      { value: "5kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Accounting", label: "Scheme" },
    ],
  },
];
