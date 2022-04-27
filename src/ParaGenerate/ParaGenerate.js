import {useState} from "react";
import ParaText from "../ParaText/ParaText";

function ParaGenerate() {

    const [inputValue, setInputValue] = useState(1)

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
    

    return (
        <>
        <h6 className="formTitle">How many paragraphs do you need?</h6>
        <div className='formSection'>
            <div className="inputSection">
                <input type="text" value={inputValue} max="10" min="1" className="numInput" />
                <input type="button" value="+" className="plusButton" onClick={plusButtonFunction} />
                <input type="button" value="-" className="minusButton" onClick={minusButtonFunction} />
            </div>
            <div className="generateButton">
                <input type="submit" value="Generate" />
            </div>
        </div>
            <div className='paragraphContainer'>
                <ParaText />
            </div>
        </>
    )
}

export default ParaGenerate;