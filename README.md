# Tableau-Connector
This is the connector used by Tableau for connecting with SQream JDBC or ODBC.

## Tableau - Package and Sign
- [Tableau Doc](https://tableau.github.io/connector-plugin-sdk/docs/package-sign)  
- Clone Tableau Connector SDK repository  
`https://github.com/tableau/connector-plugin-sdk.git`  
- Set up the virtual environment by going to the connector-packager folder and running command  
`cd connector-plugin-sdk/connector-packager/`  
`python –m venv .venv`  
- Activate the virtual environment using the activate command  
`.\.venv\Scripts\activate`  
- Install the packaging module in the virtual environment  
`python setup.py install`  
- Package connector  
`python -m connector_packager.package [path_to_plugin_folder]`  
- Sign .taco package  
`jarsigner -keystore [path_to_key_store] [path_to_taco_package] SQreamDB`

## Using connector during developement
- Run Tableau under development connector (not packaged)
`tableau.exe -DConnectPluginsPath=[path_to_connector_folder]`  
- Disabling signature verification on Tableau Desktop (use unsigned connector)  
`-DDisableVerifyConnectorPluginSignature=true`

## Submitting Connector to Tableau Gallery
- [Connector Gallery Submission](https://tableau.github.io/connector-plugin-sdk/docs/gallery-submission)
