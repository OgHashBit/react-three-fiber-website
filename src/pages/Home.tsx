import React from 'react';
import PageTemplate from '../PageTemplate';
import HeroSlider from 'src/blocks/HeroSlider';
import Benefits, { TBenefit } from 'src/blocks/Benefits';

import PuzzleSVG from '@icons/puzzle';
import PerformanceSVG from '@icons/performance';
import ReactSVG from '@icons/react';
import CrossPlatformSVG from '@icons/cross_platform';
import GettingStarted from 'src/blocks/gettingStarted';
import CommunityResources from 'src/blocks/CommunityResources';

export default function Home() {
  return (
    <PageTemplate>
      <HeroSlider
        headline="Impact Gemstone"
        subheadline="Hardest assets are now liqud!"
      />
      <Benefits
        headline="Trade gemstones frictionless while original is secured in vault "
        benefits={getLandingPageBenefits()}
      />
      <GettingStarted />
      <CommunityResources resources={getLandingPageResources()} />
    </PageTemplate>
  );
}

function getLandingPageBenefits(): TBenefit[] {
  return [
    {
      icon: <PuzzleSVG />,
      title: 'Ownership',
      description:
        'We use Flow-based, non-fungible tokens to represent ownership of individual gemstones',
    },
    {
      icon: <PerformanceSVG />,
      title: 'Perserve Your Investment Value',
      description:
        'With Impact you always buy and sell close to wholesale price. Thus your investment doesn’t lose half its value the moment you “drive it out of the showroom.”',
    },
    {
      icon: <ReactSVG />,
      title: 'Use-case',
      description:
        'NFTs can be traded ony any supported marketplace if off-chain gemstone is still available for claim. When you decide to redeem your non-fungible token, we will request delivery of your gemstone from vault to specified address. If you ever decide to return gemstone we will return NFT when gemstone is back in vault (may lose some value overtime) ',
    },
    {
      icon: <CrossPlatformSVG />,
      title: 'Cross platform',
      description:
        'To claim off-chain gemstone make request on claim page by entering required information. After that confirm transaction in your wallet and pay small authorization fee. Off-chain gemstone usually takes 2 weeks to arrive, depending where you live.',
    },
  ];
}

function getLandingPageResources() {
  return [
    {
      title: 'Documentation & Learning',
      entries: [
        {
          title: 'Threejs documentation',
          description:
            'Learn what a scene, camera, mesh, geometry and material is and how they can be used',
          url:
            'https://threejs.org/docs/#manual/en/introduction/Creating-a-scene',
        },
        {
          title: 'react-three-fiber documentation',
          description:
            'Detailed documentation about the API react-three-fiber provides you',
          url: 'https://github.com/react-spring/react-three-fiber',
        },
        {
          title: 'Three.js Fundamentals',
          description: 'A set of articles to help learn Three.js.',
          url: 'https://threejsfundamentals.org/',
        },
        {
          title: 'Discover Three.js',
          description: 'The mssing manual for three.js',
          url: 'https://discoverthreejs.com/',
        },
      ],
    },
    {
      title: 'Tutorials',
      entries: [
        {
          title: 'Animation and 3D in react-three-fiber — Learn With Jason',
          description:
            'Get to know react-three-fiber with the creator of the renderer',
          url: 'https://www.youtube.com/watch?v=1rP3nNY2hTo',
        },
        {
          title: 'Write three.js in React Using react-three-fiber',
          description:
            'Learn what a scene, camera, mesh, geometry and material is and how they can be used',
          url: 'https://alligator.io/react/react-with-threejs',
        },
        {
          title: '3D Data Visualization with React and Three.js',
          description:
            'Animate 100.000 points using InstancedMesh with react-three-fiber',
          url:
            'https://medium.com/cortico/3d-data-visualization-with-react-and-three-js-7272fb6de432',
        },
      ],
    },
    {
      title: 'Code examples',
      entries: [
        {
          title: 'Hello World',
          description:
            'Get familiar with the basics of react free fiber by creating a canvas with rotating boxes',
          url: 'https://codesandbox.io/s/rrppl0y8l4',
        },
      ],
    },
  ];
}
