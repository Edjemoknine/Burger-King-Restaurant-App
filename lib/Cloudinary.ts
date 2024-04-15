import axios from "axios";

export const uploadCloud = async (file: any) => {
  const media = new FormData();
  media.append("file", file);
  media.append("upload_preset", "uploads");

  const { data } = await axios.post(
    "https://api.cloudinary.com/v1_1/drcatqidu/image/upload",
    media
  );
  console.log(data);

  return { publishId: data?.public_id, url: data?.secure_url };
};
