import React from 'react';

import RepositoryList from 'components/feature/repository-list/RepositoryList';
import Header from 'components/shared/header/Header';
import Footer from 'components/shared/footer/Footer';

const RepositoryPage = () => {
  return (
    <>
      <Header
        title="Trending"
        subTitle="See what the GitHub community is most excited about today."
      />
      <section>
        <RepositoryList />
        <Footer />
      </section>
    </>
  );
};
export default RepositoryPage;
