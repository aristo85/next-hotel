import React, { useState, useEffect } from 'react';
import Dropzone from "react-dropzone";

const FileUpload = (props) => {
    const [images, setImages] = useState([]);

    const onDrop = async (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data'}
        };
        formData.append("file", files[0])
        try {
            const response = await axios.post('/api/uploads/images', formData, config);
            await setImages([...images, response.data.image]);

        }catch (e) {
            alert('failed to save the image in Server')
        }
    };
    const onDelete = async (indexToDelete) => {
        let deleteItem = images[indexToDelete]
        console.log(deleteItem)
        const response = await axios.delete('/api/uploads/deleteimage',{data: {
                deleteItem
            }});
        if (response.data.success) {
            let newImages = images.filter((image, index) => index !== indexToDelete);
            setImages([...newImages])
        } else {
            alert('failed to Delete the image in Server')
        }
    };

    useEffect(() => {
        props.refreshFunction(images)
    }, [images]);

    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({getRootProps, getInputProps}) => (
                    <div style={{width: '300px', height: '240px', border: '10px solid lightgray', display: "flex",
                        alignItems: "center", justifyContent: "center"}}
                         {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <p style={{fontSize: 100}}>+</p>
                    </div>
                )}

            </Dropzone>
            <div style={{ display: "flex", width: "350px", height: "240px", overflowX: "scroll"}}>
                {images.map((image, index) => {
                    return(<div key={index} onClick={() => onDelete(index)}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px'}}
                             src={image} alt={`productImg-${index}`} />
                    </div>)
                })}

            </div>

        </div>
    );
};

export default FileUpload