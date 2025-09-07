import React from 'react';
import FeatureCard from './FeatureCard.tsx';

import threeQuarterInStandardSquareDrive from '@/assets/accessories/3-4in-standard-square-drive.webp';
import oneInStandardSquareDrive from '@/assets/accessories/1in-standard-square-drive.webp';
import oneInReducerSquareDrive from '@/assets/accessories/1in-reducer-square-drive.webp';
import oneAndHalfInReducerSquareDrive from '@/assets/accessories/1-1-2in-reducer-square-drive.webp';
import makitaBattery from '@/assets/accessories/makita_battery.webp';
import batteryCharger from '@/assets/accessories/battery_charger.webp';
import mountingKit from '@/assets/accessories/mounting_kit.webp';

type Accessory = {
  title: string;
  description: string;
  features: React.ReactElement[];
  imageSrc: any; // Imported image object
  imageAlt: string;
};

const accessories: Accessory[] = [
  /*
  {
    title: 'Standard Steel Reaction Arm',
    description:
      'All our tools are supplied with standard reaction arms, however additional replacements are available',
    features: [
      <span>1,300 ft-lbs max. working torque</span>,
      <span>Easy 1 pin and 1 set screw installation</span>,
      <span>
        Fits all NexTORK tools and extensions rated to 1,300 ft-lbs
      </span>,
      <span>Hardened chrome moly steel construction</span>,
      <span>Black oxide finish</span>,
      <span>Made in USA</span>,
    ],
    imageSrc: '/src/assets/tools/NT1300B_SIDE.jpg',
    imageAlt: 'Standard Steel Reaction Arm',
  },

  {
    title: 'Standard Aluminum Reaction Arm',
    description:
      'All our tools are supplied with standard reaction arms, however additional replacements are available',
    features: [
      <span>500 ft-lbs max. working torque</span>,
      <span>Easy 1 pin and 1 set screw installation</span>,
      <span>
        Fits all NexTORK tools and extensions rated to 500 ft-lbs
      </span>,
      <span>Solid aluminum construction</span>,
      <span>Plain finish</span>,
      <span>Made in USA</span>,
    ],
    imageSrc: '/src/assets/tools/NT500B_SIDE.jpg',
    imageAlt: 'Standard Aluminum Reaction Arm',
  },
  {
    title: 'Custom Made Reaction Arm',
    description:
      'If you have a special application where one of our existing reaction arms will not work, we would be glad to design and build a special reaction arm or fixture that can safely suit your needs',
    features: [
      <span>Max. working torque application dependent</span>,
      <span>Easy 1 pin and 1 set screw installation</span>,
      <span>
        Hardened chrome moly steel or aluminum construction
      </span>,
      <span>Made in USA</span>,
    ],
    imageSrc: '/src/assets/tools/NT1300B_SIDE.jpg',
    imageAlt: 'Custom Made Reaction Arm',
  },
  {
    title: 'Reaction Arm Weld Blanks',
    description:
      'These reaction arm blanks enable our customers to design and fabricate their own reaction arms',
    features: [
      <span>Max. working torque application dependent</span>,
      <span>Easy 1 pin and 1 set screw installation</span>,
      <span>
        Fits all NexTORK tools and extensions rated to 1,300 ft-lbs
      </span>,
      <span>Unhardened chrome moly steel construction</span>,
      <span>No warranty</span>,
      <span>Made in USA</span>,
    ],
    imageSrc: '/src/assets/tools/NT1300B_SIDE.jpg',
    imageAlt: 'Reaction Arm Weld Blanks',
  },

  {
    title: 'Wheel Attachment',
    description:
      'This attachment mounts in place of the standard reaction arm and square drive and is specifically designed for limited space applications like truck and off-road equipment wheel bolting',
    features: [
      <span>
        Fits all NexTORK tools and extensions rated to 1,300 ft-lbs
      </span>,
      <span>Integrated ¾" square drive</span>,
      <span>1,300 ft-lbs max. working torque</span>,
      <span>Easy 2 screw installation</span>,
      <span>Weighs 5 lbs (2.3 Kg)</span>,
      <span>Made in USA</span>,
    ],
    imageSrc: '/src/assets/tools/NT1300B_SIDE.jpg',
    imageAlt: 'Wheel Attachment',
  },
  {
    title: 'Sliding Reaction Arm 3 in to 8.5 in',
    description:
      'Special applications may require reacting off a nearby fastener through a socket in order to protect it',
    features: [
      <span>
        Supports center distance between fasteners between 3 and 8.5
        inches
      </span>,
      <span>1,300 ft-lbs max. working torque</span>,
      <span>Available with ¾ in and 1 in reaction square drive</span>,
      <span>
        Fits all NexTORK tools and extensions rated to 1,300 ft-lbs
      </span>,
      <span>Hardened chrome moly steel construction</span>,
      <span>Made in USA</span>,
    ],
    imageSrc: '/src/assets/tools/NT1300B_SIDE.jpg',
    imageAlt: 'Sliding Reaction Arm 3 in to 8.5 in',
  },
  {
    title: 'Sliding Reaction Arm 4 in to 12 in',
    description:
      'Special applications may require reacting off a nearby fastener through a socket in order to protect it',
    features: [
      <span>
        Supports center distance between fasteners between 4 and 12
        inches
      </span>,
      <span>1,300 ft-lbs max. working torque</span>,
      <span>Available with ¾ in and 1 in reaction square drive</span>,
      <span>
        Fits all NexTORK tools and extensions rated to 1,300 ft-lbs
      </span>,
      <span>Hardened chrome moly steel construction</span>,
      <span>Made in USA</span>,
    ],
    imageSrc: '/src/assets/tools/NT1300B_SIDE.jpg',
    imageAlt: 'Sliding Reaction Arm 4 in to 12 in',
  },

  {
    title: '6 in. Extension',
    description: 'Fits all NexTORK tools rated to 1,300 ft-lbs',
    features: [
      <span>Fits all NexTORK tools rated to 1,300 ft-lbs</span>,
      <span>Fits all NexTORK reaction arms and square drives</span>,
      <span>1 screw installation</span>,
      <span>
        Hybrid aircraft aluminum and chrome moly steel construction
      </span>,
      <span>Weighs 4.6 lbs (2.1 Kg)</span>,
      <span>Does not affect tool torque performance</span>,
      <span>Made in USA</span>,
      <span>1 yr warranty</span>,
    ],
    imageSrc: '/src/assets/tools/NT1300B_SIDE.jpg',
    imageAlt: '6 in. Extension',
  },

  {
    title: '12 in. Extension',
    description: 'Fits all NexTORK tools rated to 1,300 ft-lbs',
    features: [
      <span>Fits all NexTORK tools rated to 1,300 ft-lbs</span>,
      <span>Fits all NexTORK reaction arms and square drives</span>,
      <span>1 screw installation</span>,
      <span>
        Hybrid aircraft aluminum and chrome moly steel construction
      </span>,
      <span>Weighs 6.9 lbs (3.1 Kg)</span>,
      <span>Does not affect tool torque performance</span>,
      <span>Made in USA</span>,
      <span>1 yr warranty</span>,
    ],
    imageSrc: '/src/assets/tools/NT1300B_SIDE.jpg',
    imageAlt: '12 in. Extension',
  },
  {
    title: '18 in. Extension',
    description: 'Fits all NexTORK tools rated to 1,300 ft-lbs',
    features: [
      <span>Fits all NexTORK tools rated to 1,300 ft-lbs</span>,
      <span>Fits all NexTORK reaction arms and square drives</span>,
      <span>1 screw installation</span>,
      <span>
        Hybrid aircraft aluminum and chrome moly steel construction
      </span>,
      <span>Weighs 9.1 lbs (4.1 Kg)</span>,
      <span>Does not affect tool torque performance</span>,
      <span>Made in USA</span>,
      <span>1 yr warranty</span>,
    ],
    imageSrc: '/src/assets/accessories/18in-extension.webp',
    imageAlt: '18 in. Extension',
  },
  */
  {
    title: '¾ in Standard Square Drive',
    description:
      'Fits all NexTORK tools and extensions rated to 1,300 ft-lbs',
    features: [
      <span>
        Fits all NexTORK tools and extensions rated to 1,300 ft-lbs
      </span>,
      <span>Recommended for use up to 800 ft-lbs for longevity</span>,
      <span>
        Field replaceable with only a hex key by removing reaction arm
      </span>,
      <span>Weighs 0.4 lbs (0.18 Kg)</span>,
      <span>Made in USA</span>,
    ],
    imageSrc: threeQuarterInStandardSquareDrive.src,
    imageAlt: '¾ in Standard Square Drive',
  },
  {
    title: '1 in Standard Square Drive',
    description:
      'Fits all NexTORK tools and extensions rated to 1,300 ft-lbs',
    features: [
      <span>
        Fits all NexTORK tools and extensions rated to 1,300 ft-lbs
      </span>,
      <span>
        Fits all NexTORK tools and extensions rated to 1,300 ft-lbs
      </span>,
      <span>May be used up to 1,300 ft-lbs</span>,
      <span>
        Field replaceable with only a hex key by removing reaction arm
      </span>,
      <span>Weighs 0.4 lbs (0.18 Kg)</span>,
      <span>Made in USA</span>,
    ],
    imageSrc: oneInStandardSquareDrive.src,
    imageAlt: '1 in Standard Square Drive',
  },
  {
    title: '1 in Reducer Square Drive',
    description:
      'Fits NexTORK 2600 reducers with replaceable square drives',
    features: [
      <span>
        Fits NexTORK 2600 reducers with replaceable square drives
      </span>,
      <span>May be used up to 2,600 ft-lbs</span>,
      <span>Field replaceable with only a single tool</span>,
      <span>Weighs 0.8 lbs (0.35 Kg)</span>,
      <span>Made in USA</span>,
    ],
    imageSrc: oneInReducerSquareDrive.src,
    imageAlt: '1 in Reducer Square Drive',
  },

  {
    title: '1-½ in Reducer Square Drive',
    description:
      'Fits NexTORK 2600 reducers with replaceable square drives',
    features: [
      <span>
        Fits NexTORK 2600 reducers with replaceable square drives
      </span>,
      <span>May be used up to 2,600 ft-lbs</span>,
      <span>Field replaceable with only a single tool</span>,
      <span>Weighs 1.4 lbs (0.65 Kg)</span>,
      <span>Made in USA</span>,
    ],
    imageSrc: oneAndHalfInReducerSquareDrive.src,
    imageAlt: '1-½ in Reducer Square Drive',
  },
  {
    title: 'Tool Battery',
    description: '',
    features: [
      <span>Genuine Makita® LXT® battery</span>,
      <span>18V Li-Ion technology</span>,
      <span>Fits all NexTORK battery tools</span>,
      <span>4.0 Ah capacity</span>,
      <span>4 LED charge level indicator</span>,
      <span>Charges in 40 minutes or less when empty</span>,
      <span>5.0 and 6.0 Ah also available</span>,
    ],
    imageSrc: makitaBattery.src,
    imageAlt: 'Tool Battery',
  },
  {
    title: 'Battery Charger',
    description: '',
    features: [
      <span>Genuine Makita® LXT® battery charger</span>,
      <span>18V Li-Ion technology compatible</span>,
      <span>Fully charges a 4.0 Ah battery in 40 min</span>,
      <span>Fully charges a 5.0 Ah battery in 45 min</span>,
      <span>Fully charges a 6.0 Ah battery in 55 min</span>,
      <span>Operates on 110 VAC, 50-60 Hz, others available</span>,
      <span>Max power consumption 240 W</span>,
      <span>Circulates air through battery during charging</span>,
    ],
    imageSrc: batteryCharger.src,
    imageAlt: 'Battery Charger',
  },
  {
    title: 'Accessory Mounting Kit',
    description: '',
    features: [
      <span>Includes 2 pins and 2 set screws</span>,
      <span>
        Necessary for mounting all NexTORK reaction arms and
        extensions
      </span>,
      <span>Installation requires 1/8" hex key</span>,
      <span>Made in USA</span>,
    ],
    imageSrc: mountingKit.src,
    imageAlt: 'Accessory Mounting Kit',
  },
];

const Accessories: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Accessories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessories.map((accessory, index) => (
          <FeatureCard
            key={index}
            title={accessory.title}
            description={accessory.description}
            features={accessory.features}
            imageSrc={accessory.imageSrc}
            imageAlt={accessory.imageAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
