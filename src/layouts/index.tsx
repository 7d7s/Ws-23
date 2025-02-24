// layouts/index.tsx
import dynamic from 'next/dynamic';

const MainLayout = dynamic(() => import('../components/layouts/MainLayout'));
const AdminLayout = dynamic(() => import('../components/layouts/AdminLayout'));
const AuthLayout = dynamic(() => import('../components/layouts/AuthLayout'));

export const layoutMapping = {
  main: MainLayout,
  admin: AdminLayout,
  auth: AuthLayout,
};

export function getLayout(layoutName: keyof typeof layoutMapping) {
  return layoutMapping[layoutName] || MainLayout; // Fallback to MainLayout if not found
}
