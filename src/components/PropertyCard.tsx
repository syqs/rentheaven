
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  currency: string;
  crypto?: {
    eth?: number;
    matic?: number;
    bnb?: number;
  };
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  type: string;
  tokenized?: boolean;
  totalTokens?: number;
  availableTokens?: number;
  tokenPrice?: number;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const tokenPercentage = property.tokenized && property.totalTokens 
    ? Math.round((property.availableTokens! / property.totalTokens!) * 100) 
    : 0;

  return (
    <Link to={`/property/${property.id}`} className="property-card block group">
      <div className="relative">
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={property.imageUrl} 
            alt={property.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-2 right-2">
          <Badge className="bg-primary">{property.type}</Badge>
        </div>
        {property.tokenized && (
          <div className="absolute top-2 left-2">
            <Badge variant="outline" className="bg-card/80 backdrop-blur-sm border-primary text-primary">
              Tokenized
            </Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-1">{property.address}</p>
        
        <div className="flex justify-between items-center mb-3">
          <p className="font-medium text-lg">
            {property.currency === 'USD' ? '$' : ''}
            {property.price.toLocaleString()}
            {property.currency !== 'USD' ? ` ${property.currency}` : ''}
            <span className="text-sm text-muted-foreground font-normal">/month</span>
          </p>
          
          {property.crypto && (
            <div className="text-xs text-muted-foreground">
              {property.crypto.eth && (
                <span className="inline-flex items-center mr-1">Ξ{property.crypto.eth}</span>
              )}
              {property.crypto.matic && (
                <span className="inline-flex items-center mr-1">MATIC {property.crypto.matic}</span>
              )}
              {property.crypto.bnb && (
                <span className="inline-flex items-center">BNB {property.crypto.bnb}</span>
              )}
            </div>
          )}
        </div>
        
        <div className="flex justify-between text-sm text-muted-foreground mb-3">
          <span>{property.bedrooms} beds</span>
          <span>{property.bathrooms} baths</span>
          <span>{property.area} sq ft</span>
        </div>

        {property.tokenized && (
          <div className="mt-3 pt-3 border-t">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Token Price:</span>
              <span className="text-primary font-medium">${property.tokenPrice}</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Available: {property.availableTokens} / {property.totalTokens}</span>
              <span>{tokenPercentage}% remaining</span>
            </div>
            <Progress value={tokenPercentage} className="h-1.5" />
          </div>
        )}
      </div>
    </Link>
  );
}
