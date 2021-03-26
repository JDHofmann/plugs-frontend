import withContext from "../withContext";


function Header({context}){
    return (
        <header>
            <h1>HEADER</h1>
            <p>Welcome Back: {context.user.username}</p>
        </header>
    )
}

export default withContext(Header);