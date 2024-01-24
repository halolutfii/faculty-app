import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL

export const getDataMahasiswa = async () => {
    const mahasiswa = await axios.get(`${baseURL}?page=1&limit=2`)
    return mahasiswa.data
}

export const searchMahasiswa = async (q) => {
    const search = await axios.get(`${baseURL}?name=${q}`)
    return search.data
}

export const getProfileMahasiswa = async (id) => {
    const profile = await axios.get(`${baseURL}/${id}`)
    return profile.data
}

