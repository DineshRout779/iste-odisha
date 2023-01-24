import CommitteeMemberCard from "components/committeeMember/CommitteeMemberCard";
import Navbar from "components/navbar/Navbar";

const committeeData = {
  president: {
    position: "President, ISTE",
    name: "Prof.  Pratapsinh Kakaso Desai",
    phoneNumber: ["09422422450", "08237447711"],
    email: ["pratap.desai@rediffmail.com", "pratapd96@gmail.com"],
    address: "Plot No. 40, Chavan Colony, Infront of Kalamba Jail, Kolhapur",
    pincode: "416012",
  },
  executiveSecretary: {
    position: "Executive Secretary, ISTE",
    name: "Prof. Vijay D. Vaidya",
    phoneNumber: ["09422046567 "],
    email: ["vijayvaidya09@gmail.com", "exseciste@gmail.com"],
    address: "2548-B, Ward Mangalwar PethKhasbag, Bharat Dairy RoadKolhapur",
    pincode: "416012",
  },
  chairperson: {
    position: "Chairperson",
    name: "Prof. Pravat Kumar Parhi",
    designation: "Professor, Civil Engg. Dept",
    phoneNumber: ["9437176889"],
    email: ["pkparhi@cet.edu.in, pkparhi@yahoo.com"],
    address:
      "Odisha University of Technology & Research(formerly CET Bhubaneswar) Bhubaneswar",
    pincode: "751029",
  },
  secretary: {
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
      name: "Prof. Ispita Jena",
      address: "SVSET, Chaitanya Prasad, Madanpur, Bhubaneswar",
      phoneNumber: ["9776291567"],
      pincode: "752054",
      email: [],
    },
    {
      name: "Shri Prabhat Kumar Singh",
      address: "SVSET, Chaitanya Prasad, Madanpur, Bhubaneswar",
      phoneNumber: ["9040634968"],
      pincode: "752054",
      email: [],
    },
    {
      name: "Dr. Arun Kumar Patnaik",
      address: "N-2/126, IRC Village, Nayapalli, Bhubaneswar",
      pincode: "751015",
      phoneNumber: ["9437044789"],
      email: ["arunpatnaik1954@gmail.com"],
    },
    {
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
      name: "Dr. Syed Majid Ali",
      address: "Wajid Manzil, Kesharpur, Cuttack",
      pincode: "753001",
      phoneNumber: ["9831805748"],
      email: ["drsma786@gmail.com"],
    },
    {
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
        <div className="grid grid-cols-2 gap-4">
          <CommitteeMemberCard {...committeeData["president"]} />
          <CommitteeMemberCard {...committeeData["executiveSecretary"]} />
        </div>

        <h2 className="text-center text-2xl font-bold my-4 p-2 underline underline-offset-8">
          ISTE ODISHA SECTION MANAGING COMMITTEE (2020-2024)
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <CommitteeMemberCard {...committeeData["chairperson"]} />
          <CommitteeMemberCard {...committeeData["secretary"]} />
        </div>

        <h2 className="text-xl font-bold my-4 p-2">
          LIST OF MANAGING COMMITTEE MEMEBERS
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {committeeData["managingCommittee"].map((item) => (
            <CommitteeMemberCard key={item.name} {...item} />
          ))}
        </div>

        <h2 className="text-xl font-bold my-4 p-2">
          LIST OF EXECUTIVE COUNCIL MEMBERS
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {committeeData["executiveCouncil"].map((item) => (
            <CommitteeMemberCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Committee;
