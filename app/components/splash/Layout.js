import React from 'react';

const Layout = ({children}) => {
    return (
        <main className="flex flex-col min-h-screen">
            <section>{children}</section>
        </main>
    );
};

export default Layout;