import Nav from '@/components/navbar/Nav';
import ButtonOnConstruction from '../../components/projects/project/buttonOnConstruction/ButtonOnConstruction';
import ButtonOnMain from '../../components/projects/project/buttonOnMain/ButtonOnMain';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <ButtonOnMain textColor="black" />
      <Nav />
      {children}
      <ButtonOnConstruction textColor="black" />
    </section>
  );
}
