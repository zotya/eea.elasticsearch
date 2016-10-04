#  EEA ElasticSearch

[![elasticsearch
logo](https://camo.githubusercontent.com/477897fc76cf942ce73936c8b304dec227151035/687474703a2f2f7777772e656c61737469637365617263682e6f72672f636f6e74656e742f7468656d65732f656c61737469637365617263682d6f72672f696d616765732f6c6f676f2e706e67)](https://camo.githubusercontent.com/477897fc76cf942ce73936c8b304dec227151035/687474703a2f2f7777772e656c61737469637365617263682e6f72672f636f6e74656e742f7468656d65732f656c61737469637365617263682d6f72672f696d616765732f6c6f676f2e706e67)

[![http://ci.eionet.europa.eu/job/Elasticsearch%20RDF%20River%20Plugin/badge/icon](https://camo.githubusercontent.com/30cfcaf1768f60000d44575a6866c1e83a314906/687474703a2f2f63692e65696f6e65742e6575726f70612e65752f6a6f622f456c61737469637365617263682532305244462532305269766572253230506c7567696e2f62616467652f69636f6e)](http://ci.eionet.europa.eu/job/Elasticsearch%20RDF%20River%20Plugin/lastBuild)

##  Introduction

[EEA elasticsearch](http://eea.github.com/docs/eea.elasticsearch) is an
elasticsearch specific setup by the [European Environment
Agency](http://www.eea.europa.eu/) for querying data in the EEA's [Semantic
Data Service](http://semantic.eea.europa.eu/) and designing specific search
interfaces and widgets to be used in a CMS.

Contents

  * Introduction
  * Components
  * Live demos
  * Development instalation using Vagrant
  * Installation
  * Dependencies
  * Source code
  * Copyright and license
  * Funding and project management

##  Components

The setup is composed of the following:

  1. An [elasticsearch](http://elasticsearch.org) instance flavoured with following plugins
  2. EEA ElasticSearch [RDF River Plugin](https://github.com/eea/eea.elasticsearch.river.rdf)
  3. [Jetty Plugin](https://github.com/sonian/elasticsearch-jetty)
  4. [FacetView](https://github.com/eea/facetview), a pure JavaScript library for browsing data using an elasticsearch endpoint
  5. [elasticsearch service-wrapper](https://github.com/eea/elasticsearch-servicewrapper), a script for running elasticsearch using Java Service Wrapper.

This packages specifically includes:

  1. Development and production configuration files for elasticsearch and Apache.
  2. Custom static pages using facetview js library.
  3. PAM, an application using the elasticsearch endpoint.

##  Live demos

  * [Facetview visualisation](http://centaurus-dev.eea.europa.eu) installed on development instance, on EEA Centaurus server.
  * [Climate change policies and measures in Europe Demo](http://www.eea.europa.eu/data-and-maps/pam/)

##  Development instalation using Vagrant

We provide most of the setup steps in a Vagrant box for a clean install in a
virtual machine.

In the **same** directory clone these projects:

    
    
    git clone https://github.com/eea/eea.elasticsearch
    
    git clone git clone https://github.com/eea/facetview.git
    
    git clone git@github.com:eea/elasticsearch-servicewrapper.git
    

Follow instructions in
[vagrant/README.rst](/zotya/eea.elasticsearch/blob/master/vagrant/README.rst)

If you want a local setup follow the instructions in the next section.

##  Installation

  1. Clone project

git clone [git@github.com](mailto:git@github.com):eea/eea.elasticsearch.git

  2. Install [elasticsearch](http://elasticsearch.org), e.g. in /var/local/elasticsearch

  3. Replace its config folder with a symlink to eea.elasticsearch/etc/production/config

  4. Install [RDF River Plugin](https://github.com/eea/eea.elasticsearch.river.rdf), using elasticsearch plugin script inside its bin folder:
    
        bin/plugin --url https://github.com/eea/eea.elasticsearch.river.rdf/raw/master/target/releases/eea-rdf-river-plugin-1.0.zip
    --install eea-rdf-river-1.0
    

  5. Install [Jetty Plugin](https://github.com/sonian/elasticsearch-jetty) in the same manner:
    
        bin/plugin --url https://oss-es-plugins.s3.amazonaws.com/elasticsearch-jetty/elasticsearch-jetty-0.90.0.zip
    --install elasticsearch-jetty-0.90.0
    

  6. Install useful plugins for monitoring and debugging:
    
        bin/plugin -install mobz/elasticsearch-head
    bin/plugin -install lukas-vlcek/bigdesk
    bin/plugin -install OlegKunitsyn/elasticsearch-browse
    bin/plugin -install polyfractal/elasticsearch-inquisitor
    

  7. Install and configure elasticsearch-service wrapper:
    
        git clone git@github.com:eea/elasticsearch-servicewrapper.git
    cd elasticsearch-servicewrapper/service
    vim elasticsearch.conf # configure path to elasticsearch
    ./elasticsearch install
    

  8. Configure users and roles for elasticsearch requests in eea.elasticsearch/etc/production/config/realm.properties, see [Adding Basic Authentication](https://github.com/sonian/elasticsearch-jetty#adding-basic-authentication).

  9. Start elasticsearch service
    
        service elasticsearch start
    

  10. Install facetview
    
        git clone git@github.com:eea/facetview.git
    

  11. Link eea.elasticsearch/etc/production/httpd.elasticsearch.conf in /etc/httpd/conf.d and check settings

  12. Reload Apache
    
        service httpd reload
    

##  Dependencies

[eea.elasticsearch](https://github.com/eea/eea.elasticsearch) has the
following dependencies:

    

  * [elasticsearch](http://elasticsearch.org), tested with 0.90.x
  * [RDF River Plugin](https://github.com/eea/eea.elasticsearch.river.rdf)
  * [Jetty Plugin](https://github.com/sonian/elasticsearch-jetty) 0.9.0
  * [FacetView](https://github.com/eea/facetview) is optional pure JavaScript library for visualisation

##  Source code

Latest source code:

    

  * [eea.elasticsearch on Github](https://github.com/eea/eea.elasticsearch)
  * EEA ElasticSearch [RDF River Plugin](https://github.com/eea/eea.elasticsearch.river.rdf) on Github

##  Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

The EEA ElasticSearch (the Original Code) is free software; you can
redistribute it and/or modify it under the terms of the GNU General Public
License as published by the Free Software Foundation; either version 2 of the
License, or (at your option) any later version.

More details under eea.elasticsearch/docs/LICENSE.txt

##  Funding and project management

[EEA](http://www.eea.europa.eu/) \- European Environment Agency (EU)

