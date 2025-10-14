import { Header } from '@/components/Header';
import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen">
            <Header />
            <main>{children}</main>
        </div>
    );
}
