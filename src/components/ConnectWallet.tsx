
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock wallet data - in a real app, this would use a Web3 library
const wallets = [
  { id: "metamask", name: "MetaMask", icon: "M" },
  { id: "walletconnect", name: "WalletConnect", icon: "W" },
  { id: "coinbase", name: "Coinbase Wallet", icon: "C" },
];

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleConnect = (walletId: string) => {
    // In a real app, this would connect to the actual wallet
    console.log(`Connecting to ${walletId}...`);
    
    // Mock successful connection
    setTimeout(() => {
      setIsConnected(true);
      setConnectedWallet(walletId);
      setIsOpen(false);
      
      // Redirect to admin dashboard after connecting
      navigate("/admin");
    }, 1000);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setConnectedWallet("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={isConnected ? "outline" : "default"}>
          <Wallet className="mr-2 h-4 w-4" />
          {isConnected 
            ? `Connected: ${connectedWallet.charAt(0).toUpperCase() + connectedWallet.slice(1)}` 
            : "Connect Wallet"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>
            Connect with one of our available wallet providers to continue
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {!isConnected ? (
            wallets.map((wallet) => (
              <Button
                key={wallet.id}
                variant="outline"
                className="flex justify-start items-center"
                onClick={() => handleConnect(wallet.id)}
              >
                <span className="h-6 w-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-2">
                  {wallet.icon}
                </span>
                {wallet.name}
              </Button>
            ))
          ) : (
            <div className="space-y-4">
              <div className="text-center p-4 border rounded-md">
                <p className="font-medium">Connected to {connectedWallet}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  0x1234...5678
                </p>
              </div>
              <Button variant="destructive" onClick={handleDisconnect}>
                Disconnect
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
