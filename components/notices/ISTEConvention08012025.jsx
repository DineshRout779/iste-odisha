"use client";

export default function ISTEConvention08012025() {
  const handleDownload = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://docs.google.com/document/d/1JmQsk3Zt_c_PXQHB9jHnopnMUcikAnZd/edit?usp=sharing&ouid=103992238130266655295&rtpof=true&sd=true",
        "_blank",
        "noopener noreferrer"
      );
    }
  };

  return (
    <div className=" p-6 bg-white rounded-lg shadow-lg border border-gray-200 font-medium">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            ISTE Convention Proposals
          </h2>
          <div className="flex items-center text-gray-600">
            <span>8 January, 2025</span>
          </div>
        </div>

        <p className="text-gray-700">
          Proposals are invited from ISTE Chapters of Engineering Schools and
          Engineering Colleges of Odisha to organise following events for 2025:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 font-bold">
          <li>Annual ISTE Section Level Students Convention</li>
          <li>Annual ISTE Section Level Faculty Convention</li>
        </ul>

        <div className="bg-blue-50 p-2 rounded-lg flex">
          <div className="p-[2px] bg-blue-700 rounded-xl" />
          <div className="pl-4">
            <p className="font-bold">
              Last date for sending proposals: 8th February, 2025
            </p>
            <div className="mt-2 flex items-center">
              <p>
                Send to:{" "}
                <a
                  href="mailto:pkparhi@outr.ac.in"
                  className="text-blue-600 hover:underline"
                >
                  pkparhi@outr.ac.in
                </a>{" "}
                (ISTE Section Chairman)
              </p>
            </div>
            <p className="mt-1 ml-9">
              CC:{" "}
              <a
                href="mailto:khirodrout@yahoo.co.in"
                className="text-blue-600 hover:underline"
              >
                khirodrout@yahoo.co.in
              </a>{" "}
              (ISTE Section Secretary)
            </p>
          </div>
        </div>

        <div className="bg-green-50 flex p-2 rounded-lg">
          <div className="p-[2px] bg-green-500 rounded-xl" />
          <div className="pl-4">
            <p className="font-bold">Partial Financial Grants:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>₹ 25,000/- for Students Convention</li>
              <li>₹ 30,000/- for Faculty Convention</li>
            </ul>
            <p className="mt-2 text-sm text-gray-600">
              *Admissible by ISTE to the host institute after successful
              completion of the program.
            </p>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span>Download Notice</span>
        </button>

        <div className="text-right text-gray-600 italic">
          Secretary
          <br />
          ISTE Odisha Section
        </div>
      </div>
    </div>
  );
}
