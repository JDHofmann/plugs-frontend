export default function Header({user}){
    return (
        <header>
            <h1>HEADER</h1>
            <p>Welcome Back: {user.username}</p>
        </header>
    )
}