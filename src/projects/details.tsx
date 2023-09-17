import React from 'react';
import { ProjectInDetail } from './projects-util';
import { DRP, WACC, Pintos } from '../util/data';

export const DrpDetail = () => {
  return <ProjectInDetail project={DRP} />;
};

export const WaccDetail = () => {
  return <ProjectInDetail project={WACC} />;
};

export const PintosDetail = () => {
  return <ProjectInDetail project={Pintos} />;
};
