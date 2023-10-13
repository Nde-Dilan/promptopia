import '@styles/global.css';
import NavBar from '@components/NavBar';
import Provider from '@components/Provider';
export const metadata = {
    title:'promptopia',
    description:'discover AI prompts'
}


const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        
        <body>
        <Provider >
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className='app'>
                <NavBar/>
                {children}
            </main>
            </Provider>
        </body>
       
    </html>
  )
}

export default RootLayout