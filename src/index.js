import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import ContextTweetProvider from './components/context/ContextTweet';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <ContextTweetProvider>
    <App />
    <ReactQueryDevtools />
    </ContextTweetProvider>
  </QueryClientProvider>
)
