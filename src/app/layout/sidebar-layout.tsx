import { LayoutNavbar } from '@/widgets/layout-navbar';
import { LayoutSidebar } from '@/widgets/layout-sidebar';
import { Layout } from '@/shared/ui';

export const sidebarLayout = (
  <Layout sidebar={<LayoutSidebar />} navbar={<LayoutNavbar />} />
);
