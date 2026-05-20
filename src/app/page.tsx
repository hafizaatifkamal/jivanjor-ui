import {
  Hero,
  ProductRange,
  Professional,
  RightChoice,
} from "@/components/home";

export default function Home() {
  return (
    <div className="font-google-sans min-h-screen bg-background text-foreground">
      <Hero />
      <ProductRange />
      <RightChoice />
      <Professional />
    </div>
  );
}
