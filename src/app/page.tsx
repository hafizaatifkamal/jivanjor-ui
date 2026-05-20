import Hero from "@/components/home/Hero";
import ProductRange from "@/components/home/ProductRange";

export default function Home() {
  return (
    <div className="font-google-sans min-h-screen bg-background text-foreground">
      <Hero />
      <ProductRange />
    </div>
  );
}
