import React from 'react';
import { Card, CardContent } from './ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  features: React.ReactElement[];
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  className = '',
}) => {
  return (
    <Card className={`overflow-hidden h-full ${className}`}>
      <CardContent className="p-0 h-full flex flex-col">
        {/* Image section */}
        <div className="p-4 pb-2">
          <div className="w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* Content section */}
        <div className="p-4 pt-2 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground mb-3">
              {description}
            </p>
          )}
          <ul className="space-y-1 flex-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1 text-xs">•</span>
                <div className="text-xs text-card-foreground">
                  {feature}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
