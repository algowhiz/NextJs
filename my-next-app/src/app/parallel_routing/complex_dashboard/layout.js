export default function ComplexDashboardLayout ({children , user , revenue , notification}){
    return (
        <>
            <div>{children}</div>
            <div style={{display:"flex"}}>
                <div style={{display:"flex" , flexDirection:"column" }}>
                    <div>{user}</div>
                    <div>{revenue}</div>
                </div>
                <div>{notification}</div>
            </div>
        </>
    )
}