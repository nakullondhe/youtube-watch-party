import { addDoc, collection } from "@firebase/firestore";
import Constants from "../Constants";
import { db } from "../firebase";

export const getVideoID = (URL) => {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = URL.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};

export const generateName = async () => {
  try {
    const nameData = await fetch(
      "https://randommer.io/api/Name?nameType=firstname&quantity=1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": Constants.api_key,
        },
      }
    );
    return await nameData.json();
  } catch {
    console.log("Offline");
  }
  // nameData.then(res => res.json()).then(pip => console.log(pip))
};

export const createRoom = async (name) => {
  const docRef = await addDoc(collection(db, "room"), {
    play: false,
    time: 0
  });
  return {
    success: true,
    id: docRef.id,
  };
};

export const useLocal = () => {
  return JSON.parse(window.localStorage.getItem("user"));
};
