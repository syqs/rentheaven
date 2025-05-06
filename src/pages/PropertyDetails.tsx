
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Wallet, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Property } from "@/components/PropertyCard";

// Mock property data
const properties: Record<string, Property> = {
  "prop1": {
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
  "prop2": {
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
  "prop3": {
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
  "prop4": {
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
  "prop5": {
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
  "prop6": {
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
};

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const property = id ? properties[id] : null;
  const [activePaymentMethod, setActivePaymentMethod] = useState<string>("eth");

  // Mock additional property details
  const propertyDetails = {
    description: "This beautiful property offers modern living in a prime location. With stunning views and premium finishes, this is an opportunity not to be missed. The open floor plan and large windows create a bright and welcoming atmosphere.",
    amenities: ["Central Air", "Dishwasher", "Elevator", "Fitness Center", "In-Unit Laundry", "Parking", "Pet-Friendly", "Pool", "Rooftop Deck", "Security System"],
    leaseTerms: "12-month lease minimum. $1,000 security deposit required. Tenants responsible for all utilities.",
    availableDate: "June 1, 2023"
  };

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <p className="text-muted-foreground mb-4">
              The property you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/listings">Browse All Properties</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Back button */}
        <div className="container-custom py-4">
          <Button variant="ghost" asChild>
            <Link to="/listings" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to listings
            </Link>
          </Button>
        </div>

        {/* Property Header */}
        <section className="container-custom pb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{property.title}</h1>
              <div className="flex items-center text-muted-foreground mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.address}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">
                  {property.currency === 'USD' ? '$' : ''}
                  {property.price.toLocaleString()}
                </span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
              <Badge className="mt-1">{property.type}</Badge>
            </div>
          </div>
        </section>

        {/* Property Images */}
        <section className="container-custom pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 h-[400px]">
              <img 
                src={property.imageUrl} 
                alt={property.title} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="hidden md:grid grid-rows-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Interior view"
                className="w-full h-full object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80" 
                alt="Interior view"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Property Info Grid */}
        <section className="container-custom pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border rounded-lg">
            <div className="text-center">
              <p className="text-muted-foreground text-sm">Bedrooms</p>
              <p className="text-2xl font-bold">{property.bedrooms}</p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground text-sm">Bathrooms</p>
              <p className="text-2xl font-bold">{property.bathrooms}</p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground text-sm">Area</p>
              <p className="text-2xl font-bold">{property.area} <span className="text-base font-normal">sq ft</span></p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground text-sm">Available From</p>
              <p className="text-lg font-bold">{propertyDetails.availableDate}</p>
            </div>
          </div>
        </section>

        {/* Property Details Tabs */}
        <section className="container-custom pb-8">
          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="payment">Payment Options</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="p-6 border rounded-lg mt-4">
              <h3 className="text-xl font-semibold mb-4">Description</h3>
              <p className="text-muted-foreground">{propertyDetails.description}</p>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Lease Terms</h4>
                <p className="text-muted-foreground">{propertyDetails.leaseTerms}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="amenities" className="p-6 border rounded-lg mt-4">
              <h3 className="text-xl font-semibold mb-4">Amenities & Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {propertyDetails.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="payment" className="p-6 border rounded-lg mt-4">
              <h3 className="text-xl font-semibold mb-4">Cryptocurrency Payment Options</h3>
              <p className="text-muted-foreground mb-6">
                This property accepts the following cryptocurrencies for monthly rent payments:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {property.crypto?.eth && (
                  <div className={`p-4 border rounded-lg ${activePaymentMethod === 'eth' ? 'border-primary bg-primary/5' : ''}`}
                    onClick={() => setActivePaymentMethod('eth')}>
                    <div className="flex justify-between items-center">
                      <div className="font-medium">Ethereum</div>
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        Ξ
                      </div>
                    </div>
                    <div className="mt-2 text-lg font-bold">Ξ {property.crypto.eth}</div>
                    <div className="text-xs text-muted-foreground">per month</div>
                  </div>
                )}
                
                {property.crypto?.matic && (
                  <div className={`p-4 border rounded-lg ${activePaymentMethod === 'matic' ? 'border-primary bg-primary/5' : ''}`}
                    onClick={() => setActivePaymentMethod('matic')}>
                    <div className="flex justify-between items-center">
                      <div className="font-medium">Polygon</div>
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                        M
                      </div>
                    </div>
                    <div className="mt-2 text-lg font-bold">{property.crypto.matic} MATIC</div>
                    <div className="text-xs text-muted-foreground">per month</div>
                  </div>
                )}
                
                {property.crypto?.bnb && (
                  <div className={`p-4 border rounded-lg ${activePaymentMethod === 'bnb' ? 'border-primary bg-primary/5' : ''}`}
                    onClick={() => setActivePaymentMethod('bnb')}>
                    <div className="flex justify-between items-center">
                      <div className="font-medium">Binance</div>
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                        B
                      </div>
                    </div>
                    <div className="mt-2 text-lg font-bold">{property.crypto.bnb} BNB</div>
                    <div className="text-xs text-muted-foreground">per month</div>
                  </div>
                )}
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>Payments are processed through secure smart contracts on the respective blockchains.</p>
                <p className="mt-2">Click on a payment method and connect your wallet to proceed with the rental application.</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Application CTA */}
        <section className="container-custom pb-16">
          <div className="p-6 border rounded-lg bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">Interested in this property?</h3>
                <p className="text-muted-foreground">Apply now to secure your rental agreement with cryptocurrency.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex items-center">
                      <Wallet className="mr-2 h-4 w-4" />
                      Apply with Crypto
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Apply for {property.title}</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-center mb-6">Please connect your wallet to continue with the application</p>
                      <Button className="w-full">Connect Wallet to Apply</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Tour
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Schedule a Tour</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-center mb-6">Feature coming soon!</p>
                      <Button variant="outline" className="w-full">Close</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
