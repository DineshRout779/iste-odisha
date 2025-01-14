import Navbar from "components/navbar/Navbar";
import ISTEConvention08012025 from "components/notices/ISTEConvention08012025";

const Notice = () => {
  const noticeData = [
    "Proposals are invited from ISTE Chapters of Engineering Schools and Engineering Colleges of Odisha to organise Annual ISTE Section Level Students Convention and Annual ISTE Section Level Faculty Convention for the year : 2022-23. Last date of sending proposal to ISTE Section Chairman (pkparhi@outr.ac.in) with cc to ISTE Section Secretary (Khirodrout@yahoo.co.in) is 4th March, 2023. Partial financial grant of Rs 25000/- and Rs 30000/- will be admissible by ISTE after successful completion of the program to host the Students Convention and Faculty Convention respectively.",
  ];
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-[1200px] py-2 w-[95%]">
        <h2 className="text-center text-2xl font-bold my-4 p-2 underline underline-offset-8 text-blue-800">
          Notice
        </h2>

        <div className="flex flex-col gap-4">
          <ISTEConvention08012025 />

          <div className="bg-amber-100 p-2 rounded-md border-l-8 border-orange-500">
            <p className="flex justify-end">1st February, 2023</p>
            <p>
              Proposals are invited from ISTE Chapters of Engineering Schools
              and Engineering Colleges of Odisha to organise Annual ISTE Section
              Level Students Convention and Annual ISTE Section Level Faculty
              Convention for the year : 2022-23.
            </p>
            <p className="font-bold">
              Last date of sending proposal to ISTE Section Chairman
              (pkparhi@outr.ac.in) with cc to ISTE Section Secretary
              (Khirodrout@yahoo.co.in) is 4th March, 2023.
            </p>
            <p>
              Partial financial grant of Rs 25000/- and Rs 30000/- will be
              admissible by ISTE after successful completion of the program to
              host the Students Convention and Faculty Convention respectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notice;
