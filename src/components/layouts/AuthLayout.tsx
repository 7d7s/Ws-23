// components/layouts/AuthLayout.tsx
import { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <h1>Auth Header</h1>
        <div>Header Login</div>
      <main>{children}</main>
      <div>Footer Logout</div>
    </div>
  );
}
