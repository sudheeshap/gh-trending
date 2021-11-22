import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import RepositoryPage from './pages/repository/RepositoryPage';
import DeveloperPage from './pages/developer/DeveloperPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Routes>
          <Route path="/" element={<RepositoryPage />} />
          <Route path="/repositories" element={<RepositoryPage />} />
          <Route path="/developers" element={<DeveloperPage />} />
        </Routes>
      </main>
    </QueryClientProvider>
  );
};

export default App;
