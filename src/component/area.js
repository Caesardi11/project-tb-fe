import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCasesById } from "../store/actions/cases";
import { showLoader, hideLoader } from "../store/actions/loader";
import LoadData from "./UI/LoadData";

const Area = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideLoader());
    dispatch(getCasesById(state.areaId));
    dispatch(showLoader());
  }, [dispatch, state]);

  const { dataById, loading } = useSelector((state) => state.casesReducers);
  console.log(loading);

  // console.log(state);
  return (
    <>
      {loading && (
        <div className="mt-24">
          <LoadData />{" "}
        </div>
      )}
      {dataById && (
        <>
          <div className="pt-10 pl-10 ml-32">
            <h2 className="font-bold text-2xl">{dataById.daerah}</h2>
          </div>

          <div className="flex flex-row space-x-6 justify-center my-5">
            <div className="card w-96 h-fit bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-lg">Jumlah Kasus</h2>
                <p className="text-lg">{dataById.total_kasus}</p>
                <p className="flex flex-row-reverse">Data Tahun 2019</p>
              </div>
            </div>

            <div className="card w-96 h-fit bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-lg">Tingkat Kerentanan</h2>
                <p className="text-lg">{dataById.status * 100}%</p>
                <p className="flex flex-row-reverse">Data Tahun 2019</p>
              </div>
            </div>

            <div className="card w-96 h-fit bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-lg">Status</h2>
                {dataById.status <= 0.3 ? (
                  <p className="text-lg">Rendah</p>
                ) : dataById.status <= 0.7 ? (
                  <p className="text-lg">Waspada</p>
                ) : (
                  <p className="text-lg">Ini ni Parah ini</p>
                )}
                <p className="flex flex-row-reverse">Data Tahun 2019</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Area;
