import { Models } from "node-appwrite";

const Card = ({ file }: { file: Models.Document }) => {
  return (
    <div>{file.name}</div>
  )
};

export default Card