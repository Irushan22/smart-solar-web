export type Category = "all" | "residential" | "commercial";

export interface Project {
  id: string;
  image: string; // Featured image
  images: string[]; // Gallery images
  title: string;
  location: string;
  category: Category;
  description: string;
  longDescription?: string; // Additional details for the single page
  testimonial?: {
    name: string;
    text: string;
    designation: string;
    rating: number; // out of 5
  };
  stats: { value: string; label: string }[];
}

export const allProjects: Project[] = [
  // Existing 6 projects
  {
    id: "p1",
    image: "/solar-installation-panwila-25kw-1.jpg",
    images: [
      "/solar-installation-panwila-25kw-1.jpg",
      "/solar-installation-panwila-25kw-2.jpg",
      "/solar-installation-panwila-25kw-3.jpg",
    ],
    title: "",
    location: "Panwila",
    category: "commercial",
    description:
      "25kW on-grid solar system designed for a combined home and retail property, reducing electricity costs while generating extra income through the Net Plus Plus scheme.",
    longDescription:
      "This retail property required a smart and efficient solar solution to handle high daytime electricity demand while maintaining uninterrupted business operations. The 25kW on-grid system is strategically designed to maximize solar generation during peak business hours, significantly reducing electricity costs. With integration to the Net Plus Plus scheme, excess energy is exported back to the grid, improving overall return on investment. The system ensures reliable performance, helping the business operate more sustainably while lowering long-term operational expenses.",
    testimonial: {
      name: "Chaminda Kulasekara",
      text: "Smart Solar delivered a perfect solution for both my home and retail shop. Our electricity costs have reduced significantly, and we now generate extra income by exporting excess power to the grid. It’s a smart investment that supports both our daily living and business operations.",
      rating: 5,
      designation: "Owner, Sekara Furniture",
    },
    stats: [
      { value: "25kW", label: "System Size" },
      // { value: "On-Grid", label: "System Type" },
      { value: "Net Plus Plus", label: "Scheme" },
    ],
  },
  {
    id: "p2",
    image: "/solar-installation-katugasthota-15kw-1.jpg",
    images: [
      "/solar-installation-katugasthota-15kw-1.jpg",
      "/solar-installation-katugasthota-15kw-2.jpg",
      "/solar-installation-katugasthota-15kw-3.jpg",
    ],
    title: "",
    location: "Katugasthota",
    category: "residential",
    description:
      "15kW on-grid solar system for a modern home, reducing electricity bills while generating extra income through the Net Plus Plus scheme.",
    longDescription:
      "This residence required a reliable and efficient solar solution to manage high household electricity usage. The 15kW on-grid system is designed to maximize daytime energy generation, significantly reducing dependence on the national grid. During periods of low consumption, excess electricity is exported back to the grid under the Net Plus Plus scheme, creating an additional source of income. The system ensures consistent performance, helping the homeowner lower long-term energy costs while embracing sustainable living.",
    testimonial: {
      name: "Egodawita",
      text: "Smart Solar delivered a perfect solution for our home. Our electricity bills have dropped significantly, and earning extra income from excess energy is a great benefit. The system works flawlessly.",
      rating: 5,
      designation: "Electrical Superintendent, CEB",
    },
    stats: [
      { value: "15KW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      // { value: "Net Accounting", label: "Scheme" },
      // { value: "€1.8M", label: "Savings / 25yr" },
    ],
  },
  {
    id: "p4",
    image: "/solar-installation-ukuwela-25kw-1.jpg",
    images: [
      "/solar-installation-ukuwela-25kw-1.jpg",
      "/solar-installation-ukuwela-25kw-2.jpeg",
      // "/solar-installation-ukuwela-25kw-3.jpg",
    ],
    title: "",
    location: "Ukuwela",
    category: "residential",
    description:
      "25kW on-grid solar system for a residence, reducing electricity costs while benefiting from the Net Accounting scheme.",
    longDescription:
      "This residential property required a high-capacity solar solution to manage its daily energy consumption efficiently. The 25kW on-grid system is designed to maximize solar generation during daytime hours, significantly reducing reliance on the national grid. Under the Net Accounting scheme, excess energy generated is exported to the grid and credited, providing financial returns over time. The system ensures stable performance, helping the homeowner reduce long-term electricity expenses while adopting a more sustainable energy solution.",
    testimonial: {
      name: "J. L. R. Mahindasiri",
      text: "Smart Solar installed a reliable system for our home that has significantly reduced our electricity bills. The Net Accounting scheme gives us great value by utilizing excess energy efficiently. Highly satisfied with the performance.",
      rating: 5,
      designation: "Electrical Engineer, CEB",
    },
    stats: [
      { value: "25kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Plus Plus", label: "Scheme" },
    ],
  },
  {
    id: "p5",
    image: "/solar-installation-matale-20kw-1.jpg",
    images: [
      "/solar-installation-matale-20kw-2.jpg",
      "/solar-installation-matale-20kw-3.jpg",
      "/solar-installation-matale-20kw-1.jpg",
      "/solar-installation-matale-20kw-4.jpg",
    ],
    title: "",
    location: "Matale",
    category: "residential",
    description:
      "20kW on-grid solar system installed on a slab rooftop for a residence, reducing electricity bills and maximizing energy efficiency.",
    longDescription:
      "This residential property required an efficient solar solution to utilize its slab rooftop space effectively. The 20kW on-grid system was carefully designed to ensure optimal panel placement for maximum sunlight exposure while maintaining structural safety and aesthetics. The system significantly reduces household electricity costs by generating power during daytime usage. Excess energy is exported to the grid under the Net Plus Plus scheme, providing additional financial benefits. This installation ensures reliable performance while supporting sustainable and cost-effective living.",
    testimonial: {
      name: "Saman Bandara",
      text: "Smart Solar did a great job with our home installation. They made the best use of our rooftop space, and our electricity bills have reduced significantly. The system works perfectly every day.",
      rating: 5,
      designation: "Captain",
    },
    stats: [
      { value: "20kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      // { value: "Net Plus Plus", label: "Scheme" },
      // { value: "Slab Roof", label: "Installation Type" },
    ],
  },
  {
    id: "p6",
    image: "/solar-installation-hadeniya-15kw-1.jpg",
    images: [
      "/solar-installation-hadeniya-15kw-2.jpg",
      "/solar-installation-hadeniya-15kw-3.jpg",
      "/solar-installation-hadeniya-15kw-1.jpg",
      "/solar-installation-hadeniya-15kw-4.jpg",
    ],
    title: "",
    location: "Hadeniya",
    category: "residential",
    description:
      "15kW on-grid solar system for a residence, reducing electricity costs while benefiting from the Net Accounting scheme.",
    longDescription:
      "This residential property required an efficient and cost-effective solar solution to manage daily electricity usage. The 15kW on-grid system is designed to maximize energy generation during daytime hours, significantly reducing dependence on the national grid. Under the Net Accounting scheme, excess energy generated is exported to the grid and credited, providing long-term financial benefits. The system ensures reliable performance, helping the homeowner lower electricity expenses while embracing a more sustainable energy solution.",
    testimonial: {
      name: "Inoka Bandara",
      text: "Smart Solar installed a reliable system for our home that has greatly reduced our electricity bills. The Net Accounting scheme gives us excellent value by making use of excess energy. Very happy with the overall performance.",
      rating: 5,
      designation: "Revenue Officer, CEB",
    },
    stats: [
      { value: "15kW", label: "System Size" },
      // { value: "On-Grid", label: "System Type" },
      { value: "Net Plus Plus", label: "Scheme" },
    ],
  },
  // 9 New Additional Projects
  {
    id: "p7",
    image: "/solar-installation-mahawatte-3kw-1.jpg",
    images: [
      "/solar-installation-mahawatte-3kw-1.jpg",
      "/solar-installation-mahawatte-3kw-2.jpg",
      "/solar-installation-mahawatte-3kw-3.jpg",
    ],
    title: "",
    location: "Mahawatte",
    category: "residential",
    description:
      "3kW on-grid solar system for a home, reducing electricity bills and supporting daily energy needs efficiently.",
    longDescription:
      "This residential property required a compact and cost-effective solar solution to manage everyday electricity usage. The 3kW on-grid system is designed to generate power during daytime hours, helping to reduce reliance on the national grid and lower monthly electricity bills. The system integrates seamlessly with the grid, ensuring stable and reliable performance while making efficient use of available rooftop space. It provides a practical step towards sustainable and affordable energy for the household.",
    testimonial: {
      name: "H. L. R. Weerawardana",
      text: "Smart Solar provided a simple and efficient solution for our home. We've seen a clear reduction in our electricity bills, and the system works smoothly every day.",
      rating: 5,
      designation: "Chief Clerk",
    },
    stats: [
      { value: "3kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      // { value: "Net Accounting", label: "Scheme" },
      // { value: "Residential", label: "Project Type" },
    ],
  },
  {
    id: "p8",
    image: "/solar-installation-samandhwa-40kw-1.jpg",
    images: [
      "/solar-installation-samandhwa-40kw-1.jpg",
      "/solar-installation-samandhwa-40kw-2.jpg",
      "/solar-installation-samandhwa-40kw-3.jpg",
      "/solar-installation-samandhwa-40kw-4.jpg",
    ],
    title: "",
    location: "Samandhwa",
    category: "commercial",
    description:
      "40kW on-grid solar system installed on a custom roof structure, designed purely for energy generation and income through the Net Plus Plus scheme.",
    longDescription:
      "This project was developed as a dedicated solar investment with no on-site electricity consumption. The 40kW on-grid system is installed on a purpose-built roof structure to maximize solar exposure and energy generation. All electricity produced is exported directly to the grid under the Net Plus Plus scheme, generating a steady income stream for the owner. The elevated structure ensures optimal panel orientation and cooling, improving efficiency and long-term performance. This setup represents a smart, passive income solution through renewable energy.",
    testimonial: {
      name: "U. P. Arunashantha",
      text: "This was purely an investment for us, and Smart Solar delivered exactly what we needed. The system generates consistent income every month, and the installation quality is excellent.",
      rating: 5,
      designation: "Accountant",
    },
    stats: [
      { value: "40kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Plus Plus", label: "Scheme" },
    ],
  },
  {
    id: "p9",
    image: "/solar-installation-meegammana-25kw-1.jpg",
    images: [
      "/solar-installation-meegammana-25kw-2.jpg",
      "/solar-installation-meegammana-25kw-1.jpg",
      "/solar-installation-meegammana-25kw-3.jpg",
      "/solar-installation-meegammana-25kw-4.jpg",
    ],
    title: "",
    location: "Meegammana",
    category: "residential",
    description:
      "25kW on-grid solar system for a residence, reducing electricity costs while generating additional value through solar energy.",
    longDescription:
      "This residential property required a high-capacity solar solution to efficiently manage its daily electricity consumption. The 25kW on-grid system is designed to maximize energy generation during daytime hours, significantly reducing reliance on the national grid. Excess energy produced is exported under the Net Plus Plus scheme, creating an additional income stream. The system delivers reliable and consistent performance, helping the homeowner achieve long-term cost savings while embracing sustainable energy.",
    testimonial: {
      name: "G. G. P. A. Wikramsingha",
      text: "Smart Solar installed a powerful system for our home that has greatly reduced our electricity bills. We also benefit from exporting excess energy, making it a valuable long-term investment.",
      rating: 5,
      designation: "Police Officer",
    },
    stats: [
      { value: "25kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Plus Plus", label: "Scheme" },
    ],
  },
  {
    id: "p10",
    image: "/solar-installation-pilimathalawa-5kw-1.jpeg",
    images: [
      "/solar-installation-pilimathalawa-5kw-1.jpeg",
      "/solar-installation-pilimathalawa-5kw-2.jpeg",
      "/solar-installation-pilimathalawa-5kw-3.jpeg",
      // "/proj1_1.jpeg",
    ],
    title: "",
    location: "Pilimathalawa",
    category: "residential",
    description:
      "5kW on-grid solar system for a residence, reducing electricity costs while generating additional value through solar energy.",
    longDescription:
      "This residential property required an efficient solar solution to manage daily electricity usage. The 5kW on-grid system is optimized for maximum daytime energy generation, significantly reducing dependence on the national grid. Surplus energy is exported under the Net Plus Plus scheme, providing an additional income stream. The system ensures stable performance and long-term savings while supporting a greener lifestyle.",
    testimonial: {
      name: "H. M. L. K. Herath",
      text: "After installing the solar system, our electricity bill has dropped significantly. The system runs smoothly, and exporting extra energy is an added benefit. Very satisfied with the service provided.",
      rating: 5,
      designation: "Coordinator Officer, CEB",
    },
    stats: [
      { value: "5kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Plus Plus", label: "Scheme" },
    ],
  },
  {
    id: "p11",
    image: "/solar-installation-naththaranpotha-20kw-1.jpeg",
    images: [
      "/solar-installation-naththaranpotha-20kw-1.jpeg",
      "/solar-installation-naththaranpotha-20kw-2.jpeg",
      "/solar-installation-naththaranpotha-20kw-3.jpeg",
      "/solar-installation-naththaranpotha-20kw-4.jpeg",
    ],
    title: "",
    location: "Naththaranpotha",
    category: "commercial",
    description:
      "20kW on-grid solar system for a commercial facility, reducing operational electricity costs and improving energy efficiency.",
    longDescription:
      "This commercial installation required a high-capacity solar solution to handle significant daily energy consumption. The 20kW on-grid system is designed to optimize power generation during peak hours, reducing electricity expenses for the business. Excess energy is managed under the Net Accounting scheme, ensuring efficient utilization. The system delivers reliable performance, making it a cost-effective and sustainable investment.",
    testimonial: {
      name: "A. G. Pradeep Prasanga",
      text: "This solar system has helped us reduce a large portion of our electricity expenses. It’s a great investment for our business, and the installation process was smooth and professional.",
      rating: 5,
      designation: "Distributor, Bairaha Chicken",
    },
    stats: [
      { value: "20kW", label: "System Size" },
      // { value: "On-Grid", label: "System Type" },
      { value: "Net Accounting", label: "Scheme" },
    ],
  },
  {
    id: "p12",
    image: "/solar-installation-katugasthota-5kw-1.png",
    images: [
      "/solar-installation-katugasthota-5kw-1.png",
      "/solar-installation-katugasthota-5kw-2.png",
      "/solar-installation-katugasthota-5kw-3.jpeg",
      "/solar-installation-katugasthota-5kw-4.jpeg",
    ],
    title: "",
    location: "Katugasthota",
    category: "residential",
    description:
      "5kW on-grid solar system for a residence, reducing electricity costs while generating additional value through solar energy.",
    longDescription:
      "This home required a reliable solar solution to reduce rising electricity costs. The 5kW on-grid system efficiently generates power during the day, minimizing reliance on the grid. It provides consistent energy output and long-term savings, making it a practical and eco-friendly choice for the household.",

    testimonial: {
      name: "J. A. Ariyawansa",
      text: "The installation was done very professionally, and we are already seeing a noticeable reduction in our electricity bills. The system works perfectly and gives us peace of mind.",
      rating: 5,
      designation: "General Nurse, Kandy General Hospital",
    },
    stats: [
      { value: "5kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      // { value: "Net Accounting", label: "Scheme" },
    ],
  },
  {
    id: "p13",
    image: "/solar-installation-jambugahapitiya-5kw-1.png",
    images: [
      "/solar-installation-jambugahapitiya-5kw-1.png",
      "/solar-installation-jambugahapitiya-5kw-2.png",
      "/solar-installation-jambugahapitiya-5kw-3.jpeg",
    ],
    title: "",
    location: "Jambugahpitiya",
    category: "residential",
    description:
      "5kW on-grid solar system for a residence, reducing electricity costs while generating additional value through solar energy.",
    longDescription:
      "This project focused on delivering a cost-effective solar solution for a residential property. The 5kW on-grid system ensures efficient energy production during daylight hours, reducing electricity costs and improving energy independence. It offers stable performance and supports sustainable living.",

    testimonial: {
      name: "H. M. R. I. B. Madagoda",
      text: "We are very happy with the solar system installation. It has reduced our electricity costs, and the entire process was handled efficiently by the team.",
      rating: 5,
      designation: "Farm Manager, Agriculture Department",
    },
    stats: [
      { value: "5kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Accounting", label: "Scheme" },
    ],
  },
  {
    id: "p14",
    image: "/solar-installation-gunnapana-5kw-3.png",
    images: [
      "/solar-installation-gunnapana-5kw-3.png",
      "/solar-installation-gunnapana-5kw-2.jpeg",
      "/solar-installation-gunnapana-5kw-1.jpeg",
    ],
    title: "",
    location: "Gunnapana",
    category: "residential",
    description:
      "A 5kW on-grid solar system installed for a residence, helping significantly reduce electricity bills while maximizing solar energy usage.",
    longDescription:
      "This project was designed to provide an efficient and cost-effective solar solution for a residential property in Jambugahapitiya. The 5kW on-grid system generates clean energy during the day, allowing the homeowner to reduce reliance on the national grid and lower monthly electricity expenses. With stable performance and seamless integration, the system supports a more sustainable and energy-efficient lifestyle.",
    testimonial: {
      name: "B. M. V. Pushpakumari",
      text: "We are very satisfied with the solar installation. Our electricity bills have reduced noticeably, and the entire process was smooth and professionally handled by the team.",
      rating: 5,
      designation: "Bank Manager",
    },

    stats: [
      { value: "5kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Accounting", label: "Scheme" },
    ],
  }
];
