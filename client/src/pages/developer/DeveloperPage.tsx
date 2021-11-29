import React from 'react';

import DeveloperList from 'components/feature/developer-list/DeveloperList';
import Header from 'components/shared/header/Header';
import Footer from 'components/shared/footer/Footer';

const DeveloperPage = () => {
  return (
    <>
      <Header title="Trending" subTitle="These are the developers building the hot tools today." />
      <section>
        <DeveloperList />
        <Footer />
      </section>
    </>
  );
};
export default DeveloperPage;
