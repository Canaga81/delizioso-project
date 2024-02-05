import React from "react";

const Map = () => {
  return (
    <div className="mt-32">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.5237691155!2d49.69015031780891!3d40.394475511010704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1707142094430!5m2!1str!2saz"
        style={{border: "0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full h-[600px]"
      ></iframe>
    </div>
  );
};

export default Map;
