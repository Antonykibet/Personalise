import Header  from './header';
import Footer from './footer';
export default function Layout({children}){
    return(
        <div>
            <Header/>
            <main style={{height:'auto'}}>{children}</main>
            <Footer/>
        </div>
    )
}