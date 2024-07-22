import React from "react";

const Meeting = ({ params }: { params: { ID: string } }) => {
  return (
    <div>
      <h1 className="text-3xl"> This is the </h1>
      <h1>Meeting Room is #{params.ID}</h1>
      <p>Meeting content</p>
    </div>
  );
};

export default Meeting;
