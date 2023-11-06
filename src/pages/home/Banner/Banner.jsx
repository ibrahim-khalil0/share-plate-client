import React from "react";
import Slide from "./Slide";

const Banner = () => {

    const slider = [
        {title: 'Donate Today, Feed Tomorrow!', description: 'Join us in making a difference! Your contribution helps us provide nutritious meals to families in need, fostering stronger, healthier communities for a better tomorrow.', img: 'https://c.files.bbci.co.uk/24C8/production/_129761490_mediaitem129761486.jpg', id: 'slide1', next: '#slide2', prev: '#slide4'},

        {title: 'Support Food Donation Initiatives!', description: 'With your support, we share love through food. Every donation helps us provide warm meals to those facing hunger, spreading kindness one meal at a time.', img: 'https://t3.ftcdn.net/jpg/02/92/07/56/360_F_292075696_hGdSBQ9Bvf1jsaVMP2rTpuRr0VMATck0.jpg', id: 'slide2', next: '#slide3', prev: '#slide1'},

        {title: 'Join Us in Fighting Hunger Together!', description: 'Hunger knows no bounds, and it does not take a day off. Together, we can combat hunger regardless of the season. Join us in the fight against hunger and make a meaningful impact in the lives of many.', img: 'https://easydonationpickup.com/wp-content/uploads/2022/06/putting-canned-goods-and-other-foods-in-a-box.jpg', id: 'slide3', next: '#slide4', prev: '#slide2'},

        {title: 'Be a Hunger Hero Today!', description: 'Be a hero in the fight against hunger! Your donation not only fills empty stomachs but also spreads hope. Together, we can eradicate hunger and create a brighter future for everyone in need.', img: 'https://bronxnet.org/media/filer_public_thumbnails/filer_public/c9/d1/c9d1ca88-5b7e-49e8-b0c5-3fa04bf0a7c5/prop-food-02.jpg__840x560_q85_crop_subsampling-2_upscale.jpg', id: 'slide4', next: '#slide1', prev: '#slide3'}
    ]

  return (
    <div>
      <div className="carousel w-full h-[600px]">
        {
            slider.map(item => <Slide key={item.id} slide={item}></Slide>)
        }
      </div>
    </div>
  );
};

export default Banner;
