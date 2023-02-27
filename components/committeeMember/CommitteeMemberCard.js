import Image from "next/image";

const CommitteeMemberCard = ({
  position,
  name,
  address,
  pincode,
  phoneNumber,
  email,
  designation,
  photo,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-xl font-bold grid grid-cols-5 gap-1 items-center justify-center">
      {/* <image /> */}
      <figure className="p-4 col-span-5 sm:col-span-2 flex justify-center">
        <Image
          src={photo.src}
          alt={`${name}'s Photo`}
          className="rounded-xl object-cover"
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL={photo.blurDataURL}
        />
      </figure>
      <div className="col-span-3">
        <h2 className="text-lg underline underline-offset-4 text-blue-800">
          {position}
        </h2>
        <p className="text-3xl">{name}</p>
        <p>{designation}</p>
        <p>{address}</p>
        <p>PIN: {pincode}</p>
        <p>{phoneNumber.join(", ")}</p>
        <p>{email.join(", ")}</p>
      </div>
    </div>
  );
};
export default CommitteeMemberCard;
