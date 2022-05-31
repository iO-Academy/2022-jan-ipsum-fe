import {useState, useEffect} from "react";
import ParaText from "../ParaText/ParaText";
import {specialCharMap} from "@testing-library/user-event/dist/keyboard";

function ParaGenerate() {

    const [ipsumData, setIpsumData] = useState([])
    const [inputValue, setInputValue] = useState(1)

    useEffect(() => {
        (async () => {
            const data = await getIpsumData();
            setIpsumData(data);
        })()
    }, []);

    const getIpsumData = async () => {
        const response = await fetch('http://localhost:3002/ipsum?paragraphs=' + inputValue)
        let result = await response.json()

        return result.data
    }

    const plusButtonFunction = () => {
        let number = inputValue +1
        if (number > 10) {
            number = 10
        }
        setInputValue(number)
    }

    const minusButtonFunction = () => {
        let number = inputValue -1
        if (number < 1) {
            number = 1
        }
        setInputValue(number)
    }

    const inputValidate = (e) => {
        let pressedKey = parseInt(e.key)
        let char = e.charCode
        if (char === 13) {
            (async () => {
                const data = await getIpsumData();
                setIpsumData(data);
            })()
        }
        if (inputValue === 1 && pressedKey === 0) {
            let num = pressedKey.toString()
            let value = inputValue + num
            let newValue = parseInt(value)
            setInputValue(newValue)
        }else if (pressedKey >= 1 && pressedKey <= 9) {
            setInputValue(pressedKey)
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        if(inputValue <= 10 && inputValue >= 1 && typeof(inputValue) === "number") {
            (async () => {
                const data = await getIpsumData();
                setIpsumData(data);
            })()
        }
    }
    

    return (
        <>
        <h6 className="formTitle">How many paragraphs do you need?</h6>
        <div className='formSection'>
            <div className="inputSection">
                <input type="text" readOnly value={inputValue} max="10" min="1" className="numInput" onKeyPress={inputValidate} />
                <input type="button" value="+" className="plusButton" onClick={plusButtonFunction} />
                <input type="button" value="-" className="minusButton" onClick={minusButtonFunction} />
            </div>
            <div className="generateButton">
                <input type="submit" value="Generate" onClick={handleClick}/>
            </div>
        </div>
            <div className='paragraphContainer'>
                <ParaText data={ipsumData} />
            </div>
        </>
    )
}

export default ParaGenerate;