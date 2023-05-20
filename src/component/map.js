import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCases } from "../store/actions/cases";

const Map = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCases());
  }, [dispatch]);

  const { data } = useSelector((state) => state.casesReducers);

  return (
    <div className="grid grid-cols-3 mx-40 my-16 gap-9 w-fit">
      {data.data?.map((cases) => (
        <div className="card w-96 h-fit bg-base-100 shadow-xl">
          <button>
            <div className="card-body">
              <h2 className="card-title text-lg">{cases.daerah}</h2>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Map;
