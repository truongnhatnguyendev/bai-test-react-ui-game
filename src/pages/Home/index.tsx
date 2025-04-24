import { Banner } from "./Banner/Banner";
import { MenuOptions } from "./MenuOptions";
import { ExclusiveGames } from "./ExclusiveGames";
import { Providers } from "./ProviderGames";

export function Home() {
  return (
    <div className="space-y-6 bg-primary pt-6 overflow-hidden">
      <Banner />
      <main className="px-6 md:px-12 p-5 container mx-auto">
        <MenuOptions />
        <ExclusiveGames />
        <Providers />
      </main>
    </div>
  );
}
