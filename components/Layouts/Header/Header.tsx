import { Navbar } from './Navbar';
import { TopBar } from './TopBar';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <Navbar />
    </header>
  );
};
