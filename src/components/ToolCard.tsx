import React from 'react';

interface ToolCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  imageSrc,
  imageAlt,
  features,
}) => {
  return (
    <div className="flex flex-col items-center bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Centered Title */}
      <h3 className="text-2xl font-semibold text-card-foreground text-center mb-2">
        {title}
      </h3>
      <span className=" w-full text-card-foreground text-md text-center mb-4">
        Battery Torque Wrench
      </span>

      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-48 object-contain rounded-md"
        />
      </div>

      {/* Bulleted List */}
      <ul className="space-y-2 items-center text-center">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className=" w-full text-card-foreground text-md text-center font-semibold">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolCard;
