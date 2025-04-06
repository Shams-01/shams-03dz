import "./globals.css";
import Header from "./(component)/header";
import Footer from "@/app/(component)/footer";
export const metadata = {
    title: "shams03dz",
    description: "This is my portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <Header/>
            {children}
        <Footer/>
        </body>
        </html>
    );
}
