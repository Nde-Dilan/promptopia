import '@styles/global.css';
import NavBar from '@components/NavBar';
import Provider from '@components/Provider';
export const metadata = {
    title:'promptopia',
    description:'discover AI prompts'
}

//TODO: Implement the like functionality with redux toolkit

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <head>
            <link rel="shortcut icon" href="assets/icons/favicon-32x32.ico" type="image/x-icon" />
        </head>
        
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