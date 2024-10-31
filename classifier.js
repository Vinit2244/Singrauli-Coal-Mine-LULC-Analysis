var center = ee.Geometry.Point(82.6753, 24.1172);
var ROI = center.buffer(15000); // 15km radius

// Print the polygon
print('Polygon:', ROI);

// Add the polygon to the map
Map.centerObject(ROI, 8); // Center the map on the polygon
Map.addLayer(ROI, {}, '15km Radius Polygon');

var L7 = ee.ImageCollection("LANDSAT/LE07/C02/T1_L2");

var image = L7.filterBounds(ROI)
              .filterDate('2000-01-01', '2004-12-31')
              .filterMetadata('CLOUD_COVER', 'less_than', 1)
              .median()
              .clip(ROI);

var bands = ["SR_B3", "SR_B2", "SR_B1"];
var visParams = {
  bands: bands,
  gamma: 1,
  max: 13912,
  min: 7233,
  opacity: 1
};

Map.addLayer(image.visualize(visParams));

var sample = coal_mine.merge(water_body).merge(build_up).merge(vegetation).merge(crop_land).merge(barren_land);

print(sample);

// Note there is no Band 6 in LandSat 7 Database
var bands = ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7'];

var classProperty = 'Class';

var training = image.select(bands).sampleRegions({
  collection: sample,
  properties: [classProperty],
  scale: 30
});

print(training);

var classifier = ee.Classifier.smileCart().train({
  features: training,
  classProperty: classProperty,
  inputProperties: bands
});

print(classifier.getInfo());

var classified = image.select(bands).classify(classifier);

Map.addLayer(classified, {min:1, max:6, palette:['white', 'blue', 'red', 'green', 'yellow', 'pink']});