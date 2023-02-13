import { useState } from "react"
interface IBaseCheckbox {
    name: string,
    content: string
    onChange: (value: boolean) => void
}
export default function BaseCheckbox({ name, content, onChange }: IBaseCheckbox) {
    const [checked, setChecked] = useState(true)
    const handleToggleChecked = () => {
        setChecked(!checked)
        onChange(checked)
    }
    return (
        <div className="flex-align-center mb-20">
            <input className="mr-10" type="checkbox" name={name} checked={!checked} onChange={handleToggleChecked} />
            <label className="checkbox-label" htmlFor={name}>{content}</label>
        </div>
    )
}