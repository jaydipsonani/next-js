const waitFor = (sec: number) => new Promise((res, rej) => setTimeout(res, sec * 1000))

const BoardPage = async () => {
    await waitFor(3)
    return (
        <>
            <h1>board page</h1>
        </>
    )
}

export default BoardPage