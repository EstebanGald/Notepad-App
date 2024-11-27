
export const Layout = ({children}) => {
    return (
        <main class='flex flex-col'>
            {children}
        </main>
    )
}

export const NavBar = ({children}) => {
    return (
        <div class='flex flex-row m-5'>
            {children}
        </div>
    )
}

export const Content = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}