interface Props {
  name: string,
  label: string,
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  checked: boolean,
}

export default function TagCheckbox({name, label, onChange, checked}: Props) {
  return(
    <div className="bg-mq-purple p-1 px-3 rounded-md inline-flex m-1 justify-center gap-2">
      <input 
        name={name} 
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <label className="uppercase text-xs font-bold text-white tracking-wide">{label}</label>
  </div>
  )
}