import '../styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Template from './template';

export const metadata: Metadata = {
  title: 'CoEngineer',
  description: 'Professional Software Engineering Consultancy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        <Template>{children}</Template>
      </body>
    </html>
  );
}
