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
    <div className="bg-gray-100 p-4 rounded-xl font-bold grid grid-cols-5 gap-1">
      {photo && (
        <figure className=" col-span-5 sm:col-span-2 flex justify-center">
          <Image
            src={photo?.src}
            alt={`${name}'s Photo`}
            className="rounded-xl object-cover"
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL={photo.blurDataURL}
          />
        </figure>
      )}
      <div className="col-span-3">
        {position && <h2 className="text-xl text-blue-800">{position}</h2>}
        {name && <p className="text-3xl">{name}</p>}
        {designation && <p>{designation}</p>}
        {address && <p>{address}</p>}
        {pincode && <p>PIN: {pincode}</p>}
        {phoneNumber && (
          <p>
            {phoneNumber.map((number, index) => (
              <a key={index} href={`tel:${number}`} className="text-blue-800">
                {number}
                {index < phoneNumber.length - 1 ? ", " : ""}
              </a>
            ))}
          </p>
        )}
        {email && (
          <p>
            {email.map((mail, index) => (
              <a key={index} href={`mailto:${mail}`} className="text-blue-800">
                {mail}
                {index < email.length - 1 ? ", " : ""}
              </a>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};
export default CommitteeMemberCard;
