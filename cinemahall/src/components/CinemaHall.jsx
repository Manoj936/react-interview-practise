import React, { useEffect, useMemo, useState } from "react";
import { colorClasses } from "../constant";

export default function CinemaHall({
  layout = {
    rows: 15,
    seatsPerRow: 12,
    aislePosition: 4,
  },
  seatTypes = {
    silver: { name: "Silver", price: 100, rows: [0, 1, 2 , 3,4,5] },
    gold: { name: "Gold", price: 200, rows: [6,7,8,9,10] },
    diamond: { name: "Diamond", price: 300, rows: [11,12,13,14] },
  },
  bookedSeats = ["C1", "C2", "B1", "B2"],
}) {
  const getSeatInfo = (row) => {
    const types = Object.keys(seatTypes);
    for (let i = 0; i < types.length; i++) {
      if (seatTypes[types[i]].rows.includes(row)) {
        return seatTypes[types[i]];
      }
    }
  };
  const [allBookedSeats, setAllBookedSeats] = useState(bookedSeats);
  const checkBooked = (seatId) => {
    if (allBookedSeats.includes(seatId)) {
      return true;
    }
    return false;
  };
  const generateSeats = useMemo(() => {
    const seats = [];

    for (let row = 0; row < layout.rows; row++) {
      const seatInfo = getSeatInfo(row);
      for (let s = 0; s < layout.seatsPerRow; s++) {
        let seatId = `${String.fromCharCode(65 + row)}${s + 1}`;

        seats.push({
          id: seatId,
          row,
          seat: s,
          type: seatInfo.name,
          price: seatInfo.price,
          isBooked: checkBooked(seatId),
          colorClass: colorClasses[seatInfo.name],
          isSelected: false,
        });
      }
    }
    return seats;
  }, [layout, seatTypes, bookedSeats]);

  const [seat, setSeats] = useState(generateSeats);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const selectSeat = (seatObj) => {
    // Ignore clicks on booked seats
    if (seatObj.isBooked) return;

    // Toggle the selected flag immutably
    setSeats((prev) =>
      prev.map((s) =>
        s.id === seatObj.id ? { ...s, isSelected: !s.isSelected } : s
      )
    );

    // Maintain a list of selected seat ids
    setSelectedSeats((prev) =>
      prev.includes(seatObj.id)
        ? prev.filter((id) => id !== seatObj.id)
        : [...prev, seatObj.id]
    );
  };

  const bookTickets = () => {
    if (selectedSeats.length === 0) return;
    setAllBookedSeats((prev) => Array.from(new Set([...prev, ...selectedSeats])));
    setSeats((prev) =>
      prev.map((s) =>
        selectedSeats.includes(s.id) ? { ...s, isBooked: true, isSelected: false } : s
      )
    );
    setSelectedSeats([]);
  };

  function calculateTotalPrice() {

  return selectedSeats.reduce((sum , id)=>{
    const found = seat.find((i)=>i.id === id);
    return sum + (found ? found.price : 0)
  },0)
  }

  const totalPrice = useMemo(() => calculateTotalPrice(), [selectedSeats, seat]);
  console.log(selectedSeats);
  const RenderSeats = ({ rowIndex }) => {
    return (
      <div className="flex w-full items-center gap-2">
        {Array.from({ length: layout.seatsPerRow }).map((_, colIndex) => {
          const seatObj = seat.find(
            (s) => s.row === rowIndex && s.seat === colIndex
          );
          if (!seatObj) return null;
          const isAisle = colIndex + 1 === layout.aislePosition;
          const base =
            "w-10 h-10 p-1 rounded text-xs flex justify-center items-center select-none";
        
            const colorCls = seatObj.isSelected
            ? "bg-green-700 text-white"
            : seatObj.isBooked
              ? "bg-gray-400 text-white cursor-not-allowed"
              : seatObj.colorClass;
     

          return (
            <React.Fragment key={seatObj.id}>
              <button
                onClick={() => selectSeat(seatObj)}
                className={`${base}  ${colorCls}`}
                title={`${seatObj.id} • ${seatObj.type} • ₹${seatObj.price}`}
              >
                {seatObj.id}
              </button>
              {isAisle && <div className="w-6" />}
            </React.Fragment>
          );
        })}
      </div>
    );
  };
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="w-[50%] max-w-[640px] ">
        <div className="w-full text-center text-xs tracking-widest mb-4 opacity-70">
          SCREEN
        </div>
        <div className="space-y-3">
          {Array.from({ length: layout.rows }).map((_, rowIdx) => (
            <div key={rowIdx} className="flex items-center gap-3">
              <div className="w-6 text-sm text-right">
                {String.fromCharCode(65 + rowIdx)}
              </div>
              <RenderSeats rowIndex={rowIdx} />
            </div>
          ))}

          <div className="flex flex-row flex-wrap items-center gap-4 mt-10 ml-5">
            {Object.entries(colorClasses).map(([label, cls]) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded border ${cls}`} />
                <span className="text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[50%] max-w-[640px]">
        <div className="w-full text-center text-lg tracking-widest mb-4 opacity-70">
          DETAILS
        </div>
        {/* Helper */}

        <div className="space-y-3 w-full text-center text-sm tracking-widest">
          <div>
            You have selected :<strong>{selectedSeats.toString()}</strong>
          </div>
          <div>
            Your Final Ammount : <strong>{totalPrice}</strong>
          </div>

          <button
            onClick={bookTickets}
            className=" bg-red-400 h-14 w-md rounded-xl px-4 py-1 text-white font-extrabold text-xl"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
