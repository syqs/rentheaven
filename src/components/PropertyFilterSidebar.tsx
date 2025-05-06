
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export interface PropertyFilters {
  priceRange: [number, number];
  propertyTypes: string[];
  bedrooms: number[];
  acceptsCrypto: boolean;
}

interface PropertyFilterSidebarProps {
  onFilterChange: (filters: PropertyFilters) => void;
}

export function PropertyFilterSidebar({ onFilterChange }: PropertyFilterSidebarProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [bedrooms, setBedrooms] = useState<number[]>([]);
  const [acceptsCrypto, setAcceptsCrypto] = useState(false);

  const propertyTypeOptions = ["Apartment", "House", "Condo", "Townhouse", "Villa"];
  const bedroomOptions = [1, 2, 3, 4, 5];

  const handlePropertyTypeChange = (type: string) => {
    setPropertyTypes(prev => 
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleBedroomChange = (value: number) => {
    setBedrooms(prev => 
      prev.includes(value)
        ? prev.filter(b => b !== value)
        : [...prev, value]
    );
  };

  const handleApplyFilters = () => {
    onFilterChange({
      priceRange,
      propertyTypes,
      bedrooms,
      acceptsCrypto
    });
  };

  const handleResetFilters = () => {
    setPriceRange([0, 10000]);
    setPropertyTypes([]);
    setBedrooms([]);
    setAcceptsCrypto(false);
    
    onFilterChange({
      priceRange: [0, 10000],
      propertyTypes: [],
      bedrooms: [],
      acceptsCrypto: false
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">Price Range</h3>
        <Slider
          defaultValue={[priceRange[0], priceRange[1]]}
          max={10000}
          step={100}
          onValueChange={(value) => setPriceRange([value[0], value[1]])}
          className="mb-6"
        />
        <div className="flex justify-between text-sm">
          <span>${priceRange[0].toLocaleString()}</span>
          <span>${priceRange[1].toLocaleString()}</span>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-3">Property Type</h3>
        <div className="space-y-2">
          {propertyTypeOptions.map(type => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox 
                id={`type-${type}`} 
                checked={propertyTypes.includes(type)}
                onCheckedChange={() => handlePropertyTypeChange(type)}
              />
              <Label htmlFor={`type-${type}`} className="text-sm">{type}</Label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-3">Bedrooms</h3>
        <div className="flex flex-wrap gap-2">
          {bedroomOptions.map(num => (
            <Button
              key={num}
              variant={bedrooms.includes(num) ? "default" : "outline"}
              size="sm"
              onClick={() => handleBedroomChange(num)}
            >
              {num} {num === 1 ? 'bed' : 'beds'}
            </Button>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="accepts-crypto" 
            checked={acceptsCrypto}
            onCheckedChange={() => setAcceptsCrypto(!acceptsCrypto)}
          />
          <Label htmlFor="accepts-crypto">Accepts Cryptocurrency</Label>
        </div>
      </div>
      
      <div className="flex flex-col space-y-2 pt-4">
        <Button onClick={handleApplyFilters}>
          Apply Filters
        </Button>
        <Button variant="outline" onClick={handleResetFilters}>
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
