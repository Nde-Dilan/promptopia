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
        <Provider >
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className='app'>
                <NavBar/>
                {children}
            </main>
        </body>
        </Provider>
    </html>
  )
}

export default RootLayout