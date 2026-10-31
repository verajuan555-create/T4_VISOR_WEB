var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_VIA_02_A_UN_KM_1 = new ol.format.GeoJSON();
var features_VIA_02_A_UN_KM_1 = format_VIA_02_A_UN_KM_1.readFeatures(json_VIA_02_A_UN_KM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIA_02_A_UN_KM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIA_02_A_UN_KM_1.addFeatures(features_VIA_02_A_UN_KM_1);
var lyr_VIA_02_A_UN_KM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIA_02_A_UN_KM_1, 
                style: style_VIA_02_A_UN_KM_1,
                popuplayertitle: 'VIA_02_A_UN_KM',
                interactive: true,
                title: '<img src="styles/legend/VIA_02_A_UN_KM_1.png" /> VIA_02_A_UN_KM'
            });
var format_VIA_01_A_UN_KM_2 = new ol.format.GeoJSON();
var features_VIA_01_A_UN_KM_2 = format_VIA_01_A_UN_KM_2.readFeatures(json_VIA_01_A_UN_KM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIA_01_A_UN_KM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIA_01_A_UN_KM_2.addFeatures(features_VIA_01_A_UN_KM_2);
var lyr_VIA_01_A_UN_KM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIA_01_A_UN_KM_2, 
                style: style_VIA_01_A_UN_KM_2,
                popuplayertitle: 'VIA_01_A_UN_KM',
                interactive: true,
                title: '<img src="styles/legend/VIA_01_A_UN_KM_2.png" /> VIA_01_A_UN_KM'
            });
var format_T3_PK_NUM_3 = new ol.format.GeoJSON();
var features_T3_PK_NUM_3 = format_T3_PK_NUM_3.readFeatures(json_T3_PK_NUM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T3_PK_NUM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T3_PK_NUM_3.addFeatures(features_T3_PK_NUM_3);
var lyr_T3_PK_NUM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T3_PK_NUM_3, 
                style: style_T3_PK_NUM_3,
                popuplayertitle: 'T3_PK_NUM',
                interactive: true,
                title: '<img src="styles/legend/T3_PK_NUM_3.png" /> T3_PK_NUM'
            });
var format_EJE_TRAMO2_4 = new ol.format.GeoJSON();
var features_EJE_TRAMO2_4 = format_EJE_TRAMO2_4.readFeatures(json_EJE_TRAMO2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EJE_TRAMO2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJE_TRAMO2_4.addFeatures(features_EJE_TRAMO2_4);
var lyr_EJE_TRAMO2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EJE_TRAMO2_4, 
                style: style_EJE_TRAMO2_4,
                popuplayertitle: 'EJE_TRAMO2',
                interactive: true,
                title: '<img src="styles/legend/EJE_TRAMO2_4.png" /> EJE_TRAMO2'
            });
var format_CADENAMIENTO_ID_5 = new ol.format.GeoJSON();
var features_CADENAMIENTO_ID_5 = format_CADENAMIENTO_ID_5.readFeatures(json_CADENAMIENTO_ID_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CADENAMIENTO_ID_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CADENAMIENTO_ID_5.addFeatures(features_CADENAMIENTO_ID_5);
var lyr_CADENAMIENTO_ID_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CADENAMIENTO_ID_5, 
                style: style_CADENAMIENTO_ID_5,
                popuplayertitle: 'CADENAMIENTO_ID',
                interactive: true,
                title: '<img src="styles/legend/CADENAMIENTO_ID_5.png" /> CADENAMIENTO_ID'
            });
var format_TITM_GALIBO_GRAL_6 = new ol.format.GeoJSON();
var features_TITM_GALIBO_GRAL_6 = format_TITM_GALIBO_GRAL_6.readFeatures(json_TITM_GALIBO_GRAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITM_GALIBO_GRAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITM_GALIBO_GRAL_6.addFeatures(features_TITM_GALIBO_GRAL_6);
var lyr_TITM_GALIBO_GRAL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITM_GALIBO_GRAL_6, 
                style: style_TITM_GALIBO_GRAL_6,
                popuplayertitle: 'TITM_GALIBO_GRAL',
                interactive: true,
                title: '<img src="styles/legend/TITM_GALIBO_GRAL_6.png" /> TITM_GALIBO_GRAL'
            });
var format_PK_NUM_7 = new ol.format.GeoJSON();
var features_PK_NUM_7 = format_PK_NUM_7.readFeatures(json_PK_NUM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PK_NUM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PK_NUM_7.addFeatures(features_PK_NUM_7);
var lyr_PK_NUM_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PK_NUM_7, 
                style: style_PK_NUM_7,
                popuplayertitle: 'PK_NUM',
                interactive: true,
                title: '<img src="styles/legend/PK_NUM_7.png" /> PK_NUM'
            });
var format_T3_EJE_8 = new ol.format.GeoJSON();
var features_T3_EJE_8 = format_T3_EJE_8.readFeatures(json_T3_EJE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T3_EJE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T3_EJE_8.addFeatures(features_T3_EJE_8);
var lyr_T3_EJE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T3_EJE_8, 
                style: style_T3_EJE_8,
                popuplayertitle: 'T3_EJE',
                interactive: true,
                title: '<img src="styles/legend/T3_EJE_8.png" /> T3_EJE'
            });
var format_COLOCACION_VIA_9 = new ol.format.GeoJSON();
var features_COLOCACION_VIA_9 = format_COLOCACION_VIA_9.readFeatures(json_COLOCACION_VIA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COLOCACION_VIA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLOCACION_VIA_9.addFeatures(features_COLOCACION_VIA_9);
var lyr_COLOCACION_VIA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COLOCACION_VIA_9, 
                style: style_COLOCACION_VIA_9,
                popuplayertitle: 'COLOCACION_VIA',
                interactive: true,
    title: 'COLOCACION_VIA<br />\
    <img src="styles/legend/COLOCACION_VIA_9_0.png" /> VIA COLOCADA<br />\
    <img src="styles/legend/COLOCACION_VIA_9_1.png" /> PENDIENTE<br />\
    <img src="styles/legend/COLOCACION_VIA_9_2.png" /> VIA PROVISIONAL<br />\
    <img src="styles/legend/COLOCACION_VIA_9_3.png" /> PROVISIONAL<br />' });
var format_T1_CADENAMIENTO_10 = new ol.format.GeoJSON();
var features_T1_CADENAMIENTO_10 = format_T1_CADENAMIENTO_10.readFeatures(json_T1_CADENAMIENTO_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1_CADENAMIENTO_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1_CADENAMIENTO_10.addFeatures(features_T1_CADENAMIENTO_10);
var lyr_T1_CADENAMIENTO_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1_CADENAMIENTO_10, 
                style: style_T1_CADENAMIENTO_10,
                popuplayertitle: 'T1_CADENAMIENTO',
                interactive: true,
                title: '<img src="styles/legend/T1_CADENAMIENTO_10.png" /> T1_CADENAMIENTO'
            });
var format_PUNTOS_H_11 = new ol.format.GeoJSON();
var features_PUNTOS_H_11 = format_PUNTOS_H_11.readFeatures(json_PUNTOS_H_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTOS_H_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOS_H_11.addFeatures(features_PUNTOS_H_11);
var lyr_PUNTOS_H_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTOS_H_11, 
                style: style_PUNTOS_H_11,
                popuplayertitle: 'PUNTOS_H',
                interactive: true,
                title: '<img src="styles/legend/PUNTOS_H_11.png" /> PUNTOS_H'
            });
var group_GENERAL = new ol.layer.Group({
                                layers: [lyr_EJE_TRAMO2_4,lyr_CADENAMIENTO_ID_5,lyr_TITM_GALIBO_GRAL_6,lyr_PK_NUM_7,lyr_T3_EJE_8,lyr_COLOCACION_VIA_9,lyr_T1_CADENAMIENTO_10,lyr_PUNTOS_H_11,],
                                fold: 'close',
                                title: 'GENERAL'});
var group_TRAMO4 = new ol.layer.Group({
                                layers: [lyr_VIA_02_A_UN_KM_1,lyr_VIA_01_A_UN_KM_2,],
                                fold: 'close',
                                title: 'TRAMO 4'});
var group_T3_OBRA_CIVIL = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'T3_OBRA_CIVIL'});
var group_T3_ESTACIONES = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'T3_ESTACIONES'});
var group_TRAMOIII = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TRAMO III'});
var group_BASEMAP = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'close',
                                title: 'BASEMAP'});

lyr_GoogleSatellite_0.setVisible(true);lyr_VIA_02_A_UN_KM_1.setVisible(true);lyr_VIA_01_A_UN_KM_2.setVisible(true);lyr_T3_PK_NUM_3.setVisible(true);lyr_EJE_TRAMO2_4.setVisible(true);lyr_CADENAMIENTO_ID_5.setVisible(true);lyr_TITM_GALIBO_GRAL_6.setVisible(true);lyr_PK_NUM_7.setVisible(true);lyr_T3_EJE_8.setVisible(true);lyr_COLOCACION_VIA_9.setVisible(true);lyr_T1_CADENAMIENTO_10.setVisible(true);lyr_PUNTOS_H_11.setVisible(true);
var layersList = [group_BASEMAP,group_TRAMO4,lyr_T3_PK_NUM_3,group_GENERAL];
lyr_VIA_02_A_UN_KM_1.set('fieldAliases', {'ID': 'ID', 'VIA_2': 'VIA_2', });
lyr_VIA_01_A_UN_KM_2.set('fieldAliases', {'ID': 'ID', 'VIA_2': 'VIA_2', });
lyr_T3_PK_NUM_3.set('fieldAliases', {'PK': 'PK', 'RotationTex': 'RotationTex', 'ANGULO': 'ANGULO', });
lyr_EJE_TRAMO2_4.set('fieldAliases', {'Name': 'Name', 'Descriptio': 'Descriptio', });
lyr_CADENAMIENTO_ID_5.set('fieldAliases', {'CADENAMIEN': 'CADENAMIEN', 'ROTACION': 'ROTACION', });
lyr_TITM_GALIBO_GRAL_6.set('fieldAliases', {'VIADUCTO': 'VIADUCTO', 'ESTATUS': 'ESTATUS', 'NIVEL': 'NIVEL', });
lyr_PK_NUM_7.set('fieldAliases', {'PK': 'PK', 'RotationTex': 'RotationTex', 'ANGULO': 'ANGULO', });
lyr_T3_EJE_8.set('fieldAliases', {'FShape': 'FShape', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'Text': 'Text', 'HeightText': 'HeightText', 'RotationTex': 'RotationTex', 'BlockName': 'BlockName', });
lyr_COLOCACION_VIA_9.set('fieldAliases', {'TRAMO': 'TRAMO', 'SUBTRAMO': 'SUBTRAMO', 'VIA': 'VIA', 'LONGITUD': 'LONGITUD', 'PK_INICIAL': 'PK_INICIAL', 'PK_FINAL': 'PK_FINAL', 'ESTATUS': 'ESTATUS', 'FECHA': 'FECHA', 'OBSERVACIO': 'OBSERVACIO', 'AREA': 'AREA', });
lyr_T1_CADENAMIENTO_10.set('fieldAliases', {'Text': 'Text', });
lyr_PUNTOS_H_11.set('fieldAliases', {'ID_SISGO': 'ID_SISGO', 'PK': 'PK', 'CERTIFICAD': 'CERTIFICAD', 'PUNTO H': 'PUNTO H', });
lyr_VIA_02_A_UN_KM_1.set('fieldImages', {'ID': 'TextEdit', 'VIA_2': 'TextEdit', });
lyr_VIA_01_A_UN_KM_2.set('fieldImages', {'ID': 'TextEdit', 'VIA_2': 'TextEdit', });
lyr_T3_PK_NUM_3.set('fieldImages', {'PK': 'TextEdit', 'RotationTex': 'TextEdit', 'ANGULO': 'TextEdit', });
lyr_EJE_TRAMO2_4.set('fieldImages', {'Name': 'TextEdit', 'Descriptio': 'TextEdit', });
lyr_CADENAMIENTO_ID_5.set('fieldImages', {'CADENAMIEN': 'TextEdit', 'ROTACION': 'TextEdit', });
lyr_TITM_GALIBO_GRAL_6.set('fieldImages', {'VIADUCTO': '', 'ESTATUS': '', 'NIVEL': '', });
lyr_PK_NUM_7.set('fieldImages', {'PK': 'TextEdit', 'RotationTex': 'TextEdit', 'ANGULO': 'TextEdit', });
lyr_T3_EJE_8.set('fieldImages', {'FShape': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'Text': 'TextEdit', 'HeightText': 'TextEdit', 'RotationTex': 'TextEdit', 'BlockName': 'TextEdit', });
lyr_COLOCACION_VIA_9.set('fieldImages', {'TRAMO': 'TextEdit', 'SUBTRAMO': 'TextEdit', 'VIA': 'TextEdit', 'LONGITUD': 'TextEdit', 'PK_INICIAL': 'TextEdit', 'PK_FINAL': 'TextEdit', 'ESTATUS': 'TextEdit', 'FECHA': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'AREA': 'TextEdit', });
lyr_T1_CADENAMIENTO_10.set('fieldImages', {'Text': 'TextEdit', });
lyr_PUNTOS_H_11.set('fieldImages', {'ID_SISGO': 'TextEdit', 'PK': 'TextEdit', 'CERTIFICAD': 'TextEdit', 'PUNTO H': 'TextEdit', });
lyr_VIA_02_A_UN_KM_1.set('fieldLabels', {'ID': 'no label', 'VIA_2': 'no label', });
lyr_VIA_01_A_UN_KM_2.set('fieldLabels', {'ID': 'no label', 'VIA_2': 'no label', });
lyr_T3_PK_NUM_3.set('fieldLabels', {'PK': 'no label', 'RotationTex': 'no label', 'ANGULO': 'no label', });
lyr_EJE_TRAMO2_4.set('fieldLabels', {'Name': 'no label', 'Descriptio': 'no label', });
lyr_CADENAMIENTO_ID_5.set('fieldLabels', {'CADENAMIEN': 'no label', 'ROTACION': 'no label', });
lyr_TITM_GALIBO_GRAL_6.set('fieldLabels', {'VIADUCTO': 'no label', 'ESTATUS': 'no label', 'NIVEL': 'no label', });
lyr_PK_NUM_7.set('fieldLabels', {'PK': 'no label', 'RotationTex': 'no label', 'ANGULO': 'no label', });
lyr_T3_EJE_8.set('fieldLabels', {'FShape': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'Text': 'no label', 'HeightText': 'no label', 'RotationTex': 'no label', 'BlockName': 'no label', });
lyr_COLOCACION_VIA_9.set('fieldLabels', {'TRAMO': 'no label', 'SUBTRAMO': 'no label', 'VIA': 'no label', 'LONGITUD': 'no label', 'PK_INICIAL': 'no label', 'PK_FINAL': 'no label', 'ESTATUS': 'no label', 'FECHA': 'no label', 'OBSERVACIO': 'no label', 'AREA': 'no label', });
lyr_T1_CADENAMIENTO_10.set('fieldLabels', {'Text': 'no label', });
lyr_PUNTOS_H_11.set('fieldLabels', {'ID_SISGO': 'no label', 'PK': 'inline label - always visible', 'CERTIFICAD': 'no label', 'PUNTO H': 'inline label - always visible', });
lyr_PUNTOS_H_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});