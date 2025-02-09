
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <div className="w-full bg-primary/10 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Stay updated with Valencry
          </h3>
          <p className="text-muted-foreground mb-8">
            Get the latest updates about drops, events, and NFT releases
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
