'use client';

import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Layout from './styling/layout';
import { theme } from './styling/theme';
import { GlobalStyle } from './styling/globals';
import { ThemeProvider } from 'styled-components';
import { queryClient } from './react-query/queryClient';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="kor">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Layout>
            <GlobalStyle />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </Layout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
