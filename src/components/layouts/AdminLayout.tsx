// components/layouts/AdminLayout.tsx
import { ReactNode } from 'react';

type AdminLayoutProps = {
    children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div>
            <header>Admin Header</header>
            <aside>Admin Sidebar</aside>
            <main>{children}</main>
            <footer>Admin Footer</footer>
        </div>
    );
}
