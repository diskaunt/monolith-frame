import React from 'react';
import AboutUsMid from './illustrations/AboutUsMid';
import AboutUsRoadMap from './illustrations/AboutUsRoadMap';
import AboutUsStart from './illustrations/AboutUsStart';
import DevBuildSvg from './illustrations/DevBuildSvg';
import InGradSvg from './illustrations/InGradSvg';
import MgLogoSvg from './illustrations/MgLogoSvg';
import PikSvg from './illustrations/PikSvg';
import SamoletPlusSvg from './illustrations/SamoletPlusSvg';
import WhiteTower from './illustrations/WhiteTower';

const illustrations = {
  aboutUsMid: AboutUsMid,
  aboutUsRoadMap: AboutUsRoadMap,
  aboutUsStart: AboutUsStart,
  devBuild: DevBuildSvg,
  inGrad: InGradSvg,
  mgLogo: MgLogoSvg,
  pik: PikSvg,
  samoletPlus: SamoletPlusSvg,
  whiteTower: WhiteTower,
};

type Illustration = keyof typeof illustrations;

const Illustration: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const IllustrationComponent = illustrations[name as Illustration];
  return (
    <>
      <IllustrationComponent className={className} />
    </>
  );
};

export default Illustration;
