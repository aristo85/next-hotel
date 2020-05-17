import axios from 'axios';

export const getFeaturedRooms = async () => {
    const res = await axios.get(`${process.env.URI}/api/rooms/featured`);
    const { rooms } = await res.data;

    return rooms;
};

// export const getAllPaths = async () => {
//     const data = await getAllNotes();
//     return data.map(note => {
//         return {
//             params: {
//                 id: note._id
//             }
//         }
//     });
// };
//
// export const getNoteById = async (id) => {
//     const res = await axios.get(`${process.env.URI}/api/notes/${id}`);
//     return res.data;
// };