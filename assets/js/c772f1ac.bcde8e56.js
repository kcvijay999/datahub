"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[16453],{39744:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>m,metadata:()=>p,toc:()=>c});t(96540);var n=t(15680),r=t(53720),l=t(5400);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const m={title:"ML System",slug:"/api/tutorials/ml",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/ml.md"},u="ML System",p={unversionedId:"docs/api/tutorials/ml",id:"docs/api/tutorials/ml",title:"ML System",description:"Why Would You Integrate ML System with DataHub?",source:"@site/genDocs/docs/api/tutorials/ml.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/ml",permalink:"/docs/api/tutorials/ml",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/ml.md",tags:[],version:"current",frontMatter:{title:"ML System",slug:"/api/tutorials/ml",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/ml.md"},sidebar:"overviewSidebar",previous:{title:"Data Lineage",permalink:"/docs/api/tutorials/lineage"},next:{title:"Ownership",permalink:"/docs/api/tutorials/owners"}},d={},c=[{value:"Why Would You Integrate ML System with DataHub?",id:"why-would-you-integrate-ml-system-with-datahub",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create ML Entities",id:"create-ml-entities",level:2},{value:"Create MlFeature",id:"create-mlfeature",level:3},{value:"Create MlPrimaryKey",id:"create-mlprimarykey",level:3},{value:"Create MlFeatureTable",id:"create-mlfeaturetable",level:3},{value:"Create MlModel",id:"create-mlmodel",level:3},{value:"Create MlModelGroup",id:"create-mlmodelgroup",level:3},{value:"Expected Outcome of creating entities",id:"expected-outcome-of-creating-entities",level:3},{value:"Read ML Entities",id:"read-ml-entities",level:2},{value:"Read MLFeature",id:"read-mlfeature",level:3},{value:"Read MlPrimaryKey",id:"read-mlprimarykey",level:3},{value:"Read MLFeatureTable",id:"read-mlfeaturetable",level:3},{value:"Read MLModel",id:"read-mlmodel",level:3},{value:"Read MLModelGroup",id:"read-mlmodelgroup",level:3},{value:"Add ML Entities",id:"add-ml-entities",level:2},{value:"Add MlFeature to MlFeatureTable",id:"add-mlfeature-to-mlfeaturetable",level:3},{value:"Add MlFeature to MLModel",id:"add-mlfeature-to-mlmodel",level:3},{value:"Add MLGroup To MLModel",id:"add-mlgroup-to-mlmodel",level:3},{value:"Expected Outcome of Adding ML Entities",id:"expected-outcome-of-adding-ml-entities",level:3}],g={toc:c},y="wrapper";function h(e){var{components:a}=e,t=i(e,["components"]);return(0,n.yg)(y,o(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){s(e,a,t[a])}))}return e}({},g,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"ml-system"},"ML System"),(0,n.yg)("h2",{id:"why-would-you-integrate-ml-system-with-datahub"},"Why Would You Integrate ML System with DataHub?"),(0,n.yg)("p",null,"Machine learning systems have become a crucial feature in modern data stacks.\nHowever, the relationships between the different components of a machine learning system, such as features, models, and feature tables, can be complex.\nDataHub makes these relationships discoverable and facilitate utilization by other members of the organization."),(0,n.yg)("p",null,"For technical details on ML entities, please refer to the following docs:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/generated/metamodel/entities/mlfeature"},"MlFeature")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/generated/metamodel/entities/mlprimarykey"},"MlPrimaryKey")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/generated/metamodel/entities/mlfeaturetable"},"MlFeatureTable")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/generated/metamodel/entities/mlmodel"},"MlModel")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/generated/metamodel/entities/mlmodelgroup"},"MlModelGroup"))),(0,n.yg)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,n.yg)("p",null,"This guide will show you how to"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Create ML entities: MlFeature, MlFeatureTable, MlModel, MlModelGroup, MlPrimaryKey"),(0,n.yg)("li",{parentName:"ul"},"Read ML entities: MlFeature, MlFeatureTable, MlModel, MlModelGroup, MlPrimaryKey"),(0,n.yg)("li",{parentName:"ul"},"Attach MlModel to MlFeature"),(0,n.yg)("li",{parentName:"ul"},"Attach MlFeatures to MlFeatureTable"),(0,n.yg)("li",{parentName:"ul"},"Attached MlFeatures to upstream Datasets that power them")),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/quickstart"},"Datahub Quickstart Guide"),"."),(0,n.yg)("h2",{id:"create-ml-entities"},"Create ML Entities"),(0,n.yg)("h3",{id:"create-mlfeature"},"Create MlFeature"),(0,n.yg)("p",null,"An ML Feature represents an instance of a feature that can be used across different machine learning models. Features are organized into Feature Tables to be consumed by machine learning models. For example, if we were modeling features for a Users Feature Table, the Features would be ",(0,n.yg)("inlineCode",{parentName:"p"},"age"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"sign_up_date"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"active_in_past_30_days")," and so forth.Using Features in DataHub allows users to see the sources a feature was generated from and how a feature is used to train models."),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_mlfeature.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server="http://localhost:8080", extra_headers={})\n\ndataset_urn = builder.make_dataset_urn(\n    name="fct_users_created", platform="hive", env="PROD"\n)\nfeature_urn = builder.make_ml_feature_urn(\n    feature_table_name="users_feature_table",\n    feature_name="user_signup_date",\n)\n\n#  Create feature\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlFeature",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=feature_urn,\n    aspectName="mlFeatureProperties",\n    aspect=models.MLFeaturePropertiesClass(\n        description="Represents the date the user created their account",\n        # attaching a source to a feature creates lineage between the feature\n        # and the upstream dataset. This is how lineage between your data warehouse\n        # and machine learning ecosystem is established.\n        sources=[dataset_urn],\n        dataType="TIME",\n    ),\n)\n\n# Emit metadata!\nemitter.emit(metadata_change_proposal)\n\n')),(0,n.yg)("p",null,"Note that when creating a feature, you create upstream lineage to the data warehouse using ",(0,n.yg)("inlineCode",{parentName:"p"},"sources"),"."))),(0,n.yg)("h3",{id:"create-mlprimarykey"},"Create MlPrimaryKey"),(0,n.yg)("p",null,"An ML Primary Key represents a specific element of a Feature Table that indicates what group the other features belong to. For example, if a Feature Table contained features for Users, the ML Primary Key would likely be ",(0,n.yg)("inlineCode",{parentName:"p"},"user_id")," or some similar unique identifier for a user. Using ML Primary Keys in DataHub allow users to indicate how ML Feature Tables are structured."),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_mlprimarykey.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server="http://localhost:8080", extra_headers={})\n\ndataset_urn = builder.make_dataset_urn(\n    name="fct_users_created", platform="hive", env="PROD"\n)\nprimary_key_urn = builder.make_ml_primary_key_urn(\n    feature_table_name="users_feature_table",\n    primary_key_name="user_id",\n)\n\n#  Create feature\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlPrimaryKey",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=primary_key_urn,\n    aspectName="mlPrimaryKeyProperties",\n    aspect=models.MLPrimaryKeyPropertiesClass(\n        description="Represents the id of the user the other features relate to.",\n        # attaching a source to a ml primary key creates lineage between the feature\n        # and the upstream dataset. This is how lineage between your data warehouse\n        # and machine learning ecosystem is established.\n        sources=[dataset_urn],\n        dataType="TEXT",\n    ),\n)\n\n# Emit metadata!\nemitter.emit(metadata_change_proposal)\n\n')),(0,n.yg)("p",null,"Note that when creating a primary key, you create upstream lineage to the data warehouse using ",(0,n.yg)("inlineCode",{parentName:"p"},"sources"),"."))),(0,n.yg)("h3",{id:"create-mlfeaturetable"},"Create MlFeatureTable"),(0,n.yg)("p",null,"A feature table represents a group of similar Features that can all be used together to train a model. For example, if there was a Users Feature Table, it would contain documentation around how to use the Users collection of Features and references to each Feature and ML Primary Key contained within it."),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_mlfeature_table.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server="http://localhost:8080", extra_headers={})\n\nfeature_table_urn = builder.make_ml_feature_table_urn(\n    feature_table_name="users_feature_table", platform="feast"\n)\n\nfeature_urns = [\n    builder.make_ml_feature_urn(\n        feature_name="user_signup_date", feature_table_name="users_feature_table"\n    ),\n    builder.make_ml_feature_urn(\n        feature_name="user_last_active_date", feature_table_name="users_feature_table"\n    ),\n]\n\nprimary_key_urns = [\n    builder.make_ml_primary_key_urn(\n        feature_table_name="users_feature_table",\n        primary_key_name="user_id",\n    )\n]\n\nfeature_table_properties = models.MLFeatureTablePropertiesClass(\n    description="Test description",\n    # link your features to a feature table\n    mlFeatures=feature_urns,\n    # link your primary keys to the feature table\n    mlPrimaryKeys=primary_key_urns,\n)\n\n# MCP creation\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlFeatureTable",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=feature_table_urn,\n    aspect=feature_table_properties,\n)\n\n# Emit metadata!\nemitter.emit(metadata_change_proposal)\n\n')),(0,n.yg)("p",null,"Note that when creating a feature table, you connect the table to its features and primary key using ",(0,n.yg)("inlineCode",{parentName:"p"},"mlFeatures")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"mlPrimaryKeys"),"."))),(0,n.yg)("h3",{id:"create-mlmodel"},"Create MlModel"),(0,n.yg)("p",null,"An ML Model in Acryl represents an individual version of a trained Machine Learning Model. Another way to think about the ML Model entity is as an istance of a training run. An ML Model entity tracks the exact ML Features used in that instance of training, along with the training results. This entity does not represents all versions of a ML Model. For example, if we train a model for homepage customization on a certain day, that would be a ML Model in DataHub. If you re-train the model the next day off of new data or with different parameters, that would produce a second ML Model entity."),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_mlmodel.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server="http://localhost:8080", extra_headers={})\nmodel_urn = builder.make_ml_model_urn(\n    model_name="my-recommendations-model-run-1", platform="science", env="PROD"\n)\nmodel_group_urns = [\n    builder.make_ml_model_group_urn(\n        group_name="my-recommendations-model-group", platform="science", env="PROD"\n    )\n]\nfeature_urns = [\n    builder.make_ml_feature_urn(\n        feature_name="user_signup_date", feature_table_name="users_feature_table"\n    ),\n    builder.make_ml_feature_urn(\n        feature_name="user_last_active_date", feature_table_name="users_feature_table"\n    ),\n]\n\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlModel",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=model_urn,\n    aspectName="mlModelProperties",\n    aspect=models.MLModelPropertiesClass(\n        description="my feature",\n        groups=model_group_urns,\n        mlFeatures=feature_urns,\n        trainingMetrics=[\n            models.MLMetricClass(\n                name="accuracy", description="accuracy of the model", value="1.0"\n            )\n        ],\n        hyperParams=[\n            models.MLHyperParamClass(\n                name="hyper_1", description="hyper_1", value="0.102"\n            )\n        ],\n    ),\n)\n\n# Emit metadata!\nemitter.emit(metadata_change_proposal)\n\n')),(0,n.yg)("p",null,"Note that when creating a model, you link it to a list of features using ",(0,n.yg)("inlineCode",{parentName:"p"},"mlFeatures"),". This indicates how the individual instance of the model was trained.\nAdditionally, you can access the relationship to model groups with ",(0,n.yg)("inlineCode",{parentName:"p"},"groups"),". An ML Model is connected to the warehouse tables it depends on via its dependency on the ML Features it reads from."))),(0,n.yg)("h3",{id:"create-mlmodelgroup"},"Create MlModelGroup"),(0,n.yg)("p",null,"An ML Model Group represents the grouping of all training runs of a single Machine Learning model category. It will store documentation about the group of ML Models, along with references to each individual ML Model instance."),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_mlmodel_group.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server="http://localhost:8080", extra_headers={})\nmodel_group_urn = builder.make_ml_model_group_urn(\n    group_name="my-recommendations-model-group", platform="science", env="PROD"\n)\n\n\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlModelGroup",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=model_group_urn,\n    aspectName="mlModelGroupProperties",\n    aspect=models.MLModelGroupPropertiesClass(\n        description="Grouping of ml model training runs related to home page recommendations.",\n    ),\n)\n\n\n# Emit metadata!\nemitter.emit(metadata_change_proposal)\n\n')))),(0,n.yg)("h3",{id:"expected-outcome-of-creating-entities"},"Expected Outcome of creating entities"),(0,n.yg)("p",null,"You can search the entities in DataHub UI."),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/feature-table-created.png"})),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/model-group-created.png"})),(0,n.yg)("h2",{id:"read-ml-entities"},"Read ML Entities"),(0,n.yg)("h3",{id:"read-mlfeature"},"Read MLFeature"),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'query {\n  mlFeature(urn: "urn:li:mlFeature:(test_feature_table_all_feature_dtypes,test_BOOL_LIST_feature)"){\n    name\n    featureNamespace\n    description\n    properties {\n      description\n      dataType\n      version {\n        versionTag\n      }\n    }\n  }\n}\n')),(0,n.yg)("p",null,"Expected response:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlFeature": {\n      "name": "test_BOOL_LIST_feature",\n      "featureNamespace": "test_feature_table_all_feature_dtypes",\n      "description": null,\n      "properties": {\n        "description": null,\n        "dataType": "SEQUENCE",\n        "version": null\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.yg)(l.A,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"query\": \"{ mlFeature(urn: \\\"urn:li:mlFeature:(test_feature_table_all_feature_dtypes,test_BOOL_LIST_feature)\\\") { name featureNamespace description properties { description dataType version { versionTag } } } }\"\n}'\n")),(0,n.yg)("p",null,"Expected response:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlFeature": {\n      "name": "test_BOOL_LIST_feature",\n      "featureNamespace": "test_feature_table_all_feature_dtypes",\n      "description": null,\n      "properties": {\n        "description": null,\n        "dataType": "SEQUENCE",\n        "version": null\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.yg)(l.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/read_mlfeature.py\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import MLFeaturePropertiesClass\n\n# First we get the current owners\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\nurn = "urn:li:mlFeature:(test_feature_table_all_feature_dtypes,test_BOOL_feature)"\nresult = graph.get_aspect(entity_urn=urn, aspect_type=MLFeaturePropertiesClass)\n\nprint(result)\n\n')))),(0,n.yg)("h3",{id:"read-mlprimarykey"},"Read MlPrimaryKey"),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'query {\n  mlPrimaryKey(urn: "urn:li:mlPrimaryKey:(user_features,user_id)"){\n    name\n    featureNamespace\n    description\n    dataType\n    properties {\n      description\n      dataType\n      version {\n        versionTag\n      }\n    }\n  }\n}\n')),(0,n.yg)("p",null,"Expected response:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlPrimaryKey": {\n      "name": "user_id",\n      "featureNamespace": "user_features",\n      "description": "User\'s internal ID",\n      "dataType": "ORDINAL",\n      "properties": {\n        "description": "User\'s internal ID",\n        "dataType": "ORDINAL",\n        "version": null\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.yg)(l.A,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"query\": \"query {  mlPrimaryKey(urn: \\\"urn:li:mlPrimaryKey:(user_features,user_id)\\\"){    name    featureNamespace    description    dataType    properties {      description      dataType      version {        versionTag      }    }  }}\"\n}'\n")),(0,n.yg)("p",null,"Expected response:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlPrimaryKey": {\n      "name": "user_id",\n      "featureNamespace": "user_features",\n      "description": "User\'s internal ID",\n      "dataType": "ORDINAL",\n      "properties": {\n        "description": "User\'s internal ID",\n        "dataType": "ORDINAL",\n        "version": null\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.yg)(l.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/read_mlprimarykey.py\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import MLPrimaryKeyPropertiesClass\n\n# First we get the current owners\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\nurn = "urn:li:mlPrimaryKey:(user_features,user_id)"\nresult = graph.get_aspect(entity_urn=urn, aspect_type=MLPrimaryKeyPropertiesClass)\nprint(result)\n\n')))),(0,n.yg)("h3",{id:"read-mlfeaturetable"},"Read MLFeatureTable"),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'query {\n  mlFeatureTable(urn: "urn:li:mlFeatureTable:(urn:li:dataPlatform:feast,test_feature_table_all_feature_dtypes)"){\n    name\n    description\n    platform {\n      name\n    }\n    properties {\n      description\n      mlFeatures {\n        name\n      }\n    }\n  }\n}\n')),(0,n.yg)("p",null,"Expected Response:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlFeatureTable": {\n      "name": "test_feature_table_all_feature_dtypes",\n      "description": null,\n      "platform": {\n        "name": "feast"\n      },\n      "properties": {\n        "description": null,\n        "mlFeatures": [\n          {\n            "name": "test_BOOL_LIST_feature"\n          },\n          ...{\n            "name": "test_STRING_feature"\n          }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.yg)(l.A,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"query\": \"{ mlFeatureTable(urn: \\\"urn:li:mlFeatureTable:(urn:li:dataPlatform:feast,test_feature_table_all_feature_dtypes)\\\") { name description platform { name } properties { description mlFeatures { name } } } }\"\n}'\n")),(0,n.yg)("p",null,"Expected Response:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlFeatureTable": {\n      "name": "test_feature_table_all_feature_dtypes",\n      "description": null,\n      "platform": {\n        "name": "feast"\n      },\n      "properties": {\n        "description": null,\n        "mlFeatures": [\n          {\n            "name": "test_BOOL_LIST_feature"\n          },\n          ...{\n            "name": "test_STRING_feature"\n          }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.yg)(l.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/read_mlfeature_table.py\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import MLFeatureTablePropertiesClass\n\n# First we get the current owners\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\nurn = "urn:li:mlFeatureTable:(urn:li:dataPlatform:feast,test_feature_table_all_feature_dtypes)"\nresult = graph.get_aspect(entity_urn=urn, aspect_type=MLFeatureTablePropertiesClass)\n\nprint(result)\n\n')))),(0,n.yg)("h3",{id:"read-mlmodel"},"Read MLModel"),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'query {\n  mlModel(urn: "urn:li:mlModel:(urn:li:dataPlatform:science,scienceModel,PROD)"){\n    name\n    description\n    properties {\n      description\n      version\n      type\n      mlFeatures\n      groups {\n        urn\n        name\n      }\n    }\n  }\n}\n')),(0,n.yg)("p",null,"Expected Response:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlModel": {\n      "name": "scienceModel",\n      "description": "A sample model for predicting some outcome.",\n      "properties": {\n        "description": "A sample model for predicting some outcome.",\n        "version": null,\n        "type": "Naive Bayes classifier",\n        "mlFeatures": null,\n        "groups": []\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.yg)(l.A,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"query\": \"{ mlModel(urn: \\\"urn:li:mlModel:(urn:li:dataPlatform:science,scienceModel,PROD)\\\") { name description properties { description version type mlFeatures groups { urn name } } } }\"\n}'\n")),(0,n.yg)("p",null,"Expected Response:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlModel": {\n      "name": "scienceModel",\n      "description": "A sample model for predicting some outcome.",\n      "properties": {\n        "description": "A sample model for predicting some outcome.",\n        "version": null,\n        "type": "Naive Bayes classifier",\n        "mlFeatures": null,\n        "groups": []\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.yg)(l.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/read_mlmodel.py\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import MLModelPropertiesClass\n\n# First we get the current owners\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\nurn = "urn:li:mlModel:(urn:li:dataPlatform:science,scienceModel,PROD)"\nresult = graph.get_aspect(entity_urn=urn, aspect_type=MLModelPropertiesClass)\n\nprint(result)\n\n')))),(0,n.yg)("h3",{id:"read-mlmodelgroup"},"Read MLModelGroup"),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'query {\n  mlModelGroup(urn: "urn:li:mlModelGroup:(urn:li:dataPlatform:science,my-model-group,PROD)"){\n    name\n    description\n    platform {\n      name\n    }\n    properties {\n      description\n    }\n  }\n}\n')),(0,n.yg)("p",null,"Expected Response: (Note that this entity does not exist in the sample ingestion and you might want to create this entity first.)"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlModelGroup": {\n      "name": "my-model-group",\n      "description": "my model group",\n      "platform": {\n        "name": "science"\n      },\n      "properties": {\n        "description": "my model group"\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.yg)(l.A,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"query\": \"{ mlModelGroup(urn: \\\"urn:li:mlModelGroup:(urn:li:dataPlatform:science,my-model-group,PROD)\\\") { name description platform { name } properties { description } } }\"\n}'\n")),(0,n.yg)("p",null,"Expected Response: (Note that this entity does not exist in the sample ingestion and you might want to create this entity first.)"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "mlModelGroup": {\n      "name": "my-model-group",\n      "description": "my model group",\n      "platform": {\n        "name": "science"\n      },\n      "properties": {\n        "description": "my model group"\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.yg)(l.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/read_mlmodel_group.py\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import MLModelGroupPropertiesClass\n\n# First we get the current owners\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\nurn = "urn:li:mlModelGroup:(urn:li:dataPlatform:science,my-model-group,PROD)"\nresult = graph.get_aspect(entity_urn=urn, aspect_type=MLModelGroupPropertiesClass)\n\nprint(result)\n\n')))),(0,n.yg)("h2",{id:"add-ml-entities"},"Add ML Entities"),(0,n.yg)("h3",{id:"add-mlfeature-to-mlfeaturetable"},"Add MlFeature to MlFeatureTable"),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/add_mlfeature_to_mlfeature_table.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\nfrom datahub.metadata.schema_classes import MLFeatureTablePropertiesClass\n\ngms_endpoint = "http://localhost:8080"\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server=gms_endpoint, extra_headers={})\n\nfeature_table_urn = builder.make_ml_feature_table_urn(\n    feature_table_name="my-feature-table", platform="feast"\n)\nfeature_urns = [\n    builder.make_ml_feature_urn(\n        feature_name="my-feature2", feature_table_name="my-feature-table"\n    ),\n]\n\n# This code concatenates the new features with the existing features in the feature table.\n# If you want to replace all existing features with only the new ones, you can comment out this line.\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\nfeature_table_properties = graph.get_aspect(\n    entity_urn=feature_table_urn, aspect_type=MLFeatureTablePropertiesClass\n)\nif feature_table_properties:\n    current_features = feature_table_properties.mlFeatures\n    print("current_features:", current_features)\n    if current_features:\n        feature_urns += current_features\n\nfeature_table_properties = models.MLFeatureTablePropertiesClass(mlFeatures=feature_urns)\n# MCP createion\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlFeatureTable",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=feature_table_urn,\n    aspect=feature_table_properties,\n)\n\n# Emit metadata! This is a blocking call\nemitter.emit(metadata_change_proposal)\n\n')))),(0,n.yg)("h3",{id:"add-mlfeature-to-mlmodel"},"Add MlFeature to MLModel"),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/add_mlfeature_to_mlmodel.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\nfrom datahub.metadata.schema_classes import MLModelPropertiesClass\n\ngms_endpoint = "http://localhost:8080"\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server=gms_endpoint, extra_headers={})\n\nmodel_urn = builder.make_ml_model_urn(\n    model_name="my-test-model", platform="science", env="PROD"\n)\nfeature_urns = [\n    builder.make_ml_feature_urn(\n        feature_name="my-feature3", feature_table_name="my-feature-table"\n    ),\n]\n\n# This code concatenates the new features with the existing features in the model\n# If you want to replace all existing features with only the new ones, you can comment out this line.\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\nmodel_properties = graph.get_aspect(\n    entity_urn=model_urn, aspect_type=MLModelPropertiesClass\n)\nif model_properties:\n    current_features = model_properties.mlFeatures\n    print("current_features:", current_features)\n    if current_features:\n        feature_urns += current_features\n\nmodel_properties = models.MLModelPropertiesClass(mlFeatures=feature_urns)\n\n# MCP creation\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlModel",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=model_urn,\n    aspect=model_properties,\n)\n\n# Emit metadata!\nemitter.emit(metadata_change_proposal)\n\n')))),(0,n.yg)("h3",{id:"add-mlgroup-to-mlmodel"},"Add MLGroup To MLModel"),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/add_mlgroup_to_mlmodel.py\nimport datahub.emitter.mce_builder as builder\nimport datahub.metadata.schema_classes as models\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\ngms_endpoint = "http://localhost:8080"\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server=gms_endpoint, extra_headers={})\n\nmodel_group_urns = [\n    builder.make_ml_model_group_urn(\n        group_name="my-model-group", platform="science", env="PROD"\n    )\n]\nmodel_urn = builder.make_ml_model_urn(\n    model_name="science-model", platform="science", env="PROD"\n)\n\n# This code concatenates the new features with the existing features in the feature table.\n# If you want to replace all existing features with only the new ones, you can comment out this line.\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\ntarget_model_properties = graph.get_aspect(\n    entity_urn=model_urn, aspect_type=models.MLModelPropertiesClass\n)\nif target_model_properties:\n    current_model_groups = target_model_properties.groups\n    print("current_model_groups:", current_model_groups)\n    if current_model_groups:\n        model_group_urns += current_model_groups\n\nmodel_properties = models.MLModelPropertiesClass(groups=model_group_urns)\n# MCP createion\nmetadata_change_proposal = MetadataChangeProposalWrapper(\n    entityType="mlModel",\n    changeType=models.ChangeTypeClass.UPSERT,\n    entityUrn=model_urn,\n    aspect=model_properties,\n)\n\n# Emit metadata! This is a blocking call\nemitter.emit(metadata_change_proposal)\n\n')))),(0,n.yg)("h3",{id:"expected-outcome-of-adding-ml-entities"},"Expected Outcome of Adding ML Entities"),(0,n.yg)("p",null,"You can access to ",(0,n.yg)("inlineCode",{parentName:"p"},"Features")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"Group")," Tab of each entity to view the added entities."),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/feature-added-to-model.png"})),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/model-group-added-to-model.png"})))}h.isMDXComponent=!0}}]);