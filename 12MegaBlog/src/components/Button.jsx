import React from 'react'

function Button({
    children,
    type="button",
    bgColor="bg-blue-600",
    textColor="text-white",
    className="",
    ...props
}) {
    // when u want to add the classes in the classname u need to use this {``} and we will be adding classees that is why we will use ${} inside  className 
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}{...props}>
        {children}
    </button>
  )
}

export default Button