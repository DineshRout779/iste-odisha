import CommitteeMemberCard from "components/committeeMember/CommitteeMemberCard";
import Navbar from "components/navbar/Navbar";
import ArunPatnaik from "public/committeeMembers/DrArunPatnaikPic.jpg";
import IpsitaJena from "public/committeeMembers/DrIpsitaJena.jpg";
import ManasSenapati from "public/committeeMembers/DrManasRanjanSenapatiPic.jpg";
import PKSatpathy from "public/committeeMembers/DrPKSatpathyPic.jpg";
import DrSMAli from "public/committeeMembers/DrSMAli.jpg";
import SyedAli from "public/committeeMembers/DrSMAliPic.jpg";
import KKRout from "public/committeeMembers/KKRout.jpg";
import PrabhatSingh from "public/committeeMembers/PKSinghPic.jpg";
import PratapsinhKakasoDesaiPic from "public/committeeMembers/PratapsinhKakasoDesaiPic.jpg";
import PravatParhi from "public/committeeMembers/PravatKumarParhiPic.jpg";

const committeeData = {
  president: {
    photo: PratapsinhKakasoDesaiPic,
    position: "President, ISTE",
    name: "Prof.  Pratapsinh Kakaso Desai",
    phoneNumber: ["09422422450", "08237447711"],
    email: ["pratap.desai@rediffmail.com", "pratapd96@gmail.com"],
    address: "Plot No. 40, Chavan Colony, Infront of Kalamba Jail, Kolhapur",
    pincode: "416012",
  },
  executiveSecretary: {
    photo: DrSMAli,
    position: "Executive Secretary, ISTE",
    name: "Dr S M Ali",
    email: ["exesecretary@isteonline.org", "iste.exesecretary@gmail.com"],
  },
  chairperson: {
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
  secretary: {
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
  managingCommittee: [
    {
      photo: IpsitaJena,
      name: "Prof. Ispita Jena",
      address: "SVSET, Chaitanya Prasad, Madanpur, Bhubaneswar",
      phoneNumber: ["9776291567"],
      pincode: "752054",
      email: ["ipsitajena08@gmail.com"],
    },
    {
      photo: PrabhatSingh,
      name: "Shri Prabhat Kumar Singh",
      address: "SVSET, Chaitanya Prasad, Madanpur, Bhubaneswar",
      phoneNumber: ["8249035429"],
      pincode: "752054",
      email: ["sprabhatkumar99@gmail.com"],
    },
    {
      photo: ArunPatnaik,
      name: "Dr. Arun Kumar Patnaik",
      address: "N-2/126, IRC Village, Nayapalli, Bhubaneswar",
      pincode: "751015",
      phoneNumber: ["9437044789"],
      email: ["arunpatnaik1954@gmail.com"],
    },
    {
      photo: PKSatpathy,
      name: "Prof. P.K. Satpathy",
      address:
        "Odisha University of Technology & Research(formerly CET Bhubaneswar) Bhubaneswar",
      pincode: "751029",
      phoneNumber: ["9937418354"],
      email: ["satpathy.pks@gmail.com"],
    },
  ],
  executiveCouncil: [
    {
      photo: SyedAli,
      name: "Dr. Syed Majid Ali",
      address: "Wajid Manzil, Kesharpur, Cuttack",
      pincode: "753001",
      phoneNumber: ["9831805748"],
      email: ["drsma786@gmail.com"],
    },
    {
      photo: ManasSenapati,
      name: "Dr. Manas Ranjan Senapati",
      designation: "Professor & HOD, Chemistry",
      address:
        "Trident Academy of Technology, F-2, Chandaka Industrial Estate, Opp. Infocity, Bhubaneshwar",
      pincode: "751024",
      phoneNumber: ["9437237797"],
      email: ["dr_senapati@yahoo.com"],
    },
  ],
};

const Committee = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-[1200px] py-2 w-[95%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CommitteeMemberCard {...committeeData["president"]} />
          <CommitteeMemberCard {...committeeData["executiveSecretary"]} />
        </div>

        <h2 className="text-center text-2xl font-bold my-4 p-2 underline underline-offset-8 text-blue-800">
          ISTE ODISHA SECTION MANAGING COMMITTEE (2020 - Present)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CommitteeMemberCard {...committeeData["chairperson"]} />
          <CommitteeMemberCard {...committeeData["secretary"]} />
        </div>

        <h2 className="text-xl font-bold my-4 p-2 text-blue-800">
          LIST OF MANAGING COMMITTEE MEMEBERS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {committeeData["managingCommittee"].map((item) => (
            <CommitteeMemberCard key={item.name} {...item} />
          ))}
        </div>

        <h2 className="text-xl font-bold my-4 p-2 text-blue-800">
          LIST OF EXECUTIVE COUNCIL MEMBERS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {committeeData["executiveCouncil"].map((item) => (
            <CommitteeMemberCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Committee;
