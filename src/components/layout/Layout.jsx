
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  backLink?: string;
  actionButton?: React.ReactNode;
}

const Layout = ({ children, title, backLink, actionButton }: LayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 pl-[230px]">
        <Header />
        <main className="p-6">
          {(title || backLink || actionButton) && (
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                {backLink && (
                  <a href={backLink} className="text-gray-500">
                    <span className="text-2xl">←</span>
                  </a>
                )}
                {title && <h1 className="text-xl font-semibold">{title}</h1>}
              </div>
              {actionButton && <div>{actionButton}</div>}
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
