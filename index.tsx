import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { LanguageProvider } from './contexts/LanguageContext.tsx';
import { ModalProvider } from './contexts/ModalContext.tsx';
import { CartProvider } from './contexts/CartContext.tsx';
import { ToastProvider } from './contexts/ToastContext.tsx';
import { LightboxProvider } from './contexts/LightboxContext.tsx';
import { BookmarkProvider } from './contexts/BookmarkContext.tsx';
import { ReadingPreferencesProvider } from './contexts/ReadingPreferencesContext.tsx';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);
