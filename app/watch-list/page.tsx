import { Card, CardHeader } from "@/src/components/ui/card";
import Hero from "@/src/components/hero";

export default function Home() {
  return (
    <div className="bg-[var(--color-base-300) h-full flex flex-col items-center justify-center">
       
        < h1 className="text-4xl font-bold text-center mb-8">
            Watch List App
        </h1>

        < h2 className="text-2xl text-center mb-4">
        Tes recommandations du jour !
        </h2>


        <Card className="w-full max-w-2xl mt-8">
            <CardHeader className="text-center text-2xl font-bold">
            Welcome to the Watch List App
            </CardHeader>
            <p className="text-center text-lg text-[var(--color-neutral)]">
            Discover and manage your favorite movies!
            </p>
        </Card>
    </div>
  );
}