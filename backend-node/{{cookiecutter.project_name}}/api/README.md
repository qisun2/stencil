
# Stencil backend API

API methods for post/update database in Stencil.

### Get - /libraries [GET /libraries {?libraryId}{?projectId}]

Used to retrieve list of libraries in Stencil database based on some search criteria.



**Response Fields** 

|Field|Type|Description|
|---|---|---|
|libraryId|string|Internal library ID which uniquely identifies a library.|
|libraryName|string|The name of the library|
|projectId|string|The ID which uniquely identifies a project.|
|groupTag|object|A dictionary of group tags, for example, {"sampleId":"xyz", targetId":"abc"}.|
|libraryType|string|The type of assay.|
|data|object|Data analysis results.|
|createTimestamp|string (date-time)|The time of sample registration|
|updateTimestamp|string (date-time)|The time of last update.|
|status|string|status of the library, for example, "active", "deprecated"|




+ Parameters
    + libraryId (Optional, ) ... the internal DB id for a library
    + projectId(Optional, ) ... the projectId of a sample




+ Response 200 (application/json)
```
{
    "@context": [
        "https://stencil.org/jsonld/context/metadata.jsonld"
    ],
    "metadata": {
        "pagination": {
            "currentPage": 0,
            "pageSize": 1000,
            "totalCount": 10,
            "totalPages": 1
        },
        "status": [
            {
                "message": "Request accepted, response successful",
                "messageType": "INFO"
            }
        ]
    },
    "results": [
                {
                "libraryId": "1",
                "libraryName": "1",
                "projectId": "1",
                "groupTag": {"targetId":"abc"},
                "libraryType": "RNAseq",
                "data":{},
                "createTimestamp":"2020-11-02",
                "updateTimestamp":"2020-11-02",
                "status":"active"             
                
                }
    
              ]
    }

```

+ Response 400 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - Malformed JSON Request Object\n\nERROR - 2018-10-08T18:15:11Z - Invalid query parameter\n\nERROR - 2018-10-08T18:15:11Z - Required parameter is missing"
```

+ Response 401 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - Missing or expired authorization token"
```

+ Response 403 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - User does not have permission to perform this action"
```




### Post - /libraries [POST /libraries]

Call to register the event of a library being taken. Library ID is assigned as a result of the operation and returned in response.

**Request Fields** 

|Field|Type|Description|
|---|---|---|
|libraryName|string|Name of the library|
| projectId           | string             | The ID which uniquely identifies a project.                  |
|groupTag|object|A dictionary of group tags, for example, {"sampleId":"xyz", targetId":"abc"}.|
|libraryType|string|The type of assay.|
|data|object|Data analysis results.|


**Response Fields** 

|Field|Type|Description|
|---|---|---|
|libraryId|string|Internal library ID which uniquely identifies a library.|
|libraryName|string|The name of the library|
|projectId|string|The ID which uniquely identifies a project.|
|groupTag|object|A dictionary of group tags, for example, {"sampleId":"xyz", targetId":"abc"}.|
|libraryType|string|The type of assay.|
|data|object|Data analysis results.|
|createTimestamp|string (date-time)|The time of sample registration|
|updateTimestamp|string (date-time)|The time of last update.|
|status|string|status of the library, for example, "active", "deprecated"|





+ Parameters
    + Authorization (Optional, ) ... HTTP HEADER - Token used for Authorization <strong> Bearer {token_string} </strong>



+ Request (application/json)
```
[
      {
                "libraryId": "1",
                "libraryName": "1",
                "projectId": "1",
                "groupTag": {"targetId":"abc"},
                "libraryType": "RNAseq",
                "data":{},
                "createTimestamp":"2020-11-02",
                "updateTimestamp":"2020-11-02",
                "status":"active"             
                
      }
]
```



+ Response 200 (application/json)
```
{
    "@context": [
        "https://stencil.org/jsonld/context/metadata.jsonld"
    ],
    "metadata": {
        "pagination": {
            "currentPage": 0,
            "pageSize": 1000,
            "totalCount": 10,
            "totalPages": 1
        },
        "status": [
            {
                "message": "Request accepted, response successful",
                "messageType": "INFO"
            }
        ]
    },
    "results": [
                {
                "libraryId": "1",
                "libraryName": "1",
                "projectId": "1",
                "groupTag": {"targetId":"abc"},
                "libraryType": "RNAseq",
                "data":{},
                "createTimestamp":"2020-11-02",
                "updateTimestamp":"2020-11-02",
                "status":"active"             
                
                }
    
              ]
    }
```

+ Response 400 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - Malformed JSON Request Object\n\nERROR - 2018-10-08T18:15:11Z - Invalid query parameter\n\nERROR - 2018-10-08T18:15:11Z - Required parameter is missing"
```

+ Response 401 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - Missing or expired authorization token"
```

+ Response 403 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - User does not have permission to perform this action"
```




### Get - /libraries/{libraryId} [GET /libraries/{libraryId}]

Used to retrieve the details of a single library from a Stencil database.



**Response Fields** 

| Field           | Type               | Description                                                  |
| --------------- | ------------------ | ------------------------------------------------------------ |
| libraryId       | string             | Internal library ID which uniquely identifies a library.      |
| libraryName     | string             | The name of the library                                       |
| projectId       | string             | The ID which uniquely identifies a project.                  |
| groupTag        | object             | A dictionary of group tags, for example, {"sampleName":"xyz", targetName":"abc"}. |
| libraryType     | string             | The type of assay.                                           |
| data            | object             | Data analysis results.                                       |
| createTimestamp | string (date-time) | The time of sample registration                              |
| updateTimestamp | string (date-time) | The time of last update.                                     |
| status          | string             | status of the library, for example, "active", "deprecated"   |



+ Parameters
    + libraryId (Required, ) ... the internal DB id for a sample


+ Response 200 (application/json)
```
{
    "@context": [
        "https://stencil.org/jsonld/context/metadata.jsonld"
    ],
    "metadata": {
        "pagination": {
            "currentPage": 0,
            "pageSize": 1000,
            "totalCount": 10,
            "totalPages": 1
        },
        "status": [
            {
                "message": "Request accepted, response successful",
                "messageType": "INFO"
            }
        ]
    },
    "results": [
                {
                "libraryId": "1",
                "libraryName": "1",
                "projectId": "1",
                "groupTag": {"targetId":"abc"},
                "libraryType": "RNAseq",
                "data":{},
                "createTimestamp":"2020-11-02",
                "updateTimestamp":"2020-11-02",
                "status":"active"             
                
                }
    
              ]
    }
```

+ Response 400 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - Malformed JSON Request Object\n\nERROR - 2018-10-08T18:15:11Z - Invalid query parameter\n\nERROR - 2018-10-08T18:15:11Z - Required parameter is missing"
```

+ Response 401 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - Missing or expired authorization token"
```

+ Response 403 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - User does not have permission to perform this action"
```

+ Response 404 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - The requested object DbId is not found"
```




### Put - /libraries/{libraryId} [PUT /library/{libraryId}/]

Update the details of an existing Sample

**Request Fields** 




**Response Fields** 






+ Parameters
    + libraryId (Required, ) ... the internal DB id for a library



+ Request (application/json)
```
{
  
}
```



+ Response 200 (application/json)
```
{

}
```

+ Response 400 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - Malformed JSON Request Object\n\nERROR - 2018-10-08T18:15:11Z - Invalid query parameter\n\nERROR - 2018-10-08T18:15:11Z - Required parameter is missing"
```

+ Response 401 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - Missing or expired authorization token"
```

+ Response 403 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - User does not have permission to perform this action"
```

+ Response 404 (application/json)
```
"ERROR - 2018-10-08T18:15:11Z - The requested object DbId is not found"
```



