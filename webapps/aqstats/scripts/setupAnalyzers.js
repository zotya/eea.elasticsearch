var api = require('../../common/lib/esAPI.js');

// Analyzers to be used for different object properties
var analyzers = {
    "none" : {
      "type" : "keyword"
    },
    "coma" : {
      "type" : "pattern",
      "lowercase" : false,
      "pattern" : ", "
    },
    "semicolon" : {
      "type" : "pattern",
      "lowercase" : false,
      "pattern" : "; "
    }
};

// Proprety mappings for aqstatsdata
// Describe how properties get indexed into ElasticSearch
var aqstatsdataMappings = {
    "http://reference.eionet.europa.eu/aq/ontology/observationVerification" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "http://reference.eionet.europa.eu/aq/ontology/samplingPoint" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "http://reference.eionet.europa.eu/aq/ontology/aggregationType" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "http://reference.eionet.europa.eu/aq/ontology/station" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "http://reference.eionet.europa.eu/aq/ontology/sample" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "http://reference.eionet.europa.eu/aq/ontology/observationValidity" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "http://reference.eionet.europa.eu/aq/ontology/inspireNamespace" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "http://reference.eionet.europa.eu/aq/ontology/procedure" : {
        "type" : "string",
        "analyzer" : "none"
    },
    "http://reference.eionet.europa.eu/aq/ontology/pollutant" : {
        "type" : "string",
        "analyzer" : "none"
    },
/*    "http://reference.eionet.europa.eu/aq/ontology/endPosition" : {
        "type" : "date",
        "analyzer" : "none"
    },
    "http://reference.eionet.europa.eu/aq/ontology/inserted" : {
        "type" : "date",
        "analyzer" : "none"
    },
    "http://reference.eionet.europa.eu/aq/ontology/beginPosition" : {
        "type" : "date",
        "analyzer" : "none"
    },*/ 
/*    "http://reference.eionet.europa.eu/aq/ontology/datacapturePct" : {
        "type" : "double",
    },
    "http://reference.eionet.europa.eu/aq/ontology/airqualityValue" : {
        "type" : "double",
    },*/
};

var mappings = {
    'settings': {
        'analysis': {
            'analyzer': analyzers
        }
    },
    'mappings': {
        'resources': {
            'properties': aqstatsdataMappings
        }
    }
};

// As part of the runScript skel
var run = function(options, callbacks) {
    api.esAPI(options)
       .PUT('/aqstatsdata', mappings, callbacks)
       .execute();
}
module.exports = { run: run };
