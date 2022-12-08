import React, { useState } from "react";
import plusIcon from "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/Accordion App/accordion/src/Icons/plus.png";
import "./AccordionStyle.css";

export default function AccordionStyle(props) {

    const [showAnswer, setShowAnser] = useState(false);


    const displayAnswer = () => {
        setShowAnser(!showAnswer);
        console.log("Id = " + props.id);
    }



    return <>


        <div id="title" className="" onClick={displayAnswer}>

            <div id = "setFont" className="flex flex-row gap-4 items-center py-4 px-2 border-b border-black cursor-pointer bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-md ">
                <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xl px-4 py-2 text-center">{showAnswer ? '➖' : '➕'}</button>

                <h1>{props.question}</h1>
            </div>
            {
                showAnswer && <p id="setFont" className="text-white font-bold py-6 px-8 rounded-md  mb-6 bg-gradient-to-r from-sky-400 to-blue-500">{props.answer}</p>
            }

        </div>

    </>
}