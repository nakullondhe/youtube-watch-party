import { doc, updateDoc } from "@firebase/firestore";
import Constants from "./Constants";
import { db } from "./firebase";

let peerConnection = null;
let localStream = null;
let remoteStream = null;
let roomDialog = null;
let roomId = null;

export const createRTC = async (id) => {
  peerConnection = new RTCPeerConnection(Constants.configuration);
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  const roomWithOffer = {
    offer: {
      type: offer.type,
      sdp: offer.sdp,
    },
  };
  updateDoc(doc(db, "room", id), roomWithOffer);
  console.log("room created");
};

export const joinRTC = async (room, id) => {
  const offer = room.offer;
  peerConnection = new RTCPeerConnection(Constants.configuration);
  await peerConnection.setRemoteDescription(offer);
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);

  const roomWithAnswer = {
    answer: {
      type: answer.type,
      sdp: answer.sdp,
    },
  };
  updateDoc(doc(db, "room", id), roomWithAnswer);
};
