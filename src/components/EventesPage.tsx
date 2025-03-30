import { EVENTS } from '../data/Events.data';
import { Event } from '../models/event.model';
import EventCard from './EventCard';

const Events: React.FC = () => {
  const events: Event[] = EVENTS.sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Etkinlikler</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Yaklaşan ve geçmiş etkinliklerimiz</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
