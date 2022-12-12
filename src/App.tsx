// import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import './App.css';

import { Router } from "components/routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        < Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
