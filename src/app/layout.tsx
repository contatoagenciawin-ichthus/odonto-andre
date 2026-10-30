import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "André Ávila | Identidade digital", description: "Protótipo visual do design system para o site de André Ávila." };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body>{children}</body></html>}
