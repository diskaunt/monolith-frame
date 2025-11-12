import ButtonOnConstruction from "../../src/components/projects/project/buttonOnConstruction/ButtonOnConstruction";
import ButtonOnMain from "../../src/components/projects/project/buttonOnMain/ButtonOnMain";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      <ButtonOnMain textColor="black" />
      {children}
      <ButtonOnConstruction textColor="black" />
    </section>
  );
}
