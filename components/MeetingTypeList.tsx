"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "./ui/use-toast";

const MeetingTypeList = () => {
  const router = useRouter();
  const user = useUser();
  const { toast } = useToast();
  const [meetingState, setMeetingState] = useState<
    "isSchedulingMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const client = useStreamVideoClient();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();

  const createMeeting = async () => {
    // router.push("/meeting/random_room_id");
    if (!client || !user) return;

    try {
      if (!values.dateTime) {
        toast({
          title: "Please select a date and time",
          description: "Please try again",
        });
      }

      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create call");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description: description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast({ title: "Meeting created successfully" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to create meeting",
        description: "Please try again",
      });
    }
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
