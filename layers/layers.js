var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DepartamentosLaRioja_2 = new ol.format.GeoJSON();
var features_DepartamentosLaRioja_2 = format_DepartamentosLaRioja_2.readFeatures(json_DepartamentosLaRioja_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosLaRioja_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosLaRioja_2.addFeatures(features_DepartamentosLaRioja_2);
var lyr_DepartamentosLaRioja_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosLaRioja_2, 
                style: style_DepartamentosLaRioja_2,
                interactive: true,
                title: '<img src="styles/legend/DepartamentosLaRioja_2.png" /> Departamentos La Rioja'
            });
var format_PoblacinpordeptoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordeptoINDEC_3 = format_PoblacinpordeptoINDEC_3.readFeatures(json_PoblacinpordeptoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordeptoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordeptoINDEC_3.addFeatures(features_PoblacinpordeptoINDEC_3);
var lyr_PoblacinpordeptoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordeptoINDEC_3, 
                style: style_PoblacinpordeptoINDEC_3,
                interactive: true,
    title: 'Población por depto (INDEC)<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_0.png" /> 1.725 - 4.270<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_1.png" /> 4.271 - 9.650<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_2.png" /> 9.651 - 49.450<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_3.png" /> 49.451 o más<br />'
        });
var format_ViviendasenreasRuralesINDEC_4 = new ol.format.GeoJSON();
var features_ViviendasenreasRuralesINDEC_4 = format_ViviendasenreasRuralesINDEC_4.readFeatures(json_ViviendasenreasRuralesINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasRuralesINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasRuralesINDEC_4.addFeatures(features_ViviendasenreasRuralesINDEC_4);
var lyr_ViviendasenreasRuralesINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasRuralesINDEC_4, 
                style: style_ViviendasenreasRuralesINDEC_4,
                interactive: true,
    title: 'Viviendas en Áreas Rurales  (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_4_0.png" /> 40 - 170<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_4_1.png" /> 171 - 870<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_4_2.png" /> 871 - 1.460<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_4_3.png" /> 1.461 - 2.225<br />'
        });
var format_PEAINDEC_5 = new ol.format.GeoJSON();
var features_PEAINDEC_5 = format_PEAINDEC_5.readFeatures(json_PEAINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_5.addFeatures(features_PEAINDEC_5);
var lyr_PEAINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_5, 
                style: style_PEAINDEC_5,
                interactive: true,
    title: 'PEA  (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_5_0.png" /> 1.115 - 2.925<br />\
    <img src="styles/legend/PEAINDEC_5_1.png" /> 2.926 - 6.250<br />\
    <img src="styles/legend/PEAINDEC_5_2.png" /> 6.251 - 31.150<br />\
    <img src="styles/legend/PEAINDEC_5_3.png" /> Más de 31.151<br />'
        });
var format_CabezasdeovinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_6 = format_CabezasdeovinosMAGyP_6.readFeatures(json_CabezasdeovinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_6.addFeatures(features_CabezasdeovinosMAGyP_6);
var lyr_CabezasdeovinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_6, 
                style: style_CabezasdeovinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_1.png" /> 0 - 185<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_2.png" /> 186 - 790<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_3.png" /> 791 - 1.480<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_4.png" /> 1.481 - 1972<br />'
        });
var format_CabezasdeporcinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_7 = format_CabezasdeporcinosMAGyP_7.readFeatures(json_CabezasdeporcinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_7.addFeatures(features_CabezasdeporcinosMAGyP_7);
var lyr_CabezasdeporcinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_7, 
                style: style_CabezasdeporcinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_7_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_7_1.png" /> 1 - 240<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_7_2.png" /> 241 - 765<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_7_3.png" /> 766 - 12.125<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_7_4.png" /> 12.126 o más<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 1 - 1.400<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 1.401 - 7.525<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 7.526 - 19.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_4.png" /> 19.001 o más<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 1 - 175<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 176 - 14.600<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 14.601 - 27.225<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_4.png" /> 27.226 o más<br />'
        });
var format_HectreasnogalesINDEC_10 = new ol.format.GeoJSON();
var features_HectreasnogalesINDEC_10 = format_HectreasnogalesINDEC_10.readFeatures(json_HectreasnogalesINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasnogalesINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasnogalesINDEC_10.addFeatures(features_HectreasnogalesINDEC_10);
var lyr_HectreasnogalesINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasnogalesINDEC_10, 
                style: style_HectreasnogalesINDEC_10,
                interactive: true,
    title: 'Hectáreas nogales  (INDEC)<br />\
    <img src="styles/legend/HectreasnogalesINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasnogalesINDEC_10_1.png" /> 1 - 8<br />\
    <img src="styles/legend/HectreasnogalesINDEC_10_2.png" /> 9 - 97<br />\
    <img src="styles/legend/HectreasnogalesINDEC_10_3.png" /> 98 - 1.000<br />\
    <img src="styles/legend/HectreasnogalesINDEC_10_4.png" /> 1.001 o más<br />'
        });
var format_HectreasVidINDEC_11 = new ol.format.GeoJSON();
var features_HectreasVidINDEC_11 = format_HectreasVidINDEC_11.readFeatures(json_HectreasVidINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasVidINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasVidINDEC_11.addFeatures(features_HectreasVidINDEC_11);
var lyr_HectreasVidINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasVidINDEC_11, 
                style: style_HectreasVidINDEC_11,
                interactive: true,
    title: 'Hectáreas Vid  (INDEC)<br />\
    <img src="styles/legend/HectreasVidINDEC_11_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/HectreasVidINDEC_11_1.png" /> 1 - 25<br />\
    <img src="styles/legend/HectreasVidINDEC_11_2.png" /> 26 - 70<br />\
    <img src="styles/legend/HectreasVidINDEC_11_3.png" /> 71 - 700<br />\
    <img src="styles/legend/HectreasVidINDEC_11_4.png" /> Más de 701<br />'
        });
var format_HectreasduraznerosINDEC_12 = new ol.format.GeoJSON();
var features_HectreasduraznerosINDEC_12 = format_HectreasduraznerosINDEC_12.readFeatures(json_HectreasduraznerosINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasduraznerosINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasduraznerosINDEC_12.addFeatures(features_HectreasduraznerosINDEC_12);
var lyr_HectreasduraznerosINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasduraznerosINDEC_12, 
                style: style_HectreasduraznerosINDEC_12,
                interactive: true,
    title: 'Hectáreas durazneros  (INDEC)<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_12_1.png" /> 1 - 2,50<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_12_2.png" /> 2,51 - 12<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_12_3.png" /> 13 - 21<br />\
    <img src="styles/legend/HectreasduraznerosINDEC_12_4.png" /> Más de 21<br />'
        });
var format_HectreasconolivosINDEC_13 = new ol.format.GeoJSON();
var features_HectreasconolivosINDEC_13 = format_HectreasconolivosINDEC_13.readFeatures(json_HectreasconolivosINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasconolivosINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasconolivosINDEC_13.addFeatures(features_HectreasconolivosINDEC_13);
var lyr_HectreasconolivosINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasconolivosINDEC_13, 
                style: style_HectreasconolivosINDEC_13,
                interactive: true,
    title: 'Hectáreas con olivos (INDEC)<br />\
    <img src="styles/legend/HectreasconolivosINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasconolivosINDEC_13_1.png" /> 1 - 45<br />\
    <img src="styles/legend/HectreasconolivosINDEC_13_2.png" /> 46 - 360<br />\
    <img src="styles/legend/HectreasconolivosINDEC_13_3.png" /> 361 - 7.880<br />\
    <img src="styles/legend/HectreasconolivosINDEC_13_4.png" /> Más de 7.881<br />'
        });
var format_LocalidadesLaRioja_14 = new ol.format.GeoJSON();
var features_LocalidadesLaRioja_14 = format_LocalidadesLaRioja_14.readFeatures(json_LocalidadesLaRioja_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesLaRioja_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesLaRioja_14.addFeatures(features_LocalidadesLaRioja_14);
var lyr_LocalidadesLaRioja_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesLaRioja_14, 
                style: style_LocalidadesLaRioja_14,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesLaRioja_14.png" /> Localidades La Rioja'
            });
var format_BERLaRioja_15 = new ol.format.GeoJSON();
var features_BERLaRioja_15 = format_BERLaRioja_15.readFeatures(json_BERLaRioja_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERLaRioja_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERLaRioja_15.addFeatures(features_BERLaRioja_15);
var lyr_BERLaRioja_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERLaRioja_15, 
                style: style_BERLaRioja_15,
                interactive: true,
                title: '<img src="styles/legend/BERLaRioja_15.png" /> BER La Rioja'
            });
var format_BERLaRioja_16 = new ol.format.GeoJSON();
var features_BERLaRioja_16 = format_BERLaRioja_16.readFeatures(json_BERLaRioja_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERLaRioja_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERLaRioja_16.addFeatures(features_BERLaRioja_16);
var lyr_BERLaRioja_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERLaRioja_16, 
                style: style_BERLaRioja_16,
                interactive: true,
                title: '<img src="styles/legend/BERLaRioja_16.png" /> BER La Rioja'
            });
var format_DelegacinLaRioja_17 = new ol.format.GeoJSON();
var features_DelegacinLaRioja_17 = format_DelegacinLaRioja_17.readFeatures(json_DelegacinLaRioja_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinLaRioja_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinLaRioja_17.addFeatures(features_DelegacinLaRioja_17);
var lyr_DelegacinLaRioja_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinLaRioja_17, 
                style: style_DelegacinLaRioja_17,
                interactive: true,
                title: '<img src="styles/legend/DelegacinLaRioja_17.png" /> Delegación La Rioja'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_DepartamentosLaRioja_2.setVisible(true);lyr_PoblacinpordeptoINDEC_3.setVisible(true);lyr_ViviendasenreasRuralesINDEC_4.setVisible(true);lyr_PEAINDEC_5.setVisible(true);lyr_CabezasdeovinosMAGyP_6.setVisible(true);lyr_CabezasdeporcinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasnogalesINDEC_10.setVisible(true);lyr_HectreasVidINDEC_11.setVisible(true);lyr_HectreasduraznerosINDEC_12.setVisible(true);lyr_HectreasconolivosINDEC_13.setVisible(true);lyr_LocalidadesLaRioja_14.setVisible(true);lyr_BERLaRioja_15.setVisible(true);lyr_BERLaRioja_16.setVisible(true);lyr_DelegacinLaRioja_17.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_DepartamentosLaRioja_2,lyr_PoblacinpordeptoINDEC_3,lyr_ViviendasenreasRuralesINDEC_4,lyr_PEAINDEC_5,lyr_CabezasdeovinosMAGyP_6,lyr_CabezasdeporcinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasnogalesINDEC_10,lyr_HectreasVidINDEC_11,lyr_HectreasduraznerosINDEC_12,lyr_HectreasconolivosINDEC_13,lyr_LocalidadesLaRioja_14,lyr_BERLaRioja_15,lyr_BERLaRioja_16,lyr_DelegacinLaRioja_17];
lyr_DepartamentosLaRioja_2.set('fieldAliases', {'Depto.': 'Depto.', });
lyr_PoblacinpordeptoINDEC_3.set('fieldAliases', {'poblacion': 'poblacion', });
lyr_ViviendasenreasRuralesINDEC_4.set('fieldAliases', {'viv. rur': 'viv. rur', });
lyr_PEAINDEC_5.set('fieldAliases', {'pea': 'pea', });
lyr_CabezasdeovinosMAGyP_6.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdeporcinosMAGyP_7.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_HectreasnogalesINDEC_10.set('fieldAliases', {'nogal': 'nogal', });
lyr_HectreasVidINDEC_11.set('fieldAliases', {'vid': 'vid', });
lyr_HectreasduraznerosINDEC_12.set('fieldAliases', {'durazno': 'durazno', });
lyr_HectreasconolivosINDEC_13.set('fieldAliases', {'olivo': 'olivo', });
lyr_LocalidadesLaRioja_14.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BERLaRioja_15.set('fieldAliases', {'num.': 'num.', 'localidad': 'localidad', 'entidad': 'entidad', 'direccion': 'direccion', 'admin': 'admin', });
lyr_BERLaRioja_16.set('fieldAliases', {'num.': 'num.', 'localidad': 'localidad', 'entidad': 'entidad', 'direccion': 'direccion', 'admin': 'admin', });
lyr_DelegacinLaRioja_17.set('fieldAliases', {'localidad': 'localidad', 'direccion': 'direccion', 'prest 2016': 'prest 2016', 'prest 2017': 'prest 2017', 'prest 2018': 'prest 2018', 'prest 2019': 'prest 2019', 'prest 2020': 'prest 2020', });
lyr_DepartamentosLaRioja_2.set('fieldImages', {'Depto.': 'TextEdit', });
lyr_PoblacinpordeptoINDEC_3.set('fieldImages', {'poblacion': 'TextEdit', });
lyr_ViviendasenreasRuralesINDEC_4.set('fieldImages', {'viv. rur': 'TextEdit', });
lyr_PEAINDEC_5.set('fieldImages', {'pea': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_6.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_7.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_HectreasnogalesINDEC_10.set('fieldImages', {'nogal': 'TextEdit', });
lyr_HectreasVidINDEC_11.set('fieldImages', {'vid': 'TextEdit', });
lyr_HectreasduraznerosINDEC_12.set('fieldImages', {'durazno': 'TextEdit', });
lyr_HectreasconolivosINDEC_13.set('fieldImages', {'olivo': 'TextEdit', });
lyr_LocalidadesLaRioja_14.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BERLaRioja_15.set('fieldImages', {'num.': 'TextEdit', 'localidad': 'TextEdit', 'entidad': 'TextEdit', 'direccion': 'TextEdit', 'admin': 'TextEdit', });
lyr_BERLaRioja_16.set('fieldImages', {'num.': 'TextEdit', 'localidad': 'TextEdit', 'entidad': 'TextEdit', 'direccion': 'TextEdit', 'admin': 'TextEdit', });
lyr_DelegacinLaRioja_17.set('fieldImages', {'localidad': 'TextEdit', 'direccion': '', 'prest 2016': '', 'prest 2017': '', 'prest 2018': '', 'prest 2019': '', 'prest 2020': '', });
lyr_DepartamentosLaRioja_2.set('fieldLabels', {'Depto.': 'inline label', });
lyr_PoblacinpordeptoINDEC_3.set('fieldLabels', {'poblacion': 'inline label', });
lyr_ViviendasenreasRuralesINDEC_4.set('fieldLabels', {'viv. rur': 'inline label', });
lyr_PEAINDEC_5.set('fieldLabels', {'pea': 'inline label', });
lyr_CabezasdeovinosMAGyP_6.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdeporcinosMAGyP_7.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'bovinos': 'inline label', });
lyr_HectreasnogalesINDEC_10.set('fieldLabels', {'nogal': 'inline label', });
lyr_HectreasVidINDEC_11.set('fieldLabels', {'vid': 'inline label', });
lyr_HectreasduraznerosINDEC_12.set('fieldLabels', {'durazno': 'inline label', });
lyr_HectreasconolivosINDEC_13.set('fieldLabels', {'olivo': 'inline label', });
lyr_LocalidadesLaRioja_14.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BERLaRioja_15.set('fieldLabels', {'num.': 'inline label', 'localidad': 'inline label', 'entidad': 'inline label', 'direccion': 'inline label', 'admin': 'inline label', });
lyr_BERLaRioja_16.set('fieldLabels', {'num.': 'inline label', 'localidad': 'inline label', 'entidad': 'inline label', 'direccion': 'inline label', 'admin': 'inline label', });
lyr_DelegacinLaRioja_17.set('fieldLabels', {'localidad': 'inline label', 'direccion': 'inline label', 'prest 2016': 'inline label', 'prest 2017': 'inline label', 'prest 2018': 'inline label', 'prest 2019': 'inline label', 'prest 2020': 'inline label', });
lyr_DelegacinLaRioja_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});