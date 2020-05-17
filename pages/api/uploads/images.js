import mime from 'mime';
import formidable from 'formidable';

export const config = {
    api: {
        bodyParser: false
    },
};

export default async (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = `./public/all`;
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (!files || Object.keys(files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        let upload = files.file;
        let formidablePath = form.openedFiles[0].path
        let name = formidablePath.replace("public\\all\\",'');
        let path = `all/${name}`;
        const ext = mime.getExtension(upload.type);
        if (!(ext === 'jpeg' || ext === 'jpg' || ext === 'png')) {
            res.status(400).end('only jpg and png are allowed', false);
        }
        res.statusCode = 200;
        res.json({ success: true, image: path });

    });



};