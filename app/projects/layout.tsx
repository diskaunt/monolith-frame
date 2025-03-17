import ButtonOnConstruction from "../components/Projects/Project/ButtonOnConstruction";
import ButtonOnMain from "../components/Projects/Project/ButtonOnMain";

export default function RootLayout({
  children,
  navigate,
}: {
  children: React.ReactNode;
  navigate: React.ReactNode;
}) {
  return (
    <section className="">
      <ButtonOnMain textColor="black" />
      <ButtonOnConstruction textColor="black" />
      {children}
    </section>
  );
}
