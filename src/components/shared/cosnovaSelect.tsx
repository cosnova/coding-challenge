type CosnovaSelectProps = {
  value: string,
  options: string[],
  onChange: Function
};
export const CosnovaSelect = ({ value, options, onChange }: CosnovaSelectProps) => {
  const handleSelectChange = (e: React.FormEvent<HTMLSelectElement>) => { onChange(e.currentTarget.value) }
  return (
    <div>Please select a Category
      <select value={value} onChange={handleSelectChange}>
        <option value={""}>Select One</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>

  );
}
