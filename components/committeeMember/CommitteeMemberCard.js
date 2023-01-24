const CommitteeMemberCard = ({
  position,
  name,
  address,
  pincode,
  phoneNumber,
  email,
  designation
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-xl font-bold">
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
  );
};
export default CommitteeMemberCard;
