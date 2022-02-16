const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = [];
  this.journeys.forEach(journey => startLocations.push(journey.startLocation));
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = [];
  this.journeys.forEach(journey => endLocations.push(journey.endLocation));
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter(journey => journey.transport === transport);
  return journeysByTransport;

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysByMinDistance = this.journeys.filter(journey => journey.distance > minDistance);
  return journeysByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistanceTravelled = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance
  }, 0);
  return totalDistanceTravelled
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.reduce((modesOfTransportList, journey) => {
    modesOfTransportList.push(journey.transport)
  }, [])
};


module.exports = Traveller;
