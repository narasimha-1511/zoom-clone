"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isSchedulingMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const createMeeting = () => {
    router.push("/meeting/random_room_id");
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        ImageSrc="/icons/add-meeting.svg"
        color="bg-orange-1"
        title="New Meeting"
        description="Start an Instant Meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        ImageSrc="/icons/schedule.svg"
        color="bg-purple-1"
        title="Schedule Meeting"
        description="Plan your Meeting"
        handleClick={() => setMeetingState("isSchedulingMeeting")}
      />
      <HomeCard
        ImageSrc="/icons/join-meeting.svg"
        color="bg-yellow-1"
        title="Join Meeting"
        description="Via Invitation Link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <HomeCard
        ImageSrc="/icons/recordings.svg"
        color="bg-blue-1"
        title="View Recordings"
        description="Checkout your recordings"
        handleClick={() => {
          router.push("/recordings");
        }}
      />

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
