import { Navbar } from './Navbar';
import { TopBar } from './TopBar';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm backdrop-saturate-[180%]">
      <TopBar />
      <Navbar />
    </header>
  );
};
