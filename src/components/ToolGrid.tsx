'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../lib/carousel';
import ToolCard from './ToolCard';
interface Tool {
  title: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
}

interface ToolGridProps {
  tools: Tool[];
}

const ToolGrid: React.FC<ToolGridProps> = ({ tools }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Large screens: Grid layout (3 cards first row, 2 cards second row) */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* First row: 3 cards */}
          {tools.slice(0, 3).map((tool, index) => (
            <div key={index} className="tool-card">
              <ToolCard
                title={tool.title}
                imageSrc={tool.imageSrc}
                imageAlt={tool.imageAlt}
                features={tool.features}
              />
            </div>
          ))}
        </div>

        {/* Second row: 2 cards (centered) */}
        {tools.length > 3 && (
          <div className="flex justify-center gap-6">
            <div className="w-1/3">
              <ToolCard
                title={tools[3].title}
                imageSrc={tools[3].imageSrc}
                imageAlt={tools[3].imageAlt}
                features={tools[3].features}
              />
            </div>
            {tools.length > 4 && (
              <div className="w-1/3">
                <ToolCard
                  title={tools[4].title}
                  imageSrc={tools[4].imageSrc}
                  imageAlt={tools[4].imageAlt}
                  features={tools[4].features}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Medium screens: Carousel */}
      <div className="lg:hidden relative">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {tools.map((tool, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <ToolCard
                  title={tool.title}
                  imageSrc={tool.imageSrc}
                  imageAlt={tool.imageAlt}
                  features={tool.features}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </div>
  );
};

export default ToolGrid;
