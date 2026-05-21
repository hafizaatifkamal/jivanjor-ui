import {
  Ecosystem,
  Hero,
  KnowledgeHub,
  ProductRange,
  Professional,
  RightChoice,
  Testimonial,
} from "@/components/home";

export default function Home() {
  return (
    <div className="font-google-sans min-h-screen bg-background text-foreground">
      <Hero />
      <ProductRange />
      <RightChoice />
      <Professional />
      <Ecosystem />
      <Testimonial />
      <KnowledgeHub />
    </div>
  );
}
