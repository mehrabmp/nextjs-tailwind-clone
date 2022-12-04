import { Features, Header, Hero, Intro } from 'components';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Features />
      </main>
      <footer></footer>
    </>
  );
}
