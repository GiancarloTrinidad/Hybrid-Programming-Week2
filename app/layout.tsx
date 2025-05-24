import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body> 
        <p>Header</p> 
        {children} 
        <h1>Footer</h1>
      </body>
    </html>
  );
}