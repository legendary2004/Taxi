import { FormEvent, forwardRef, LegacyRef} from "react"

interface code {
    id: string;
    value: string;
    handleChange: Function;
}

const CodeInput = forwardRef((props: code, ref: LegacyRef<HTMLInputElement>) => {
    
    return (
        <div className="w-16 h-16 ">
            <input ref={ref} id={props.id} name={props.id} value={props.value} onChange={(e: FormEvent<HTMLInputElement>) => props.handleChange(e)} className="w-full h-full flex flex-col items-center justify-center text-center px-5 rounded-xl text-lg bg-gray-100 focus:ring-0 focus:border-yellow-300 dark:bg-gray-900 dark:text-white" type="text" maxLength={1} size={1} />
        </div>
    )
})

export default CodeInput