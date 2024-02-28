import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const Item = ({
  dataItem,
  handleSingleSelection,
  handleMultipleSelection,
  enableMultiSelection,
  selected,
}) => {
  return (
    <div
      className='item cursor-pointer border bg-[#1a1a1a] border-[#999999] flex justify-between items-center p-4 rounded'
      key={dataItem.id}
      onClick={
        enableMultiSelection
          ? () => handleMultipleSelection(dataItem.id)
          : () => handleSingleSelection(dataItem.id)
      }
    >
      <div className='title text-[#FFF] font-semibold text-lg'>
        {dataItem.question}
      </div>
      <span>
        {selected === dataItem.id ? (
          <FaAngleUp className='text-white' />
        ) : (
          <FaAngleDown className='text-white' />
        )}
      </span>
    </div>
  );
};
