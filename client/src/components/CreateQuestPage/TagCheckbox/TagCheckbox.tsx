interface Props {
  name: string,
  label: string,
  onChange: (name:string, checked: boolean) => void,
  checked: boolean,
}

export default function TagCheckbox({name, label, onChange, checked}: Props) {
  return(
    <div 
      onClick={() => onChange(name, !checked)}
      className="bg-mq-purple cursor-pointer p-1 px-3 rounded-md inline-flex m-1 justify-center gap-2">
      <input 
        name={name} 
        type="checkbox"
        onChange={(evt) => onChange(evt.target.name, evt.target.checked)}
        checked={checked}
      />
      <label className="cursor-pointer uppercase text-xs font-bold text-white tracking-wide">{label}</label>
  </div>
  )
}