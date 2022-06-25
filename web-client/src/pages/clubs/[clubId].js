import * as React from "react";
import { ClubProfilePage } from "../../Components/Clubs/ClubProfilePage";

const clubs = [
  {
    id: 1,
    coverImage: "https://picsum.photos/1000/450?grayscale",
    image: "https://picsum.photos/180?grayscale",
    name: "New American FC",
    people: "3.4K Friends . 12 Mutual",
    //will add array of objects with image and url later that take you to the profile of the participant
    fewParticipants: "Images Images",
  },
  {
    id: 2,
    coverImage: "https://picsum.photos/1000/450?grayscale",
    image: "https://picsum.photos/180?grayscale",
    name: "Real Madrid FC",
    people: "3.4K Friends . 13 Mutual",
    //will add array of objects with image and url later that take you to the profile of the participant
    fewParticipants: "Images Images",
  },
  {
    id: 3,
    coverImage: "https://picsum.photos/1000/450?grayscale",
    image: "https://picsum.photos/180?grayscale",
    name: "Eagles BC",
    people: "3.4K Friends . 25 Mutual",
    //will add array of objects with image and url later that take you to the profile of the participant
    fewParticipants: "Images Images",
  },
  {
    id: 4,
    coverImage: "https://picsum.photos/1000/450?grayscale",
    image: "https://picsum.photos/180?grayscale",
    name: "Barcelona FC",
    people: "3.4K Friends . 100 Mutual",
    //will add array of objects with image and url later that take you to the profile of the participant
    fewParticipants: "Images Images",
  },
];

export default function clubProfilePage({ clubId }) {
  const ClubProfileInfo = clubs.find((club) => club.id.toString() === clubId);
  if (ClubProfileInfo) {
    return <ClubProfilePage clubProfileInfo={ClubProfileInfo} />;
  }
  return (
    <pre className="mt-5 pt-5">404 - Club with id {clubId} does not exist</pre>
  );
}

export function getStaticProps({ params: { clubId } }) {
  return {
    props: {
      clubId,
    },
  };
}

export const clubIds = () => {
  let ids = [];
  for (let i = 0; i < clubs.length; i++) {
    ids.push(clubs[i].id);
  }
  return ids;
};

export function getStaticPaths() {
  return {
    paths: clubIds().map((clubId) => ({
      params: { clubId: clubId.toString() },
    })),
    fallback: true,
  };
}
