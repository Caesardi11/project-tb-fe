import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCases } from "../store/actions/cases";

const Menu = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCases())
  }, [dispatch]);

  const { data } = useSelector(
    (state) => state.casesReducers
  );
  console.log(data)

  return (
    <div className="flex flex-row space-x-6 justify-center my-5">
      <div className="card w-96 h-fit bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-lg">Total Jumlah Kasus</h2>
          <p className="text-lg">18.629</p>
          <p className="flex flex-row-reverse">Data Tahun 2019</p>
        </div>
      </div>

      <div className="card w-96 h-fit bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-lg">Nilai Rata-rata Tiap Tahun</h2>
          <p className="text-lg">18.629</p>
          <p className="flex flex-row-reverse">Data 1 Tahun Terakhir</p>
        </div>
      </div>

      <div className="card w-96 h-fit bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-row space-x-14 ">
            <div className="">
              <h2 className="card-title text-lg">Nilai Tertinggi</h2>
              <p className="text-lg mt-2">Tembalang</p>
            </div>
            <div className="">
              <h2 className="card-title text-lg">Nilai Terendah</h2>
              <p className="text-lg mt-2">Banyumanik</p>
            </div>
          </div>
          <p className="flex flex-row-reverse">Data Tahun 2019</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
