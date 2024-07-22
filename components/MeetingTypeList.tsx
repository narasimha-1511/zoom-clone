"use client";
import React from "react";
import HomeCard from "./HomeCard";

const MeetingTypeList = () => {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        ImageSrc="/icons/add-meeting.svg"
        color="bg-orange-1"
        title="New Meeting"
        description="Start an Instant Meeting"
      />
      <HomeCard
        ImageSrc="/icons/add-meeting.svg"
        color="bg-blue-1"
        title="Schedule Meeting"
        description="Plan your Meeting"
      />
      <HomeCard
        ImageSrc="/icons/join-meeting.svg"
        color="bg-purple-1"
        title="Join Meeting"
        description="Via Invitation Link"
      />
      <HomeCard
        ImageSrc="/icons/recordings.svg"
        color="bg-yellow-1"
        title="View Recordings"
        description="Checkout your recordings"
        // handleClick="/recordings"
      />
    </section>
  );
};

export default MeetingTypeList;
