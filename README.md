# JacobsHack2021 (Team 8)

The main aim of this project "AstroHack" is to build an application through which, whenever you point to some portion in sky with the smartphone, you would get the list of astronomical objects that could be found in the region.

Frontend is done in React Native and Backend is done using python.

## Goal:

### Coordinate-transformation
The smartphone can be rotated to any direction and corresponding reading of Altitude and Azimuth (AltAz coordinate system) would be calculated using the data obtained from accelerometer, magnetometer, and gyroscope. Then using coordinate transformation from library astropy, the corresponding RA and Dec (ICRS coordinate system) is calculated. Furthermore, a query is made to search the astronomical objects within a certain bounding box around the obtained RA and Dec. From the result of query, a list of astronomical objects in the region pointed by smartphone screen would be displayed. The required functions for this process is in the JupyterNotebook "Data_Processing.ipynb"

### Image Processing
Furthermore, the next goal was to get a picture of certain patch of sky through the camera and after following the step in 'Coordinate-transformation' we would do image processing and map the bright spots (above certain threshold) to the result obtained from query. A demo for this is shown in the file image_processing.ipynb.

## Shortcomings:
We weren't able to reliably calculate the altitude and azimuth from the obtained data from accelerometer, magnetometer, and gyroscope and to connect with python. However, if the connection between React Native and Python was obtained, the remaining implementation could be done without much efforts.

## Practical Usage 
Nevertheless, using the python code we could manually input the value for altitude-azimuth coordinate and still get the list of astronomical object present in that region.

The practical use of this program could be for the people who view the night sky with telescope with alt-azimuth mount, the codes we wrote would enable them to get a list of expected celestial objects that they would find.


Repository for the project of JacobsHack2021.
