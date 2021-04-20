import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import './ServiceAddEvents.css';
import upload from '../../../images/upload.png';

const ServiceAddEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData ={ 
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://evening-woodland-61193.herokuapp.com/addEvent`;

        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res => console.log('server side response'));
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '78c1e19f8b876ccf018bfd4d8fb5be23');
        imageData.append('image',event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
    <div>
    <Navbar></Navbar>

    <div className="container pb-3">

        <h1 className=" text-success font-weight-bold text-center p-5">Criteria of Services...</h1>

        <div className="formShape">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="text-success font-weight-bold">Product Name</label>
            <input name="name" placeholder="Enter Name" {...register("name")} className="form-control"/>
            <br/>    

            <label className="text-success font-weight-bold">Add Price</label>
            <input price="price" placeholder="Enter price" {...register("price")} className="form-control"/>
            <br/>

            <label className="text-success font-weight-bold">Add Photo</label>
            <br/>
            <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
            <br/>

            <br/>
            <button className="explore"> <img className="uploadImg" src={upload} alt=""/> Submit</button>
            </form>
        </div>
    </div>

    <div className="text-center pt-5">
        <Link className="explore" to={`/order`}>Visit Service Page</Link> 
    </div>

    <div className="text-center pt-5">
        <Link className="explore" to={`/home`}>Go home</Link> 
    </div>

    <Footer></Footer>
    </div>
    );
};

export default ServiceAddEvents;