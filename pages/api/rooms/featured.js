import dbConnect from "../../../utils/dbConnect";
import Room from '../../../models/room'

dbConnect();

export default async (req, res) => {
    const { method } = req;
    try {
        const data = await Room.find({featured: true});
        res.status(200).json({ success: true, rooms: data });
    }catch (e) {
        res.status(400).json({ success: false })
    }

}