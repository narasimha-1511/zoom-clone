import React from "react";

const Meeting = ({ params }: { params: { ID: string } }) => {
  return (
    <div>
      <h1>Meeting Room is #{params.ID}</h1>
      <p>Meeting content</p>
    </div>
  );
};

export default Meeting;
