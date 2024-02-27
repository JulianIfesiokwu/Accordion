import { useState } from "react";
import data from "./data.js";
import { Item } from "./components/Item";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function App() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(id) {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  }

  return (
    <>
      <h3 className='border-b italic border-[#999999] p-4 text-center text-2xl font-semibold'>
        My Simple Accordion
      </h3>
      {data && data.length > 0 ? (
        <div className='max-w-2xl m-auto mt-24 p-5 text-center flex flex-col gap-3'>
          {data.map((dataItem) => (
            <div key={dataItem.id}>
              <Item
                dataItem={dataItem}
                handleSingleSelection={handleSingleSelection}
                selected={selected}
              />
              {selected === dataItem.id ? (
                <div className='mt-2 font-light p-4 italic border border-[#999999] rounded'>
                  {dataItem.answer}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div className='max-w-2xl mx-auto p-5'>
          <p className=''>No data Found!</p>
        </div>
      )}
    </>
  );
}

export default App;
