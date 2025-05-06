
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard, Property } from "@/components/PropertyCard";
import { PropertyFilterSidebar, PropertyFilters } from "@/components/PropertyFilterSidebar";

// Mock property listings data
const allProperties: Property[] = [
  {
    id: "prop1",
    title: "Modern Downtown Apartment",
    address: "123 Main St, New York, NY",
    price: 3500,
    currency: "USD",
    crypto: {
      eth: 1.2,
      matic: 1200
    },
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Apartment"
  },
  {
    id: "prop2",
    title: "Luxury Waterfront Condo",
    address: "456 Ocean Ave, Miami, FL",
    price: 5000,
    currency: "USD",
    crypto: {
      eth: 1.8,
      bnb: 12
    },
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Condo"
  },
  {
    id: "prop3",
    title: "Spacious Family Home",
    address: "789 Oak St, Austin, TX",
    price: 2800,
    currency: "USD",
    crypto: {
      eth: 1.0,
      matic: 1000
    },
    bedrooms: 4,
    bathrooms: 2.5,
    area: 2200,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "House"
  },
  {
    id: "prop4",
    title: "Cozy Studio in Historic District",
    address: "101 Pine St, Boston, MA",
    price: 1800,
    currency: "USD",
    crypto: {
      eth: 0.6,
      matic: 600
    },
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    type: "Apartment"
  },
  {
    id: "prop5",
    title: "Modern Townhouse with Garden",
    address: "555 Elm St, Chicago, IL",
    price: 3200,
    currency: "USD",
    crypto: {
      eth: 1.1,
      bnb: 8
    },
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1700,
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    type: "Townhouse"
  },
  {
    id: "prop6",
    title: "Luxury Hillside Villa",
    address: "777 Palm Ave, Los Angeles, CA",
    price: 9000,
    currency: "USD",
    crypto: {
      eth: 3.2,
      bnb: 24
    },
    bedrooms: 5,
    bathrooms: 4.5,
    area: 4200,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80",
    type: "Villa"
  }
];

export default function Listings() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<PropertyFilters>({
    priceRange: [0, 10000],
    propertyTypes: [],
    bedrooms: [],
    acceptsCrypto: false
  });
  const [displayedProperties, setDisplayedProperties] = useState<Property[]>(allProperties);
  const [showFilters, setShowFilters] = useState(false);

  // Apply filters to properties
  useEffect(() => {
    let filtered = allProperties;
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        property => 
          property.title.toLowerCase().includes(query) ||
          property.address.toLowerCase().includes(query) ||
          property.type.toLowerCase().includes(query)
      );
    }
    
    // Apply price filter
    filtered = filtered.filter(
      property => 
        property.price >= filters.priceRange[0] && 
        property.price <= filters.priceRange[1]
    );
    
    // Apply property type filter
    if (filters.propertyTypes.length > 0) {
      filtered = filtered.filter(
        property => filters.propertyTypes.includes(property.type)
      );
    }
    
    // Apply bedrooms filter
    if (filters.bedrooms.length > 0) {
      filtered = filtered.filter(
        property => filters.bedrooms.includes(property.bedrooms)
      );
    }
    
    // Apply crypto filter
    if (filters.acceptsCrypto) {
      filtered = filtered.filter(property => property.crypto);
    }
    
    setDisplayedProperties(filtered);
  }, [searchQuery, filters]);

  const handleFilterChange = (newFilters: PropertyFilters) => {
    setFilters(newFilters);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Search Header */}
        <section className="bg-muted py-10">
          <div className="container-custom">
            <h1 className="text-3xl font-bold mb-6">Find Your Perfect Rental Property</h1>
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by location, property type or keyword..."
                className="pl-10 pr-4 py-6 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>
        
        <section className="py-10 container-custom">
          <div className="lg:grid lg:grid-cols-4 gap-8">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <Button onClick={toggleFilters} variant="outline" className="w-full">
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>
            
            {/* Filters Sidebar - Mobile */}
            {showFilters && (
              <div className="lg:hidden mb-6 p-4 border rounded-lg bg-card">
                <PropertyFilterSidebar onFilterChange={handleFilterChange} />
              </div>
            )}
            
            {/* Filters Sidebar - Desktop */}
            <div className="hidden lg:block">
              <div className="sticky top-24 p-4 border rounded-lg bg-card">
                <PropertyFilterSidebar onFilterChange={handleFilterChange} />
              </div>
            </div>
            
            {/* Listings Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">
                  {displayedProperties.length} {displayedProperties.length === 1 ? 'Property' : 'Properties'} Found
                </h2>
              </div>
              
              {displayedProperties.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">No properties found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search filters to find more properties.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
