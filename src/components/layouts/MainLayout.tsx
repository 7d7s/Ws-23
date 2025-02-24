// components/layouts/MainLayout.tsx
import { ReactNode } from 'react';
import Header from '../headers';
import Footer from '../footers';
type MainLayoutProps = {
    children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div>

            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
