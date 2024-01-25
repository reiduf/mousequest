interface Props {
  name: string,
  label: string,
}

export default function TagCheckbox({name, label}: Props) {
  return(
    <div className="bg-mq-purple p-1 px-3 rounded-md inline-flex m-1 justify-center gap-2">
      <input name={name} type="checkbox" />
      <label className="uppercase text-xs font-bold text-white tracking-wide">{label}</label>
  </div>
  )
}