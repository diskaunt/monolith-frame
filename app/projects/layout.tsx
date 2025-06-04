import ButtonOnConstruction from "../components/Projects/Project/ButtonOnConstruction";
import ButtonOnMain from "../components/Projects/Project/ButtonOnMain";

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
