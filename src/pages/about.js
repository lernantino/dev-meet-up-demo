import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SecondaryPage from '../components/SecondaryPage';

const About = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>About Meet/Hang/Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SecondaryPage title="About Meet/Hang/Code">
        <p>
          Cupidatat labore anim reprehenderit minim consequat irure. Laborum et
          sit do exercitation. Laborum sint officia ut elit id. Dolor quis duis
          nostrud exercitation et. Adipisicing ad non exercitation id consequat
          labore qui adipisicing.
        </p>

        <p>
          Laborum voluptate adipisicing est qui velit deserunt. Tempor culpa
          nisi sint commodo tempor minim culpa veniam incididunt. Irure
          reprehenderit enim qui deserunt exercitation cillum aliquip sunt
          pariatur. Veniam minim et qui commodo deserunt consectetur in aliquip.
          Ea irure consequat eiusmod do adipisicing incididunt.
        </p>

        <h3>What Motivates Us.</h3>

        <p>
          Mollit dolor ea amet laborum incididunt mollit. Aute proident aliquip
          culpa cillum consectetur voluptate. Laboris nulla quis sit proident.
          Enim et exercitation elit veniam occaecat ex. Voluptate eiusmod
          cupidatat ea culpa.
        </p>

        <p>
          Est laborum exercitation in aute. Labore id minim excepteur laboris do
          consectetur. Non enim quis ea voluptate elit nisi.
        </p>

        <p>
          Velit elit cillum culpa labore sint cillum. Amet id et anim anim
          dolor. Nisi ea nulla eiusmod ipsum.
        </p>
      </SecondaryPage>
      <Footer />
    </div>
  );
};
export default About;
