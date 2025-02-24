'use client';

import { useAdvancedLayout } from '../../hooks/useAdvancedLayout';

function AdminPage() {
  useAdvancedLayout('auth', 'dark'); // Set admin layout and theme

  return <div>Welcome to the Admin Page!</div>;
}

export default AdminPage;
