import Nav from '@/components/navbar/Nav';
import ButtonOnConstruction from '../../components/projects/project/buttonOnConstruction/ButtonOnConstruction';
import ButtonOnMain from '../../components/projects/project/buttonOnMain/ButtonOnMain';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-w-[375px] w-full">
      <ButtonOnMain textColor="black" />
      {children}
      <ButtonOnConstruction textColor="black" />
    </section>
  );
}
