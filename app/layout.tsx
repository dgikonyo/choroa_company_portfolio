import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import '../public/assets/styles/global.css'

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="eng">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}