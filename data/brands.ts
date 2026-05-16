export interface Brand {
  name: string;
  logo: string;
}

const placeholder = (name: string) =>
  `https://placehold.co/200x80/0B192C/73b042?text=${encodeURIComponent(name)}&font=montserrat`;

export const brands: Brand[] = [
  { name: "Solaris", logo: placeholder("Solaris") },
  { name: "HelioTech", logo: placeholder("HelioTech") },
  { name: "BrightField", logo: placeholder("BrightField") },
  { name: "SunMax", logo: placeholder("SunMax") },
  { name: "VoltCore", logo: placeholder("VoltCore") },
  { name: "PhotonOne", logo: placeholder("PhotonOne") },
  { name: "AeroSun", logo: placeholder("AeroSun") },
  { name: "GridLume", logo: placeholder("GridLume") },
  { name: "EcoCharge", logo: placeholder("EcoCharge") },
];
