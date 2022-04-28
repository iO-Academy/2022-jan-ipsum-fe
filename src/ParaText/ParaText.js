const ParaText = (props) => {

    const dataToString = (data) => {
        let key = 0;
        return data.map((data) => {
            key = key + 1;
            return <div className="paragraph" key={key}><p>{data}</p></div>
        });
    }

    return (
        <>
            {dataToString(props.data)}
        </>
    )
}

export default ParaText