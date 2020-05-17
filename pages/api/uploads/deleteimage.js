
export default (req, res) => {
    let item = req.body.deleteItem;

    const fs = require('fs')

    const path = `./public/${item}`
    console.log(path);
    fs.unlink(path, (err) => {
        if (err) {
            console.error(err)
            return err
        }

        //file removed
    })
    res.statusCode = 200;
    res.json({ success: true })
}