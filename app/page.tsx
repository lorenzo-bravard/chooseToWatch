import { Card, CardHeader } from "@/src/components/ui/card";
import Hero from "@/src/components/hero";
import { Feature108 } from "@/src/components/blocks/shadcnblocks-com-feature108";
import VoteTabs from "@/src/components/VoteTabs"


export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
    <Hero />
    <Feature108 />
    
    <Card className="w-[350px]">
      <CardHeader className="flex flex-col items-center"> Head </CardHeader>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg">Welcome to Patate!</p>
        <p className="text-sm text-gray-500">Your potato management app</p>
      </div>
      </Card>
    </div>
    
  );
}
