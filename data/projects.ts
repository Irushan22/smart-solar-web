export type Category = 'all' | 'residential' | 'commercial';

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
    rating: number; // out of 5
  };
  stats: { value: string; label: string }[];
}

export const allProjects: Project[] = [
  // Existing 6 projects
  {
    id: 'p1',
    image: '/portfolio-1.png',
    images: ['/portfolio-1.png', '/portfolio-2.png', '/portfolio-3.png', '/portfolio-4.png'],
    title: 'Luxury Villa Installation',
    location: 'Malibu, California',
    category: 'residential',
    description: 'Complete 45kW solar system with integrated battery storage for this premium hillside residence. Achieved 95% energy independence.',
    longDescription: 'This stunning property required a custom-designed setup that seamlessly integrated into its natural surroundings without compromising the luxury aesthetic. The 45kW solar framework empowers virtually total off-grid independence while robust battery infrastructure guarantees reliable uptime through California rolling blackouts.',
    testimonial: {
      name: 'James L., Malibu Ridge',
      text: 'Smart Solar achieved the impossible. They hid 45kW of power completely out of sight from our primary viewpoints. Our energy bills vanished overnight, and the battery backup hasn\'t flinched during a single grid failure.',
      rating: 5,
    },
    stats: [
      { value: '45kW', label: 'System Size' },
      { value: '95%', label: 'Energy Offset' },
      { value: '$280k', label: 'Savings / 25yr' },
    ],
  },
  {
    id: 'p2',
    image: '/portfolio-2.png',
    images: ['/portfolio-2.png', '/portfolio-5.png', '/portfolio-6.png', '/portfolio-1.png'],
    title: 'Distribution Center',
    location: 'New Jersey, USA',
    category: 'commercial',
    description: 'Massive 2.4MW rooftop installation on a 180,000 sq ft distribution warehouse. Powering daily operations with clean energy.',
    longDescription: 'Logistics fulfillment demands peak energy 24/7. By engineering a gigantic 2.4MW solar umbrella resting over their primary distribution warehouse, we enabled the client to entirely offset daytime operations, minimizing enormous operational grid expenses and achieving carbon-neutral distribution tracking.',
    testimonial: {
      name: 'Sarah Jenkins, Facilities Director',
      text: 'Deploying a 2.4 Megawatt system without disrupting a 24-hour logistics operation is no small feat. The engineering team executed the installation perfectly. We hit our ROI targets a year early.',
      rating: 5,
    },
    stats: [
      { value: '2.4MW', label: 'System Size' },
      { value: '3,200', label: 'Panels' },
      { value: '€1.8M', label: 'Savings / 25yr' },
    ],
  },
  {
    id: 'p3',
    image: '/portfolio-3.png',
    images: ['/portfolio-3.png', '/portfolio-4.png', '/portfolio-1.png', '/portfolio-2.png'],
    title: 'Mediterranean Estate',
    location: 'French Riviera',
    category: 'residential',
    description: 'Seamless integration of 30kW solar array on a heritage villa, preserving architectural aesthetics while maximizing output.',
    longDescription: 'Strict heritage preservation guidelines in the French Riviera necessitated a remarkably discreet installation. By incorporating low-glare, flush-mounted arrays hidden from street elevation, the estate achieved a complete 100% energy offset while flawlessly retaining its historic structural integrity.',
    testimonial: {
      name: 'Antoine M., Estate Owner',
      text: 'The architectural board approved the design immediately because of how flush and beautifully integrated the panels were. It preserved the heritage of our home while modernizing our footprint.',
      rating: 5,
    },
    stats: [
      { value: '30kW', label: 'System Size' },
      { value: '100%', label: 'Energy Offset' },
      { value: '€180k', label: 'Savings / 25yr' },
    ],
  },
  {
    id: 'p4',
    image: '/portfolio-4.png',
    images: ['/portfolio-4.png', '/portfolio-5.png', '/portfolio-2.png', '/portfolio-6.png'],
    title: 'Mountain Solar Farm',
    location: 'Canterbury, New Zealand',
    category: 'commercial',
    description: 'Utility-scale 15MW ground-mounted solar farm spanning 75 acres, supplying clean energy to over 4,000 households.',
    longDescription: 'Constructed amid challenging, volatile mountain weather conditions, this robust utility-scale initiative required reinforced tracking mounting capable of surviving extreme wind uplift. It now delivers 15MW directly into the local Canterbury grid, providing sustainable lifeblood to 4,000 regional properties.',
    testimonial: {
      name: 'David R., Regional Energy Council',
      text: 'The structural integrity of this installation is incredible. We\'ve had record winds this season and the tracking mounts didn\'t yield an inch. A truly spectacular engineering achievement for the region.',
      rating: 4,
    },
    stats: [
      { value: '15MW', label: 'Capacity' },
      { value: '4,000+', label: 'Homes Powered' },
      { value: '75', label: 'Acres' },
    ],
  },
  {
    id: 'p5',
    image: '/portfolio-5.png',
    images: ['/portfolio-5.png', '/portfolio-1.png', '/portfolio-3.png', '/portfolio-4.png'],
    title: 'Urban Office Complex',
    location: 'San Francisco, USA',
    category: 'commercial',
    description: 'Multi-rooftop 800kW installation across a downtown commercial complex, achieving LEED Platinum certification.',
    longDescription: 'Commercial real estate owners aim to deliver best-in-class sustainability for prime tenants. This sprawling 800kW system spanned across 3 different interconnected high-rise buildings, functioning collaboratively to secure a coveted LEED Platinum certification for the massive complex.',
    testimonial: {
      name: 'Elena T., Principal Developer',
      text: 'Securing LEED Platinum requires passing intense scrutiny. Smart Solar designed an elegant multi-roof system that skyrocketed our environmental scores and thrilled our tech tenants.',
      rating: 5,
    },
    stats: [
      { value: '800kW', label: 'System Size' },
      { value: 'LEED', label: 'Platinum' },
      { value: '$950k', label: 'Savings / 25yr' },
    ],
  },
  {
    id: 'p6',
    image: '/portfolio-6.png',
    images: ['/portfolio-6.png', '/portfolio-2.png', '/portfolio-1.png', '/portfolio-5.png'],
    title: 'Heritage Farmstead',
    location: 'Pennsylvania, USA',
    category: 'residential',
    description: 'Solar-powered modern farmhouse with 22kW system and full battery backup, blending sustainable tech with rural charm.',
    longDescription: 'Farm infrastructure requires resilience. Rather than facing agricultural blackouts, this traditional property implemented a cutting-edge 22kW solar generator tied into a substantial battery reservoir, allowing crucial farm equipment and habitation to operate 100% off the centralized grid.',
    testimonial: {
      name: 'Marcus W., Farmstead Operations',
      text: 'We used to lose thousands during grid outages when the milking parlors went down. With the new 22kW battery backup, our operations haven\'t skipped a single beat in three years.',
      rating: 5,
    },
    stats: [
      { value: '22kW', label: 'System Size' },
      { value: '100%', label: 'Off-Grid' },
      { value: '$120k', label: 'Savings / 25yr' },
    ],
  },
  // 9 New Additional Projects
  {
    id: 'p7',
    image: '/portfolio-1.png',
    images: ['/portfolio-1.png', '/portfolio-3.png', '/portfolio-5.png', '/portfolio-6.png'],
    title: 'Desert Winery Microgrid',
    location: 'Tucson, Arizona',
    category: 'commercial',
    description: 'Custom 150kW canopy installation over vineyard parking, powering the main processing facility completely off-grid during peak hours.',
    longDescription: 'In harsh desert climates, dual-purpose structures are phenomenal. We deployed an incredible 150kW canopy array that shaded visitor vehicles from extreme temperatures while simultaneously generating enough immediate power to completely float the heavy processing demands of winemaking during peak sunlight windows.',
    testimonial: {
      name: 'Sophia L., Winery Owner',
      text: 'The solar canopies are stunning. Our guests constantly compliment the shaded parking, and I get to smile knowing those same canopies are powering our entire fermentation process for free.',
      rating: 5,
    },
    stats: [
      { value: '150kW', label: 'System Size' },
      { value: 'Zero', label: 'Carbon Emissions' },
      { value: '$350k', label: 'Savings / 25yr' },
    ],
  },
  {
    id: 'p8',
    image: '/portfolio-2.png',
    images: ['/portfolio-2.png', '/portfolio-4.png', '/portfolio-1.png', '/portfolio-3.png'],
    title: 'Regional Hospital',
    location: 'Melbourne, Australia',
    category: 'commercial',
    description: 'Crucial 1.2MW installation with triple-redundant medical-grade battery backups ensuring uninterrupted critical care.',
    longDescription: 'Hospitals simply cannot go dark. Beyond serving as an economic power source, this 1.2MW solar deployment acts as the foundation of a highly rigorous triple-redundant medical backup infrastructure. Even in a worst-case blackout, patient monitoring and surgical lighting proceed without a flinch.',
    testimonial: {
      name: 'Dr. Alistair G., Chief Medical Officer',
      text: 'Energy security translates directly to patient safety. The seamless switchover during grid interruptions is completely unnoticeable. It is the most vital upgrade our hospital has ever made.',
      rating: 5,
    },
    stats: [
      { value: '1.2MW', label: 'System Size' },
      { value: '24/7', label: 'Power Security' },
      { value: '4,500', label: 'Tons CO2 Offset' },
    ],
  },
  {
    id: 'p9',
    image: '/portfolio-3.png',
    images: ['/portfolio-3.png', '/portfolio-5.png', '/portfolio-6.png', '/portfolio-2.png'],
    title: 'Eco-Friendly Suburb Sub-Division',
    location: 'Austin, Texas',
    category: 'residential',
    description: 'Community-wide microgrid across 45 new homes sharing a collective 400kW solar field and centralized battery storage.',
    longDescription: 'Breaking out of the individual home-owner paradigm, we architected a massive communal 400kW solar field. 45 separate modern dwellings pool their consumption into a localized microgrid, dramatically increasing cost-efficiency for individual buyers while democratizing premium green infrastructure.',
    testimonial: {
      name: 'Rachel B., Homeowner Association',
      text: 'The communal microgrid is brilliant. We pay practically nothing for electricity, and sharing the 400kW solar field means none of us had to place panels directly on our beautiful new roofs.',
      rating: 4,
    },
    stats: [
      { value: '45', label: 'Homes Connected' },
      { value: '400kW', label: 'Total Output' },
      { value: 'Shared', label: 'Grid Architecture' },
    ],
  },
  {
    id: 'p10',
    image: '/portfolio-4.png',
    images: ['/portfolio-4.png', '/portfolio-1.png', '/portfolio-2.png', '/portfolio-5.png'],
    title: 'Automotive Manufacturing Plant',
    location: 'Stuttgart, Germany',
    category: 'commercial',
    description: 'Gigantic 5MW multi-roof array completely powering the vehicle assembly line during peak sunlight hours.',
    longDescription: 'Heavy manufacturing demands astronomical electrical loads. Through the strategic placement of 12,000 distinct panels generating 5 Megawatts of peak force, this legendary vehicle assembly line decoupled its primary assembly robotics from fossil-fueled regional grids entirely.',
    testimonial: {
      name: 'Klaus M., Plant Manager',
      text: 'We build the cars of the future, and now we build them using the energy of the future. The 5MW installation handles the immense load of our welding robotics flawlessly.',
      rating: 5,
    },
    stats: [
      { value: '5MW', label: 'System Size' },
      { value: '12,000', label: 'Panels Installed' },
      { value: '€4.2M', label: 'Savings / 25yr' },
    ],
  },
  {
    id: 'p11',
    image: '/portfolio-5.png',
    images: ['/portfolio-5.png', '/portfolio-6.png', '/portfolio-3.png', '/portfolio-1.png'],
    title: 'Lakeside Cabin Retreat',
    location: 'Ontario, Canada',
    category: 'residential',
    description: 'Fully off-grid 15kW installation serving a remote property. Engineered specifically for harsh winter performance and low-light charging.',
    longDescription: 'Deep in the thick forests of Ontario, this ultra-premium remote property lacks any tether to standard civilization. We forged a heavy-duty 15kW installation customized for aggressive snow-shedding and optimized to devour and store low-angle winter sunlight.',
    testimonial: {
      name: 'Jonathan S., Property Owner',
      text: 'We are completely cut off from the grid, yet we run heated floors and an electric sauna in the dead of winter. The snow sheds right off the panels, and the battery reserves seem endless.',
      rating: 5,
    },
    stats: [
      { value: '15kW', label: 'System Size' },
      { value: '100%', label: 'Remote Off-Grid' },
      { value: '2 Weeks', label: 'Battery Autonomy' },
    ],
  },
  {
    id: 'p12',
    image: '/portfolio-6.png',
    images: ['/portfolio-6.png', '/portfolio-4.png', '/portfolio-1.png', '/portfolio-2.png'],
    title: 'Tech Campus Headquarters',
    location: 'Seattle, Washington',
    category: 'commercial',
    description: 'Architecturally stunning 600kW BIPV (Building-Integrated Photovoltaics) facade replacing standard glass with energy-generating solar panels.',
    longDescription: 'Traditional rack-mount panels weren\'t visually appealing enough for this futuristic tech campus. Instead, we deployed a spectacular 600kW BIPV facade, literally integrating the solar cells into the building\'s glass exterior structure—simultaneously providing shade while aggressively capturing solar power.',
    testimonial: {
      name: 'Amanda K., Head of Corporate Real Estate',
      text: 'The solar glass facade is incredible. It looks like a billionaire\'s architectural dream but functions as an eco-warrior\'s powerhouse. Visitors are stunned when we tell them the windows are generating electricity.',
      rating: 5,
    },
    stats: [
      { value: '600kW', label: 'BIPV Output' },
      { value: 'Net-Zero', label: 'Energy Rating' },
      { value: 'Unique', label: 'Glass Integration' },
    ],
  },
  {
    id: 'p13',
    image: '/portfolio-1.png',
    images: ['/portfolio-1.png', '/portfolio-2.png', '/portfolio-5.png', '/portfolio-6.png'],
    title: 'Mega Retail Mall',
    location: 'Dubai, UAE',
    category: 'commercial',
    description: 'Massive 3MW shading structure over parking lots, keeping thousands of vehicles cool while generating immense clean energy for the mall.',
    longDescription: 'In extreme desert environments, vehicle shading is as important as power generation. By installing sprawling geometric 3MW structures over miles of empty parking asphalt, customers find a shaded sanctuary while the colossal mall dynamically drastically reduces air-conditioning expenditure.',
    testimonial: {
      name: 'Faisal A., Mall Operations Manager',
      text: 'Our visitor retention jumped simply because people didn\'t want to leave their cars baking in the sun. The 3MW array cooled our parking lots down by 15 degrees and wiped out our lighting bill.',
      rating: 4,
    },
    stats: [
      { value: '3MW', label: 'Shading Capacity' },
      { value: '1,500', label: 'Cars Shaded' },
      { value: '$2M', label: 'Savings / 25yr' },
    ],
  },
  {
    id: 'p14',
    image: '/portfolio-2.png',
    images: ['/portfolio-2.png', '/portfolio-1.png', '/portfolio-3.png', '/portfolio-4.png'],
    title: 'Agricultural Pumping Station',
    location: 'Central Valley, California',
    category: 'commercial',
    description: 'Robust 850kW solar array powering massive irrigation systems. Integrates dynamic tracking to follow the sun and maximize water flow.',
    longDescription: 'Water is literal money in agricultural hubs. We erected a specialized 850kW array equipped with automated dual-axis sun-tracking mechanics. Early morning, midday, or dusk, the system physically pivots to follow the sun, ensuring continuous power output for multi-million gallon irrigation pumps.',
    testimonial: {
      name: 'George H., Agricultural Director',
      text: 'Pumping water used to be our single highest overhead. By implementing the sun-tracking array, we get peak pump power from 7 AM to 6 PM. It has fundamentally changed the economics of our farm.',
      rating: 5,
    },
    stats: [
      { value: '850kW', label: 'System Size' },
      { value: 'Tracker', label: 'Dual-Axis Tech' },
      { value: '1M Gallons', label: 'Pumped Daily' },
    ],
  },
  {
    id: 'p15',
    image: '/portfolio-3.png',
    images: ['/portfolio-3.png', '/portfolio-6.png', '/portfolio-1.png', '/portfolio-5.png'],
    title: 'Modern Metro Townhouse',
    location: 'London, UK',
    category: 'residential',
    description: 'Sleek, flush-mounted 8kW rooftop system strictly adhering to historical city preservation guidelines while eliminating electric bills.',
    longDescription: 'Navigating intensely rigid city heritage parameters requires finesse. We negotiated and secured an 8kW system that mounts completely invisible from the walking thoroughfare below—modernizing a classic townhome to function entirely independently from the grid.',
    testimonial: {
      name: 'Victoria E., Townhouse Residence',
      text: 'I honestly did not think we would get approval. Smart Solar designed an 8kW system that the heritage committee loved. You can\'t see a single panel from the street, yet my utility bill is zero.',
      rating: 5,
    },
    stats: [
      { value: '8kW', label: 'Flush System Size' },
      { value: '85%', label: 'Energy Offset' },
      { value: 'Passed', label: 'Heritage Check' },
    ],
  }
];
