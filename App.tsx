import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
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

const PageLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

function App() {
  return (
    <HashRouter>
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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/blog/rss.xml" element={<RssPage />} />
      </Routes>
      <CartDrawer />
      <PolicyModal />
      <IntroModal />
      <ExitIntentModal />
      <ToastContainer />
      <ImageLightbox />
    </HashRouter>
  );
}

export default App;
