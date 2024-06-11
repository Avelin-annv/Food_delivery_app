import React, { useState } from "react";
import CategoryAccordion from "./CategoryAccordion";

const ItemCategory = ({ dataList, expand, setExpandedIndex }) => {
  //managing state seperately->remove expand prop also

  //const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    // setExpand(!expand);
    //if already expaned=> false
    setExpandedIndex();
  };
  return (
    <div className="w-10/12 lg:w-6/12 md:lg:w-8/12 mx-auto my-8 p-4 shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleExpand}
      >
        <h1 className="font-bold font-2xl">{`${dataList.title}(${dataList?.itemCards?.length})`}</h1>
        <button onClick={handleExpand}>{expand ? "➡️" : "⬇️"}</button>
      </div>
      {/* Previously passed datalist only */}
      {expand && <CategoryAccordion dataList={dataList.itemCards} />}
    </div>
  );
};

export default ItemCategory;
