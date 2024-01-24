import React from "react";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { getDataMahasiswa, searchMahasiswa } from "../../api";
import { useParams } from "react-router-dom";

const Cards = () => {
        const [dataMahasiswa, setDataMahasiswa] = useState([])
        const {id} = useParams()

        useEffect(() => {
            getDataMahasiswa().then((res) => {
                return setDataMahasiswa(res)
            })
        }, [])

        const DataList = () =>{
            return dataMahasiswa.map((mahasiswa, i) => {
                return (
                    <div key={i}>
                        <Card className="m-5 ">
                            <div className="flex justify-end px-4 pt-4">
                            </div>
                            <div className="flex flex-col items-center pb-10">
                            <img className="mb-3 h-24 w-24 rounded-full shadow-lg" src={mahasiswa.pasFoto} />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                {mahasiswa.name}
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {mahasiswa.fakultas}
                            </span>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a
                                href="Contact.js"
                                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                Info Kontak
                                </a>
                            </div>
                            </div>
                        </Card>
                    </div>
                    
                )
            })
        }

        const search = async(q) => {
            const query = await searchMahasiswa(q)
            setDataMahasiswa(query)
        }

    return (
        <div>
        <div className="m-3 p-3">
        <h1 className="font-bold text-2xl" id="Cari">Cari Dosen Pengajar</h1>  
        <span className="m-10"></span> 
        <div className="App">
            <input type="text" placeholder="Cari Dosen..." className="input input-bordered w-full max-w-" 
            onChange={({target}) => search (target.value)}
        />
        </div>
        </div>
        <div className="max-w m-2 grid grid-flow-row grid-cols-2">
            < DataList />
        </div>
        </div>
    )
}

export default Cards;