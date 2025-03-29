import { Event } from "../models/event.model";

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function isUpcoming(date:Date): boolean {
  return date > new Date();
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div onClick={() => window.open(event.url, "_blank")} className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover shadow-md"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-center mb-4">{event.title}</h2>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className={`px-3 py-1 rounded-md text-white text-sm ${
            isUpcoming(event.date) ? 'bg-green-600' : 'bg-gray-400'
          }`}>
            {event.date.toLocaleDateString()}
          </span>
          <span className="text-gray-600 font-medium px-2 border-b-2 border-darkBrown">{formatCurrency(event.price)}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
