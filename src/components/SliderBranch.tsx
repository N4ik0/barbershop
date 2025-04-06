import React, { useEffect, useRef, useState } from "react";
import "../styles/sliderBranch.css";

type Branch = {
  id: number;
  name: string;
  address: string;
  images: string[];
  direction: string;
};

type BranchSliderProps = {
  branch: Branch;
};

const BranchSlider: React.FC<BranchSliderProps> = ({ branch }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const interval = 3000;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % branch.images.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextImage();
    }, interval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentImage]);

  return (
    <div className="branch-slider-container">
      <div className="branch-info">
        <h2 className="branch-title">{branch.name}</h2>
        <p className="branch-address">
            <a href={branch.direction} target="_blank" rel="noopener noreferrer">
            {branch.address}
            </a>
        </p>
      </div>
      
        <div className="slider-container">
            {branch.images.map((img, index) => (
            <div
                key={index}
                className={`slide ${index === currentImage ? "in" : "out"}`}
                style={{
                backgroundImage: `url(/barbershop/assets/branches/${img})`,
                }}
            >
                <div className="branch-overlay"></div>
            </div>
            ))}
      </div>
    </div>
  );
};

export default BranchSlider;
