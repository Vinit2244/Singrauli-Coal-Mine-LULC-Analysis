# Land Use and Land Cover (LULC) Analysis of Singrauli Coal Mine

This project was developed by **Vinit Mehta** during his 4th semester at **IIIT Hyderabad** for the course **Spatial Science and Technology** under the guidance of Prof. K. S. Rajan and Prof. R. C. Prasad.

## Project Overview
This project aims to perform a comprehensive Land Use and Land Cover (LULC) analysis within a **20 km radius around the Singrauli coal mine**, located on the border of Madhya Pradesh (MP) and Uttar Pradesh (UP) in India. The analysis focuses on assessing changes over time, specifically examining the expansion of the Singrauli coal mine and its impact on surrounding settlements.

## Objectives
- To monitor the **growth and development of the Singrauli coal mine** over a specific period.
- To analyze and draw **correlations between the mine’s expansion** and the development of settlements and land use patterns around it.

## Land Classification Categories
The land surrounding the Singrauli coal mine was classified into the following categories:
- **Coal Mine**
- **Water Body**
- **Built-Up Area**
- **Vegetation**
- **Crop Land**
- **Barren Land**

These classifications help in assessing and quantifying the environmental and socio-economic impacts of the mine’s growth.

## Methodology
- **Data Collection**: The project uses satellite imagery from Google Earth Engine (GEE) for visual and spatial data.
- **Image Processing**: Images are filtered by cloud cover, date, and location, processed to median values, and clipped to the 20 km radius region.
- **Classification**: A supervised classification was performed using the SmileCart classifier and training samples from each land type.
- **Analysis**: Land cover changes are analyzed across timeframes to interpret land use dynamics and the effects of mining activities on local environments.

## Technologies
- **Google Earth Engine**
- **QGIS**
- **SmileCart Classifier**
- **JavaScript**

## Conclusion
This study provides insights into the environmental implications of coal mining activities and serves as a foundation for further research on sustainable land use practices in mining regions.