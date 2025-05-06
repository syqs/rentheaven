
import { Link } from "react-router-dom";
import { ArrowRight, Wallet, Database, Key, Layers, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PropertyCard, Property } from "@/components/PropertyCard";

// Mock featured properties
const featuredProperties: Property[] = [
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
    type: "Apartment",
    tokenized: true,
    totalTokens: 1000,
    availableTokens: 650,
    tokenPrice: 75
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
    type: "Condo",
    tokenized: true,
    totalTokens: 2000,
    availableTokens: 1200,
    tokenPrice: 120
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
    type: "House",
    tokenized: true,
    totalTokens: 1500,
    availableTokens: 800,
    tokenPrice: 95
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Own a Piece of <span className="gradient-text">Real Estate</span> Through Tokenization
              </h1>
              <p className="text-lg text-muted-foreground">
                RentHaven transforms physical properties into digital assets through NFTs, enabling fractional ownership 
                and investment opportunities previously unavailable to the average investor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/listings">Browse Properties</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/how-it-works">How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl p-4">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Luxury apartment view"
                  className="rounded-xl shadow-xl w-full h-auto animate-float"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border">
                <p className="text-sm font-medium">Invest With:</p>
                <p className="text-xs text-muted-foreground">ETH · MATIC · BNB</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
                <p className="text-sm font-medium">Fractional Ownership</p>
                <p className="text-xs text-muted-foreground">NFT-Backed Assets</p>
              </div>
            </div>
          </div>
        </section>

        {/* How Tokenization Works */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Property Tokenization Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We convert real estate into tradable digital tokens, making property investment accessible to everyone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-xl border text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Property Tokenization</h3>
                <p className="text-muted-foreground">
                  Properties are divided into digital tokens representing fractional ownership.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fractional Ownership</h3>
                <p className="text-muted-foreground">
                  Invest in a portion of high-value properties that would otherwise be inaccessible.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Passive Income</h3>
                <p className="text-muted-foreground">
                  Earn rental income proportional to your ownership stake in the property.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Liquidity</h3>
                <p className="text-muted-foreground">
                  Trade your property tokens anytime on our marketplace with no lock-up periods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose RentHaven?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're combining traditional real estate with blockchain technology to democratize property investment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Low Entry Barriers</h3>
                <p className="text-muted-foreground">
                  Start investing in real estate with as little as $100 equivalent in cryptocurrency.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
                <p className="text-muted-foreground">
                  Transparent ownership records and automated dividend distributions through blockchain.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
                <p className="text-muted-foreground">
                  Blockchain-based security ensures your investments and transactions are protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section className="py-20 container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Tokenized Properties</h2>
            <Button variant="link" asChild>
              <Link to="/listings" className="flex items-center">
                View all properties <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/20 to-accent/20">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to own a piece of prime real estate?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of investors already diversifying their portfolio with tokenized property investments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/listings">Start Investing</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
