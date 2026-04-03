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
    image: "/p7_pic1.jpg",
    images: [
      "/p7_pic1.jpg",
      "/p7_pic2.jpg",
      "/p7_pic3.jpg",
      // "/portfolio-4.png",
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
      designation: "CEO"
    },
    stats: [
      { value: "25kW", label: "System Size" },
      // { value: "On-Grid", label: "System Type" },
      { value: "Net Plus Plus", label: "Scheme" },
    ],
  },
  {
    id: "p2",
    image: "/p4_pic1.jpg",
    images: [
      "/p4_pic1.jpg",
      "/p4_pic2.jpg",
      "/p4_pic3.jpg",
      // "/portfolio-1.png",
    ],
    title: "",
    location: "Katugasthota",
    category: "residential",
    description:
      "15kW on-grid solar system for a modern home, reducing electricity bills while generating extra income through the Net Plus Plus scheme.",
    longDescription:
      "This residence required a reliable and efficient solar solution to manage high household electricity usage. The 15kW on-grid system is designed to maximize daytime energy generation, significantly reducing dependence on the national grid. During periods of low consumption, excess electricity is exported back to the grid under the Net Plus Plus scheme, creating an additional source of income. The system ensures consistent performance, helping the homeowner lower long-term energy costs while embracing sustainable living.",
    testimonial: {
      name: "E S Egodawita",
      text: "Smart Solar delivered a perfect solution for our home. Our electricity bills have dropped significantly, and earning extra income from excess energy is a great benefit. The system works flawlessly.",
      rating: 5,
      designation: "CEO"
    },
    stats: [
      { value: "15KW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      // { value: "€1.8M", label: "Savings / 25yr" },
    ],
  },
  // {
  //   id: "p3",
  //   image: "/p6_pic1.jpg",
  //   images: [
  //     "/p6_pic1.jpg",
  //     "/portfolio-4.png",
  //     "/portfolio-1.png",
  //     "/portfolio-2.png",
  //   ],
  //   title: "Mediterranean Estate",
  //   location: "French Riviera",
  //   category: "residential",
  //   description:
  //     "Seamless integration of 30kW solar array on a heritage villa, preserving architectural aesthetics while maximizing output.",
  //   longDescription:
  //     "Strict heritage preservation guidelines in the French Riviera necessitated a remarkably discreet installation. By incorporating low-glare, flush-mounted arrays hidden from street elevation, the estate achieved a complete 100% energy offset while flawlessly retaining its historic structural integrity.",
  //   testimonial: {
  //     name: "Antoine M., Estate Owner",
  //     text: "The architectural board approved the design immediately because of how flush and beautifully integrated the panels were. It preserved the heritage of our home while modernizing our footprint.",
  //     rating: 5,
  //   },
  //   stats: [
  //     { value: "30kW", label: "System Size" },
  //     { value: "100%", label: "Energy Offset" },
  //     { value: "€180k", label: "Savings / 25yr" },
  //   ],
  // },
  {
    id: "p4",
    image: "/p9_pic1.jpg",
    images: ["/p9_pic1.jpg", "/p9_pic2.jpg", "/p9_pic3.jpg"],
    title: "",
    location: "Ukuwela",
    category: "residential",
    description:
      "25kW on-grid solar system for a residence, reducing electricity costs while benefiting from the Net Accounting scheme.",
    longDescription:
      "This residential property required a high-capacity solar solution to manage its daily energy consumption efficiently. The 25kW on-grid system is designed to maximize solar generation during daytime hours, significantly reducing reliance on the national grid. Under the Net Accounting scheme, excess energy generated is exported to the grid and credited, providing financial returns over time. The system ensures stable performance, helping the homeowner reduce long-term electricity expenses while adopting a more sustainable energy solution.",
    testimonial: {
      name: "J. L. R Mahindasiri",
      text: "Smart Solar installed a reliable system for our home that has significantly reduced our electricity bills. The Net Accounting scheme gives us great value by utilizing excess energy efficiently. Highly satisfied with the performance.",
      rating: 5,
      designation: "CEO"
    },
    stats: [
      { value: "25kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Accounting", label: "Scheme" },
    ],
  },
  {
    id: "p5",
    image: "/p11_pic1.jpg",
    images: [
      "/p11_pic2.jpg",
      "/p11_pic3.jpg",
      "/p11_pic1.jpg",
      "/p11_pic4.jpg",
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
      designation: "CEO"
    },
    stats: [
      { value: "20kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      // { value: "Slab Roof", label: "Installation Type" },
    ],
  },
  {
    id: "p6",
    image: "/p13_pic1.jpg",
    images: [
      "/p13_pic2.jpg",
      "/p13_pic3.jpg",
      "/p13_pic1.jpg",
      "/p13_pic4.jpg",
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
      designation: "Teacher"
    },
    stats: [
      { value: "15kW", label: "System Size" },
      // { value: "On-Grid", label: "System Type" },
      { value: "Net Accounting", label: "Scheme" },
    ],
  },
  // 9 New Additional Projects
  {
    id: "p7",
    image: "/p2_pic1.jpg",
    images: ["/p2_pic1.jpg", "/p2_pic2.jpg", "/p2_pic3.jpg"],
    title: "",
    location: "Mahawatte",
    category: "residential",
    description:
      "3kW on-grid solar system for a home, reducing electricity bills and supporting daily energy needs efficiently.",
    longDescription:
      "This residential property required a compact and cost-effective solar solution to manage everyday electricity usage. The 3kW on-grid system is designed to generate power during daytime hours, helping to reduce reliance on the national grid and lower monthly electricity bills. The system integrates seamlessly with the grid, ensuring stable and reliable performance while making efficient use of available rooftop space. It provides a practical step towards sustainable and affordable energy for the household.",
    testimonial: {
      name: "Sophia L.",
      text: "Smart Solar provided a simple and efficient solution for our home. We've seen a clear reduction in our electricity bills, and the system works smoothly every day.",
      rating: 5,
      designation: "CEO"
    },
    stats: [
      { value: "3kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      // { value: "Residential", label: "Project Type" },
    ],
  },
  {
    id: "p8",
    image: "/p8_pic1.jpg",
    images: ["/p8_pic1.jpg", "/p8_pic2.jpg", "/p8_pic3.jpg", "/p8_pic4.jpg"],
    title: "",
    location: "Samandhwa",
    category: "commercial",
    description:
      "40kW on-grid solar system installed on a custom roof structure, designed purely for energy generation and income through the Net Plus Plus scheme.",
    longDescription:
      "This project was developed as a dedicated solar investment with no on-site electricity consumption. The 40kW on-grid system is installed on a purpose-built roof structure to maximize solar exposure and energy generation. All electricity produced is exported directly to the grid under the Net Plus Plus scheme, generating a steady income stream for the owner. The elevated structure ensures optimal panel orientation and cooling, improving efficiency and long-term performance. This setup represents a smart, passive income solution through renewable energy.",
    testimonial: {
      name: "Arunashantha",
      text: "This was purely an investment for us, and Smart Solar delivered exactly what we needed. The system generates consistent income every month, and the installation quality is excellent.",
      rating: 5,
      designation: "CEO"
    },
    stats: [
      { value: "40kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Plus Plus", label: "Scheme" },
    ],
  },
  {
    id: "p9",
    image: "/p12_pic1.jpg",
    images: [
      "/p12_pic2.jpg",
      "/p12_pic1.jpg",
      "/p12_pic3.jpg",
      "/p12_pic4.jpg",
    ],
    title: "",
    location: "Meegammana",
    category: "residential",
    description:
      "25kW on-grid solar system for a residence, reducing electricity costs while generating additional value through solar energy.",
    longDescription:
      "This residential property required a high-capacity solar solution to efficiently manage its daily electricity consumption. The 25kW on-grid system is designed to maximize energy generation during daytime hours, significantly reducing reliance on the national grid. Excess energy produced is exported under the Net Plus Plus scheme, creating an additional income stream. The system delivers reliable and consistent performance, helping the homeowner achieve long-term cost savings while embracing sustainable energy.",
    testimonial: {
      name: "Mr Wikramsingha",
      text: "Smart Solar installed a powerful system for our home that has greatly reduced our electricity bills. We also benefit from exporting excess energy, making it a valuable long-term investment.",
      rating: 5,
      designation: "Painter"
    },
    stats: [
      { value: "25kW", label: "System Size" },
      { value: "On-Grid", label: "System Type" },
      { value: "Net Plus Plus", label: "Scheme" },
    ],
  },

  // {
  //   id: "p10",
  //   image: "/portfolio-4.png",
  //   images: [
  //     "/portfolio-4.png",
  //     "/portfolio-1.png",
  //     "/portfolio-2.png",
  //     "/portfolio-5.png",
  //   ],
  //   title: "Automotive Manufacturing Plant",
  //   location: "Stuttgart, Germany",
  //   category: "commercial",
  //   description:
  //     "Gigantic 5MW multi-roof array completely powering the vehicle assembly line during peak sunlight hours.",
  //   longDescription:
  //     "Heavy manufacturing demands astronomical electrical loads. Through the strategic placement of 12,000 distinct panels generating 5 Megawatts of peak force, this legendary vehicle assembly line decoupled its primary assembly robotics from fossil-fueled regional grids entirely.",
  //   testimonial: {
  //     name: "Klaus M., Plant Manager",
  //     text: "We build the cars of the future, and now we build them using the energy of the future. The 5MW installation handles the immense load of our welding robotics flawlessly.",
  //     rating: 5,
  //   },
  //   stats: [
  //     { value: "5MW", label: "System Size" },
  //     { value: "12,000", label: "Panels Installed" },
  //     { value: "€4.2M", label: "Savings / 25yr" },
  //   ],
  // },
  // {
  //   id: "p11",
  //   image: "/portfolio-5.png",
  //   images: [
  //     "/portfolio-5.png",
  //     "/portfolio-6.png",
  //     "/portfolio-3.png",
  //     "/portfolio-1.png",
  //   ],
  //   title: "Lakeside Cabin Retreat",
  //   location: "Ontario, Canada",
  //   category: "residential",
  //   description:
  //     "Fully off-grid 15kW installation serving a remote property. Engineered specifically for harsh winter performance and low-light charging.",
  //   longDescription:
  //     "Deep in the thick forests of Ontario, this ultra-premium remote property lacks any tether to standard civilization. We forged a heavy-duty 15kW installation customized for aggressive snow-shedding and optimized to devour and store low-angle winter sunlight.",
  //   testimonial: {
  //     name: "Jonathan S., Property Owner",
  //     text: "We are completely cut off from the grid, yet we run heated floors and an electric sauna in the dead of winter. The snow sheds right off the panels, and the battery reserves seem endless.",
  //     rating: 5,
  //   },
  //   stats: [
  //     { value: "15kW", label: "System Size" },
  //     { value: "100%", label: "Remote Off-Grid" },
  //     { value: "2 Weeks", label: "Battery Autonomy" },
  //   ],
  // },
  // {
  //   id: "p12",
  //   image: "/portfolio-6.png",
  //   images: [
  //     "/portfolio-6.png",
  //     "/portfolio-4.png",
  //     "/portfolio-1.png",
  //     "/portfolio-2.png",
  //   ],
  //   title: "Tech Campus Headquarters",
  //   location: "Seattle, Washington",
  //   category: "commercial",
  //   description:
  //     "Architecturally stunning 600kW BIPV (Building-Integrated Photovoltaics) facade replacing standard glass with energy-generating solar panels.",
  //   longDescription:
  //     "Traditional rack-mount panels weren't visually appealing enough for this futuristic tech campus. Instead, we deployed a spectacular 600kW BIPV facade, literally integrating the solar cells into the building's glass exterior structure—simultaneously providing shade while aggressively capturing solar power.",
  //   testimonial: {
  //     name: "Amanda K., Head of Corporate Real Estate",
  //     text: "The solar glass facade is incredible. It looks like a billionaire's architectural dream but functions as an eco-warrior's powerhouse. Visitors are stunned when we tell them the windows are generating electricity.",
  //     rating: 5,
  //   },
  //   stats: [
  //     { value: "600kW", label: "BIPV Output" },
  //     { value: "Net-Zero", label: "Energy Rating" },
  //     { value: "Unique", label: "Glass Integration" },
  //   ],
  // },
  // {
  //   id: "p13",
  //   image: "/portfolio-1.png",
  //   images: [
  //     "/portfolio-1.png",
  //     "/portfolio-2.png",
  //     "/portfolio-5.png",
  //     "/portfolio-6.png",
  //   ],
  //   title: "Mega Retail Mall",
  //   location: "Dubai, UAE",
  //   category: "commercial",
  //   description:
  //     "Massive 3MW shading structure over parking lots, keeping thousands of vehicles cool while generating immense clean energy for the mall.",
  //   longDescription:
  //     "In extreme desert environments, vehicle shading is as important as power generation. By installing sprawling geometric 3MW structures over miles of empty parking asphalt, customers find a shaded sanctuary while the colossal mall dynamically drastically reduces air-conditioning expenditure.",
  //   testimonial: {
  //     name: "Faisal A., Mall Operations Manager",
  //     text: "Our visitor retention jumped simply because people didn't want to leave their cars baking in the sun. The 3MW array cooled our parking lots down by 15 degrees and wiped out our lighting bill.",
  //     rating: 4,
  //   },
  //   stats: [
  //     { value: "3MW", label: "Shading Capacity" },
  //     { value: "1,500", label: "Cars Shaded" },
  //     { value: "$2M", label: "Savings / 25yr" },
  //   ],
  // },
  // {
  //   id: "p14",
  //   image: "/portfolio-2.png",
  //   images: [
  //     "/portfolio-2.png",
  //     "/portfolio-1.png",
  //     "/portfolio-3.png",
  //     "/portfolio-4.png",
  //   ],
  //   title: "Agricultural Pumping Station",
  //   location: "Central Valley, California",
  //   category: "commercial",
  //   description:
  //     "Robust 850kW solar array powering massive irrigation systems. Integrates dynamic tracking to follow the sun and maximize water flow.",
  //   longDescription:
  //     "Water is literal money in agricultural hubs. We erected a specialized 850kW array equipped with automated dual-axis sun-tracking mechanics. Early morning, midday, or dusk, the system physically pivots to follow the sun, ensuring continuous power output for multi-million gallon irrigation pumps.",
  //   testimonial: {
  //     name: "George H., Agricultural Director",
  //     text: "Pumping water used to be our single highest overhead. By implementing the sun-tracking array, we get peak pump power from 7 AM to 6 PM. It has fundamentally changed the economics of our farm.",
  //     rating: 5,
  //   },
  //   stats: [
  //     { value: "850kW", label: "System Size" },
  //     { value: "Tracker", label: "Dual-Axis Tech" },
  //     { value: "1M Gallons", label: "Pumped Daily" },
  //   ],
  // },
  // {
  //   id: "p15",
  //   image: "/portfolio-3.png",
  //   images: [
  //     "/portfolio-3.png",
  //     "/portfolio-6.png",
  //     "/portfolio-1.png",
  //     "/portfolio-5.png",
  //   ],
  //   title: "Modern Metro Townhouse",
  //   location: "London, UK",
  //   category: "residential",
  //   description:
  //     "Sleek, flush-mounted 8kW rooftop system strictly adhering to historical city preservation guidelines while eliminating electric bills.",
  //   longDescription:
  //     "Navigating intensely rigid city heritage parameters requires finesse. We negotiated and secured an 8kW system that mounts completely invisible from the walking thoroughfare below—modernizing a classic townhome to function entirely independently from the grid.",
  //   testimonial: {
  //     name: "Victoria E., Townhouse Residence",
  //     text: "I honestly did not think we would get approval. Smart Solar designed an 8kW system that the heritage committee loved. You can't see a single panel from the street, yet my utility bill is zero.",
  //     rating: 5,
  //   },
  //   stats: [
  //     { value: "8kW", label: "Flush System Size" },
  //     { value: "85%", label: "Energy Offset" },
  //     { value: "Passed", label: "Heritage Check" },
  //   ],
  // },
];
