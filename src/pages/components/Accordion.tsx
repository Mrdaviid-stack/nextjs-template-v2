'use client'
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface AccordionProps {
  title: string
  children: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
}) => {

  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded((current) => !current)

  return (
    <>
      <div
        onClick={toggleExpanded}
        className="
          flex 
          group 
          cursor-pointer 
          mx-auto 
          h-16 
          justify-between  
          items-center 
          p-2 
          rounded-md 
          border
        ">
        <div 
          className="
            flex group 
            cursor-pointer
          ">
          <div 
            className="
              text-pink-600 
              font-semibold 
              pl-10 
            ">
            {title}
          </div>
        </div>
        <div 
          className="
            flex 
            items-center 
            justify-center 
            pr-10
          ">
          {expanded ? (
            <FiMinus 
              className="
                w-6 h-6 
                text-pink-600" 
              />
          ) : (
            <FiPlus className="w-6 h-6 text-pink-600" />
          )}
        </div>
      </div>


      <div 
        className={` 
          border-blue-300  
          text-pink-500 
          pl-10  
          p-4 
          mb-2 
          font-semibold 
          h-auto  
          rounded-md 
          border-l-2
          ${expanded ? 'block' : 'hidden'}
          `}
        >
        {children}
      </div>

    </>
  )
}

export default Accordion