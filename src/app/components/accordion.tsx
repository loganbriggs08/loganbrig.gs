"use client"

import {useState} from "react";
import {AccordionEntry, AccordionProps} from "@/props/components/accordion";

export default function Accordion(props: AccordionProps) {
    const [openAccordions, setOpenAccordions] = useState<number[]>([0]);

    function toggleOpenAccordions(accordionIndex: number) {
        if (openAccordions.includes(accordionIndex)) {
            setOpenAccordions(openAccordions.filter(index => index !== accordionIndex));
        } else {
            setOpenAccordions([...openAccordions, accordionIndex]);
        }
    }

    return (
        <div>
            {props.accordions.map((accordionEntry: AccordionEntry, accordionIndex: number) => {
                return (
                    <button
                        key={accordionIndex}
                        className={
                            accordionIndex === 0 ?
                                "p-4 pt-6 w-full flex flex-row rounded-xl bg-[var(--mid-blue)] border-b-8 border-b-[var(--dark-blue)]"
                                :
                                "mt-5 w-full flex flex-row p-4 pt-6 rounded-xl bg-[var(--mid-blue)] border-b-8 border-b-[var(--dark-blue)]"
                        }
                        onClick={() => toggleOpenAccordions(accordionIndex)}
                    >
                        <div>
                            <h2>
                                {accordionEntry.title}
                            </h2>

                            {openAccordions.includes(accordionIndex) && (
                                <p>{accordionEntry.description}</p>
                            )}
                        </div>

                        <div className="ml-auto mr-5">
                            <button>
                                {openAccordions.includes(accordionIndex) ? (
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                ) : (
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                )}

                            </button>
                        </div>

                    </button>
                )
            })}
        </div>
    );
}