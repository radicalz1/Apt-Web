import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import ProductDetailPage from './pages/ProductDetailPage.tsx';
import BlogPage from './pages/BlogPage.tsx';
import AuthorPage from './pages/AuthorPage.tsx';
import TagPage from './pages/TagPage.tsx';
import SitemapPage from './pages/SitemapPage.tsx';
import RssPage from './pages/RssPage.tsx';
import BookmarksPage from './pages/BookmarksPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { CartDrawer } from './components/cart/CartDrawer.tsx';
import { PolicyModal } from './components/common/PolicyModal.tsx';
import { IntroModal } from './components/common/IntroModal.tsx';
import { ToastContainer } from './components/common/ToastContainer.tsx';
import { ScrollToTop } from './components/common/ScrollToTop.tsx';
import { ImageLightbox } from './components/common/ImageLightbox.tsx';
import BlogPostPage from './pages/BlogPostPage.tsx';
import { ExitIntentModal } from './components/common/ExitIntentModal.tsx';
import AuthPage from './pages/AuthPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import QuestionnairePage from './pages/QuestionnairePage.tsx';
import { useAuth } from './contexts/AuthContext.tsx';
import SubmissionsPage from './pages/SubmissionsPage.tsx';
import { AdminLayout } from './components/admin/AdminLayout.tsx';
import AdminDashboardPage from './pages/admin/AdminDashboardPage.tsx';
import AdminSubmissionsPage from './pages/admin/AdminSubmissionsPage.tsx';
import AdminUsersPage from './pages/admin/AdminUsersPage.tsx';

const PageLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isInitialized } = useAuth();

  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>Loading session...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return <>{children}</>;
};

const AdminRouteWrapper = () => {
  const { user, isInitialized } = useAuth();

  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>Loading session...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  if (user.role !== 'super_admin') {
      return <Navigate to="/dashboard" replace />;
  }

  return <AdminLayout />;
};


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="blog/author/:authorId" element={<AuthorPage />} />
          <Route path="blog/tag/:tag" element={<TagPage />} />
          <Route path="blog/bookmarks" element={<BookmarksPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
          
          <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="questionnaire" element={<ProtectedRoute><QuestionnairePage /></ProtectedRoute>} />
          <Route path="submissions" element={<ProtectedRoute><SubmissionsPage /></ProtectedRoute>} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
        
        <Route path="/admin" element={<AdminRouteWrapper />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="submissions" element={<AdminSubmissionsPage />} />
          <Route path="users" element={<AdminUsersPage />} />
        </Route>

        <Route path="/auth" element={<AuthPage />} />
        <Route path="/blog/rss.xml" element={<RssPage />} />
      </Routes>
      <CartDrawer />
      <PolicyModal />
      <IntroModal />
      <ExitIntentModal />
      <ToastContainer />
      <ImageLightbox />
    </>
  );
}

export default App;