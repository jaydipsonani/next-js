const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div>
                <nav>NAVBAR</nav>
            </div>
            <div>{children}</div>
        </>
    )
}

export default DashboardLayout