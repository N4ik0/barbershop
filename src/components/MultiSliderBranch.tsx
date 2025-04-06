import React from "react";
import SliderBranch from "./SliderBranch";
import "../styles/MultiBranchSlider.css"

type Branch = {
  id: number;
  name: string;
  address: string;
  images: string[];
  direction: string;
};

type MultiSliderBranchProps = {
  data: Branch[];
};

const MultiSliderBranch: React.FC<MultiSliderBranchProps> = ({ data }) => {
  return (
    <div className="multi-branch-slider">
      {data.map((branch) => (
        <SliderBranch key={branch.id} branch={branch} />
      ))}
    </div>
  );
};

export default MultiSliderBranch;
