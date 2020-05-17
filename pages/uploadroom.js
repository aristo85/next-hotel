import React, { useState, useEffect, useRef } from 'react';
import FileUpload from '../components/uploads/fileRoomUpload';
import axios from 'axios';
import {Form, FormGroup, Label, Input, Button, CustomInput} from 'reactstrap';
import { useRouter} from "next/router";

const extras = [
    "Plush pillows and breathable bed linens",
    "Soft, oversized bath towels",
    "Full-sized, pH-balanced toiletries",
    "Complimentary refreshments",
    "Adequate safety/security",
    "Internet",
    "Comfortable beds"
];
const defaultDescription = 'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.'
function UploadRoom(props) {
    const [title, setTitle] = useState('single');
    const [type, setType] = useState('economy');
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [capacity, setCapacity] = useState(0);
    const [images, setImages] = useState([]);
    const [pets, setPets] = useState(false);
    const [breakfast, setBreakfast] = useState(false);
    const [featured, setFeatured] = useState(false);
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState(defaultDescription);

    const router = useRouter();

    const onChange = (event) => {
      switch (event.target.name) {
          case 'title':
              setTitle(event.target.value);
              break;
          case 'type':
              setType(event.target.value);
              break;
          case 'price':
              setPrice(event.target.value);
              break;
          case 'size':
              setSize(event.target.value);
              break;
          case 'capacity':
              setCapacity(event.target.value);
              break;
          case 'pets':
              setPets(!pets);
              break;
          case 'breakfast':
              setBreakfast(!breakfast);
              break;
          case 'featured':
              setFeatured(!featured);
              break;
          case 'description':
              setDescription(event.target.value);
      }
    };

    const updateImages = (newImages) => {
        setImages(newImages)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (!(price && size && capacity && images.length > 0)) {
            return alert("fill all fields!")
        }
        setLoading(true);
        const productData = {
            title: title,
            type: type,
            price: price,
            size: size,
            capacity: capacity,
            pets: pets,
            breakfast: breakfast,
            featured: featured,
            description: description,
            extras: extras,
            images: images
        };
        axios.post('/api/uploads/todatabase', productData)
            .then(response => {
                if (response.data.success) {
                    alert("upload success");
                    router.push('/')
                } else {
                    alert(response.data.error)
                    setLoading(false);
                }
            })
    };

    useEffect(() => {
        if (title === 'another') {
           let newTitle = prompt("Please enter a title");
           if (newTitle != null) {
               setTitle(newTitle);
           }
       }
    });

    return (
        <div className="container container-fluid mt-5">
            <div style={{maxWidth: '700px', margin: '2rem auto'}}>
                <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                    <h2>Upload new room</h2>
                </div>
                {loading ? "LOADING..." :
                <Form onSubmit={onSubmit} >
                    <FileUpload refreshFunction={updateImages}/>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="select" name="title" onChange={onChange} >
                            <option value='single'>single</option>
                            <option value='double'>double</option>
                            <option value='family'>family</option>
                            <option value='presidential'>presidential</option>
                            <option value='another'>another</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Type</Label>
                        <Input type="select" name="type" onChange={onChange} >
                            <option value={'economy'}>economy</option>
                            <option value={'basic'}>basic</option>
                            <option value={'standard'}>standard</option>
                            <option value={'deluxe'}>deluxe</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Prise($)</Label>
                        <Input type="number" name="price" onChange={onChange} value={price}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Size(m&sup2;)</Label>
                        <Input type="number" name="size" onChange={onChange} value={size}/>
                    </FormGroup><FormGroup>
                        <Label>Capacity</Label>
                        <Input type="number" name="capacity" onChange={onChange} value={capacity}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>with:</Label>
                        <div>
                            <CustomInput name="pets" onChange={onChange} type="checkbox" id="exampleCustomCheckbox" label="pets" />
                            <CustomInput name="breakfast" onChange={onChange} type="checkbox" id="exampleCustomCheckbox2" label="breakfast" />
                            <CustomInput name="featured" onChange={onChange} type="checkbox" id="exampleCustomCheckbox3" label="featured" />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="textarea" name="description" onChange={onChange}
                               value ={description}
                        />
                    </FormGroup>
                    <Button onClick={onSubmit} >
                        Submit
                    </Button>

                </Form>}
            </div>
        </div>
    );
}

export default UploadRoom;