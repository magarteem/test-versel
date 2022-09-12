import React, { useEffect } from "react";
import { useAppDispatch } from "../../../core/redux/app/hooks";
import { NotificationResponseData } from "../../../core/redux/types/notificationSliseType";

interface PhotosPropsType {
  photo: NotificationResponseData[]
}

export const Photo = ({ photo }: PhotosPropsType) => {
  const dispatch = useAppDispatch()




  return <div>
    {
      photo.map(x => (
        <div key={x.id}>
          <h2>{x.title}</h2>
          <img src={x.thumbnailUrl} alt={x.thumbnailUrl} />
        </div>
      ))
    }
  </div>
};
