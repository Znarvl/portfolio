function Title({children, id, orientation}: {children: string, id:string, orientation: "left" | "right"}){
    const isTitleRightAligned = orientation === "right";
    return (
       <h1
        id={id && id}
         className={`text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 ${isTitleRightAligned ? "text-right" : "text-left"}`}
        >
            {children}
       </h1>
    )
}

export default Title;