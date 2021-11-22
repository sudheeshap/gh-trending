import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import RespositoryPage from './pages/repository/RepositoryPage';
import DeveloperPage from './pages/developer/DeveloperPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Routes>
          <Route path="/" element={<RespositoryPage />} />
          <Route path="/repositories" element={<RespositoryPage />} />
          <Route path="/developers" element={<DeveloperPage />} />
        </Routes>
      </main>
    </QueryClientProvider>
  );
};

export default App;
