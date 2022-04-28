const ParaText = (props) => {

    const dataToString = (data) => {
        return data.map((data) => {
            return <div className="paragraph"><p>{data}</p></div>
        });
    }

    return (
        <>
            {dataToString(props.data)}
        </>
    )
}

export default ParaText