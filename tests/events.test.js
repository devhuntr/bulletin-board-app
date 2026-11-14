
const events = require('../backend/events');
const api = require('../backend/api');

describe('Bulletin Board Events', () => {

  test('events list contains data', () => {
    expect(Array.isArray(events)).toBe(true);
    expect(events.length).toBeGreaterThan(0);
  });

  test('every event has an ID, title, and date', () => {
    events.forEach(event => {
      expect(event).toHaveProperty('id');
      expect(event).toHaveProperty('title');
      expect(event).toHaveProperty('date');
    });
  });

  test('every event has a unique ID', () => {
    const ids = events.map(event => event.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('API returns the correct events', () => {
    const req = {};
    const res = { json: jest.fn() };

    api.events(req, res);

    expect(res.json).toHaveBeenCalledWith(events);
  });

});
