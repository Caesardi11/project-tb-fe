import React from "react";

const Area = () => {
  return (
    <>
      <div className="pt-10 pl-10 ml-32">
        <h2 className="font-bold text-2xl">Tembalang</h2>
      </div>

      <div className="flex flex-row space-x-6 justify-center my-5">
        <div className="card w-96 h-fit bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-lg">Jumlah Kasus</h2>
            <p className="text-lg">225</p>
            <p className="flex flex-row-reverse">Data Tahun 2019</p>
          </div>
        </div>

        <div className="card w-96 h-fit bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-lg">Tingkat Kerentanan</h2>
            <p className="text-lg">30%</p>
            <p className="flex flex-row-reverse">Data Tahun 2019</p>
          </div>
        </div>

        <div className="card w-96 h-fit bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-lg">Status</h2>
            <p className="flex flex-row-reverse">Data Tahun 2019</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Area;
