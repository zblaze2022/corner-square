import closeFacadeImg from '../assets/images/corner_close_facade_1788333790424.jpg';
import midPullbackImg from '../assets/images/corner_mid_pullback_1788333808009.jpg';
import highAerialImg from '../assets/images/corner_high_aerial_1788333828362.jpg';
import wideAerialImg from '../assets/images/corner_wide_aerial_1788333848123.jpg';
import { AvailableSpace } from '../types';

export const KEYFRAME_IMAGES = {
  closeFacade: closeFacadeImg,
  midPullback: midPullbackImg,
  highAerial: highAerialImg,
  wideAerial: wideAerialImg,
};

export const AVAILABLE_SPACES: AvailableSpace[] = [
  {
    id: 'unit-g01',
    code: 'G-01',
    name: 'Prime Corner Retail & Flagship Showroom',
    floor: 'Ground Floor (Level 1)',
    type: 'Flagship',
    areaSqm: 320,
    areaSqft: 3444,
    ceilingHeight: '4.80 meters',
    frontage: '28 meters double-sided glass frontage',
    status: 'Available',
    features: [
      'Direct entrance from curved illuminated stairway',
      'Maximum pedestrian & vehicular visibility',
      'Provisions for commercial exhaust & heavy power',
      'Floor-to-ceiling panoramic glass panels',
    ],
    description:
      'The premier signature unit of Corner Square. Unmatched dual-street exposure, tall structural column framing, and direct access from the main entrance forecourt.',
    pricePerSqm: '$45 / sqm / month',
  },
  {
    id: 'unit-g02',
    code: 'G-02',
    name: 'Boutique Commercial & Banking Hall',
    floor: 'Ground Floor (Level 1)',
    type: 'Retail',
    areaSqm: 185,
    areaSqft: 1991,
    ceilingHeight: '4.50 meters',
    frontage: '16 meters glass facade',
    status: 'Available',
    features: [
      'Dedicated side driveway access & drop-off',
      'High foot-traffic arterial exposure',
      'Plumbing stub-outs for pantry/restroom',
      'Energy-efficient VRF AC pre-installed',
    ],
    description:
      'Ideal for premium financial institutions, high-end optical/medical clinics, or specialized retail concepts looking for prominent ground level presence.',
    pricePerSqm: '$40 / sqm / month',
  },
  {
    id: 'unit-l2a',
    code: 'L2-01',
    name: 'Full Second-Floor Corporate Headquarters',
    floor: 'Second Floor (Level 2)',
    type: 'Office',
    areaSqm: 680,
    areaSqft: 7319,
    ceilingHeight: '4.20 meters',
    frontage: '360° perimeter glass framing with tree canopy views',
    status: 'Available',
    features: [
      'Warm wood under-soffit cantilever perimeter',
      'Abundant natural daylight from 4 elevations',
      'Dual high-speed telecom fiber feeds',
      'Subdivisible into 2 equal wings (340 sqm each)',
    ],
    description:
      'An expansive, column-optimized creative office floorplate. High ceilings, panoramic natural light, and tranquil views of surrounding tropical landscaping.',
    pricePerSqm: '$32 / sqm / month',
  },
  {
    id: 'unit-l2b',
    code: 'L2-02',
    name: 'Executive Tech & Creative Studio Suite',
    floor: 'Second Floor (Level 2)',
    type: 'Executive',
    areaSqm: 265,
    areaSqft: 2852,
    ceilingHeight: '4.20 meters',
    frontage: 'East & South panoramic glazing',
    status: 'Available',
    features: [
      'Turnkey open-plan architectural layout',
      'Acoustically insulated double-pane glass',
      'Direct access to rooftop terrace & executive lounge',
      '100% solar and generator emergency backup',
    ],
    description:
      'Tailored for innovative tech firms, law partnerships, and design consultancies seeking an inspiring, sustainable workspace with world-class presence.',
    pricePerSqm: '$34 / sqm / month',
  },
];

export const BUILDING_SPECS = {
  name: 'Corner Square Commercial Building',
  floors: '2 Levels + Rooftop Solar Array & Utility Deck',
  grossFloorArea: '1,450 sq.m (15,607 sq.ft)',
  typicalFloorplate: '680 - 750 sq.m',
  floorToCeiling: '4.20m to 4.80m clear height',
  facadeSystem: 'Low-E Double Glazed Floor-to-Ceiling Curtain Wall with Thermal Break',
  powerSupply: 'Dual 500kVA Transformers + 65kWp Rooftop Solar PV + 100% Backup Generator',
  airConditioning: 'Individual Inverter VRF System with MERV-13 air filtration',
  telecoms: 'Dual Carrier Fiber Optic Backbone (Carrier-Neutral)',
  parking: 'Wide paved driveway, dedicated surface stalls, and VIP entrance drop-off',
  sustainability: 'Targeting EDGE Advanced / Green Building Certification',
};

export const SEQUENCE_CHAPTERS = [
  {
    range: [1, 60],
    name: 'CHAPTER 01',
    title: 'Front Façade & Main Entrance',
    desc: 'Focusing on the curved illuminated staircase, double-height entrance, and warm architectural lighting.',
    altitude: '4.2m',
    pitch: '-8°',
    focal: '50mm',
  },
  {
    range: [61, 150],
    name: 'CHAPTER 02',
    title: 'Elevation & Paved Forecourt',
    desc: 'Revealing the rounded corner profile, tall white structural columns, and modern tropical landscaping.',
    altitude: '14.8m',
    pitch: '-16°',
    focal: '35mm',
  },
  {
    range: [151, 240],
    name: 'CHAPTER 03',
    title: 'Cantilever Roof & Solar Infrastructure',
    desc: 'Unveiling the clean concrete roofline, rooftop solar panels, access roads, and lush hillside greenery.',
    altitude: '26.4m',
    pitch: '-24°',
    focal: '24mm',
  },
  {
    range: [241, 300],
    name: 'CHAPTER 04',
    title: 'Master Aerial Establishing Shot',
    desc: 'Full wide establishing panorama showcasing Corner Square as the premier commercial leasing centerpiece.',
    altitude: '38.5m',
    pitch: '-32°',
    focal: '18mm',
  },
];
