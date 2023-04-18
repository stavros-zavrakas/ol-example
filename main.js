import GeoTIFF from 'ol/source/GeoTIFF.js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';

fetch('data/example.tif')
  .then((response) => response.blob())
  .then((blob) => {
    const source = new GeoTIFF({
      sources: [
        {
          blob: blob,
        },
      ],
    });

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: source,
        }),
      ],
      view: source.getView().then((viewConfig) => {
        viewConfig.showFullExtent = true;
        return viewConfig;
      }),
    });
  });
