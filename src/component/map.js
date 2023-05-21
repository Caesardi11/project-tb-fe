import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCases } from "../store/actions/cases";
import { useNavigate } from "react-router-dom";
// import { showLoader, hideLoader } from "../store/actions/loader";
import LoadData from "./UI/LoadData";

const Map = () => {
  const dispatch = useDispatch();
  const throwId = useNavigate();
  useEffect(() => {
    dispatch(getCases());
  }, [dispatch]);

  const { data, loading } = useSelector((state) => state.casesReducers);
  console.log(loading)

  const areaHandler = (id) => {
    throwId("/decision", {
      state: { areaId: id },
    });
  };

  return (
    <>
      {loading && (
        <div className="mt-24">
          <LoadData />{" "}
        </div>
      )}
      <div className="grid grid-cols-3 mx-40 my-16 gap-9 w-fit">
        {data &&
          data.data?.map((cases) => (
            <div
              className="card w-96 h-fit bg-base-100 shadow-xl"
              key={cases.id}
            >
              <button onClick={() => areaHandler(cases.id)}>
                <div className="card-body">
                  <h2 className="card-title text-lg">{cases.daerah}</h2>
                </div>
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Map;
