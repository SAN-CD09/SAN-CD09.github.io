var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ZoneTechnique_0 = new ol.format.GeoJSON();
var features_ZoneTechnique_0 = format_ZoneTechnique_0.readFeatures(json_ZoneTechnique_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneTechnique_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ZoneTechnique_0.addFeatures(features_ZoneTechnique_0);var lyr_ZoneTechnique_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZoneTechnique_0, maxResolution:28004.4661523,

                style: style_ZoneTechnique_0,
                title: '<img src="styles/legend/ZoneTechnique_0.png" /> Zone Technique'
            });var format_Commune_1 = new ol.format.GeoJSON();
var features_Commune_1 = format_Commune_1.readFeatures(json_Commune_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Commune_1.addFeatures(features_Commune_1);var lyr_Commune_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Commune_1, 
                style: style_Commune_1,
                title: '<img src="styles/legend/Commune_1.png" /> Commune'
            });var format_Phases_2 = new ol.format.GeoJSON();
var features_Phases_2 = format_Phases_2.readFeatures(json_Phases_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Phases_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Phases_2.addFeatures(features_Phases_2);var lyr_Phases_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Phases_2,
minResolution:-1.3040587986e-13,
 maxResolution:28004.4661523,

                style: style_Phases_2,
    title: 'Phases<br />\
    <img src="styles/legend/Phases_2_0.png" /> AMII<br />\
    <img src="styles/legend/Phases_2_1.png" /> Afferme 01<br />\
    <img src="styles/legend/Phases_2_2.png" /> Concessif 01<br />\
    <img src="styles/legend/Phases_2_3.png" /> Afferme 02<br />\
    <img src="styles/legend/Phases_2_4.png" /> Concessif 02<br />\
    <img src="styles/legend/Phases_2_5.png" /> Afferme 03<br />\
    <img src="styles/legend/Phases_2_6.png" /> Afferme 04<br />'
        });var format_Habitation_3 = new ol.format.GeoJSON();
var features_Habitation_3 = format_Habitation_3.readFeatures(json_Habitation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Habitation_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Habitation_3.addFeatures(features_Habitation_3);var lyr_Habitation_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Habitation_3,
minResolution:-1.30405957588e-13,
 maxResolution:8.40133984568,

                style: style_Habitation_3,
    title: 'Habitation<br />\
    <img src="styles/legend/Habitation_3_0.png" /> Commercialisable<br />\
    <img src="styles/legend/Habitation_3_1.png" /> Commercialisable RD<br />\
    <img src="styles/legend/Habitation_3_2.png" /> En étude<br />\
    <img src="styles/legend/Habitation_3_3.png" /> En travaux<br />'
        });

lyr_ZoneTechnique_0.setVisible(true);lyr_Commune_1.setVisible(false);lyr_Phases_2.setVisible(true);lyr_Habitation_3.setVisible(true);
var layersList = [baseLayer,lyr_ZoneTechnique_0,lyr_Commune_1,lyr_Phases_2,lyr_Habitation_3];
lyr_ZoneTechnique_0.set('fieldAliases', {'ZS_CODE': 'ZS_CODE', 'ST_CODE': 'ST_CODE', 'PHASE': 'PHASE', 'TRIGRAMME': 'TRIGRAMME', 'NRO': 'NRO', 'NB_EL': 'NB_EL', 'ZONE': 'ZONE', 'SRO_X': 'SRO_X', 'SRO_Y': 'SRO_Y', 'SOURCE': 'SOURCE', 'N20200311_': 'N20200311_', 'N202003112': 'N202003112', 'N202003113': 'N202003113', 'TRAVAUX': 'TRAVAUX', 'COMMERCIAL': 'COMMERCIAL', });
lyr_Commune_1.set('fieldAliases', {'INSEE': 'INSEE', 'NOM': 'NOM', 'COMMUNES': 'COMMUNES', 'AFFICHAGE': 'AFFICHAGE', 'CANTON': 'CANTON', });
lyr_Phases_2.set('fieldAliases', {'ZS_CODE': 'ZS_CODE', 'ST_CODE': 'ST_CODE', 'PHASE': 'PHASE', 'TRIGRAMME': 'TRIGRAMME', 'NRO': 'NRO', 'NB_EL': 'NB_EL', 'ZONE': 'ZONE', 'SRO_X': 'SRO_X', 'SRO_Y': 'SRO_Y', 'SOURCE': 'SOURCE', 'N20200311_': 'N20200311_', 'N202003112': 'N202003112', 'N202003113': 'N202003113', 'TRAVAUX': 'TRAVAUX', 'COMMERCIAL': 'COMMERCIAL', });
lyr_Habitation_3.set('fieldAliases', {'IdentifiantImmeuble': 'IdentifiantImmeuble', 'CodePostalImmeuble': 'CodePostalImmeuble', 'CommuneImmeuble': 'CommuneImmeuble', 'TypeVoieImmeuble': 'TypeVoieImmeuble', 'NomVoieImmeuble': 'NomVoieImmeuble', 'NumeroVoieImmeuble': 'NumeroVoieImmeuble', 'ComplementNumeroVoieImmeuble': 'ComplementNumeroVoieImmeuble', 'EtatImmeuble': 'EtatImmeuble', 'DateSignatureConvention': 'DateSignatureConvention', 'ReferencePM': 'ReferencePM', 'EtatPM': 'EtatPM', 'CoordonneeImmeubleX': 'CoordonneeImmeubleX', 'CoordonneeImmeubleY': 'CoordonneeImmeubleY', 'Adresse': 'Adresse', 'Travaux': 'Travaux', 'Commercialisation': 'Commercialisation', 'Adresse_formule': 'Adresse_formule', });
lyr_ZoneTechnique_0.set('fieldImages', {'ZS_CODE': 'Hidden', 'ST_CODE': 'Hidden', 'PHASE': 'Hidden', 'TRIGRAMME': 'Hidden', 'NRO': 'Hidden', 'NB_EL': 'Hidden', 'ZONE': 'TextEdit', 'SRO_X': 'Hidden', 'SRO_Y': 'Hidden', 'SOURCE': 'Hidden', 'N20200311_': 'Hidden', 'N202003112': 'Hidden', 'N202003113': 'Hidden', 'TRAVAUX': 'TextEdit', 'COMMERCIAL': 'TextEdit', });
lyr_Commune_1.set('fieldImages', {'INSEE': 'Hidden', 'NOM': 'Hidden', 'COMMUNES': 'Hidden', 'AFFICHAGE': 'Hidden', 'CANTON': 'Hidden', });
lyr_Phases_2.set('fieldImages', {'ZS_CODE': 'Hidden', 'ST_CODE': 'Hidden', 'PHASE': 'Hidden', 'TRIGRAMME': 'Hidden', 'NRO': 'Hidden', 'NB_EL': 'Hidden', 'ZONE': 'TextEdit', 'SRO_X': 'Hidden', 'SRO_Y': 'Hidden', 'SOURCE': 'Hidden', 'N20200311_': 'Hidden', 'N202003112': 'Hidden', 'N202003113': 'Hidden', 'TRAVAUX': 'TextEdit', 'COMMERCIAL': 'TextEdit', });
lyr_Habitation_3.set('fieldImages', {'IdentifiantImmeuble': 'TextEdit', 'CodePostalImmeuble': 'Hidden', 'CommuneImmeuble': 'Hidden', 'TypeVoieImmeuble': 'Hidden', 'NomVoieImmeuble': 'Hidden', 'NumeroVoieImmeuble': 'Hidden', 'ComplementNumeroVoieImmeuble': 'Hidden', 'EtatImmeuble': 'Hidden', 'DateSignatureConvention': 'Hidden', 'ReferencePM': 'Hidden', 'EtatPM': 'Hidden', 'CoordonneeImmeubleX': 'Hidden', 'CoordonneeImmeubleY': 'Hidden', 'Adresse': 'TextEdit', 'Travaux': 'TextEdit', 'Commercialisation': 'TextEdit', 'Adresse_formule': 'Hidden', });
lyr_ZoneTechnique_0.set('fieldLabels', {'ZONE': 'no label', 'TRAVAUX': 'no label', 'COMMERCIAL': 'no label', });
lyr_Commune_1.set('fieldLabels', {});
lyr_Phases_2.set('fieldLabels', {'ZONE': 'no label', 'TRAVAUX': 'header label', 'COMMERCIAL': 'header label', });
lyr_Habitation_3.set('fieldLabels', {'IdentifiantImmeuble': 'no label', 'Adresse': 'no label', 'Travaux': 'header label', 'Commercialisation': 'header label', });
lyr_Habitation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});