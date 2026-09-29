import type { ReactNode } from "react";
import type { Locale } from "@/content/types";
import "@/styles/globals.css";
export function Root({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#eeeae2" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{document.documentElement.dataset.theme=localStorage.getItem('rr-theme')||'paper';document.documentElement.dataset.motion=localStorage.getItem('rr-motion')||'on'}catch(e){}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
