import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/home/HomePage';
import { CommunitiesPage } from './pages/communities/CommunitiesPage';
import { CommunityProfilePage } from './pages/community-profile/CommunityProfilePage';
import { CulturePage } from './pages/culture/CulturePage';
import { ExplorePage } from './pages/explore/ExplorePage';
import { MuseumPage } from './pages/museum/MuseumPage';
import { ResearchPage } from './pages/research/ResearchPage';
import { AboutPage } from './pages/about/AboutPage';
import { ExhibitionModePage } from './pages/exhibition/ExhibitionModePage';
import { ScrollToTop } from './utils/ScrollToTop';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Exhibition Mode is a dedicated full-screen kiosk interface */}
        <Route path="/exhibition" element={<ExhibitionModePage />} />

        {/* Standard Website Pages wrapped in Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/communities"
          element={
            <Layout>
              <CommunitiesPage />
            </Layout>
          }
        />
        <Route
          path="/communities/:slug"
          element={
            <Layout>
              <CommunityProfilePage />
            </Layout>
          }
        />
        <Route
          path="/culture"
          element={
            <Layout>
              <CulturePage />
            </Layout>
          }
        />
        <Route
          path="/explore"
          element={
            <Layout>
              <ExplorePage />
            </Layout>
          }
        />
        <Route
          path="/museum"
          element={
            <Layout>
              <MuseumPage />
            </Layout>
          }
        />
        <Route
          path="/research"
          element={
            <Layout>
              <ResearchPage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
