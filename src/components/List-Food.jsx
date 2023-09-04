import React from "react";



function List_Food() {

  return (
    <div>    
<Search/> 
    </div>
  );
}

export default List_Food;

export const Search=()=>{
  return<div>
   <form className="text-right mr-10 ">
        <input type="search" name="" id="" className="p-3 border rounded " />
        <input
          type="submit"
          value={"Search"}
          className="border border-indigo-200 rounded bg-teal-500 text-white p-3 "
        />
      </form>
  </div>
}
