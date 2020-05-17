import dbConnect from "../../../utils/dbConnect";
import Room from '../../../models/room';

dbConnect();

export default async (req, res) => {
    // console.log(req.body)
    try {
        const data = await Room.find({ title: req.body.title});
        if (data.length > 0 && data[0].type === req.body.type) {
            res.json({ success: false, error: "this type of room is already exist"});
        }
        await Room.create(req.body);
        res.status(200).json({ success: true });
    }catch (e) {
        res.json({ success: false, error: "problem with database"});
    }
}

