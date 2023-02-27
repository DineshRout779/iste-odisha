import CommitteeMemberCard from "components/committeeMember/CommitteeMemberCard";
import Navbar from "components/navbar/Navbar";
import KKRout from "public/committeeMembers/KKRout.jpg";
import PravatParhi from "public/committeeMembers/PravatKumarParhiPic.jpg";

const ContactUs = () => {
  const contactData = [
    {
      photo: PravatParhi,
      position: "Chairperson",
      name: "Prof. Pravat Kumar Parhi",
      designation: "Professor, Civil Engg. Dept",
      phoneNumber: ["9437176889"],
      email: ["pkparhi@outr.ac.in"],
      address:
        "Odisha University of Technology & Research(formerly CET Bhubaneswar) Bhubaneswar",
      pincode: "751029",
    },
    {
      photo: KKRout,
      position: "Secretary",
      name: "Dr. K.K. Rout",
      designation: "Principal",
      phoneNumber: ["9437241687"],
      email: ["khirodrout@yahoo.co.in"],
      address:
        "N.M. Institute of Engg. & Technology, Sijua, Patrapada, Bhubaneswar",
      pincode: "751019",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-[1200px] py-2 w-[95%]">
        <h2 className="text-center text-2xl font-bold my-4 p-2 underline underline-offset-8 text-blue-800">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactData.map((item) => (
            <CommitteeMemberCard key={item?.email[0]} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
