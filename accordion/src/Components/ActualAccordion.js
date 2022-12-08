import React from "react";
import { apiData } from "./ApiData";
import AccordionStyle from "./AccordionStyle";


export default function ActualAccordion()
{
    return <>
    <div id="flex mainContainer">
    <h1 className="text-2xl font-extrabold text-center p-14 bg-yellow-300">Accordion App</h1>

    <div id="accordionCard" className="mt-10 flex w-2/5 h-auto p-6 rounded-md container mx-auto bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">

        <div className="flex flex-col gap-y-6 conatiner mx-auto p-5 w-full bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-xl">
            {
                apiData.map((currentVal, index)=>{
                    return <AccordionStyle key = {currentVal.id} id = {index} question = {currentVal.question} answer = {currentVal.answer}/>
                })
            }

        </div>
    </div>

    </div>
    </>
}