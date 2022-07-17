import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { en, ja, zh } from 'make-plural/plurals';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';

import Footer from '@/components/Footer';
import { defaultLocale, dynamicActivate } from '@/utils';

i18n.loadLocaleData({
  zh: { plurals: zh },
  en: { plurals: en },
  ja: { plurals: ja }
});

export default function App() {
  useEffect(() => {
    dynamicActivate(defaultLocale);
  }, []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <I18nProvider i18n={i18n}>
        <main p="x-4 y-10" text="center gray-700 dark:gray-200">
          {useRoutes(routes)}
          <Footer />
        </main>
      </I18nProvider>
    </Suspense>
  );
}
