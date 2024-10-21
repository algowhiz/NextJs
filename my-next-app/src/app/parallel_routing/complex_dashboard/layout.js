export default function ComplexDashboardLayout({ children, user, revenue, notification, login }) {
    const isLogin = true;
    return (
        <>
            { isLogin ?
            <>
            <div>{children}</div>
            <div style={{display:"flex" , flexDirection:'row', gap:'30px'}}>
                <div style={{display:"flex" , flexDirection:"column" , gap:'30px'}}>
                    <div>{user}</div>
                    <div>{revenue}</div>
                </div>
                <div>{notification}</div>
            </div></> : <div>{login}</div>

            }
        </>
    )
}