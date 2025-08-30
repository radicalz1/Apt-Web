import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { LanguageProvider } from './contexts/LanguageContext.tsx';
import { ModalProvider } from './contexts/ModalContext.tsx';
import { CartProvider } from './contexts/CartContext.tsx';
import { ToastProvider } from './contexts/ToastContext.tsx';
import { LightboxProvider } from './contexts/LightboxContext.tsx';
import { BookmarkProvider } from './contexts/BookmarkContext.tsx';
import { ReadingPreferencesProvider } from './contexts/ReadingPreferencesContext.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <ReadingPreferencesProvider>
              <BookmarkProvider>
                <ModalProvider>
                  <CartProvider>
                    <ToastProvider>
                      <LightboxProvider>
                        <App />
                      </LightboxProvider>
                    </ToastProvider>
                  </CartProvider>
                </ModalProvider>
              </BookmarkProvider>
            </ReadingPreferencesProvider>
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);