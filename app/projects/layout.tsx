import ButtonOnConstruction from "../components/Projects/Project/ButtonOnConstruction";
import ButtonOnMain from "../components/Projects/Project/ButtonOnMain";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <ButtonOnMain textColor="black" />
      <ButtonOnConstruction textColor="black" />
      {children}
    </section>
  );
}
