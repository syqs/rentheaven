
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { CircleDollarSign, Diamond, House, Key, Layers3 } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 bg-gradient-to-r from-primary/20 to-accent/20">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How Property Tokenization Works</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              RentHaven transforms real estate investment through blockchain technology, allowing fractional ownership of premium properties through tokenization.
            </p>
          </div>
        </section>

        {/* Tokenization Overview */}
        <section className="py-16 container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
                <Diamond className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Property Tokenization</h2>
              <p className="text-muted-foreground mb-6">
                Property tokenization divides real estate assets into digital tokens on the blockchain, each representing partial ownership of the property. This innovative approach makes premium real estate accessible to more investors.
              </p>
              <div className="bg-card p-4 rounded-lg border mb-6">
                <h3 className="font-semibold mb-2">Example:</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A $1,000,000 luxury apartment is divided into 1,000 tokens at $1,000 each.
                </p>
                <div className="flex justify-between text-xs mb-1">
                  <span>Available: 650 / 1000 tokens</span>
                  <span>65% remaining</span>
                </div>
                <Progress value={65} className="h-2" />
                <p className="mt-3 text-sm">
                  Investors can purchase as few or as many tokens as they wish, receiving proportional ownership and returns.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
                alt="Tokenized property illustration"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">The Tokenization Process</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border relative">
                <div className="absolute -top-5 left-6 bg-primary rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 mb-3">
                    <House className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Property Selection</h3>
                  <p className="text-muted-foreground">
                    Our team carefully selects high-quality properties with strong investment potential. Each property undergoes thorough due diligence, including legal verification and professional valuation.
                  </p>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border relative">
                <div className="absolute -top-5 left-6 bg-primary rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 mb-3">
                    <Layers3 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Tokenization</h3>
                  <p className="text-muted-foreground">
                    The property is divided into digital tokens using blockchain technology. Each token represents partial ownership rights and is backed by a legal structure ensuring security and compliance.
                  </p>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border relative">
                <div className="absolute -top-5 left-6 bg-primary rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 mb-3">
                    <Diamond className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Token Distribution</h3>
                  <p className="text-muted-foreground">
                    Tokens are made available on our platform for investors to purchase. You can buy as many tokens as you want, with transactions secured and verified on the blockchain.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-card p-6 rounded-xl border relative">
                <div className="absolute -top-5 left-6 bg-primary rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground font-bold">
                  4
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 mb-3">
                    <Key className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Property Management</h3>
                  <p className="text-muted-foreground">
                    Our professional property management team handles all aspects of property maintenance, tenant relations, and administration, creating a passive investment experience for token holders.
                  </p>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border relative">
                <div className="absolute -top-5 left-6 bg-primary rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground font-bold">
                  5
                </div>
                <div className="pt-4">
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 mb-3">
                    <CircleDollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Returns & Liquidity</h3>
                  <p className="text-muted-foreground">
                    Token holders receive regular rental income proportional to their ownership stake. Tokens can be sold on our secondary marketplace, providing liquidity typically unavailable in traditional real estate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Tokenized Property Investment</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border">
              <h3 className="text-xl font-semibold mb-3">For Investors</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Lower entry barriers to premium real estate</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Portfolio diversification with partial property ownership</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Enhanced liquidity compared to traditional real estate</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Transparent ownership records on blockchain</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Passive income through rental returns</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-xl border">
              <h3 className="text-xl font-semibold mb-3">For Property Owners</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Unlock property value without full sale</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Access to broader investor market</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Reduced administrative burden through our management</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Accelerated liquidity and capital raising</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Maintain partial ownership if desired</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-xl border">
              <h3 className="text-xl font-semibold mb-3">Technology Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Immutable ownership records on blockchain</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Smart contracts for automated distributions</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Reduced transaction costs and settlement time</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Cross-border investment accessibility</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2 mt-2"></div>
                  <span>Transparent property performance metrics</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/listings">
                Browse Tokenized Properties
              </Link>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">What is property tokenization?</h3>
                  <p className="text-muted-foreground">
                    Property tokenization is the process of dividing a real estate asset into digital tokens on the blockchain, with each token representing partial ownership of the property. This allows investors to purchase fractions of a property rather than the entire asset.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">How do I earn returns from tokenized properties?</h3>
                  <p className="text-muted-foreground">
                    Token holders receive proportional rental income from the property. For example, if you own 5% of the tokens, you'll receive 5% of the net rental income. Returns are distributed regularly, typically monthly or quarterly, directly to your wallet.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">How is property tokenization legally structured?</h3>
                  <p className="text-muted-foreground">
                    Our tokenized properties are typically held by a Special Purpose Vehicle (SPV) or a trust, which legally owns the property. Tokens represent ownership shares in this entity, providing legal rights to the corresponding portion of the property and its income.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">How can I sell my property tokens?</h3>
                  <p className="text-muted-foreground">
                    You can sell your tokens on our secondary marketplace, providing liquidity not typically available in traditional real estate investments. The value of tokens can fluctuate based on property performance and market demand.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">What cryptocurrencies can I use to buy tokens?</h3>
                  <p className="text-muted-foreground">
                    We currently support payments in Ethereum (ETH), Polygon (MATIC), and Binance Coin (BNB). Token prices are fixed in USD equivalent, with cryptocurrency amounts adjusted at time of purchase based on current market rates.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">What risks are involved in tokenized property investment?</h3>
                  <p className="text-muted-foreground">
                    Like any investment, tokenized real estate carries risks including property value fluctuation, rental market changes, and regulatory developments. However, the fractional nature allows for better risk diversification across multiple properties.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" asChild className="mr-4">
                <Link to="/listings">
                  View Available Properties
                </Link>
              </Button>
              <Button asChild>
                <Link to="/connect-wallet">
                  Connect Wallet to Invest
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
