import { useState } from "react";
import data from "./data.js";
import { Item } from "./components/Item";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function App() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  }

  function handleMultipleSelection(id) {
    let copyMultiple = [...multiple];
    const findIndexCurrentId = copyMultiple.indexOf(id);

    if (findIndexCurrentId === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(findIndexCurrentId, 1);
    }
    setMultiple(copyMultiple);
  }

  return (
    <>
      <h3 className='border-b italic border-[#999999] p-4 text-center text-2xl font-semibold max-w-xl mx-auto'>
        My Simple Accordion
      </h3>
      <div className='max-w-sm m-auto mt-5 p-4 text-center flex flex-col gap-3'>
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className='border border-[#999999] p-2 text-center text-2xl font-semibold my-3 rounded max-w-xl ml-10'
        >
          Multi selection
        </button>
      </div>
      {data && data.length > 0 ? (
        <div className='max-w-2xl m-auto mt-6 p-5 text-center flex flex-col gap-3'>
          {data.map((dataItem) => (
            <div key={dataItem.id}>
              <Item
                dataItem={dataItem}
                handleSingleSelection={handleSingleSelection}
                selected={selected}
                enableMultiSelection={enableMultiSelection}
                handleMultipleSelection={handleMultipleSelection}
              />
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
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
