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
    title: 'Zone Technique<br />\
    <img src="styles/legend/ZoneTechnique_0_0.png" /> AMII<br />\
    <img src="styles/legend/ZoneTechnique_0_1.png" /> Afferme 01<br />\
    <img src="styles/legend/ZoneTechnique_0_2.png" /> Concessif 01<br />\
    <img src="styles/legend/ZoneTechnique_0_3.png" /> Afferme 02<br />\
    <img src="styles/legend/ZoneTechnique_0_4.png" /> Concessif 02<br />\
    <img src="styles/legend/ZoneTechnique_0_5.png" /> Afferme 03<br />\
    <img src="styles/legend/ZoneTechnique_0_6.png" /> Afferme 04<br />'
        });var format_Habitation_1 = new ol.format.GeoJSON();
var features_Habitation_1 = format_Habitation_1.readFeatures(json_Habitation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Habitation_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Habitation_1.addFeatures(features_Habitation_1);var lyr_Habitation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Habitation_1, maxResolution:8.40133984568,

                style: style_Habitation_1,
    title: 'Habitation<br />\
    <img src="styles/legend/Habitation_1_0.png" /> Commercialisable<br />\
    <img src="styles/legend/Habitation_1_1.png" /> Commercialisable RD<br />\
    <img src="styles/legend/Habitation_1_2.png" /> En étude<br />\
    <img src="styles/legend/Habitation_1_3.png" /> En travaux<br />'
        });

lyr_ZoneTechnique_0.setVisible(true);lyr_Habitation_1.setVisible(true);
var layersList = [baseLayer,lyr_ZoneTechnique_0,lyr_Habitation_1];
lyr_ZoneTechnique_0.set('fieldAliases', {'ZS_CODE': 'ZS_CODE', 'ST_CODE': 'ST_CODE', 'PHASE': 'PHASE', 'TRIGRAMME': 'TRIGRAMME', 'NRO': 'NRO', 'NB_EL': 'NB_EL', 'ZONE': 'ZONE', 'SRO_X': 'SRO_X', 'SRO_Y': 'SRO_Y', 'SOURCE': 'SOURCE', 'N20200311_': 'N20200311_', 'N202003112': 'N202003112', 'N202003113': 'N202003113', 'TRAVAUX': 'TRAVAUX', 'COMMERCIAL': 'COMMERCIAL', });
lyr_Habitation_1.set('fieldAliases', {'IdentifiantImmeuble': 'IdentifiantImmeuble', 'CodePostalImmeuble': 'CodePostalImmeuble', 'CommuneImmeuble': 'CommuneImmeuble', 'TypeVoieImmeuble': 'TypeVoieImmeuble', 'NomVoieImmeuble': 'NomVoieImmeuble', 'NumeroVoieImmeuble': 'NumeroVoieImmeuble', 'ComplementNumeroVoieImmeuble': 'ComplementNumeroVoieImmeuble', 'EtatImmeuble': 'EtatImmeuble', 'DateSignatureConvention': 'DateSignatureConvention', 'ReferencePM': 'ReferencePM', 'EtatPM': 'EtatPM', 'CoordonneeImmeubleX': 'CoordonneeImmeubleX', 'CoordonneeImmeubleY': 'CoordonneeImmeubleY', 'Adresse': 'Adresse', 'Travaux': 'Travaux', 'Commercialisation': 'Commercialisation', 'Adresse_formule': 'Adresse_formule', });
lyr_ZoneTechnique_0.set('fieldImages', {'ZS_CODE': 'Hidden', 'ST_CODE': 'Hidden', 'PHASE': 'Hidden', 'TRIGRAMME': 'Hidden', 'NRO': 'Hidden', 'NB_EL': 'Hidden', 'ZONE': 'TextEdit', 'SRO_X': 'Hidden', 'SRO_Y': 'Hidden', 'SOURCE': 'Hidden', 'N20200311_': 'Hidden', 'N202003112': 'Hidden', 'N202003113': 'Hidden', 'TRAVAUX': 'TextEdit', 'COMMERCIAL': 'TextEdit', });
lyr_Habitation_1.set('fieldImages', {'IdentifiantImmeuble': 'Hidden', 'CodePostalImmeuble': 'Hidden', 'CommuneImmeuble': 'Hidden', 'TypeVoieImmeuble': 'Hidden', 'NomVoieImmeuble': 'Hidden', 'NumeroVoieImmeuble': 'Hidden', 'ComplementNumeroVoieImmeuble': 'Hidden', 'EtatImmeuble': 'Hidden', 'DateSignatureConvention': 'Hidden', 'ReferencePM': 'Hidden', 'EtatPM': 'Hidden', 'CoordonneeImmeubleX': 'Hidden', 'CoordonneeImmeubleY': 'Hidden', 'Adresse': 'TextEdit', 'Travaux': 'TextEdit', 'Commercialisation': 'TextEdit', 'Adresse_formule': 'Hidden', });
lyr_ZoneTechnique_0.set('fieldLabels', {'ZONE': 'no label', 'TRAVAUX': 'header label', 'COMMERCIAL': 'header label', });
lyr_Habitation_1.set('fieldLabels', {'Adresse': 'no label', 'Travaux': 'header label', 'Commercialisation': 'header label', });
lyr_Habitation_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});