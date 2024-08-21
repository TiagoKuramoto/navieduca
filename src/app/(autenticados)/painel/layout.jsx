import Footer from "@/components/footer";
import Menu from "@/components/Menu";


export default function Layout({ children }) {
    return ( 
        <div>
            <Menu />
            {children}
            <Footer />
        </div>
    );
}